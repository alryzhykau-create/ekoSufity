import Link from "next/link";
import { PlaceholderImage } from "@/components/rozwiazania/PlaceholderImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faktury, fakturaCardCopy, type Faktura } from "@/content/folie-faktury";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

type FakturaDetailProps = {
  faktura: Faktura;
};

export function FakturaDetail({ faktura }: FakturaDetailProps) {
  const href = `/rozwiazania/folie/${faktura.slug}`;
  const others = faktury.filter((item) => item.slug !== faktura.slug);
  const lower = faktura.name.toLowerCase();

  const blocks: React.ReactNode[] = [];

  // 1. Co to jest
  blocks.push(
    <div className="container">
      <SectionHeader eyebrow="O fakturze" title="Co to jest" />
      <p className="sectionLead sectionLead--wide">
        {faktura.whatIs}
      </p>
    </div>
  );

  // 2. Zalety
  blocks.push(
    <div className="container">
      <SectionHeader eyebrow="Zalety" title="Zalety tej faktury" />
      <div className="grid3 sectionCards">
        {faktura.zalety.map((card) => (
          <article className="card miniCard" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );

  // 3. O czym warto wiedzieć
  blocks.push(
    <div className="container">
      <SectionHeader eyebrow="Dobrze wiedzieć" title="O czym warto wiedzieć" />
      <article className="card" style={{ marginTop: 24, maxWidth: 860 }}>
        <p style={{ margin: 0 }}>{faktura.warto}</p>
      </article>
      {faktura.bridge ? (
        <p style={{ marginTop: 16 }}>
          <Link href={faktura.bridge.href} className="inlineLink">
            {faktura.bridge.text} →
          </Link>
        </p>
      ) : null}
    </div>
  );

  // 4. Gdzie sprawdza się najlepiej (+ miejsce na zdjęcie)
  blocks.push(
    <div className="container">
      <div className="grid2" style={{ alignItems: "center" }}>
        <div>
          <SectionHeader eyebrow="Zastosowanie" title="Gdzie sprawdza się najlepiej" />
          <p className="sectionLead" style={{ marginTop: 16 }}>
            {faktura.gdzie}
          </p>
        </div>
        <aside className="card pageVisualCard">
          <PlaceholderImage
            slot={{ src: "", alt: `Sufit ${lower} — przykładowy efekt`, caption: "przykładowy efekt" }}
            ratio="4 / 3"
          />
          <p className="softLabel">Przykładowy efekt. Ostateczny wygląd zależy od pomieszczenia i światła.</p>
        </aside>
      </div>
    </div>
  );

  // 5. Realizacje (placeholdery pod zdjęcia)
  blocks.push(
    <div className="container">
      <SectionHeader
        eyebrow="Realizacje"
        title="Podobne realizacje"
        lead="Zdjęcia naszych realizacji pojawią się tutaj. Poniżej poglądowe miejsca na fotografie."
      />
      <div className="grid3 sectionCards">
        {[1, 2, 3].map((n) => (
          <PlaceholderImage
            key={n}
            slot={{ src: "", alt: `Realizacja sufitu ${lower} ${n}`, caption: "zdjęcie realizacji" }}
            ratio="4 / 3"
          />
        ))}
      </div>
    </div>
  );

  // 6. …a inne faktury
  blocks.push(
    <div className="container">
      <SectionHeader
        eyebrow="Porównanie"
        title={faktura.inneFakturyTitle ?? `Sufit ${lower} a inne faktury`}
      />
      <p className="sectionLead sectionLead--wide">
        {faktura.inneFaktury}
      </p>
    </div>
  );

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(href, faktura.h1),
          breadcrumbSchema([
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: "Folie", href: "/rozwiazania/folie" },
            { label: faktura.name, href }
          ]),
          faqSchema(faktura.faq)
        ]}
      />

      {/* Hero */}
      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs
              items={[
                { label: "Rozwiązania", href: "/rozwiazania" },
                { label: "Folie", href: "/rozwiazania/folie" },
                { label: faktura.name, href }
              ]}
            />
            <span className="eyebrow">{faktura.eyebrow}</span>
            <h1>{faktura.h1}</h1>
            <p className="pageLead">{faktura.heroIntro}</p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button
                href={whatsappUrl(`Dzień dobry, interesuje mnie sufit ${lower}.`)}
                variant="secondary"
              >
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <PlaceholderImage
              slot={{ src: "", alt: `Sufit ${lower} — przykładowy efekt`, caption: "przykładowy efekt" }}
              ratio="900 / 680"
            />
            <p className="softLabel">
              Przykładowy efekt. Ostateczny wygląd zależy od pomieszczenia i ustalonego zakresu.
            </p>
          </aside>
        </div>
      </section>

      {/* Bloki treści — naprzemienne tło */}
      {blocks.map((block, index) => (
        <section className={index % 2 === 0 ? "section" : "section sectionAlt"} key={index}>
          {block}
        </section>
      ))}

      {/* FAQ */}
      <section className="section faqSection">
        <div className="container faqShell">
          <div className="centerHeader">
            <SectionHeader eyebrow="FAQ" title="Najczęstsze pytania" />
          </div>
          <div className="faqGrid">
            {faktura.faq.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Dobierzemy fakturę do Twojego wnętrza</h2>
            <p>Na pomiarze pokazujemy próbki i doradzamy fakturę pod światło, pomieszczenie i efekt.</p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button
              href={whatsappUrl(`Dzień dobry, chcę dobrać fakturę folii (${lower}) do sufitu napinanego.`)}
              variant="secondary"
            >
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Inne faktury — przelinkowanie */}
      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader eyebrow="Rodzaje faktur" title="Zobacz inne faktury" />
          <div className="grid3 sectionCards">
            {others.map((item) => (
              <Link className="card miniCard" href={`/rozwiazania/folie/${item.slug}`} key={item.slug}>
                <h3>{item.name}</h3>
                <p>{fakturaCardCopy[item.slug]}</p>
                <p className="cardArrowText">Zobacz fakturę →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
