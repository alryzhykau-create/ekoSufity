import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

const aboutDescription =
  "O EkoSufity: osobisty kontakt i montaż sufitów napinanych we Wrocławiu od 2020 roku. Obsługa po polsku, białorusku, rosyjsku i ukraińsku.";

const aboutSeo = seoMeta("/o-firmie");

export const metadata: Metadata = {
  title: "O EkoSufity",
  description: aboutDescription,
  ...aboutSeo,
  openGraph: { ...aboutSeo.openGraph, description: aboutDescription },
  twitter: { description: aboutDescription }
};

const principles = [
  [
    "Osobisty kontakt",
    "Telefon i WhatsApp bez pośredników — rozmawiasz z osobą, która odpowiada za montaż."
  ],
  [
    "Wycena po pomiarze",
    "Cena zależy od metrażu, narożników, LED i detali. Podajemy ją po bezpłatnym pomiarze, z rozbiciem na zakresy."
  ],
  [
    "Doradztwo bez presji",
    "Mówimy, co ma sens w Twoim wnętrzu, a co nie. Decyzję podejmujesz spokojnie."
  ]
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "O firmie", href: "/o-firmie" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "O firmie", href: "/o-firmie" }]} />
            <span className="eyebrow">Poznaj nas</span>
            <h1>O EkoSufity</h1>
            <p className="pageLead">{siteConfig.owner.description}</p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl()} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <Image
              src="/images/aleks-ekosufity-v2.webp"
              alt="Aleks — specjalista EkoSufity"
              width={900}
              height={900}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <p className="softLabel">
              <strong>Aleks</strong> — osobiście odpowiadam za jakość Twojego sufitu.
            </p>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Zasady pracy"
            title="Spokojne doradztwo, dokładny pomiar, jasne ustalenia"
            lead="Bez ukrytych kosztów i presji — cenę i zakres ustalamy jasno, po bezpłatnym pomiarze."
          />
          <div className="aboutPrinciples">
            {principles.map(([title, copy]) => (
              <article className="aboutPrinciple" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Konkrety" title="EkoSufity w pigułce" />
          <dl className="factRows">
            <div className="factRow">
              <dt>Na rynku</dt>
              <dd>Od 2020 roku montujemy sufity napinane we Wrocławiu i okolicy.</dd>
            </div>
            <div className="factRow">
              <dt>Obszar działania</dt>
              <dd>Wrocław i miejscowości do 100 km od miasta — pomiar i dojazd gratis.</dd>
            </div>
            <div className="factRow">
              <dt>Gwarancja</dt>
              <dd>{siteConfig.offerFacts.warranty}</dd>
            </div>
            <div className="factRow">
              <dt>Języki obsługi</dt>
              <dd>{siteConfig.languages.join(", ")}.</dd>
            </div>
            <div className="factRow">
              <dt>Kontakt</dt>
              <dd>
                <Link href={siteConfig.contacts.phoneHref} className="inlineLink">
                  {siteConfig.contacts.phoneDisplay}
                </Link>{" "}
                ·{" "}
                <Link href={whatsappUrl()} className="inlineLink">
                  WhatsApp
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section finalCtaSection sectionAlt">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Porozmawiajmy o Twoim suficie</h2>
            <p>
              Wyślij zdjęcie pomieszczenia, miasto i orientacyjny metraż albo po prostu zadzwoń —
              doradzimy konkretnie.
            </p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button href={whatsappUrl()} variant="secondary">
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
