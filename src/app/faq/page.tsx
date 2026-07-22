import type { Metadata } from "next";
import Image from "next/image";
import { seoMeta } from "@/lib/seo/metadata";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { SocialBanner } from "@/components/home/SocialBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { FaqTabs } from "@/components/ui/FaqTabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageFaqs } from "@/content/faqs";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Najczęstsze pytania o sufity napinane",
  description:
    "FAQ EkoSufity: cena, pomiar, dojazd, gwarancja, LED, WhatsApp i status wizualizacji.",
  ...seoMeta("/faq")
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

const faqCategories = [
  { key: "cena", label: "Cena i wycena" },
  { key: "montaz", label: "Montaż i gwarancja" },
  { key: "material", label: "Materiał i LED" }
];

// Kategoria per pytanie — tylko do zakładek. Treści zostają bez zmian,
// dlatego przypisujemy je po tekście pytania, a nie kopiujemy pytań.
const faqCategoryByQuestion: Record<string, string> = {
  "Ile kosztuje sufit napinany?": "cena",
  "Od czego zależy końcowa wycena?": "cena",
  "Czy rodzaj materiału wpływa na cenę?": "cena",
  "Czy pomiar i dojazd są bezpłatne?": "cena",
  "Czy wymagana jest zaliczka?": "cena",
  "Jakie są formy płatności?": "cena",
  "Ile trwa montaż i czy trzeba robić remont?": "montaz",
  "Ile miejsca zabiera sufit napinany?": "montaz",
  "Jaka jest gwarancja?": "montaz",
  "Czy LED, punkty i karnisz są w cenie?": "material",
  "Czy sufit napinany się ugina?": "material",
  "Czy sufit napinany można myć?": "material",
  "Czy nadaje się do łazienki i kuchni?": "material"
};

// Kolejność z makiety: pytania pogrupowane kategoriami, żeby lista czytała
// się spójnie także na zakładce „Wszystkie".
const categoryOrder = faqCategories.map((c) => c.key);

const pageFaqs = [...homepageFaqs, ...extraFaqs]
  .map((faq) => ({ ...faq, category: faqCategoryByQuestion[faq.question] ?? "cena" }))
  .sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "FAQ", href: "/faq" }]), faqSchema(pageFaqs)]} />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
            <span className="eyebrow">FAQ</span>
            <h1>Najczęstsze pytania o sufity napinane</h1>
            <p className="pageLead">
              Cena, pomiar, dojazd, gwarancja, LED i montaż — najważniejsze odpowiedzi w jednym
              miejscu.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, mam pytanie o sufity napinane.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <div className="pageHeroPhotos">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/lazienka-6m2-photo.png"
                alt="Sufit napinany w łazience z podświetleniem"
                width={900}
                height={675}
                priority
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/kuchnia-10m2-photo.png"
                alt="Sufit napinany w kuchni"
                width={400}
                height={400}
                sizes="(max-width: 900px) 52vw, 235px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <div className="centerHeader">
            <SectionHeader
              eyebrow="FAQ"
              title="Najczęstsze pytania o sufity napinane"
              lead="Cena, pomiar, dojazd, gwarancja, LED i montaż — najważniejsze odpowiedzi w jednym miejscu."
            />
          </div>
          <FaqTabs items={pageFaqs} categories={faqCategories} />
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
