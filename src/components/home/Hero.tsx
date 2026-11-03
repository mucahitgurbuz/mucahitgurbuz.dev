import Link from "next/link";
import { TopoMap } from "./TopoMap";

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute left-1/2 top-[-100px] bottom-[-60px] w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,.25)_30%,#000_55%),linear-gradient(to_bottom,#000_70%,transparent_100%)] [mask-composite:intersect] max-[860px]:bottom-auto max-[860px]:top-[-90px] max-[860px]:h-[560px] max-[860px]:opacity-55 max-[860px]:[mask-image:linear-gradient(to_bottom,#000_30%,transparent_100%)]">
        <TopoMap className="block h-full w-full" />
      </div>

      <div className="relative z-10 flex min-h-[min(78vh,720px)] flex-col justify-center pt-10 pb-20 max-[860px]:min-h-0 max-[860px]:pt-[170px] max-[860px]:pb-10">
        <h1 className="display mb-[clamp(28px,4vw,44px)] text-[clamp(68px,11.5vw,148px)] leading-[0.9] tracking-[-0.04em]">
          <span className="block">Mücahit</span>
          <span className="block pl-[0.55em] max-[860px]:pl-[0.35em]">Gürbüz</span>
        </h1>
        <p className="mb-10 max-w-[31ch] text-[clamp(18px,1.7vw,21px)] leading-[1.55]">
          Principal Engineer at Babbel Labs in Berlin. I trained as a civil
          engineer, spent ten years building web and mobile products, and ship
          my own apps on the side.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-medium">
          <Link
            href="/experience"
            className="rounded-full bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-[#303836]"
          >
            See my work
          </Link>
          <Link href="/contact" className="survey-link">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
