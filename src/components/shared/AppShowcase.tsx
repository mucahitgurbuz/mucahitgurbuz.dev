import Image from "next/image";
import { FEATURED_PROJECTS } from "@/lib/constants";

const APPS = FEATURED_PROJECTS.filter((project) => project.screenshots);

type App = (typeof APPS)[number];

function Phone({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div
      className={`absolute w-[34%] rounded-[14%/6.5%] bg-white p-[1.1%] shadow-[0_30px_60px_-30px_rgba(28,34,32,.45),0_0_0_1px_rgba(28,34,32,.06)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1206}
        height={2622}
        sizes="(max-width: 860px) 32vw, 240px"
        className="block h-auto w-full rounded-[13%/6%]"
      />
    </div>
  );
}

function AppRow({ app, flip }: { app: App; flip: boolean }) {
  const [first, second] = app.screenshots ?? [];
  const links = [
    app.appStore && { href: app.appStore, label: "App Store" },
    app.googlePlay && { href: app.googlePlay, label: "Google Play" },
    { href: app.link as string, label: "Website" },
    app.webApp && { href: app.webApp, label: "Web app" },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <article
      className={`mb-[clamp(64px,9vw,120px)] grid grid-cols-1 items-center gap-7 min-[861px]:gap-[clamp(32px,6vw,96px)] ${
        flip ? "min-[861px]:grid-cols-[1fr_1.25fr]" : "min-[861px]:grid-cols-[1.25fr_1fr]"
      }`}
    >
      <div
        className={`relative aspect-[6/5] overflow-hidden rounded-md ${flip ? "min-[861px]:order-2" : ""}`}
        style={{ background: app.tint }}
      >
        <Phone src={first} alt={`${app.name} app screen`} className="left-[16%] top-[11%]" />
        {second && (
          <Phone src={second} alt={`${app.name} app screen`} className="left-[52%] top-[22%]" />
        )}
      </div>

      <div>
        <div className="mb-5 flex items-center gap-4">
          <Image
            src={app.logo as string}
            alt=""
            width={112}
            height={112}
            className="h-14 w-14 rounded-[13px] shadow-[0_0_0_1px_rgba(28,34,32,.08)]"
          />
          <div>
            <h3 className="font-serif text-[clamp(32px,3.4vw,42px)] leading-none tracking-[-0.02em]">
              {app.name}
            </h3>
            <p className="mt-1.5 text-[15px] text-pencil">{app.kind}</p>
          </div>
        </div>
        <p className="mb-5 max-w-[40ch] text-[17px] leading-relaxed">{app.description}</p>
        <p className="mb-6 text-sm text-pencil">{app.technologies.join(", ")}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium">
          {links.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener" className="survey-link">
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AppShowcase() {
  return (
    <div>
      {APPS.map((app, i) => (
        <AppRow key={app.name} app={app} flip={i % 2 === 1} />
      ))}
    </div>
  );
}
