"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { SKILLS } from "@/lib/constants";

// Flatten all skills with their categories
const allSkills = Object.entries(SKILLS).flatMap(([category, skills]) =>
  skills.map((skill) => ({ skill, category }))
);

const categoryColors: Record<string, string> = {
  languages: "#3b82f6",
  frontend: "#06b6d4",
  backend: "#22c55e",
  testing: "#eab308",
  tools: "#a855f7",
  methodologies: "#f97316",
  ai: "#ec4899",
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  element: HTMLDivElement | null;
  wanderAngle: number;
  wanderSpeed: number;
}

export function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ 
    x: -1000, 
    y: -1000, 
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    isInside: false, 
    isPressed: false 
  });
  const animationRef = useRef<number | null>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const draggedIndexRef = useRef<number | null>(null);
  const [caughtSkill, setCaughtSkill] = useState<string | null>(null);

  // Initialize particles with random positions and velocities
  const initParticles = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const padding = 60;

    particlesRef.current = allSkills.map((_, index) => {
      const element = container.querySelector(`[data-skill-index="${index}"]`) as HTMLDivElement;
      const elementRect = element?.getBoundingClientRect();
      
      // Random starting position across entire area
      const x = padding + Math.random() * (rect.width - padding * 2);
      const y = padding + Math.random() * (rect.height - padding * 2);
      
      // Random initial velocity for wandering (slow and gentle)
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.2;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        width: elementRect?.width || 80,
        height: elementRect?.height || 30,
        element,
        wanderAngle: Math.random() * Math.PI * 2,
        wanderSpeed: 0.15 + Math.random() * 0.15,
      };
    });
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouse = mouseRef.current;
    const draggedIndex = draggedIndexRef.current;

    // Update mouse velocity (smoothed)
    mouse.vx = mouse.vx * 0.5 + (mouse.x - mouse.prevX) * 0.5;
    mouse.vy = mouse.vy * 0.5 + (mouse.y - mouse.prevY) * 0.5;
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;

    particlesRef.current.forEach((particle, i) => {
      if (!particle.element) return;

      // If this particle is being dragged, follow the mouse
      if (draggedIndex === i && mouse.isPressed) {
        particle.x = mouse.x;
        particle.y = mouse.y;
        // Store mouse velocity for when we release
        particle.vx = mouse.vx;
        particle.vy = mouse.vy;
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px) translate(-50%, -50%) scale(1.2)`;
        particle.element.style.zIndex = "30";
        particle.element.style.boxShadow = `0 0 20px ${categoryColors[allSkills[i].category]}`;
        return;
      } else {
        particle.element.style.zIndex = "1";
        particle.element.style.boxShadow = "none";
      }

      // Autonomous wandering - random gentle steering
      particle.wanderAngle += (Math.random() - 0.5) * 0.08;
      const wanderForce = 0.005;
      particle.vx += Math.cos(particle.wanderAngle) * wanderForce;
      particle.vy += Math.sin(particle.wanderAngle) * wanderForce;

      // Mouse repulsion - flee but slower than mouse
      if (mouse.isInside && !mouse.isPressed) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const repelRadius = 120;

        if (distSq < repelRadius * repelRadius && distSq > 1) {
          const dist = Math.sqrt(distSq);
          const force = ((repelRadius - dist) / repelRadius) * 0.5;
          particle.vx += (dx / dist) * force;
          particle.vy += (dy / dist) * force;
        }
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off walls
      const halfWidth = particle.width / 2;
      const halfHeight = particle.height / 2;
      const margin = 10;
      
      if (particle.x < halfWidth + margin) {
        particle.x = halfWidth + margin;
        particle.vx = Math.abs(particle.vx) * 0.7;
        particle.wanderAngle = Math.random() * Math.PI - Math.PI / 2; // Angle towards right
      } else if (particle.x > rect.width - halfWidth - margin) {
        particle.x = rect.width - halfWidth - margin;
        particle.vx = -Math.abs(particle.vx) * 0.7;
        particle.wanderAngle = Math.PI / 2 + Math.random() * Math.PI; // Angle towards left
      }

      if (particle.y < halfHeight + margin) {
        particle.y = halfHeight + margin;
        particle.vy = Math.abs(particle.vy) * 0.7;
        particle.wanderAngle = Math.random() * Math.PI; // Angle downwards
      } else if (particle.y > rect.height - halfHeight - margin) {
        particle.y = rect.height - halfHeight - margin;
        particle.vy = -Math.abs(particle.vy) * 0.7;
        particle.wanderAngle = Math.PI + Math.random() * Math.PI; // Angle upwards
      }

      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Maintain minimum wandering speed
      const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (vel < particle.wanderSpeed) {
        const scale = particle.wanderSpeed / Math.max(vel, 0.01);
        particle.vx *= 1 + (scale - 1) * 0.01;
        particle.vy *= 1 + (scale - 1) * 0.01;
      }

      // Cap max velocity
      const maxVel = 3;
      if (vel > maxVel) {
        particle.vx = (particle.vx / vel) * maxVel;
        particle.vy = (particle.vy / vel) * maxVel;
      }

      // Update DOM
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px) translate(-50%, -50%)`;
    });

    // Update mouse indicator
    if (indicatorRef.current) {
      if (mouse.isInside) {
        indicatorRef.current.style.opacity = mouse.isPressed ? "0.8" : "0.4";
        indicatorRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%) scale(${mouse.isPressed ? 0.5 : 1})`;
        indicatorRef.current.style.borderColor = mouse.isPressed ? "rgba(0, 255, 255, 0.8)" : "rgba(0, 255, 255, 0.3)";
      } else {
        indicatorRef.current.style.opacity = "0";
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Setup and cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      initParticles();
      animationRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseEnter = useCallback(() => {
    mouseRef.current.isInside = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isInside = false;
    mouseRef.current.isPressed = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    draggedIndexRef.current = null;
    setCaughtSkill(null);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    mouseRef.current.isPressed = true;
    
    // Check if we're clicking on a skill
    const target = e.target as HTMLElement;
    const skillIndex = target.getAttribute("data-skill-index");
    if (skillIndex !== null) {
      const index = parseInt(skillIndex);
      draggedIndexRef.current = index;
      setCaughtSkill(allSkills[index].skill);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isPressed = false;
    draggedIndexRef.current = null;
    setCaughtSkill(null);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] glass rounded-lg overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Instructions */}
      <div className="absolute top-4 left-4 text-xs text-muted-foreground font-mono z-10">
        <span className="text-primary">// </span>
        {caughtSkill ? (
          <span>caught: <span className="text-primary">{caughtSkill}</span></span>
        ) : (
          "chase & click to catch, drag & throw!"
        )}
      </div>

      {/* Skills */}
      {allSkills.map(({ skill, category }, index) => {
        const color = categoryColors[category] || "#888888";

        return (
          <div
            key={skill}
            data-skill-index={index}
            className="absolute left-0 top-0 font-mono text-sm px-3 py-1 rounded-full border whitespace-nowrap cursor-grab active:cursor-grabbing transition-[box-shadow] duration-150"
            style={{
              backgroundColor: `${color}20`,
              borderColor: `${color}60`,
              color: color,
              willChange: "transform",
            }}
          >
            {skill}
          </div>
        );
      })}

      {/* Mouse cursor indicator */}
      <div
        ref={indicatorRef}
        className="absolute left-0 top-0 w-20 h-20 rounded-full border-2 pointer-events-none transition-all duration-100"
        style={{
          opacity: 0,
          borderColor: "rgba(0, 255, 255, 0.3)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}
