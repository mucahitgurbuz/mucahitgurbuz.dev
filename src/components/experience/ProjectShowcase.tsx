"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-6 hover:border-primary/50 transition-all group flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow transition-all">
              <Folder className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2">
              {project.github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {project.link && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} website`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-primary transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
