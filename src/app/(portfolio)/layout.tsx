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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
