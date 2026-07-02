import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { localBusinessSchema } from "@/lib/seo/schema";
import "./globals.css";

// TYMCZASOWO (na czas developmentu): wyłącza cache — każda strona jest
// renderowana dynamicznie, więc Vercel zawsze oddaje świeżą wersję.
// Konfiguracja w root layout kaskaduje na wszystkie strony. USUNĄĆ później.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Sufity napinane Wrocław i do 100 km | EkoSufity",
    template: "%s | EkoSufity"
  },
  description:
    "Sufity napinane z montażem we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis i telefon lub WhatsApp.",
  openGraph: {
    title: "EkoSufity - sufity napinane Wrocław",
    description:
      "Montaż sufitów napinanych, LED i detali. Wrocław oraz miejscowości do 100 km.",
    url: siteConfig.baseUrl,
    siteName: "EkoSufity",
    locale: "pl_PL",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCta />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
