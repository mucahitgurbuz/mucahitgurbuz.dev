"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/constants";

const skillCategories = [
  { key: "languages", label: "Languages", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  { key: "frontend", label: "Frontend", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
  { key: "backend", label: "Backend", color: "bg-green-500/10 text-green-400 border-green-500/30" },
  { key: "testing", label: "Testing", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
  { key: "tools", label: "Tools", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  { key: "ai", label: "AI & Automation", color: "bg-pink-500/10 text-pink-400 border-pink-500/30" },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsPreview() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">
            <span className="text-primary">const</span> skills ={" "}
            <span className="text-muted-foreground">{"{"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of experience across the full stack, with a recent focus on
            AI-powered development workflows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className="glass rounded-lg p-6"
            >
              <h3 className="font-mono text-sm text-primary mb-4">
                {category.label}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS[category.key as keyof typeof SKILLS].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} font-mono text-xs`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="text-3xl font-mono text-muted-foreground">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
}
