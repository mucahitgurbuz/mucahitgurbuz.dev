"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StoreBadges } from "@/components/shared/StoreBadges";
import { FEATURED_PROJECTS } from "@/lib/constants";

const [hitTheRoad, aida] = FEATURED_PROJECTS;

function PhoneFan() {
  const layout = [
    "z-20",
    "z-10 rotate-[8deg] translate-x-[42%] scale-[0.88] opacity-90 hidden sm:block",
    "z-10 -rotate-[8deg] -translate-x-[42%] scale-[0.88] opacity-90 hidden sm:block",
  ];

  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-sm items-center justify-center sm:h-[460px]">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-60 w-60 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
      </div>
      {hitTheRoad.screenshots?.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
          className={`absolute ${layout[i]}`}
        >
          <div className="rounded-[1.9rem] border border-border bg-card p-1.5 shadow-2xl shadow-primary/10">
            <Image
              src={src}
              alt={`HitTheRoad app screen ${i + 1}`}
              width={1206}
              height={2622}
              sizes="(max-width: 640px) 60vw, 220px"
              className="w-[180px] rounded-[1.5rem] sm:w-[210px]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <div className="space-y-6">
      {/* HitTheRoad */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-primary/50 transition-colors"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Image
                src={hitTheRoad.logo as string}
                alt="HitTheRoad logo"
                width={1024}
                height={1024}
                className="h-14 w-14 rounded-2xl border border-border shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold font-mono text-foreground">
                  {hitTheRoad.name}
                </h3>
                <p className="text-sm text-primary font-mono">
                  {hitTheRoad.tagline}
                </p>
              </div>
              <Badge
                variant="outline"
                className="ml-auto gap-1 border-primary/40 text-primary font-mono"
              >
                <Star className="h-3 w-3 fill-current" />
                Live
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {hitTheRoad.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {hitTheRoad.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2 py-1 text-xs font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <StoreBadges
                appStore={hitTheRoad.appStore as string}
                googlePlay={hitTheRoad.googlePlay as string}
              />
              <a
                href={hitTheRoad.appStore as string}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-mono text-primary hover:text-primary/80"
              >
                view listing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Phones */}
          <PhoneFan />
        </div>
      </motion.article>

      {/* Aida Yazılım */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-start gap-4 flex-1">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary text-2xl font-bold font-mono text-primary-foreground shadow-lg">
              {aida.monogram}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-mono text-foreground">
                  {aida.name}
                </h3>
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] text-muted-foreground"
                >
                  founder
                </Badge>
              </div>
              <p className="text-sm text-primary font-mono mb-2">
                {aida.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {aida.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {aida.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={aida.link as string}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-primary/40 px-5 py-3 text-sm font-mono text-primary transition-colors hover:bg-primary/10"
          >
            aidayazilim.com
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.article>
    </div>
  );
}
