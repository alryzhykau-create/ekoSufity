import type { Metadata } from "next";
import { Kalkulator } from "@/components/ceny/Kalkulator";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane cena - od czego zależy koszt?",
  description:
    "Cena sufitu napinanego średnio ok. 120 zł/m² dla prostego sufitu MSD: prostokąt, 4 narożniki, bez dodatków. Dokładna wycena po bezpłatnym pomiarze."
};

const factors = [
  ["Większa liczba narożników", "Wymaga dokładniejszego pomiaru, cięcia i montażu profilu."],
  ["Nietypowy kształt pomieszczenia", "Zwiększa złożoność przygotowania i montażu."],
  ["Oświetlenie LED", "Linie świetlne, punkty, zasilacze i sterowanie są dodatkowym zakresem."],
  ["Ukryty karnisz", "Wymaga dodatkowego rozwiązania przy oknie."],
  ["Translucent / podświetlenie", "Wymaga dobrania materiału i światła do efektu."],
  ["Pomieszczenia wilgotne", "Wymagają oceny warunków i właściwego doboru rozwiązania."]
];

const basePrices = [
  ["Sufit napinany", "od 120 zł/m²"],
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
          <div>
            <Breadcrumbs items={[{ label: "Ceny", href: "/ceny" }]} />
            <span className="eyebrow">Cena i wycena</span>
            <h1>Sufity napinane cena - od czego zależy koszt?</h1>
            <p className="pageLead">
              Cena sufitu napinanego zależy od metrażu, liczby narożników, materiału i dodatków —
              takich jak LED czy ukryty karnisz. Orientacyjne stawki są w cenniku niżej, a dokładną
              cenę podajemy po bezpłatnym pomiarze.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl("Dzień dobry, chcę zapytać o wycenę sufitu napinanego.")} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card priceCard">
            <span className="softLabel">Cena orientacyjna</span>
            <div className="priceValue">średnio ok. 120 zł/m²</div>
            <p>
              Sufit MSD, zwykły prostokąt, 4 narożniki, bez oświetlenia LED, karniszy, dodatkowych
              profili i nietypowych przejść. Końcowa cena zależy od wybranego materiału.
            </p>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Cennik"
            title="Podstawowe ceny"
            lead="Ceny orientacyjne. Dokładną wycenę podajemy po bezpłatnym pomiarze."
          />
          <div className="comparisonScroll">
            <table className="comparisonTable comparisonTable--compact">
              <thead>
                <tr>
                  <th>Pozycja</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {basePrices.map(([position, price]) => (
                  <tr key={position}>
                    <th scope="row">{position}</th>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Zakres"
            title="Co zwiększa cenę?"
            lead="Nie ukrywamy, że cena zależy od złożoności. Dlatego pokazujemy orientacyjną średnią z warunkami, a dokładną wycenę robimy po pomiarze."
          />
          <div className="grid3" style={{ marginTop: 34 }}>
            {factors.map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="kalkulator">
        <div className="container">
          <Kalkulator />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Przykłady"
            title="Ile kosztują typowe realizacje?"
            lead="Poniżej orientacyjne koszty typowych realizacji z oświetleniem i dodatkami. Sam sufit liczymy od 120 zł/m² — dokładną cenę podajemy po pomiarze."
          />
          <div className="grid4 sectionCards">
            {priceExamples.map(([title, price, desc]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <strong
                  style={{
                    display: "block",
                    margin: "10px 0 4px",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--gold-dark)"
                  }}
                >
                  {price}
                </strong>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Pytania o cenę sufitu napinanego" />
          <div className="faqList">
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
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <article className="card" style={{ borderColor: "var(--accent)" }}>
            <SectionHeader
              eyebrow="Rozwiązania"
              title="Chcesz poznać warianty — LED, karnisze, rodzaje sufitów?"
              lead="W rozwiązaniach tłumaczymy plusy, minusy i niuanse każdego wariantu."
            />
            <div className="buttonRow" style={{ marginTop: 24 }}>
              <Button href="/rozwiazania">Zobacz rozwiązania</Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
