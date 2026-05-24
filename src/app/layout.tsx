import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@/app/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mücahit Gürbüz | Senior Software Engineer",
    template: "%s | Mücahit Gürbüz",
  },
  description:
    "Senior Software Engineer with 10+ years of expertise in React, TypeScript, and modern web technologies. Currently at Babbel in Berlin, focused on AI transformation.",
  keywords: [
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Frontend Developer",
    "Berlin",
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
    title: "Mücahit Gürbüz | Senior Software Engineer",
    description:
      "Senior Software Engineer with 10+ years of expertise in React, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mücahit Gürbüz - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mücahit Gürbüz | Senior Software Engineer",
    description:
      "Senior Software Engineer with 10+ years of expertise in React, TypeScript, and modern web technologies.",
    creator: "@Sosyal_Muhendis",
    images: ["/og-image.png"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      className={`dark ${jetbrainsMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
