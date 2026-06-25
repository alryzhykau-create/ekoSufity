import type { Metadata } from "next";
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
              Cena sufitu napinanego wynosi średnio ok. 120 zł/m² dla prostego sufitu MSD w
              prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów. Dokładną cenę
              podajemy po bezpłatnym pomiarze.
            </p>
            <div className="buttonRow">
              <Button href={whatsappUrl("Dzień dobry, chcę zapytać o wycenę sufitu napinanego.")}>
                Zapytaj o wycenę na WhatsApp
              </Button>
              <Button href={siteConfig.contacts.phoneHref} variant="secondary">
                Zadzwoń i umów pomiar
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
        <div className="container pricePanel">
          <div>
            <SectionHeader
              eyebrow="Szybka wycena"
              title="Chcesz orientacyjnie sprawdzić koszt?"
              lead="Wyślij na WhatsApp miasto, przybliżony metraż, zdjęcie pomieszczenia i informację, czy planujesz LED."
            />
            <p>
              Na tej podstawie powiemy, co będzie potrzebne do dokładnej wyceny i umówimy bezpłatny
              pomiar.
            </p>
          </div>
          <div className="card">
            <h3>Co najlepiej wysłać?</h3>
            <div className="factorList">
              {["Miasto", "Przybliżony metraż", "Liczba narożników", "Informacja o LED", "Zdjęcie pomieszczenia"].map(
                (item) => (
                  <div className="factor" key={item}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
            <div className="buttonRow" style={{ marginTop: 24 }}>
              <Button href={whatsappUrl("Dzień dobry, chcę wysłać dane do orientacyjnej wyceny.")}>
                Wyślij dane na WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Pytania o cenę sufitu napinanego" />
          <div className="faqGrid">
            {faqs.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
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
