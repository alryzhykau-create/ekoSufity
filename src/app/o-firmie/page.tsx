import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "O EkoSufity",
  description:
    "O EkoSufity: osobisty kontakt, właściciel Białorusin we Wrocławiu, obsługa po polsku, białorusku, rosyjsku i ukraińsku.",
  ...seoMeta("/o-firmie")
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "O firmie", href: "/o-firmie" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "O firmie", href: "/o-firmie" }]} />
            <span className="eyebrow">O EkoSufity</span>
            <h1>O EkoSufity</h1>
            <p className="pageLead">{siteConfig.owner.description}</p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl()} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <Image
              src="/images/aleks-ekosufity-v2.webp"
              alt="Aleks — specjalista EkoSufity"
              width={900}
              height={900}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <p className="softLabel">
              <strong>Aleks</strong> — osobiście odpowiadam za jakość Twojego sufitu.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Zasady pracy"
            title="Spokojne doradztwo, dokładny pomiar, jasne ustalenia"
            lead="Bez ukrytych kosztów i presji — cenę i zakres ustalamy jasno, po bezpłatnym pomiarze."
          />
          <div className="grid3 sectionCards">
            {[
              ["Osobisty kontakt", "Telefon i WhatsApp bez niepotrzebnych pośredników."],
              ["Na rynku od 2020 roku", "Montujemy sufity napinane we Wrocławiu i okolicy od 2020 roku."],
              ["Wycena po pomiarze", "Cena zależy od metrażu, narożników, LED i detali."],
              ["Obszar działania", "Wrocław i miejscowości do 100 km od miasta — pomiar i dojazd gratis."],
              ["Gwarancja", siteConfig.offerFacts.warranty],
              ["Języki obsługi", `${siteConfig.languages.join(", ")}.`]
            ].map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
