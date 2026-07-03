import Link from "next/link";
import { PlaceholderImage } from "@/components/rozwiazania/PlaceholderImage";
import { hasDiagram, SolutionDiagram } from "@/components/rozwiazania/SolutionDiagram";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { finalCta, getSolutionLink, type Rozwiazanie } from "@/content/rozwiazania";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

type RozwiazanieDetailProps = {
  rozwiazanie: Rozwiazanie;
};

export function RozwiazanieDetail({ rozwiazanie }: RozwiazanieDetailProps) {
  const href = `/rozwiazania/${rozwiazanie.slug}`;
  const relatedLinks = rozwiazanie.related
    .map((slug) => getSolutionLink(slug))
    .filter((link): link is { title: string; href: string } => link !== null);

  // Bloki treści układamy w kolejności zależnej od tego, jakie dane ma dane rozwiązanie.
  // Dzięki temu każda strona ma inny zestaw sekcji — nie wygląda jak kopia szablonu.
  const blocks: React.ReactNode[] = [];

  // 1. Co to jest (zawsze)
  blocks.push(
    <div className="container">
      <SectionHeader eyebrow="O rozwiązaniu" title="Co to jest" />
      <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
        {rozwiazanie.whatIs}
      </p>
      {rozwiazanie.bridge ? (
        <p style={{ marginTop: 16 }}>
          <Link href={rozwiazanie.bridge.href} className="inlineLink">
            {rozwiazanie.bridge.text} →
          </Link>
        </p>
      ) : null}
    </div>
  );

  // 2. Problem i rozwiązanie (opcjonalnie — rozwiązania techniczne)
  if (rozwiazanie.problemSolution) {
    blocks.push(
      <div className="container">
        <SectionHeader eyebrow="Po co to" title="Problem i rozwiązanie" />
        <div className="grid2" style={{ marginTop: 28 }}>
          <article className="card">
            <h3>Problem</h3>
            <p>{rozwiazanie.problemSolution.problem}</p>
          </article>
          <article className="card" style={{ borderColor: "var(--accent)" }}>
            <h3>Nasze rozwiązanie</h3>
            <p>{rozwiazanie.problemSolution.solution}</p>
          </article>
        </div>
      </div>
    );
  }

  // 3. Zakres / warianty (zawsze — z tytułem zależnym od rozwiązania)
  blocks.push(
    <div className="container">
      <SectionHeader
        eyebrow="Zakres"
        title={rozwiazanie.planTitle ?? "Co możemy zaplanować"}
        lead="Konkretny zestaw dobieramy po obejrzeniu pomieszczenia i ustaleniu efektu."
      />
      <div className="grid4 sectionCards">
        {rozwiazanie.planCards.map((card) => (
          <article className="card miniCard" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );

  // 3b. Bloki tekstowe (proza) — opcjonalnie, po kartach planCards
  if (rozwiazanie.textBlocks) {
    rozwiazanie.textBlocks.forEach((block) => {
      blocks.push(
        <div className="container">
          <SectionHeader eyebrow={block.eyebrow ?? "Szczegóły"} title={block.title} />
          <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
            {block.body}
          </p>
        </div>
      );
    });
  }

  // 4. Gdzie się sprawdza — wariant prozą
  if (rozwiazanie.whereFitsText) {
    blocks.push(
      <div className="container">
        <SectionHeader
          eyebrow="Zastosowanie"
          title={rozwiazanie.whereFitsTitle ?? "Gdzie się sprawdza"}
        />
        <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
          {rozwiazanie.whereFitsText}
        </p>
      </div>
    );
  }

  // 4b. Gdzie się sprawdza / Kiedy ma sens (opcjonalnie — rozwiązania wizualne)
  if (rozwiazanie.whereFits) {
    const gridClass = rozwiazanie.whereFits.length === 3 ? "grid3" : "grid4";
    blocks.push(
      <div className="container">
        <SectionHeader
          eyebrow="Zastosowanie"
          title={rozwiazanie.whereFitsTitle ?? "Gdzie się sprawdza"}
        />
        <div className={`${gridClass} sectionCards`}>
          {rozwiazanie.whereFits.map((card) => (
            <article className="card miniCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  // 5. Porównanie (opcjonalnie)
  if (rozwiazanie.comparison) {
    const { comparison } = rozwiazanie;
    blocks.push(
      <div className="container">
        <SectionHeader eyebrow="Porównanie" title={comparison.title ?? "Czym różni się od standardu"} />
        <div className="comparisonScroll" style={{ marginTop: 28 }}>
          <table className="comparisonTable">
            <thead>
              <tr>
                <th />
                <th>{comparison.aHead}</th>
                <th>{comparison.bHead}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 6. Cena zależy od zakresu (chyba że strona ma nie mówić o cenie)
  if (rozwiazanie.hidePrice) {
    // pomijamy sekcję ceny
  } else if (rozwiazanie.priceFactors) {
    blocks.push(
      <div className="container pricePanel">
        <div>
          <SectionHeader eyebrow="Wycena" title="Cena zależy od zakresu" lead={rozwiazanie.priceCopy} />
          <p className="softLabel" style={{ marginTop: 16 }}>
            Punktem odniesienia jest sam sufit od 120 zł/m² — orientacyjny koszt można policzyć w{" "}
            <Link href="/ceny#kalkulator" className="inlineLink">
              kalkulatorze
            </Link>
            .
          </p>
        </div>
        <div className="card">
          <h3>Co wpływa na koszt?</h3>
          <div className="factorList">
            {rozwiazanie.priceFactors.map((factor) => (
              <div className="factor" key={factor}>
                <span className="check">✓</span>
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    blocks.push(
      <div className="container">
        <SectionHeader eyebrow="Wycena" title="Cena zależy od zakresu" lead={rozwiazanie.priceCopy} />
        <p className="softLabel" style={{ marginTop: 16, maxWidth: 760 }}>
          Punktem odniesienia jest sam sufit od 120 zł/m² — orientacyjny koszt można policzyć w{" "}
          <Link href="/ceny#kalkulator" className="inlineLink">
            kalkulatorze
          </Link>
          .
        </p>
      </div>
    );
  }

  // 7. Dlaczego warto (zawsze)
  blocks.push(
    <div className="container">
      <SectionHeader eyebrow="Korzyści" title="Dlaczego warto" />
      <div className="grid3 sectionCards">
        {rozwiazanie.whyCards.map((card) => (
          <article className="card miniCard" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );

  // 8. Na co zwrócić uwagę (opcjonalnie)
  if (rozwiazanie.notes) {
    blocks.push(
      <div className="container">
        <SectionHeader eyebrow="Dobrze wiedzieć" title="Na co zwrócić uwagę" />
        <article className="card" style={{ marginTop: 24, maxWidth: 820 }}>
          <div className="factorList">
            {rozwiazanie.notes.map((note) => (
              <div className="factor" key={note}>
                <span className="check">✓</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(href, rozwiazanie.h1),
          breadcrumbSchema([
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: rozwiazanie.shortTitle, href }
          ]),
          faqSchema(rozwiazanie.faq)
        ]}
      />

      {/* Hero */}
      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs
              items={[
                { label: "Rozwiązania", href: "/rozwiazania" },
                { label: rozwiazanie.shortTitle, href }
              ]}
            />
            <span className="eyebrow">{rozwiazanie.eyebrow}</span>
            <h1>{rozwiazanie.h1}</h1>
            <p className="pageLead">{rozwiazanie.heroSubtitle}</p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button
                href={whatsappUrl(`Dzień dobry, interesuje mnie rozwiązanie: ${rozwiazanie.shortTitle}.`)}
                variant="secondary"
              >
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            {hasDiagram(rozwiazanie.slug) ? (
              <SolutionDiagram slug={rozwiazanie.slug} />
            ) : (
              <PlaceholderImage slot={rozwiazanie.heroImage} ratio="900 / 680" />
            )}
            <p className="softLabel">
              {rozwiazanie.heroImage.caption ?? "Schemat poglądowy"}. Ostateczny wygląd zależy od
              pomieszczenia i ustalonego zakresu.
            </p>
          </aside>
        </div>
      </section>

      {/* Bloki treści — z naprzemiennym tłem dla rytmu */}
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
            {rozwiazanie.faq.map((item) => (
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
            <h2 className="sectionTitle">Dobierzemy rozwiązanie do wnętrza</h2>
            <p>{finalCta.text}</p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button
              href={whatsappUrl(
                `Dzień dobry, interesuje mnie rozwiązanie: ${rozwiazanie.shortTitle}. Chcę umówić bezpłatny pomiar.`
              )}
              variant="secondary"
            >
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Powiązane rozwiązania */}
      {relatedLinks.length > 0 ? (
        <section className="section sectionAlt">
          <div className="container">
            <SectionHeader eyebrow="Powiązane" title="Powiązane rozwiązania" />
            <div className="grid3 sectionCards">
              {relatedLinks.map((link) => (
                <Link className="card miniCard" href={link.href} key={link.href}>
                  <h3>{link.title}</h3>
                  <p>Zobacz rozwiązanie →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
