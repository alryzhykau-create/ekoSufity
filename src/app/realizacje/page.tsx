import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import { RealizacjeGallery } from "@/components/realizacje/RealizacjeGallery";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Realizacje i inspiracje sufitów napinanych",
  description:
    "Zobacz inspiracje i docelowo realne realizacje sufitów napinanych: mieszkania, domy, lokale, restauracje i pomieszczenia wilgotne.",
  ...seoMeta("/realizacje")
};

type PageProps = {
  searchParams: Promise<{ room?: string; faktura?: string }>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { room, faktura } = await searchParams;

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
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl("Dzień dobry, chcę zapytać o podobny efekt sufitu.")} variant="secondary">
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

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Inspiracje"
            title="Przykładowe efekty i kierunki projektowe"
            lead="Przykłady efektów, jakie można uzyskać — od salonów i kuchni po strefy wilgotne."
          />
          <RealizacjeGallery initialRoom={room} initialFinish={faktura} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Chcesz wiedzieć, jak powstaje taki efekt?" />
          <div className="buttonRow" style={{ marginTop: 24 }}>
            <Button href="/rozwiazania">Zobacz rozwiązania</Button>
            <Button href="/ceny" variant="secondary">
              Sprawdź ceny i kalkulator
            </Button>
          </div>
        </div>
      </section>

      <section className="section finalCtaSection sectionAlt">
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
