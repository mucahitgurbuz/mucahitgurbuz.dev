import type { Metadata } from "next";
import { AppShowcase, ContactCta, SectionHead, WorkList } from "@/components/shared";
import { EDUCATION, EXPERIENCE, FEATURED_PROJECTS, PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Mücahit Gürbüz's work: the apps he builds and runs, ten years of product engineering, side projects and education.",
};

const aida = FEATURED_PROJECTS.find((project) => project.monogram)!;

const jobs = EXPERIENCE.map((job) => ({
  period: job.period,
  title: job.title,
  place: `${job.company}, ${job.location.split(",")[0]}`,
  description: job.description,
  highlights: job.highlights,
}));

const studies = EDUCATION.map((study) => ({
  period: study.period,
  title: `${study.degree}, ${study.field}`,
  place: `${study.school}, ${study.location.split(",")[0]}`,
  description: study.courses ? study.courses.join(", ") : undefined,
}));

export default function WorkPage() {
  return (
    <>
      <section className="wrap pt-[clamp(28px,5vw,72px)] pb-[clamp(40px,5vw,72px)]">
        <SectionHead as="h1" title="Work">
          Apps I run myself, the teams I build with, and the path that led here.
        </SectionHead>
      </section>

      <AppShowcase />

      <section className="bg-mist">
        <div className="wrap grid grid-cols-1 gap-x-16 gap-y-5 py-[clamp(48px,6vw,80px)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <h2 className="title">{aida.name}</h2>
            <p className="mt-2 text-ink-soft">{aida.tagline}, founder</p>
          </div>
          <div>
            <p className="mb-5 max-w-[52ch] text-[clamp(1.06rem,1rem+0.3vw,1.2rem)]">{aida.description}</p>
            <a href={aida.link as string} target="_blank" rel="noopener noreferrer" className="link">
              aidayazilim.com
            </a>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <SectionHead title="Experience">Ten years on product teams, from Ankara to Berlin.</SectionHead>
        <WorkList items={jobs} />
      </section>

      <section className="wrap pb-[clamp(64px,9vw,120px)]">
        <SectionHead title="Other projects" />
        <div className="grid grid-cols-1 gap-x-16 border-b border-rule min-[900px]:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="border-t border-rule py-7">
              <h3 className="item-title">{project.name}</h3>
              <p className="mt-2 max-w-[52ch]">{project.description}</p>
              <p className="mt-2 text-[15px] text-ink-soft">{project.technologies.join(", ")}</p>
              {(project.link || project.github) && (
                <div className="mt-4 flex gap-6">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener" className="link">
                      Website
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-[clamp(64px,9vw,120px)]">
        <SectionHead title="Education">
          Civil and geotechnical engineering at Middle East Technical University.
        </SectionHead>
        <WorkList items={studies} />
      </section>

      <ContactCta />
    </>
  );
}
