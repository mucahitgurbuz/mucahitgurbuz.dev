import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta, SectionHead, TopoMap } from "@/components/shared";
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
    <>
      <section className="wrap flex flex-col-reverse gap-8 pt-[clamp(28px,5vw,72px)] min-[700px]:flex-row min-[700px]:items-end min-[700px]:justify-between">
        <h1 className="statement max-w-[12em]">From soil mechanics to software</h1>
        <Image
          src={SITE_CONFIG.avatar}
          alt={SITE_CONFIG.name}
          width={440}
          height={440}
          priority
          className="h-[132px] w-[132px] shrink-0 rounded-[28px] object-cover min-[700px]:h-[208px] min-[700px]:w-[208px]"
        />
      </section>

      <section className="wrap section grid grid-cols-1 items-start gap-x-[clamp(40px,6vw,96px)] gap-y-12 min-[900px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="max-w-[62ch] space-y-6 text-[clamp(1.1rem,1rem+0.45vw,1.3rem)] leading-[1.6]">
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
            assistant for more than 1,000 employees, and my own apps, HitTheRoad,
            Olifant and Junto.
          </p>
        </div>
        <figure className="min-[900px]:sticky min-[900px]:top-8">
          <div className="aspect-[88/86] overflow-hidden rounded-[20px] bg-mist">
            <TopoMap className="block h-full w-full" />
          </div>
          <figcaption className="mt-3 text-[15px] text-ink-soft">
            Ankara, where I studied and started out, to Berlin, where I live and work.
          </figcaption>
        </figure>
      </section>

      <section className="bg-mist">
        <div className="wrap section">
          <SectionHead title="What I work with" />
          <dl className="grid grid-cols-1 gap-x-12 gap-y-8 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3">
            {SKILL_GROUPS.map(({ label, items }) => (
              <div key={label} className="border-t-2 border-ink pt-4">
                <dt className="item-title">{label}</dt>
                <dd className="mt-2 text-ink-soft">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap section">
        <SectionHead title="Away from the keyboard">
          Our family travel films live on{" "}
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="link text-ink">
            Yerlisi Gibi
          </a>{" "}
          on YouTube.
        </SectionHead>
        <dl className="grid grid-cols-1 gap-x-12 gap-y-8 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4">
          {HOBBIES.map((hobby) => (
            <div key={hobby.name} className="border-t-2 border-ink pt-4">
              <dt className="item-title">{hobby.name}</dt>
              <dd className="mt-2 text-ink-soft">{hobby.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactCta />
    </>
  );
}
