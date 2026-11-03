import type { Metadata } from "next";
import { ContactForm } from "@/components/contact";
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
    <div className="wrap">
      <section className="grid grid-cols-1 gap-16 pt-[clamp(48px,8vw,110px)] pb-[clamp(60px,8vw,100px)] min-[961px]:grid-cols-[1fr_1fr] min-[961px]:gap-24">
        <div>
          <h1 className="display mb-6 text-[clamp(52px,7vw,92px)] leading-[0.98] tracking-[-0.035em]">
            Write to me
          </h1>
          <p className="mb-10 max-w-[38ch] text-[clamp(18px,1.6vw,20px)] leading-relaxed">
            A project, a role, or a question about building with AI. I usually reply within
            two days.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="survey-link display break-words text-[clamp(24px,2.8vw,36px)] leading-tight"
          >
            {SITE_CONFIG.email}
          </a>
          <dl className="mt-12 space-y-5 text-[15px]">
            <div>
              <dt className="text-pencil">Based in</dt>
              <dd>{SITE_CONFIG.location}</dd>
            </div>
            <div>
              <dt className="text-pencil">Elsewhere</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2">
                {ELSEWHERE.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="survey-link">
                    {label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="min-[961px]:pt-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
