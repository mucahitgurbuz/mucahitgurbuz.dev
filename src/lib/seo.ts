import type { Metadata } from "next";

const SITE_NAME = "Mücahit Gürbüz";
const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Mücahit Gürbüz, principal engineer at Babbel Labs in Berlin, builds HitTheRoad, Olifant and Junto",
};

export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_US", siteName: SITE_NAME, url: path, title: fullTitle, description, images: [SHARE_IMAGE] },
    twitter: { card: "summary_large_image", creator: "@Sosyal_Muhendis", title: fullTitle, description, images: [SHARE_IMAGE] },
  };
}
