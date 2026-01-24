"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  // Merge and sort by start year (most recent first)
  ...EXPERIENCE.map((exp) => ({
    type: "work" as const,
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    period: exp.period,
    description: exp.description,
  })),
  ...EDUCATION.map((edu) => ({
    type: "education" as const,
    title: edu.degree,
    subtitle: `${edu.field} @ ${edu.school}`,
    location: edu.location,
    period: edu.period,
    description: edu.gpa ? `GPA: ${edu.gpa}` : undefined,
  })),
].sort((a, b) => {
  const getYear = (period: string) => {
    const match = period.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  };
  return getYear(b.period) - getYear(a.period);
});

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
              {item.type === "work" ? (
                <Briefcase className="w-4 h-4 text-primary" />
              ) : (
                <GraduationCap className="w-4 h-4 text-primary" />
              )}
            </div>

            {/* Content */}
            <div
              className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div className="glass rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div
                  className={`flex items-center gap-2 mb-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{item.period}</span>
                </div>

                <h3 className="text-lg font-bold font-mono text-foreground">
                  {item.title}
                </h3>
                <p className="text-primary font-mono text-sm">{item.subtitle}</p>

                <div
                  className={`flex items-center gap-2 mt-2 text-xs text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>

                {item.description && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
