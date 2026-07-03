import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Realizacje i inspiracje sufitów napinanych",
  description:
    "Zobacz inspiracje i docelowo realne realizacje sufitów napinanych: mieszkania, domy, lokale, restauracje i pomieszczenia wilgotne."
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Realizacje", href: "/realizacje" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "Realizacje", href: "/realizacje" }]} />
            <span className="eyebrow">Galeria</span>
            <h1>Realizacje i inspiracje sufitów napinanych</h1>
            <p className="pageLead">
              W tym miejscu pokazujemy przykładowe efekty, inspiracje i docelowo realne realizacje
              EkoSufity. Wizualizacje oznaczamy oddzielnie, aby było jasne, czy oglądasz inspirację,
              czy wykonany projekt.
            </p>
            <div className="buttonRow">
              <Button href={whatsappUrl("Dzień dobry, chcę zapytać o podobny efekt sufitu.")}>
                Chcę podobny efekt
              </Button>
              <Button href={whatsappUrl()} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <div className="card">
            <h3>Wizualizacje, nie stockowe zdjęcia</h3>
            <p>
              Materiały poniżej to wizualizacje przykładowych efektów. Realne zdjęcia naszych
              realizacji dodajemy na bieżąco.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Inspiracje"
            title="Przykładowe efekty i kierunki projektowe"
            lead="Przykłady efektów, jakie można uzyskać — od salonów i kuchni po strefy wilgotne."
          />
          <div className="galleryGrid">
            {visualAssets.map((asset) => (
              <article className="card galleryCard" key={asset.src}>
                <div className="galleryImage">
                  <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 700px) 100vw, 280px" />
                </div>
                <div className="galleryContent">
                  <h3>{asset.title}</h3>
                  <p className="softLabel">{asset.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Twój projekt</span>
            <h2 className="sectionTitle">Chcesz podobny efekt u siebie?</h2>
            <p>
              Wyślij zdjęcie pomieszczenia i metraż — podpowiemy materiał, światło i orientacyjny
              koszt, a potem umówimy bezpłatny pomiar.
            </p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń</Button>
            <Button
              href={whatsappUrl("Dzień dobry, chcę podobny efekt sufitu. Mogę wysłać zdjęcie i metraż.")}
              variant="secondary"
            >
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
