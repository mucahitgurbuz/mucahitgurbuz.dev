import { SITE_CONFIG } from "@/lib/constants";

export function ContactCta() {
  return (
    <section className="pt-[clamp(100px,14vw,180px)] pb-[clamp(60px,8vw,100px)]">
      <h2 className="display mb-7 text-[clamp(40px,5.2vw,64px)] leading-[1.02]">Write to me</h2>
      <a
        href={`mailto:${SITE_CONFIG.email}`}
        className="survey-link display break-words text-[clamp(26px,4.2vw,52px)] leading-[1.1] [text-decoration-thickness:2px] [text-underline-offset:10px]"
      >
        {SITE_CONFIG.email}
      </a>
    </section>
  );
}
