import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { SocialBanner } from "@/components/home/SocialBanner";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cities } from "@/content/cities";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Kontakt - bezpłatny pomiar i wycena",
  description:
    "Skontaktuj się z EkoSufity. Telefon, WhatsApp i e-mail. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, obsługa PL/BY/RU/UA.",
  ...seoMeta("/kontakt")
};

// Karty kontaktu: duża wartość, podpis i doprecyzowanie pod spodem.
// Trzymamy tu komplet danych — telefon, WhatsApp, e-mail, godziny, języki i NIP.
const contactCards: Array<{
  value: string;
  label: string;
  note: string;
  href?: string;
  external?: boolean;
}> = [
  {
    value: siteConfig.contacts.phoneDisplay,
    label: "Telefon",
    note: "Najszybszy kontakt — dzwoń w godzinach pracy.",
    href: siteConfig.contacts.phoneHref
  },
  {
    value: "WhatsApp",
    label: "Wiadomość",
    note: "Wyślij zdjęcie pomieszczenia i orientacyjny metraż.",
    href: whatsappUrl(),
    external: true
  },
  {
    value: siteConfig.contacts.email,
    label: "E-mail",
    note: "Napisz, jeśli wolisz kontakt pisemny.",
    href: `mailto:${siteConfig.contacts.email}`
  },
  {
    value: "9:00–20:00",
    label: "Godziny",
    note: "Pon.–Pt."
  },
  {
    value: "4 języki",
    label: "Języki obsługi",
    note: "PL, BY, RU, UA"
  },
  {
    value: "NIP 8943174798",
    label: "Dane firmy",
    note: "EkoSufity, Wrocław"
  }
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Kontakt", href: "/kontakt" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
            <span className="eyebrow">Kontakt</span>
            <h1>Kontakt — bezpłatny pomiar i wycena</h1>
            <p className="pageLead">
              Zadzwoń albo napisz na WhatsApp. Ustalimy miasto, rodzaj pomieszczenia, orientacyjny
              metraż i umówimy bezpłatny pomiar.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button className="heroWhatsappCta waHoverFill" href={whatsappUrl()} variant="secondary">
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          {/* Piąty wariant pary zdjęć — wąskie pionowe wychodzi w lewo, w osi. */}
          <div className="pageHeroPhotos pageHeroPhotos--midLeft">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/hero.png"
                alt="Salon z sufitem napinanym i liniowym oświetleniem"
                width={900}
                height={675}
                priority
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/salon-22m2-photo.png"
                alt="Sufit napinany w salonie"
                width={400}
                height={533}
                sizes="(max-width: 900px) 40vw, 180px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="obszar">
        <div className="container">
          <SectionHeader eyebrow="Kontakt" title="Jak się z nami skontaktować" />
          <div className="contactCardGrid">
            {contactCards.map((card) => {
              const body = (
                <>
                  <strong className="contactCardValue">{card.value}</strong>
                  <span className="contactCardLabel">{card.label}</span>
                  <span className="contactCardNote">{card.note}</span>
                </>
              );

              return card.href ? (
                <Link
                  className="contactCard"
                  href={card.href}
                  key={card.label}
                  {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {body}
                </Link>
              ) : (
                <div className="contactCard" key={card.label}>
                  {body}
                </div>
              );
            })}
          </div>
          <p className="contactCompanyNote">
            Obszar działania: Wrocław i okolice do 100 km od miasta, Dolny Śląsk.{" "}
            <Link href="/o-firmie" className="inlineLink">
              Więcej o firmie
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      <section className="section" id="lokalizacje">
        <div className="container">
          <div className="sectionSplitHeader">
            <SectionHeader
              eyebrow="Lokalizacje"
              title="Dojazd do 100 km od Wrocławia"
              lead="Obsługujemy Wrocław i miejscowości do 100 km. Wybierz swoją lokalizację, aby zobaczyć szczegóły montażu w okolicy."
            />
            <Link className="sectionArrowLink" href="/lokalizacje">
              Zobacz wszystkie lokalizacje
            </Link>
          </div>
          <div className="card contactAreaCard">
            <div>
              <h3>Obsługiwane miejscowości</h3>
              <p>
                Bezpłatny pomiar i dojazd obejmują Wrocław oraz miejscowości do 100 km od miasta.
                Przy kontakcie wystarczy podać miejscowość i orientacyjny metraż.
              </p>
              <div className="cityPillGrid">
                {cities.map((city) => (
                  <Link className="cityPill" href={`/lokalizacje/${city.slug}`} key={city.slug}>
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="contactMap">
              <Image
                src="/images/mapa-dzialamy-do-100-km.png"
                alt="Mapa obszaru działania EkoSufity do 100 km od Wrocławia"
                width={420}
                height={420}
                sizes="(max-width: 900px) 80vw, 280px"
              />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews alt />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Przed rozmową"
            title="Co warto przygotować?"
            lead="Nie musisz znać technologii. Wystarczy kilka podstawowych informacji."
          />
          <div className="grid4 sectionCards">
            {[
              ["Miasto", "Ustalimy dojazd i możliwy termin pomiaru."],
              ["Przybliżony metraż", "Pozwala wstępnie oszacować zakres prac."],
              ["Zdjęcie pomieszczenia", "Widać kształt, narożniki i sytuację w pokoju."],
              ["Oświetlenie LED", "Światło wyceniamy jako osobny zakres."]
            ].map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalContactSection />
    </>
  );
}
