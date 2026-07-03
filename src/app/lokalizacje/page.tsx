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
            <h3>Bezpłatny pomiar i dojazd</h3>
            <p>
              Obejmuje Wrocław i miejscowości do 100 km od miasta. Nie widzisz swojej na liście?
              Zadzwoń — najprawdopodobniej i tak dojedziemy.
            </p>
            <Button href={siteConfig.contacts.phoneHref} variant="secondary">
              Zapytaj o swoją miejscowość
            </Button>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Miasta"
            title="Gdzie montujemy sufity napinane"
            lead="Wybierz swoją miejscowość — na jej stronie znajdziesz informacje o dojeździe, pomiarze i lokalnych realizacjach."
          />
          <div className="cityPillGrid" style={{ marginTop: 30 }}>
            {cities.map((city) => (
              <Link className="cityPill" href={`/lokalizacje/${city.slug}`} key={city.slug}>
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
