import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageFaqs } from "@/content/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Najczęstsze pytania o sufity napinane",
  description:
    "FAQ EkoSufity: cena, pomiar, dojazd, gwarancja, LED, WhatsApp i status wizualizacji."
};

// Dodatkowe pytania tylko dla strony FAQ (nie ruszamy wspólnego homepageFaqs,
// żeby nie zmieniać sekcji FAQ na stronie głównej).
const extraFaqs = [
  {
    question: "Czy rodzaj materiału wpływa na cenę?",
    answer:
      "Tak. Folia matowa jest najtańsza, a warianty satynowe i błyszczące są nieco droższe. Materiał dobieramy pod pomieszczenie i efekt."
  },
  {
    question: "Czy wymagana jest zaliczka?",
    answer:
      "Tak, przy zamówieniu pobieramy zaliczkę — zwykle 50%. Sufit produkowany jest na indywidualny wymiar, dlatego zaliczka pokrywa koszt materiału."
  },
  {
    question: "Jakie są formy płatności?",
    answer: "Akceptujemy gotówkę i przelew — do wyboru."
  },
  {
    question: "Czy sufit napinany się ugina?",
    answer:
      "Nie. Prawidłowo napięta membrana pozostaje równa. Wytrzymuje też zalanie z góry — zbiera wodę i chroni pomieszczenie."
  },
  {
    question: "Czy sufit napinany można myć?",
    answer:
      "Tak. Wystarczy woda lub łagodny detergent. Powierzchnia nie wymaga malowania ani odnawiania."
  },
  {
    question: "Czy nadaje się do łazienki i kuchni?",
    answer:
      "Tak. Membrana nie chłonie wody i sprawdza się w pomieszczeniach wilgotnych oraz nad strefą gotowania."
  },
  {
    question: "Ile miejsca zabiera sufit napinany?",
    answer:
      "Zwykle wystarczy obniżenie od 3 cm. Przy oświetleniu LED lub karniszu potrzeba nieco więcej miejsca."
  }
];

const pageFaqs = [...homepageFaqs, ...extraFaqs];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "FAQ", href: "/faq" }]), faqSchema(pageFaqs)]} />

      <section className="pageHero">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
          <span className="eyebrow">FAQ</span>
          <h1>Najczęstsze pytania o sufity napinane</h1>
          <p className="pageLead">
            Odpowiadamy na najważniejsze pytania o koszt, pomiar, dojazd, gwarancję i kontakt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Pytania przed kontaktem" />
          <div className="faqList">
            {pageFaqs.map((item, index) => (
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
    </>
  );
}
