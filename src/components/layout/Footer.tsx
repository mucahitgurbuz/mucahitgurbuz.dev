import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const ELSEWHERE = [
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "X", href: SOCIAL_LINKS.twitter },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
];

export function Footer() {
  return (
    <footer className="wrap relative z-10">
      <div className="flex flex-wrap justify-between gap-4 border-t border-contour pt-7 pb-10 text-sm text-pencil">
        <span>
          © {new Date().getFullYear()} {SITE_CONFIG.name}, {SITE_CONFIG.location}
        </span>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-6 gap-y-2">
          {ELSEWHERE.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
