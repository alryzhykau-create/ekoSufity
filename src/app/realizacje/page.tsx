import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { whatsappUrl } from "@/content/site";

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
            <h3>Ważna informacja o zdjęciach</h3>
            <p>
              Materiały wizualne z obecnego archiwum traktujemy jako wizualizacje i inspiracje.
              Realne zdjęcia wykonanych prac będą oznaczone jako “Realizacja EkoSufity”.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Inspiracje"
            title="Przykładowe efekty i kierunki projektowe"
            lead="Filtry i case studies można rozbudować po dodaniu realnych zdjęć prac."
          />
          <div className="galleryGrid">
            {visualAssets.map((asset) => (
              <article className="card galleryCard" key={asset.src}>
                <div className="galleryImage">
                  <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 700px) 100vw, 280px" />
                  <span className="badge imageCaption">{asset.label}</span>
                </div>
                <div className="galleryContent">
                  <h3>{asset.title}</h3>
                  <p className="softLabel">{asset.meta}</p>
                  <Button href={whatsappUrl(`Dzień dobry, interesuje mnie podobny projekt: ${asset.title}.`)} variant="secondary">
                    Zapytaj o podobny projekt
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader eyebrow="Docelowo" title="Jak opiszemy realne realizacje?" />
          <div className="grid3" style={{ marginTop: 34 }}>
            {["Miasto i pomieszczenie", "Typ sufitu i oświetlenie", "Zakres: pomiar, materiał, montaż"].map(
              (item) => (
                <article className="card miniCard" key={item}>
                  <h3>{item}</h3>
                  <p>To pole uzupełnimy wyłącznie dla realnych wykonanych prac.</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
