import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "@/app/globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mücahit Gürbüz | Principal Engineer",
    template: "%s | Mücahit Gürbüz",
  },
  description:
    "Principal Engineer at Babbel Labs in Berlin and founder of Aida Yazılım, the AI studio behind HitTheRoad, Olifant and Junto.",
  keywords: [
    "Principal Engineer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Berlin",
    "Babbel Labs",
    "Babbel",
    "AI",
    "Agentic Coding",
  ],
  authors: [{ name: "Mücahit Gürbüz", url: "https://mucahitgurbuz.dev" }],
  creator: "Mücahit Gürbüz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mucahitgurbuz.dev",
    siteName: "Mücahit Gürbüz",
    title: "Mücahit Gürbüz | Principal Engineer",
    description:
      "Principal Engineer at Babbel Labs with 10+ years of expertise in React, TypeScript, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mücahit Gürbüz | Principal Engineer",
    description:
      "Principal Engineer at Babbel Labs with 10+ years of expertise in React, TypeScript, and modern web technologies.",
    creator: "@Sosyal_Muhendis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://mucahitgurbuz.dev"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={archivo.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
