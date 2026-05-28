import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "O EkoSufity",
  description:
    "O EkoSufity: osobisty kontakt, właściciel Białorusin we Wrocławiu, obsługa po polsku, białorusku, rosyjsku i ukraińsku."
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
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń</Button>
              <Button href={whatsappUrl()} variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card">
            <h3>Języki obsługi</h3>
            <p>{siteConfig.languages.join(", ")}.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Zasady pracy"
            title="Spokojne doradztwo, dokładny pomiar, jasne ustalenia"
            lead="Pochodzenie właściciela pokazujemy jako ludzki trust-factor, a nie jako agresywny slogan."
          />
          <div className="grid3" style={{ marginTop: 34 }}>
            {[
              ["Osobisty kontakt", "Telefon i WhatsApp bez niepotrzebnych pośredników."],
              ["Wycena po pomiarze", "Cena zależy od metrażu, narożników, LED i detali."],
              ["Gwarancja", siteConfig.offerFacts.warranty]
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
