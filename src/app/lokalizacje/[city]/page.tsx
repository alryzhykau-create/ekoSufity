import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cities, getCity } from "@/content/cities";
import { siteConfig, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { seoMeta } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ city: string }>;
};

const localFaqs = [
  {
    question: "Czy pomiar jest bezpłatny?",
    answer: "Tak. Pomiar jest bezpłatny."
  },
  {
    question: "Czy dojazd poza Wrocław też jest gratis?",
    answer: "Tak, dojazd jest bezpłatny do 100 km od Wrocławia."
  },
  {
    question: "Ile kosztuje sufit napinany?",
    answer:
      "Cena wynosi średnio ok. 120 zł/m² dla prostego sufitu MSD: prostokąt, 4 narożniki, bez dodatkowych elementów."
  },
  {
    question: "Czy można wysłać zdjęcie przez WhatsApp?",
    answer: "Tak. Możesz wysłać zdjęcie, miasto i przybliżony metraż."
  }
];

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    return {};
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    ...seoMeta(`/lokalizacje/${citySlug}`)
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    notFound();
  }

  const nearby = city.nearby
    .map((slug) => cities.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(`/lokalizacje/${city.slug}`, `Sufity napinane ${city.name}`),
          breadcrumbSchema([
            { label: "Lokalizacje", href: "/lokalizacje" },
            { label: city.name, href: `/lokalizacje/${city.slug}` }
          ]),
          faqSchema(localFaqs)
        ]}
      />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs
              items={[
                { label: "Lokalizacje", href: "/lokalizacje" },
                { label: city.name, href: `/lokalizacje/${city.slug}` }
              ]}
            />
            <span className="eyebrow">{city.name} i okolice</span>
            <h1>{city.h1}</h1>
            <p className="pageLead">{city.intro}</p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>
                Zadzwoń i umów pomiar {city.name === "Wrocław" ? "we Wrocławiu" : `w ${city.name}`}
              </Button>
              <Button
                href={whatsappUrl(`Dzień dobry, interesuje mnie sufit napinany. Miasto: ${city.name}.`)}
                variant="secondary"
              >
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card priceCard">
            <span className="softLabel">Cena lokalna</span>
            <div className="priceValue">średnio ok. 120 zł/m²</div>
            <p>
              Dla sufitu MSD w prostym prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych
              elementów. Wycena po pomiarze.
            </p>
          </aside>
        </div>
      </section>

      <section className="trustBar">
        <div className="container grid4">
          {[
            [`${city.name} i okolice`, "Obsługujemy mieszkania, domy i lokale w tej lokalizacji."],
            ["Pomiar gratis", "Pomiar jest bezpłatny i bez dodatkowych opłat."],
            ["Dojazd gratis", "Dojazd do 100 km od Wrocławia jest bezpłatny."],
            ["Gwarancja", "15 lat na płótno, 5 lat montaż, 2 lata LED."]
          ].map(([title, copy]) => (
            <article className="card trustCard" key={title}>
              <div className="iconDot" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Rozwiązania"
            title={`Najczęściej wybierane sufity napinane w lokalizacji ${city.name}`}
            lead="Dobór materiału i światła zależy od pomieszczenia, metrażu i oczekiwanego efektu."
          />
          <div className="grid4" style={{ marginTop: 34 }}>
            {[
              ["Sufit matowy", "Spokojny efekt do mieszkań, domów i pomieszczeń po remoncie."],
              ["Sufit z LED", "Linie świetlne, światło obwodowe lub punkty dopasowane do wnętrza."],
              ["Ukryty karnisz", "Czysta linia przy oknie i możliwość połączenia z oświetleniem."],
              ["Pomieszczenia wilgotne", "Rozwiązania dobierane po ocenie warunków w łazience lub basenie."]
            ].map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Inspiracje"
            title="Podobne efekty, które można omówić na pomiarze"
            lead="Przykładowe wizualizacje efektów — dokładny wygląd ustalamy na pomiarze."
          />
          <div className="galleryGrid">
            {visualAssets.slice(0, 4).map((asset) => (
              <article className="card galleryCard" key={asset.src}>
                <div className="galleryImage">
                  <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 700px) 100vw, 280px" />
                  <span className="badge imageCaption">{asset.label}</span>
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

      <section className="section sectionAlt">
        <div className="container grid2">
          <div>
            <SectionHeader eyebrow="FAQ lokalne" title={`Pytania o montaż w lokalizacji ${city.name}`} />
            <div className="faqGrid" style={{ gridTemplateColumns: "1fr" }}>
              {localFaqs.map((item) => (
                <article className="faqItem" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="card">
            <h3>Pobliskie lokalizacje</h3>
            <p className="softLabel">Montujemy sufity także w sąsiednich miejscowościach.</p>
            <div className="factorList">
              {nearby.map((nearbyCity) =>
                nearbyCity ? (
                  <Link key={nearbyCity.slug} href={`/lokalizacje/${nearbyCity.slug}`}>
                    Sufity napinane {nearbyCity.name}
                  </Link>
                ) : null
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Co dalej" title="Sprawdź przed pomiarem" />
          <div className="grid3 sectionCards">
            <Link className="card miniCard" href="/ceny">
              <h3>Ile to kosztuje?</h3>
              <p>Kalkulator i przykładowe ceny</p>
              <p className="cardArrowText">Zobacz →</p>
            </Link>
            <Link className="card miniCard" href="/rozwiazania">
              <h3>Zobacz rozwiązania</h3>
              <p>LED, karnisze, gwiazdne niebo i inne</p>
              <p className="cardArrowText">Zobacz →</p>
            </Link>
            <Link className="card miniCard" href="/sufity-napinane">
              <h3>Rodzaje sufitów i folie</h3>
              <p>Matowe, satynowe, połysk, translucent</p>
              <p className="cardArrowText">Zobacz →</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
