"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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

interface Position {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const initialPositions = allSkills.map(() => ({
      x: Math.random() * (rect.width - 100) + 50,
      y: Math.random() * (rect.height - 50) + 25,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setPositions(initialPositions);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || positions.length === 0) return;

    const rect = container.getBoundingClientRect();

    const animate = () => {
      setPositions((prev) =>
        prev.map((pos) => {
          let { x, y, vx, vy } = pos;

          // Mouse repulsion
          if (isHovering) {
            const dx = x - mousePos.x;
            const dy = y - mousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const force = (100 - distance) / 100;
              vx += (dx / distance) * force * 0.3;
              vy += (dy / distance) * force * 0.3;
            }
          }

          // Update position
          x += vx;
          y += vy;

          // Bounce off walls
          if (x < 50 || x > rect.width - 50) {
            vx *= -0.8;
            x = Math.max(50, Math.min(rect.width - 50, x));
          }
          if (y < 25 || y > rect.height - 25) {
            vy *= -0.8;
            y = Math.max(25, Math.min(rect.height - 25, y));
          }

          // Apply friction
          vx *= 0.98;
          vy *= 0.98;

          return { x, y, vx, vy };
        })
      );
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [positions.length, mousePos, isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] glass rounded-lg overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Instructions */}
      <div className="absolute top-4 left-4 text-xs text-muted-foreground font-mono z-10">
        <span className="text-primary">// </span>move your cursor to interact
      </div>

      {/* Skills */}
      {positions.map((pos, index) => {
        const { skill, category } = allSkills[index];
        const color = categoryColors[category] || "#888888";

        return (
          <motion.div
            key={skill}
            className="absolute font-mono text-sm px-3 py-1 rounded-full border whitespace-nowrap select-none"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
              backgroundColor: `${color}15`,
              borderColor: `${color}50`,
              color: color,
            }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
          >
            {skill}
          </motion.div>
        );
      })}

      {/* Mouse cursor indicator */}
      {isHovering && (
        <div
          className="absolute w-24 h-24 rounded-full border border-primary/20 pointer-events-none"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}
