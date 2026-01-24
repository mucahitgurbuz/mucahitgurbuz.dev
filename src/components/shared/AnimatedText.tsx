"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
    },
  }),
};

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index + delay * 10}
          variants={letterVariants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-red-500/50 animate-pulse"
        style={{ clipPath: "inset(10% 0 60% 0)", transform: "translate(-2px, 2px)" }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-cyan-500/50 animate-pulse"
        style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -2px)" }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
}
