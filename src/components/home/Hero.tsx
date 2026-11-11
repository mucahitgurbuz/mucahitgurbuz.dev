import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { APPS, SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="wrap pt-[clamp(28px,5vw,72px)] pb-[clamp(56px,7vw,96px)]">
      <h1 className="statement max-w-[21em]">
        I&apos;m{" "}
        <span className="whitespace-nowrap">
          <Image
            src={SITE_CONFIG.cutout}
            alt=""
            width={348}
            height={421}
            priority
            className="chip bust mr-[0.1em]"
          />
          Mücahit
        </span>{" "}
        Gürbüz, principal engineer at Babbel Labs in Berlin. On the side I build and run my own
        apps:{" "}
        {APPS.map((app, i) => (
          <Fragment key={app.name}>
            {i > 0 && " and "}
            <a
              href={`#${app.slug}`}
              className="whitespace-nowrap underline decoration-amber decoration-[0.07em] underline-offset-[0.14em] transition-colors hover:decoration-ink"
            >
              <Image
                src={app.logo}
                alt=""
                width={128}
                height={128}
                className="chip mr-[0.16em] w-[0.92em] rounded-[22%]"
                style={{ animationDelay: `${0.25 + i * 0.15}s` }}
              />
              {app.name}
            </a>
          </Fragment>
        ))}
        .
      </h1>
      <p className="lede mt-[clamp(20px,2.5vw,32px)]">
        I trained as a civil engineer and have spent ten years building web and mobile products.
      </p>
      <div className="mt-[clamp(28px,3vw,40px)] flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link href="/experience" className="btn">
          See my work
        </Link>
        <Link href="/contact" className="link">
          Write to me
        </Link>
      </div>
    </section>
  );
}
