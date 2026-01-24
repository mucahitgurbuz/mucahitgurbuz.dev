import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Video, Music, Plane, Tent } from "lucide-react";
import { Timeline, SkillsCloud } from "@/components/about";
import { SITE_CONFIG, HOBBIES, SOCIAL_LINKS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mücahit Gürbüz - A software engineer with a unique journey from Civil Engineering to building modern web applications.",
};

const hobbyIcons: Record<string, React.ReactNode> = {
  Video: <Video className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Plane: <Plane className="w-5 h-5" />,
  Tent: <Tent className="w-5 h-5" />,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 glow">
                <Image
                  src={SITE_CONFIG.avatar}
                  alt={SITE_CONFIG.name}
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono">
                10+ years
              </div>
            </div>

            {/* Intro */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
                <span className="text-primary">$</span> whoami
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {SITE_CONFIG.description}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Badge variant="outline" className="gap-1">
                  <Briefcase className="w-3 h-3" />
                  Babbel
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <MapPin className="w-3 h-3" />
                  Berlin, Germany
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <GraduationCap className="w-3 h-3" />
                  METU
                </Badge>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="glass rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-mono font-bold mb-6">
              <span className="text-primary">const</span> myJourney = {"{"}
            </h2>
            <div className="space-y-4 text-muted-foreground pl-4 border-l-2 border-primary/30">
              <p>
                <span className="text-primary font-mono">origin:</span> I started
                my career as a <strong className="text-foreground">Civil Engineer</strong>,
                earning both my Bachelor&apos;s and Master&apos;s degrees from Middle East
                Technical University in Ankara, Turkey.
              </p>
              <p>
                <span className="text-primary font-mono">pivot:</span> My research
                in <strong className="text-foreground">autonomous robotics</strong> and
                soil-tool interaction sparked my passion for software. I found
                myself writing more MATLAB scripts than structural calculations.
              </p>
              <p>
                <span className="text-primary font-mono">evolution:</span> That
                curiosity led me down the rabbit hole of{" "}
                <strong className="text-foreground">web development</strong>. What
                started as building simple websites evolved into architecting
                large-scale SaaS applications.
              </p>
              <p>
                <span className="text-primary font-mono">present:</span> Today, I
                lead core product development at{" "}
                <strong className="text-foreground">Babbel</strong> in Berlin,
                working with React and TypeScript. I&apos;m deeply invested in{" "}
                <strong className="text-foreground">AI transformation</strong> and
                how it&apos;s reshaping how we build software.
              </p>
              <p>
                <span className="text-primary font-mono">passion:</span> I believe
                in <strong className="text-foreground">knowledge sharing</strong>.
                Every week, I conduct sessions with my team on AI tools and best
                practices. Teaching is learning twice.
              </p>
            </div>
            <p className="text-2xl font-mono text-muted-foreground mt-6">{"}"}</p>
          </div>
        </div>
      </section>

      {/* Skills Cloud Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8 text-center">
            <span className="text-primary">&lt;</span>SkillsCloud
            <span className="text-primary">/&gt;</span>
          </h2>
          <SkillsCloud />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8 text-center">
            <span className="text-primary">git log</span> --oneline --all
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-8 text-center">
            <span className="text-primary">function</span> whenNotCoding() {"{"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOBBIES.map((hobby) => (
              <div
                key={hobby.name}
                className="glass rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow transition-all">
                    {hobbyIcons[hobby.icon]}
                  </div>
                  <h3 className="text-lg font-mono font-bold">{hobby.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-2xl font-mono text-muted-foreground mt-8">
            {"}"}
          </p>

          {/* Family YouTube Channel */}
          <div className="mt-12 glass rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-4">
              <span className="text-primary font-mono">// </span>
              Check out our family travel adventures on YouTube
            </p>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono"
            >
              <Video className="w-5 h-5" />
              Yerlisi Gibi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
