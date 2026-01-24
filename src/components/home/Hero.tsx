"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, ROLES } from "@/lib/constants";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayedRole === currentRole) {
      // Pause at the end of typing
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedRole((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block glass rounded-lg px-4 py-2">
              <code className="text-sm text-muted-foreground font-mono">
                <span className="text-primary">$</span> echo &quot;Hello,
                World!&quot;
              </code>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 tracking-tight"
          >
            <span className="text-gradient">{SITE_CONFIG.name}</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-12 mb-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
              <span className="text-primary">&gt;</span> {displayedRole}
              <span className="animate-pulse text-primary">|</span>
            </p>
          </motion.div>

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">@ Babbel</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">10+ Years Experience</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Building modern web experiences with React & TypeScript. Passionate
            about AI transformation and empowering teams through knowledge
            sharing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono group"
            >
              <Link href="/experience">
                View Experience
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-mono border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
