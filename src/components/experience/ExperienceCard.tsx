"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  index: number;
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  technologies,
  highlights,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all group"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-lg text-primary font-mono">{company}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 font-mono">
            <Calendar className="w-4 h-4" />
            {period}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-6">{description}</p>

      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-sm font-mono text-primary mb-3">
          <span className="text-muted-foreground">// </span>highlights
        </h4>
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-mono text-primary mb-3">
          <span className="text-muted-foreground">// </span>stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-xs bg-primary/5 border-primary/30 text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
