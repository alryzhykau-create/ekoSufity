import Link from "next/link";
import { PlaceholderImage } from "@/components/rozwiazania/PlaceholderImage";
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

      {/* 1. Hero */}
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
            <PlaceholderImage slot={rozwiazanie.heroImage} ratio="900 / 680" />
            <p className="softLabel">
              {rozwiazanie.heroImage.caption ?? "przykładowy efekt"}. Ostateczny wygląd zależy od
              pomieszczenia i ustalonego zakresu.
            </p>
          </aside>
        </div>
      </section>

      {/* 2. Co to jest */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="O rozwiązaniu" title="Co to jest" />
          <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
            {rozwiazanie.whatIs}
          </p>
        </div>
      </section>

      {/* 3. Co możemy zaplanować */}
      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Zakres"
            title="Co możemy zaplanować"
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
      </section>

      {/* 4. Cena zależy od zakresu */}
      {rozwiazanie.priceFactors ? (
        <section className="section">
          <div className="container pricePanel">
            <div>
              <SectionHeader eyebrow="Wycena" title="Cena zależy od zakresu" lead={rozwiazanie.priceCopy} />
              <p className="softLabel" style={{ marginTop: 16 }}>
                Punktem odniesienia jest sam sufit od 120 zł/m² — orientacyjny koszt można policzyć w{" "}
                <Link href="/ceny#kalkulator" style={{ color: "var(--accent)" }}>
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
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="Wycena" title="Cena zależy od zakresu" lead={rozwiazanie.priceCopy} />
            <p className="softLabel" style={{ marginTop: 16, maxWidth: 760 }}>
              Punktem odniesienia jest sam sufit od 120 zł/m² — orientacyjny koszt można policzyć w{" "}
              <Link href="/ceny#kalkulator" style={{ color: "var(--accent)" }}>
                kalkulatorze
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      {/* 5. Dlaczego warto */}
      <section className="section sectionAlt">
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
      </section>

      {/* 6. FAQ */}
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

      {/* 8. CTA */}
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

      {/* 9. Powiązane rozwiązania */}
      {relatedLinks.length > 0 ? (
        <section className="section">
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
