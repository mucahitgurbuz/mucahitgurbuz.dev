import { Header, Footer } from "@/components/layout";
import { MouseFollower, KonamiEasterEgg, PersonJsonLd, WebsiteJsonLd } from "@/components/shared";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <div className="cursor-none md:cursor-none">
        <MouseFollower />
        <KonamiEasterEgg />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
