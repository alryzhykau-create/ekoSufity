import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cities } from "@/content/cities";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane Wrocław i Dolny Śląsk",
  description:
    "Lokalizacje EkoSufity: Wrocław i miejscowości do 100 km. Bezpłatny pomiar, dojazd gratis i montaż sufitów napinanych."
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/lokalizacje"), breadcrumbSchema([{ label: "Lokalizacje", href: "/lokalizacje" }])]} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "Lokalizacje", href: "/lokalizacje" }]} />
            <span className="eyebrow">Obszar działania</span>
            <h1>Sufity napinane Wrocław i Dolny Śląsk</h1>
            <p className="pageLead">
              Obsługujemy Wrocław oraz miejscowości do 100 km od miasta. Pomiar i dojazd w tym
              obszarze są bezpłatne.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl()} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card">
            <h3>Główna lokalna money page</h3>
            <p>
              Najważniejsza strona lokalna to <Link href="/lokalizacje/wroclaw">Wrocław</Link>.
              Pozostałe miasta budujemy jako użyteczne local pages, nie jako puste kopie.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Miasta"
            title="Lokalne strony dla miejscowości do 100 km"
            lead="Każda strona powinna z czasem dostać własne zdjęcia, FAQ lub notatki logistyczne, żeby uniknąć thin content."
          />
          <div className="grid3" style={{ marginTop: 34 }}>
            {cities.map((city) => (
              <article className="card miniCard" key={city.slug}>
                <h3>{city.name}</h3>
                <p>{city.intro}</p>
                <Link href={`/lokalizacje/${city.slug}`}>Sufity napinane {city.name}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
