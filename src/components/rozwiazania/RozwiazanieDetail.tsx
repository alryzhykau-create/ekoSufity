import Link from "next/link";
import { PlaceholderImage } from "@/components/rozwiazania/PlaceholderImage";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  finalCta,
  getSolutionLink,
  processSteps,
  whyEkoSufity,
  type Rozwiazanie
} from "@/content/rozwiazania";
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
              <Button href={siteConfig.contacts.phoneHref}>Umów pomiar</Button>
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

      {/* 3. Blok centralny */}
      {rozwiazanie.type === "A" && rozwiazanie.componentGroups ? (
        <section className="section sectionAlt">
          <div className="container">
            <SectionHeader
              eyebrow="Warianty"
              title={rozwiazanie.centralTitle ?? "Co można zamontować"}
              lead="Konkretny zestaw dobieramy po obejrzeniu pomieszczenia i ustaleniu efektu."
            />
            {rozwiazanie.componentGroups.map((group, index) => (
              <div
                className="grid2"
                key={group.title ?? `group-${index}`}
                style={{ marginTop: 30, alignItems: "start" }}
              >
                {group.image ? <PlaceholderImage slot={group.image} ratio="4 / 3" /> : null}
                <div>
                  {group.title ? <h3 className="sectionTitle" style={{ fontSize: "1.3rem" }}>{group.title}</h3> : null}
                  <div className="factorList" style={{ marginTop: group.title ? 16 : 0 }}>
                    {group.items.map((item) => (
                      <div className="factor" key={item.name}>
                        <span className="check">✓</span>
                        <span>
                          <strong>{item.name}</strong>
                          {item.desc ? ` — ${item.desc}` : null}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {rozwiazanie.type === "B" && rozwiazanie.gallery ? (
        <section className="section sectionAlt">
          <div className="container">
            <SectionHeader
              eyebrow="Realizacje"
              title="Jak to wygląda"
              lead="Materiały to wizualizacje przykładowych efektów, nie zdjęcia konkretnej realizacji."
            />
            <div className="grid3 sectionCards">
              {rozwiazanie.gallery.map((slot) => (
                <figure className="card" key={slot.src} style={{ margin: 0 }}>
                  <PlaceholderImage slot={slot} ratio="4 / 3" />
                  <figcaption style={{ marginTop: 12, fontWeight: 700 }}>{slot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. Blok uzupełniający */}
      {rozwiazanie.type === "A" && rozwiazanie.howItLooks ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Realizacje"
              title="Jak wygląda"
              lead="Materiały to wizualizacje przykładowych efektów, nie zdjęcia konkretnej realizacji."
            />
            <div className="grid2 sectionCards">
              {rozwiazanie.howItLooks.map((slot) => (
                <PlaceholderImage slot={slot} ratio="4 / 3" key={slot.src} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {rozwiazanie.type === "B" && rozwiazanie.variants ? (
        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="Warianty" title="Warianty do wyboru" />
            <div className="grid3 sectionCards">
              {rozwiazanie.variants.map((variant) => (
                <article className="card miniCard" key={variant}>
                  <h3>{variant}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. Cena zależy od zakresu */}
      {rozwiazanie.priceFactors ? (
        <section className="section sectionAlt">
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
        <section className="section sectionAlt">
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

      {/* 6. Dlaczego EkoSufity (wspólny) */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={whyEkoSufity.eyebrow} title="Dlaczego warto wybrać EkoSufity" />
          <div className="card" style={{ marginTop: 28 }}>
            <div className="factorList">
              {whyEkoSufity.points.map((point) => (
                <div className="factor" key={point}>
                  <span className="check">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="buttonRow" style={{ marginTop: 22 }}>
              {whyEkoSufity.links.map((link) => (
                <Link
                  key={link.href}
                  className="sectionArrowLink"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Proces (wspólny) */}
      <section className="section processSection">
        <div className="container">
          <div className="centerHeader">
            <SectionHeader eyebrow="Proces" title="Jak wygląda współpraca?" />
          </div>
          <div className="processPanel">
            <div className="stepList">
              {processSteps.map((step, index) => (
                <article className="card miniCard" key={step}>
                  <span className="stepNumber">{index + 1}</span>
                  <h3>{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
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

      {/* 9. CTA + Powiązane rozwiązania */}
      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Dobierzemy rozwiązanie do wnętrza</h2>
            <p>{finalCta.text}</p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Umów pomiar</Button>
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
