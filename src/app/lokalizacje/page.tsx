import type { Metadata } from "next";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { seoMeta } from "@/lib/seo/metadata";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cities } from "@/content/cities";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane — Wrocław i Dolny Śląsk",
  description:
    "Montaż sufitów napinanych w całym Dolnym Śląsku, do 100 km od Wrocławia. Bezpłatny pomiar i dojazd, cena średnio ok. 120 zł/m².",
  ...seoMeta("/lokalizacje")
};

// FAQ regionalne — te same treści trafiają do FAQPage w danych strukturalnych.
const regionFaqs = [
  {
    question: "Czy dojeżdżacie poza Wrocław?",
    answer: "Tak. Obsługujemy Dolny Śląsk w promieniu do 100 km od Wrocławia, dojazd jest bezpłatny."
  },
  {
    question: "Nie widzę swojej miejscowości na liście — obsługujecie ją?",
    answer:
      "Prawdopodobnie tak. Obsługujemy Dolny Śląsk w promieniu do 100 km od Wrocławia — zadzwoń i zapytaj o swoją miejscowość, najprawdopodobniej dojedziemy."
  },
  {
    question: "Czy cena zależy od odległości?",
    answer: "Nie. Cena jest taka sama w całym obsługiwanym regionie, dojazd nie zwiększa kosztu."
  },
  {
    question: "Czy pomiar jest płatny?",
    answer: "Nie. Pomiar jest bezpłatny."
  }
];

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema("/lokalizacje", "Sufity napinane Dolny Śląsk"),
          breadcrumbSchema([{ label: "Lokalizacje", href: "/lokalizacje" }]),
          faqSchema(regionFaqs)
        ]}
      />

      {/* 1. Hero */}
      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Lokalizacje", href: "/lokalizacje" }]} />
            <span className="eyebrow">Obszar działania</span>
            <h1>Sufity napinane — Wrocław i Dolny Śląsk</h1>
            <p className="pageLead">
              Montujemy sufity napinane z oświetleniem LED w całym regionie wokół Wrocławia.
              Obsługujemy Dolny Śląsk w promieniu do 100 km od miasta. Pomiar i dojazd w tym obszarze
              są bezpłatne.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, interesuje mnie sufit napinany. Region: Dolny Śląsk.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>

          {/* 2. Cena — jedna dla całego regionu */}
          <aside className="card priceCard">
            <span className="softLabel">Cena w całym regionie</span>
            <div className="priceValue">średnio ok. 120 zł/m²</div>
            <p>
              Dla prostego sufitu MSD w prostokątnym pomieszczeniu z 4 narożnikami. Cena jest taka
              sama w całym obsługiwanym regionie — dojazd nie zwiększa kosztu.
            </p>
          </aside>
        </div>
      </section>

      {/* 3. Korzyści */}
      <section className="trustBar">
        <div className="container grid4">
          {[
            ["Cały region wokół Wrocławia", "Wrocław i miejscowości Dolnego Śląska w zasięgu dojazdu."],
            ["Pomiar gratis", "Pomiar jest bezpłatny w całym obsługiwanym obszarze."],
            ["Dojazd gratis", "Dojazd do 100 km od Wrocławia nie zwiększa ceny."],
            ["Gwarancja", "15 lat na płótno, 5 lat montaż, 2 lata LED."]
          ].map(([title, copy]) => (
            <article className="card trustCard" key={title}>
              <div className="iconDot" aria-hidden="true" />
              <div className="trustText">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. O regionie */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Region" title="Działamy w całym Dolnym Śląsku" />
          <p className="sectionLead sectionLead--wide">
            Dolny Śląsk to region na południowym zachodzie Polski ze stolicą we Wrocławiu —
            największym mieście i historycznej stolicy Śląska. Obsługujemy jego centralną część: od
            Wrocławia przez okoliczne miasta i gminy, aż po podnóża Sudetów. Montujemy sufity
            napinane zarówno w miejskich mieszkaniach i domach, jak i w lokalach usługowych w
            mniejszych miejscowościach regionu.
          </p>
        </div>
      </section>

      {/* 5. Gdzie montujemy — 15 miejscowości */}
      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Miasta"
            title="Gdzie montujemy sufity napinane"
            lead="Wybierz swoją miejscowość — na jej stronie znajdziesz informacje o dojeździe, pomiarze i lokalnych realizacjach."
          />
          <div className="cityPillGrid sectionCards">
            {cities.map((city) => (
              <Link className="cityPill" href={`/lokalizacje/${city.slug}`} key={city.slug}>
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ regionalne */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQ regionalne" title="Pytania o dojazd i obszar działania" />
          <FaqList items={regionFaqs} />
        </div>
      </section>

      {/* 7. Finalne CTA */}
      <FinalContactSection />
    </>
  );
}
