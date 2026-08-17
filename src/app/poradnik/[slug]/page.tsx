import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { StickyToc } from "@/components/ui/StickyToc";
import { artykuly, znajdzArtykul } from "@/content/poradnik";
import { siteConfig } from "@/content/site";
import { parseArticle } from "@/lib/poradnik/markdown";
import { seoMeta } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

type PageProps = { params: Promise<{ slug: string }> };

// Treść czytamy z pliku .md w czasie budowania — plik jest źródłem prawdy,
// więc tekst na stronie nie może rozjechać się z tym, co dostarczył autor.
function wczytaj(plik: string) {
  const sciezka = path.join(process.cwd(), "src/content/poradnik", plik);
  return parseArticle(readFileSync(sciezka, "utf8"));
}

export function generateStaticParams() {
  return artykuly.map((artykul) => ({ slug: artykul.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artykul = znajdzArtykul(slug);

  if (!artykul) {
    return {};
  }

  return {
    title: artykul.metaTitle,
    description: artykul.metaDescription,
    ...seoMeta(`/poradnik/${artykul.slug}`)
  };
}

export default async function ArtykulPage({ params }: PageProps) {
  const { slug } = await params;
  const artykul = znajdzArtykul(slug);

  if (!artykul) {
    notFound();
  }

  const { title, shortAnswer, body, toc, faq, readingMinutes } = wczytaj(artykul.plik);
  const inne = artykuly.filter((item) => item.slug !== artykul.slug).slice(0, 3);
  const dataOpisowa = new Date(artykul.dateModified).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // Plansza z telefonem wchodzi w połowie tekstu, tuż przed nagłówkiem H2 —
  // dzięki temu nigdy nie rozcina akapitu ani tabeli.
  const naglowekPoPolowie = toc[Math.ceil(toc.length / 2)]?.id;
  const indeksCta = naglowekPoPolowie
    ? body.findIndex((blok) => blok.h2Id === naglowekPoPolowie)
    : -1;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: `/poradnik/${artykul.slug}`,
            headline: title,
            description: artykul.metaDescription,
            image: artykul.imageSrc,
            datePublished: artykul.datePublished,
            dateModified: artykul.dateModified
          }),
          breadcrumbSchema([
            { label: "Poradnik", href: "/poradnik" },
            { label: artykul.cardTitle, href: `/poradnik/${artykul.slug}` }
          ]),
          ...(faq.length ? [faqSchema(faq)] : [])
        ]}
      />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs
              items={[
                { label: "Poradnik", href: "/poradnik" },
                { label: artykul.cardTitle, href: `/poradnik/${artykul.slug}` }
              ]}
            />
            <span className="eyebrow">Poradnik</span>
            <h1>{title}</h1>
            <p className="artykulMeta">
              <strong>Aleks</strong>
              <span aria-hidden="true">·</span>
              <span>Aktualizacja: {dataOpisowa}</span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes} min czytania</span>
            </p>
          </div>
          <div className="card artykulHeroPhoto">
            <Image
              src={artykul.imageSrc}
              alt={artykul.imageAlt}
              width={900}
              height={620}
              priority
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="artykulShort">
            <span className="artykulShortLabel">W skrócie</span>
            {shortAnswer}
          </div>

          {/* Spis treści stoi nad tekstem, żeby czytelnik zobaczył plan artykułu
              zanim zacznie czytać — a tekst i tabele biorą pełną szerokość. */}
          <div className="artykulToc">
            <StickyToc items={toc} layout="split" />
          </div>

          <div className="artykulProse">
              {body.map((blok, i) => (
                <div className="artykulBlok" key={`blok-${i}`}>
                  {i === indeksCta ? (
                    <aside className="artykulCta">
                      <div>
                        <p className="artykulCtaTitle">Chcesz dokładną wycenę?</p>
                        <p>Pomiar i dojazd są bezpłatne w promieniu do 100 km od Wrocławia.</p>
                        {/* Jedyne wyjście z artykułu na cennik — stoi tam, gdzie
                            czytelnik i tak myśli o pieniądzach. */}
                        <Link className="inlineLink artykulCtaLink" href="/ceny">
                          Zobacz cennik →
                        </Link>
                      </div>
                      <a className="btn btnPrimary" href={siteConfig.contacts.phoneHref}>
                        <CtaIcon name="phone" />
                        {siteConfig.contacts.phoneDisplay}
                      </a>
                    </aside>
                  ) : null}
                  {blok.node}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="card artykulAuthor">
            <Image
              src="/images/aleks-ekosufity-v2.webp"
              alt="Aleks, EkoSufity"
              width={240}
              height={240}
              sizes="120px"
            />
            <div>
              <p className="artykulAuthorName">Aleks</p>
              <p>EkoSufity — montaż sufitów napinanych we Wrocławiu od 2020 roku.</p>
              <Link className="inlineLink" href="/o-firmie">
                Poznaj firmę →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Nagłówek z wyjściem do całego działu: czytelnik skończył artykuł,
              więc obok propozycji sąsiednich pokazujemy też cały Poradnik. */}
          <div className="sectionSplitHeader">
            <h2 className="sectionTitle">Przeczytaj też</h2>
            <Link className="sectionArrowLink" href="/poradnik">
              Wszystkie artykuły
            </Link>
          </div>
          <div className="grid3 sectionCards">
            {inne.map((item) => (
              <Link className="card miniCard" href={`/poradnik/${item.slug}`} key={item.slug}>
                <div className="miniCardImg poradnikCardImg">
                  <Image
                    src={item.imageSrc}
                    alt=""
                    width={480}
                    height={320}
                    sizes="(max-width: 900px) 100vw, 400px"
                  />
                </div>
                <h3>{item.cardTitle}</h3>
                <p>{item.cardCopy}</p>
                <p className="cardArrowText">Czytaj →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalContactSection alt />
    </>
  );
}
