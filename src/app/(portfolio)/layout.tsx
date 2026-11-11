import { Header, Footer } from "@/components/layout";
import { KonamiEasterEgg, PersonJsonLd, WebsiteJsonLd } from "@/components/shared";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <KonamiEasterEgg />
      <a
        href="#main"
        className="btn sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
