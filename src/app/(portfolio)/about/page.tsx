import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta, SectionHead } from "@/components/shared";
import { HOBBIES, SITE_CONFIG, SKILLS, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mücahit Gürbüz - A software engineer with a unique journey from Civil Engineering to building modern web applications.",
};

const SKILL_GROUPS: { label: string; items: readonly string[] }[] = [
  { label: "Languages", items: SKILLS.languages },
  { label: "Frontend", items: SKILLS.frontend },
  { label: "Backend", items: SKILLS.backend },
  { label: "Testing", items: SKILLS.testing },
  { label: "Tools", items: SKILLS.tools },
  { label: "AI", items: SKILLS.ai },
];

export default function AboutPage() {
  return (
    <div className="wrap">
      <section className="grid grid-cols-1 items-end gap-10 pt-[clamp(48px,8vw,110px)] min-[861px]:grid-cols-[1.4fr_1fr]">
        <h1 className="display text-[clamp(48px,7vw,92px)] leading-[0.98] tracking-[-0.035em]">
          From soil mechanics to software
        </h1>
        <Image
          src={SITE_CONFIG.avatar}
          alt={SITE_CONFIG.name}
          width={420}
          height={420}
          priority
          className="aspect-square w-full max-w-[320px] rounded-md object-cover grayscale-[35%] min-[861px]:justify-self-end"
        />
      </section>

      <section className="grid grid-cols-1 gap-8 pt-[clamp(56px,8vw,100px)] min-[861px]:grid-cols-[170px_1fr] min-[861px]:gap-16">
        <p className="text-[15px] text-pencil">The story so far</p>
        <div className="max-w-[62ch] space-y-6 font-serif text-[clamp(19px,1.6vw,22px)] leading-[1.6]">
          <p>
            I started as a civil engineer. I earned my bachelor&apos;s and master&apos;s
            degrees at Middle East Technical University in Ankara, where my research on
            autonomous robotics and soil-tool interaction had me writing more MATLAB than
            structural calculations.
          </p>
          <p>
            That pull toward software turned into web development, and then into large
            SaaS products: a warehouse management system at OPLOG, then the Babbel app,
            used by millions of learners, across web, iOS and Android.
          </p>
          <p>
            Today I am a Principal Engineer at Babbel Labs in Berlin, the AI-first company
            under Babbel Group. I set technical direction and help teams build with AI,
            from prototype to production. Every week I run sessions with colleagues on AI
            tools and practices. Teaching is learning twice.
          </p>
          <p>
            On the side I run Aida Yazılım, a small AI studio. It built PorlandAI, an
            assistant for more than 1,000 employees, and my own apps, HitTheRoad and
            Olifant.
          </p>
        </div>
      </section>

      <section>
        <SectionHead title="What I work with" />
        <dl className="grid grid-cols-1 border-t border-contour min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {SKILL_GROUPS.map(({ label, items }) => (
            <div key={label} className="border-b border-contour py-6 min-[600px]:pr-8">
              <dt className="font-serif text-2xl">{label}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-pencil">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionHead title="Away from the keyboard">
          Our family travel films live on{" "}
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="survey-link text-ink">
            Yerlisi Gibi
          </a>{" "}
          on YouTube.
        </SectionHead>
        <dl className="grid grid-cols-1 border-t border-contour min-[600px]:grid-cols-2">
          {HOBBIES.map((hobby) => (
            <div key={hobby.name} className="border-b border-contour py-6 min-[600px]:pr-8">
              <dt className="font-serif text-2xl">{hobby.name}</dt>
              <dd className="mt-2 text-[15px] text-pencil">{hobby.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactCta />
    </div>
  );
}
