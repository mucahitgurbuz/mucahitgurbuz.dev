import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mücahit Gürbüz | Principal Engineer",
    short_name: "MG",
    description:
      "Principal Engineer at Babbel Labs with 10+ years of expertise in React, TypeScript, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00ffff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
