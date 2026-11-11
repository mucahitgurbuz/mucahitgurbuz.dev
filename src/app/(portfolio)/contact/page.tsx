import type { Metadata } from "next";
import { ContactForm } from "@/components/contact";
import { CopyEmail } from "@/components/shared";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mücahit Gürbüz. Available for opportunities, collaborations, and conversations about tech.",
};

const ELSEWHERE = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "X", href: SOCIAL_LINKS.twitter },
  { label: "Google Scholar", href: SOCIAL_LINKS.googleScholar },
];

export default function ContactPage() {
  return (
    <section className="wrap grid grid-cols-1 gap-x-20 gap-y-12 pt-[clamp(28px,5vw,72px)] pb-[clamp(64px,9vw,120px)] min-[961px]:grid-cols-2">
      <div>
        <h1 className="statement">Write to me</h1>
        <p className="lede mt-5">
          A project, a role, or a question about building with AI. I usually reply within two
          days.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="link break-all text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-[560] tracking-[-0.02em]"
          >
            {SITE_CONFIG.email}
          </a>
          <CopyEmail />
        </div>
        <dl className="mt-12 grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 border-t border-rule pt-6">
          <dt className="text-ink-soft">Based in</dt>
          <dd>{SITE_CONFIG.location}</dd>
          <dt className="text-ink-soft">Elsewhere</dt>
          <dd className="flex flex-wrap gap-x-6 gap-y-2">
            {ELSEWHERE.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link">
                {label}
              </a>
            ))}
          </dd>
        </dl>
      </div>

      <div className="rounded-[20px] bg-mist p-[clamp(20px,4vw,40px)]">
        <ContactForm />
      </div>
    </section>
  );
}
