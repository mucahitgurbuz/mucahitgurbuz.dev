import type { Metadata } from "next";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mücahit Gürbüz. Available for opportunities, collaborations, and conversations about tech.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> ./contact.sh
          </h1>
          <p className="text-muted-foreground text-lg">
            Let&apos;s connect! Whether you have a project in mind, want to discuss
            tech, or just say hi.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass border-border">
                <CardHeader>
                  <CardTitle className="font-mono">
                    <span className="text-primary">const</span> contactInfo = {"{"}
                  </CardTitle>
                  <CardDescription>
                    Here are the best ways to reach me
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">
                        email:
                      </p>
                      <p className="text-foreground font-mono">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">
                        location:
                      </p>
                      <p className="text-foreground font-mono">
                        {SITE_CONFIG.location}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">
                        phone:
                      </p>
                      <p className="text-foreground font-mono">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>

                  <p className="text-lg font-mono text-muted-foreground pt-2">
                    {"}"};
                  </p>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass border-border">
                <CardHeader>
                  <CardTitle className="font-mono">
                    <span className="text-primary">const</span> socials = [
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-primary" />
                      <span className="font-mono text-sm">GitHub</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="font-mono text-sm">LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                      <span className="font-mono text-sm">Twitter</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-primary text-lg">🎓</span>
                      <span className="font-mono text-sm">Scholar</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                    </a>
                  </div>
                  <p className="text-lg font-mono text-muted-foreground pt-4">
                    ];
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="font-mono">
                  <span className="text-primary">async function</span>{" "}
                  sendMessage() {"{"}
                </CardTitle>
                <CardDescription>
                  Drop me a message and I&apos;ll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
                <p className="text-lg font-mono text-muted-foreground pt-6 text-center">
                  {"}"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-mono font-bold">
                Based in Berlin, Germany
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Living in the heart of Europe&apos;s tech hub since 2021. Open to
              in-person meetings, virtual coffee chats, or async communication.
            </p>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
              {/* ASCII Art Map */}
              <pre className="absolute inset-0 flex items-center justify-center text-primary/30 text-xs font-mono overflow-hidden">
                {`
    ╔═══════════════════════════════════════╗
    ║         BERLIN, GERMANY               ║
    ║                                       ║
    ║         ┌─────────────┐               ║
    ║         │  📍 Here!   │               ║
    ║         └─────────────┘               ║
    ║                                       ║
    ║    52.5200° N, 13.4050° E            ║
    ║                                       ║
    ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
    ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
    ╚═══════════════════════════════════════╝
                `}
              </pre>
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground font-mono">
            <span className="text-primary">// </span>
            Response time: Usually within 24-48 hours
          </p>
          <p className="text-muted-foreground font-mono mt-2">
            <span className="text-primary">// </span>
            Preferred: Email or LinkedIn for professional inquiries
          </p>
        </div>
      </section>
    </div>
  );
}
