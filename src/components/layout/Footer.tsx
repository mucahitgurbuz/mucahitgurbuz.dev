"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube, Mail, Heart, Terminal } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/50 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-lg font-bold">
                <span className="text-primary">$</span> mg
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-mono">
              {`// ${SITE_CONFIG.title}`}
              <br />
              {`// Based in ${SITE_CONFIG.location}`}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <span className="text-primary">const</span> navigation = {"["}
            </h3>
            <nav className="flex flex-col gap-2 pl-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  &quot;{item.name}&quot;,
                </Link>
              ))}
            </nav>
            <p className="font-mono text-sm text-muted-foreground">{"];"}</p>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              <span className="text-primary">const</span> connect = {"{}"}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">©</span> {currentYear} {SITE_CONFIG.name}
          </p>
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 inline" /> using{" "}
            <span className="text-primary">Next.js</span> +{" "}
            <span className="text-primary">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
