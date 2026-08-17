import type { Metadata } from "next";
import Image from "next/image";
import { seoMeta } from "@/lib/seo/metadata";
import { Kalkulator } from "@/components/ceny/Kalkulator";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { SocialBanner } from "@/components/home/SocialBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane cena - od czego zależy koszt?",
  description:
    "Cena sufitu napinanego średnio ok. 120 zł/m² dla prostego sufitu MSD: prostokąt, 4 narożniki, bez dodatków. Dokładna wycena po bezpłatnym pomiarze.",
  ...seoMeta("/ceny")
};

// Ikony czynników ceny — jedna rodzina: kontur, ta sama grubość linii,
// bez wypełnienia. Rysowane w viewBox 24x24.
const factorIcons = {
  narozniki: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  ksztalt: <path d="M12 3 21 9v6l-9 6-9-6V9z" />,
  led: <path d="M4 8h16M4 12h16M4 16h10" />,
  karnisz: <path d="M3 5h18M6 5v14M18 5v14M9 5v9M15 5v9" />,
  swiatlo: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </>
  ),
  wilgoc: <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z" />
} as const;

const factors: Array<[keyof typeof factorIcons, string, string]> = [
  ["narozniki", "Więcej narożników", "Dokładniejszy pomiar, cięcie i montaż profilu."],
  ["ksztalt", "Nietypowy kształt", "Większa złożoność przygotowania i montażu."],
  ["led", "Oświetlenie LED", "Linie, punkty, zasilacze i sterowanie osobno."],
  ["karnisz", "Ukryty karnisz", "Dodatkowe rozwiązanie przy oknie."],
  ["swiatlo", "Translucent / podświetlenie", "Dobór materiału i światła do efektu."],
  ["wilgoc", "Pomieszczenia wilgotne", "Ocena warunków i właściwy dobór rozwiązania."]
];

// Cena bazowa idzie na kartę ze zdjęciem, reszta pozycji na kafelki obok.
const basePrice = {
  title: "Sufit napinany",
  price: "średnio 120 zł",
  unit: "/m²",
  note: "Prosty sufit MSD, 4 narożniki, bez dodatków. Dokładna cena po bezpłatnym pomiarze."
};

const addonPrices = [
  ["Linie świetlne LED", "od 250 zł/mb"],
  ["Ukryty karnisz z LED", "od 300 zł/mb"],
  ["Punkt oświetlenia", "od 100 zł/szt"],
  ["System magnetyczny 48 V", "od 300 zł/mb"],
  ["Podświetlenie obwodowe", "od 170 zł/mb"],
  ["Sufit dwupoziomowy z LED", "od 290 zł/mb"],
  ["Sufit translucent (podświetlany)", "od 250 zł/m²"],
  ["Sufit z nadrukiem", "od 200 zł/m²"],
  ["Sufit z efektem cienia", "od 120 zł/m²"],
  ["Gwiazdne niebo", "od 550 zł/m²"]
];

// Salon idzie na duże zdjęcie po lewej, reszta na wąskie wiersze obok.
const priceExampleFeature = {
  title: "Salon 22 m²",
  price: "7200 zł",
  desc: "sufit dwupoziomowy z podświetleniem i oprawami punktowymi",
  imageSrc: "/images/salon-22m2-photo.png"
};

const priceExamples = [
  {
    title: "Łazienka 6 m²",
    price: "1800 zł",
    desc: "linia LED, cztery punkty świetlne i rewizja wentylacyjna",
    imageSrc: "/images/lazienka-6m2-photo.png"
  },
  {
    title: "Kuchnia 10 m²",
    price: "3000 zł",
    desc: "sufit napinany z szyną magnetyczną",
    imageSrc: "/images/kuchnia-10m2-photo.png"
  },
  {
    title: "Mieszkanie 45 m²",
    price: "9350 zł",
    desc: "kilka pomieszczeń z liniami LED, wspólny projekt oświetlenia",
    imageSrc: "/images/mieszkanie-45m2-led-photo.png"
  }
];

const faqs = [
  {
    question: "Czy 120 zł/m² to cena każdego sufitu?",
    answer:
      "Nie. To orientacyjna średnia cena dla prostego sufitu MSD: prostokąt, 4 narożniki, bez dodatków."
  },
  {
    question: "Czy LED jest w cenie bazowej?",
    answer: "Nie. Oświetlenie LED jest dodatkowym zakresem i wyceniamy je osobno."
  },
  {
    question: "Czy pomiar do wyceny jest płatny?",
    answer: "Nie. Pomiar jest bezpłatny."
  },
  {
    question: "Czy mogę dostać wycenę przez WhatsApp?",
    answer:
      "Możesz wysłać zdjęcie i metraż przez WhatsApp. Dokładną cenę potwierdzamy po pomiarze."
  },
  {
    question: "Od czego zależy finalna cena?",
    answer:
      "Od powierzchni, liczby narożników, rodzaju materiału, oświetlenia i nietypowych przejść. Dokładną cenę podajemy po bezpłatnym pomiarze."
  },
  {
    question: "Czy dajecie wycenę na piśmie?",
    answer: "Tak. Po pomiarze podajemy konkretną wycenę z rozbiciem na sufit i dodatki."
  },
  {
    question: "Czy jest minimalne zamówienie?",
    answer:
      "Tak, minimalne zamówienie to 1200 zł. Przy małych pomieszczeniach cena końcowa może być równa tej kwocie."
  }
];

export default function PricesPage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/ceny"), breadcrumbSchema([{ label: "Ceny", href: "/ceny" }]), faqSchema(faqs)]} />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Ceny", href: "/ceny" }]} />
            <span className="eyebrow">Cena i wycena</span>
            <h1>Sufity napinane cena — od czego zależy koszt?</h1>
            <p className="pageLead">
              Cena sufitu napinanego to średnio ok. 120 zł/m² dla prostego sufitu MSD w
              prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów. Dokładną cenę
              podajemy po bezpłatnym pomiarze.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, chcę zapytać o wycenę sufitu napinanego.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          {/* Trzeci wariant pary zdjęć — mniejsze wychodzi w lewo u góry. */}
          <div className="pageHeroPhotos pageHeroPhotos--topLeft">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/kuchnia-10m2-photo.png"
                alt="Sufit napinany w kuchni z oświetleniem LED"
                width={900}
                height={675}
                priority
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/lazienka-6m2-photo.png"
                alt="Sufit napinany w łazience"
                width={400}
                height={400}
                sizes="(max-width: 900px) 52vw, 235px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Cennik"
            title="Podstawowe ceny"
            lead="Ceny orientacyjne. Dokładną wycenę podajemy po bezpłatnym pomiarze."
          />
          <div className="priceDeck">
            <article className="priceBaseCard">
              <Image
                src="/images/salon-22m2-photo.png"
                alt=""
                width={640}
                height={800}
                sizes="(max-width: 900px) 100vw, 420px"
              />
              <span className="priceBaseScrim" aria-hidden="true" />
              <div className="priceBaseCopy">
                <span className="priceBaseKicker">Cena bazowa</span>
                <h3>{basePrice.title}</h3>
                <p>{basePrice.note}</p>
              </div>
              <strong className="priceBaseValue">
                {basePrice.price}
                <span>{basePrice.unit}</span>
              </strong>
            </article>
            <div className="priceChips">
              {addonPrices.map(([position, price]) => (
                <div className="priceChip" key={position}>
                  <span>{position}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Zakres"
            title="Co zwiększa cenę?"
            lead="Nie ukrywamy, że cena zależy od złożoności — pokazujemy orientacyjną średnią z warunkami, a dokładną wycenę robimy po pomiarze."
            leadClassName="sectionLead--full"
          />
          <div className="priceFactorList">
            {factors.map(([icon, title, copy]) => (
              <article className="priceFactor" key={title}>
                <span className="priceFactorMark" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {factorIcons[icon]}
                  </svg>
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kalkulator">
        <div className="container">
          <Kalkulator />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Przykłady"
            title="Ile kosztują typowe realizacje?"
            lead="Koszty czterech naszych realizacji z oświetleniem i dodatkami. Sam sufit liczymy średnio ok. 120 zł/m² — dokładną cenę Twojego pomieszczenia podajemy po pomiarze."
            leadClassName="sectionLead--full"
          />
          <div className="exampleDeck sectionCards">
            <article className="exampleFeature">
              <Image
                src={priceExampleFeature.imageSrc}
                alt=""
                width={900}
                height={700}
                sizes="(max-width: 900px) 100vw, 620px"
              />
              <span className="exampleFeatureScrim" aria-hidden="true" />
              <div className="exampleFeatureCopy">
                <h3>{priceExampleFeature.title}</h3>
                <strong className="examplePrice">{priceExampleFeature.price}</strong>
                <p>{priceExampleFeature.desc}</p>
              </div>
            </article>

            <div className="exampleList">
              {priceExamples.map((item) => (
                <article className="exampleRow" key={item.title}>
                  <div className="exampleRowImg">
                    <Image src={item.imageSrc} alt="" width={320} height={320} sizes="130px" />
                  </div>
                  <div className="exampleRowBody">
                    <h3>{item.title}</h3>
                    <strong className="examplePrice">{item.price}</strong>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <div className="faqWrap">
            <aside className="faqAside">
              <span className="eyebrow">FAQ</span>
              <h2 className="sectionTitle">Pytania o cenę sufitu napinanego</h2>
              <p className="sectionLead">
                Krótko wyjaśniamy z czego składa się cena i jak liczymy wycenę.
              </p>
              <div className="faqNoAnswer">
                <p className="faqNoAnswerTitle">Nie znalazłeś odpowiedzi?</p>
                <p>Zadzwoń albo umów bezpłatny pomiar — podamy dokładną cenę.</p>
                <Button href="/kontakt">Umów pomiar</Button>
              </div>
            </aside>
            <div className="faqList faqListSingle">
              {faqs.map((item) => (
                <details className="faqItem" key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      <FinalContactSection alt={false} />
    </>
  );
}
