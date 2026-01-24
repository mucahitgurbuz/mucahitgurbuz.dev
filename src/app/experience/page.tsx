import type { Metadata } from "next";
import { ExperienceCard, ProjectShowcase } from "@/components/experience";
import { EXPERIENCE, PROJECTS, EDUCATION } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Mücahit Gürbüz's professional experience, projects, and education in software engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> cat experience.json
          </h1>
          <p className="text-muted-foreground text-lg">
            A decade of building products, leading teams, and shipping code that
            matters.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8">
            <span className="text-primary">const</span> workExperience = [
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.period}`}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                description={exp.description}
                technologies={exp.technologies}
                highlights={exp.highlights}
                index={index}
              />
            ))}
          </div>
          <p className="text-2xl font-mono text-muted-foreground mt-8">];</p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Projects */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8">
            <span className="text-primary">const</span> projects = [
          </h2>
          <ProjectShowcase projects={PROJECTS} />
          <p className="text-2xl font-mono text-muted-foreground mt-8">];</p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Education */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8">
            <span className="text-primary">const</span> education = [
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, index) => (
              <article
                key={`${edu.school}-${edu.degree}`}
                className="glass rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-bold font-mono text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary font-mono text-sm mb-2">{edu.field}</p>
                <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <span className="text-primary font-mono">GPA: {edu.gpa}</span>
                  )}
                </div>
                {edu.courses && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-mono text-primary mb-2">
                      // relevant courses
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {edu.courses.map((course) => (
                        <li key={course}>• {course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="text-2xl font-mono text-muted-foreground mt-8">];</p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-lg p-8">
            <h2 className="text-xl font-mono font-bold mb-6 text-center">
              <span className="text-primary">console.log</span>(stats);
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  10+
                </p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  4
                </p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  10M+
                </p>
                <p className="text-sm text-muted-foreground">Users Reached</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  ∞
                </p>
                <p className="text-sm text-muted-foreground">Lines of Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
