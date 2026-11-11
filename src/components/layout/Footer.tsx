import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const ELSEWHERE = [
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "X", href: SOCIAL_LINKS.twitter },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
];

export function Footer() {
  return (
    <footer className="band bg-ink">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-white/15 py-6 text-[15px] text-white/75">
          <span>
            © {new Date().getFullYear()} {SITE_CONFIG.name}, {SITE_CONFIG.location}
          </span>
          <nav aria-label="Elsewhere" className="-mx-3 flex flex-wrap">
            {ELSEWHERE.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center px-3 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
