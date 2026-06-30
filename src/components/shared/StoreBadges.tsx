import Image from "next/image";

interface StoreBadgesProps {
  appStore: string;
  googlePlay: string;
  className?: string;
}

// Official Apple "Download on the App Store" and Google "Get it on Google Play"
// badges. The SVGs are served unoptimized so the vector artwork stays crisp and
// no image optimizer config is needed.
export function StoreBadges({
  appStore,
  googlePlay,
  className = "",
}: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download HitTheRoad on the App Store"
      >
        <Image
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-12 w-auto"
          unoptimized
        />
      </a>
      <a
        href={googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get HitTheRoad on Google Play"
      >
        <Image
          src="/badges/google-play.svg"
          alt="Get it on Google Play"
          width={180}
          height={53}
          className="h-12 w-auto"
          unoptimized
        />
      </a>
    </div>
  );
}
