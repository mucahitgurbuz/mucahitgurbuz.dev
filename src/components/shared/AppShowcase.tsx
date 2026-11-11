import Image from "next/image";
import { APPS } from "@/lib/constants";
import { StoreBadges } from "./StoreBadges";

type App = (typeof APPS)[number];

// On wide screens the first screen sits in the middle, raised, with the
// other two beside it. On narrow screens the three scroll sideways.
const PLACEMENT = [
  "min-[900px]:order-2 min-[900px]:w-[37%]",
  "min-[900px]:order-1 min-[900px]:mt-[9%] min-[900px]:w-[29%]",
  "min-[900px]:order-3 min-[900px]:mt-[9%] min-[900px]:w-[29%]",
];

function screenName(src: string) {
  return src.slice(src.lastIndexOf("-") + 1, src.lastIndexOf("."));
}

function AppBand({ app, flip, eager }: { app: App; flip: boolean; eager: boolean }) {
  const links = [
    { href: app.link, label: "Website" },
    app.webApp && { href: app.webApp, label: "Web app" },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <article id={app.slug} className="band overflow-hidden" style={{ background: app.tint }}>
      <div
        className={`wrap grid grid-cols-1 items-center gap-x-[clamp(32px,5vw,80px)] gap-y-12 py-[clamp(56px,8vw,112px)] ${
          flip
            ? "min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <div className={flip ? "min-[900px]:order-2" : undefined}>
          <div className="mb-6 flex items-center gap-4">
            <Image
              src={app.logo}
              alt=""
              width={128}
              height={128}
              className="h-14 w-14 rounded-[22%] shadow-[0_0_0_1px_rgb(255_255_255/0.18)]"
            />
            <p className="text-white/80">{app.kind}</p>
          </div>
          <h2 className="app-name">{app.name}</h2>
          <p className="mt-6 max-w-[44ch] text-[clamp(1.06rem,1rem+0.3vw,1.2rem)] text-white/90">
            {app.description}
          </p>
          <p className="mt-4 text-[15px] text-white/80">{app.technologies.join(", ")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            {app.appStore && app.googlePlay && (
              <StoreBadges appName={app.name} appStore={app.appStore} googlePlay={app.googlePlay} />
            )}
            {links.map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener" className="link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="-mx-[clamp(20px,5vw,64px)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[clamp(20px,5vw,64px)] pb-10 [scrollbar-width:none] min-[900px]:mx-0 min-[900px]:items-start min-[900px]:justify-center min-[900px]:gap-[2.5%] min-[900px]:overflow-visible min-[900px]:px-0 min-[900px]:pb-0">
          {app.screenshots.map((src, i) => (
            <div key={src} className={`phone w-[62%] snap-center min-[900px]:shrink ${PLACEMENT[i]}`}>
              <div>
                <Image
                  src={src}
                  alt={`${app.name}, ${screenName(src)} screen`}
                  width={1206}
                  height={2622}
                  sizes="(max-width: 899px) 62vw, 260px"
                  loading={eager ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AppShowcase() {
  return (
    <>
      {APPS.map((app, i) => (
        <AppBand key={app.name} app={app} flip={i % 2 === 1} eager={i === 0} />
      ))}
    </>
  );
}
