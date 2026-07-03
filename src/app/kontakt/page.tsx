import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cities } from "@/content/cities";
import { siteConfig, socialLinks, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Kontakt - bezpłatny pomiar i wycena",
  description:
    "Skontaktuj się z EkoSufity. Telefon, WhatsApp i e-mail. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, obsługa PL/BY/RU/UA."
};

// Te same ikony co w stopce (footer-social), w kolejności dla tej strony.
const socialOrder = ["Instagram", "Facebook", "TikTok", "YouTube"] as const;
const contactSocials = socialOrder
  .map((label) => socialLinks.find((item) => item.label === label))
  .filter((item): item is (typeof socialLinks)[number] => Boolean(item));

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Kontakt", href: "/kontakt" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
            <span className="eyebrow">Kontakt</span>
            <h1>Kontakt - bezpłatny pomiar i wycena</h1>
            <p className="pageLead">
              Najszybciej skontaktujesz się telefonicznie albo przez WhatsApp. Możesz wysłać zdjęcie
              pomieszczenia, miasto i orientacyjny metraż.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl()} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>

          <div className="contactPanel">
            <div className="contactLine">
              <span>Telefon</span>
              <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>
            </div>
            <div className="contactLine">
              <span>WhatsApp</span>
              <Link href={whatsappUrl()}>Napisz wiadomość</Link>
            </div>
            <div className="contactLine">
              <span>E-mail</span>
              <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>
            </div>
            <div className="contactLine">
              <span>Godziny</span>
              <span>{siteConfig.contacts.hours}</span>
            </div>
            <div className="contactPanelSocial">
              <span className="contactPanelSocialLabel">Social media</span>
              <div className="contactPanelSocialRow">
                {contactSocials.map((item) => (
                  <Link
                    key={item.href}
                    className="contactPanelSocialIcon"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} EkoSufity`}
                  >
                    <Image src={item.iconSrc} alt="" width={22} height={22} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container grid3">
          <article className="card miniCard">
            <h3>Obszar działania</h3>
            <p>Wrocław oraz miejscowości do 100 km od miasta, Dolny Śląsk.</p>
          </article>
          <article className="card miniCard">
            <h3>Języki obsługi</h3>
            <p>Polski, białoruski, rosyjski i ukraiński.</p>
          </article>
          <article className="card miniCard">
            <h3>Dane firmy</h3>
            <p>EkoSufity, Wrocław</p>
            <p>NIP: 8943174798</p>
          </article>
        </div>
      </section>

      <GoogleReviews />

      <section className="section sectionAlt" id="lokalizacje">
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

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Przed rozmową"
            title="Co warto przygotować?"
            lead="Nie musisz znać technologii. Wystarczy kilka podstawowych informacji."
          />
          <div className="grid4" style={{ marginTop: 34 }}>
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
    </>
  );
}
