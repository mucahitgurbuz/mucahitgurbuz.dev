import { SITE_CONFIG } from "@/lib/constants";
import { CopyEmail } from "./CopyEmail";

export function ContactCta() {
  return (
    <section className="band bg-ink">
      <div className="wrap pt-[clamp(64px,9vw,120px)] pb-[clamp(48px,6vw,80px)]">
        <h2 className="title">Write to me</h2>
        <p className="lede mt-3">A project, a role, or a question about building with AI.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="link break-all text-[clamp(1.35rem,0.7rem+3.2vw,3.25rem)] leading-tight font-[560] tracking-[-0.03em] [text-decoration-thickness:0.06em] [text-underline-offset:0.16em]"
          >
            {SITE_CONFIG.email}
          </a>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}
