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
    <div className="wrap">
      <section>
        <SectionHead as="h1" title="Work">
          Apps I run myself, the teams I build with, and the path that led here.
        </SectionHead>
        <AppShowcase />
      </section>

      <section className="grid grid-cols-1 gap-6 border-y border-contour py-10 min-[861px]:grid-cols-[1fr_1.4fr] min-[861px]:gap-16">
        <div>
          <h2 className="font-serif text-[clamp(30px,3vw,38px)] leading-tight">{aida.name}</h2>
          <p className="mt-1 text-[15px] text-pencil">{aida.tagline}, founder</p>
        </div>
        <div>
          <p className="mb-5 max-w-[52ch] text-[17px] leading-relaxed">{aida.description}</p>
          <a href={aida.link as string} target="_blank" rel="noopener noreferrer" className="survey-link font-medium">
            aidayazilim.com
          </a>
        </div>
      </section>

      <section>
        <SectionHead title="Experience">Ten years on product teams, from Ankara to Berlin.</SectionHead>
        <WorkList items={jobs} />
      </section>

      <section>
        <SectionHead title="Other projects" />
        <div className="border-b border-contour">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="grid grid-cols-1 gap-2 border-t border-contour py-6 min-[861px]:grid-cols-[1fr_1.3fr] min-[861px]:gap-8"
            >
              <div>
                <h3 className="font-serif text-2xl leading-tight">{project.name}</h3>
                <p className="mt-1 text-sm text-pencil">{project.technologies.join(", ")}</p>
              </div>
              <div>
                <p className="text-base text-[#2e3633]">{project.description}</p>
                {(project.link || project.github) && (
                  <div className="mt-3 flex gap-6 text-[15px] font-medium">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener" className="survey-link">
                        Website
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="survey-link">
                        Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHead title="Education">
          Civil and geotechnical engineering at Middle East Technical University.
        </SectionHead>
        <WorkList items={studies} />
      </section>

      <ContactCta />
    </div>
  );
}
