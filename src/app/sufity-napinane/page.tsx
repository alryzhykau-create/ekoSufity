import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane - rodzaje, efekty i montaż",
  description:
    "Czym są sufity napinane, jakie są rodzaje materiałów i gdzie sprawdzają się najlepiej. Montaż we Wrocławiu i do 100 km od miasta."
};

const ceilingTypes = [
  ["Matowe", "Spokojny, równy efekt do mieszkań, domów i lokali po remoncie."],
  ["Satynowe", "Delikatny połysk bez mocnego odbicia światła."],
  ["Połysk", "Efekt odbicia i wizualnego powiększenia pomieszczenia."],
  ["Translucent", "Materiał do podświetlenia i efektu miękkiego światła."],
  ["Z LED", "Linie świetlne, światło obwodowe, punkty i scenariusze oświetlenia."],
  ["Do stref wilgotnych", "Rozwiązania dobierane do łazienek, basenów i pomieszczeń z wilgocią."]
];

const useCases = [
  ["Szybkie wyrównanie sufitu", "Gdy stary sufit jest nierówny, popękany albo trudny do estetycznego odnowienia."],
  ["Nowe mieszkanie", "Gdy chcesz od razu zaplanować sufit, światło i ukryte karnisze."],
  ["Remont bez ciężkich prac", "Gdy zależy Ci na czystszym procesie niż klasyczne mokre prace."],
  ["Wnętrza komercyjne", "Gdy sufit ma wyglądać schludnie i pasować do charakteru lokalu."]
];

const faqs = [
  {
    question: "Czy sufit napinany nadaje się do mieszkania?",
    answer: "Tak. Najczęściej stosuje się go w salonach, kuchniach, łazienkach, korytarzach i nowych mieszkaniach po odbiorze."
  },
  {
    question: "Czy każdy sufit napinany kosztuje tyle samo?",
    answer:
      "Nie. Cena zależy od materiału, metrażu, liczby narożników, LED, profili i dodatkowych detali. Dla prostego sufitu MSD przyjmujemy średnio ok. 120 zł/m² jako punkt odniesienia."
  },
  {
    question: "Czy można połączyć sufit z oświetleniem?",
    answer: "Tak. Można zaplanować punkty, linie świetlne, światło obwodowe albo materiał translucent."
  }
];

export default function StretchCeilingsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema("/sufity-napinane", "Sufity napinane"),
          breadcrumbSchema([{ label: "Sufity napinane", href: "/sufity-napinane" }]),
          faqSchema(faqs)
        ]}
      />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "Sufity napinane", href: "/sufity-napinane" }]} />
            <span className="eyebrow">Sufity napinane</span>
            <h1>Sufity napinane - rodzaje, efekty i montaż</h1>
            <p className="pageLead">
              Sufit napinany to lekka membrana montowana na profilach, która pozwala uzyskać równą
              powierzchnię sufitu i połączyć ją z oświetleniem LED, liniami świetlnymi albo ukrytym
              karniszem.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl("Dzień dobry, chcę dobrać rodzaj sufitu napinanego.")} variant="secondary">
                Dobierz sufit przez WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <Image
              src={visualAssets[0].src}
              alt={visualAssets[0].alt}
              width={900}
              height={760}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <p className="softLabel">Wizualizacja przykładowego efektu sufitu matowego z linią LED.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Rodzaje"
            title="Najczęściej wybierane rodzaje sufitów napinanych"
            lead="Dobór materiału zależy od pomieszczenia, światła, efektu wizualnego i planowanych dodatków."
          />
          <div className="grid3 sectionCards">
            {ceilingTypes.map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Zastosowanie"
            title="Kiedy sufit napinany ma największy sens?"
            lead="To rozwiązanie jest szczególnie praktyczne tam, gdzie liczy się estetyka, czysty efekt i możliwość połączenia sufitu ze światłem."
          />
          <div className="grid4 sectionCards">
            {useCases.map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pricingDeck">
          <article className="card priceTableCard">
            <span className="eyebrow">Cena</span>
            <h2 className="priceCardTitle">Ile kosztuje sufit napinany?</h2>
            <p>
              Dla prostego sufitu MSD w prostokątnym pomieszczeniu z 4 narożnikami przyjmujemy
              średnio ok. 120 zł/m² jako punkt odniesienia. Dokładna cena zależy od materiału,
              profili, LED i detali.
            </p>
            <Button href="/ceny" variant="secondary">
              Zobacz stronę cen
            </Button>
          </article>
          <aside className="card priceExplainCard">
            <span className="priceKicker">Proces</span>
            <div className="factorList">
              {["Kontakt", "Bezpłatny pomiar", "Dobór materiału", "Wycena", "Montaż"].map((item) => (
                <div className="factor" key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container faqShell">
          <div className="centerHeader">
            <SectionHeader eyebrow="FAQ" title="Pytania o sufity napinane" />
          </div>
          <div className="faqGrid">
            {faqs.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="faqCta">
            <p>Chcesz dobrać rodzaj sufitu do wnętrza?</p>
            <Button href={whatsappUrl("Dzień dobry, chcę dobrać sufit napinany do pomieszczenia.")} variant="dark">
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Rozwiązania</span>
            <h2 className="sectionTitle">Zobacz LED, linie świetlne i ukryte karnisze</h2>
            <p>Jeśli interesują Cię konkretne dodatki, przejdź do rozwiązań i wybierz zakres.</p>
          </div>
          <div className="buttonRow">
            <Button href="/rozwiazania">Przejdź do rozwiązań</Button>
            <Button href="/realizacje" variant="secondary">
              Zobacz efekty
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
