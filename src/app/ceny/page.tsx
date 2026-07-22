import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

const factors = [
  ["Więcej narożników", "Dokładniejszy pomiar, cięcie i montaż profilu."],
  ["Nietypowy kształt", "Większa złożoność przygotowania i montażu."],
  ["Oświetlenie LED", "Linie, punkty, zasilacze i sterowanie osobno."],
  ["Ukryty karnisz", "Dodatkowe rozwiązanie przy oknie."],
  ["Translucent / podświetlenie", "Dobór materiału i światła do efektu."],
  ["Pomieszczenia wilgotne", "Ocena warunków i właściwy dobór rozwiązania."]
];

// Cena bazowa idzie na kartę ze zdjęciem, reszta pozycji na kafelki obok.
const basePrice = {
  title: "Sufit napinany",
  price: "od 120 zł",
  unit: "/m²",
  note: "Prosty sufit MSD, 4 narożniki, bez dodatków. Dokładna cena po bezpłatnym pomiarze."
};

const addonPrices = [
  ["Linie świetlne LED", "od 250 zł/mb"],
  ["Ukryty karnisz z LED", "od 300 zł/mb"],
  ["Punkt oświetlenia", "od 100 zł/szt"],
  ["System magnetyczny 48 V", "od 300 zł/mb"],
  ["Podświetlenie obwodowe", "od 170 zł/mb"]
];

const priceExamples = [
  ["Łazienka 6 m²", "od 1800 zł", "sufit z linią LED i punktami świetlnymi"],
  ["Kuchnia 10 m²", "od 3000 zł", "sufit z szyną magnetyczną"],
  ["Salon 22 m²", "od 7200 zł", "sufit dwupoziomowy z podświetleniem"],
  ["Mieszkanie 45 m²", "od 9350 zł", "sufit z LED w kilku pomieszczeniach"]
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
              Cena sufitu napinanego zaczyna się od ok. 120 zł/m² dla prostego sufitu MSD w
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
          />
          <div className="priceFactorList">
            {factors.map(([title, copy]) => (
              <article className="priceFactor" key={title}>
                <span className="priceFactorMark" aria-hidden="true">
                  +
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
            lead="Orientacyjne koszty typowych realizacji z oświetleniem i dodatkami. Sam sufit liczymy od 120 zł/m² — dokładną cenę podajemy po pomiarze."
          />
          <div className="grid4 sectionCards">
            {priceExamples.map(([title, price, desc]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <strong className="examplePrice">{price}</strong>
                <p>{desc}</p>
              </article>
            ))}
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
              {faqs.map((item, index) => (
                <details className="faqItem" key={item.question} open={index === 0}>
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

      <section className="section finalCtaSection sectionAlt">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Chcesz znać dokładną cenę?</h2>
            <p>
              Wyślij zdjęcie pomieszczenia i metraż albo umów bezpłatny pomiar. Warianty LED,
              karniszy i rodzaje sufitów znajdziesz w{" "}
              <Link href="/rozwiazania" className="inlineLink">
                rozwiązaniach
              </Link>
              .
            </p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button
              href={whatsappUrl("Dzień dobry, chcę poznać dokładną cenę sufitu napinanego.")}
              variant="secondary"
            >
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      <FinalContactSection />
    </>
  );
}
