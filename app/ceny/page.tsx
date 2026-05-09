import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { FullPriceCalculator } from "@/components/FullPriceCalculator";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getStaticPageContent, mapContentFAQItems } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { BadgeCheck, Calculator, Check, Layers3, Lightbulb, Ruler, WalletCards } from "lucide-react";

const pageContent = getStaticPageContent("/ceny");

export const metadata = createPageMetadata({
  title: pageContent.seoTitle,
  description: pageContent.seoDescription,
  path: pageContent.path,
});

const priceRows = [
  ["Sufit matowy / MSD Premium", "od 120 zł/m²"],
  ["Sufit satynowy / Bauf", "od 140 zł/m²"],
  ["Sufit błyszczący", "od 150 zł/m²"],
  ["Sufit napinany Teqtum", "od 170 zł/m²"],
  ["Sufit z efektem cienia", "od 150 zł/m²"],
  ["Sufit z oświetleniem LED", "wycena indywidualna"],
  ["Sufit z nadrukiem", "wycena indywidualna"],
  ["Sufit translucent", "wycena indywidualna"],
  ["Sufit wielopoziomowy", "wycena indywidualna"],
];

const priceFactors = [
  "powierzchnia i liczba pomieszczeń",
  "rodzaj folii i sposób wykończenia",
  "liczba narożników, wnęk i załamań",
  "oświetlenie, profile i szyny magnetyczne",
  "wentylacja, luki rewizyjne i elementy techniczne",
  "lokalizacja oraz dostęp do pomieszczeń",
];

const examples = [
  ["Łazienka 6 m²", "MSD Premium, punkty świetlne, wentylacja", "od 1200 zł"],
  ["Kuchnia 10 m²", "Bauf, profil standardowy, bez LED", "od 1600 zł"],
  ["Salon 22 m²", "MSD Premium, linie LED, efekt cienia", "od 4200 zł"],
  ["Mieszkanie 45 m²", "3 pomieszczenia, LED, wentylacja i luki", "od 7600 zł"],
];

const extras = [
  { title: "Linie LED", text: "od 150 zł/mb", icon: Lightbulb },
  { title: "Szyny magnetyczne", text: "od 260 zł/mb", icon: Layers3 },
  { title: "Luki rewizyjne", text: "od 180 zł/szt.", icon: BadgeCheck },
  { title: "Wentylacja", text: "od 90 zł/punkt", icon: Ruler },
];

const seoBlocks = [
  {
    title: "Ile kosztuje sufit napinany?",
    text:
      "Cena sufitu napinanego zaczyna się orientacyjnie od 120 zł/m² przy prostych realizacjach. Ostateczny koszt zależy od materiału, metrażu, profili, oświetlenia i warunków montażu.",
  },
  {
    title: "Od czego zależy cena sufitu napinanego?",
    text:
      "Największy wpływ mają powierzchnia, liczba pomieszczeń, rodzaj membrany, liczba narożników, typ profili, oświetlenie LED, wentylacja, luki rewizyjne oraz lokalizacja.",
  },
  {
    title: "Czy cena za m² jest niższa przy większym metrażu?",
    text:
      "Często większy metraż pozwala lepiej rozłożyć koszty przygotowania i dojazdu, ale dokładny zakres zależy od konstrukcji oraz liczby detali technicznych.",
  },
  {
    title: "Czy oświetlenie jest liczone osobno?",
    text:
      "Tak. Punkty świetlne, linie LED, taśmy, szyny magnetyczne i podświetlenie obwodowe wymagają osobnego planowania oraz indywidualnej wyceny.",
  },
  {
    title: "Dlaczego dokładna wycena wymaga pomiaru?",
    text:
      "Pomiar pozwala sprawdzić ściany, narożniki, instalacje, wentylację i dostęp do pomieszczenia. Bez tego kalkulator może pokazać tylko bezpieczny zakres orientacyjny.",
  },
];

const pricingFaq: FAQItem[] = [
  ...mapContentFAQItems(pageContent.faq),
];

export default function PricesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Ceny" href="/ceny" />

        <section className="pb-12 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                {pageContent.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                {pageContent.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                {pageContent.lead}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="#calculator">
                  Policz w kalkulatorze
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/kontakt">
                  Zamów wycenę
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <WalletCards className="h-12 w-12 text-gold-dark" aria-hidden="true" />
              <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
                Wycena bez zgadywania
              </p>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink">
                Cena zależy od materiału, światła i detali technicznych
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Dlatego pokazujemy orientacyjne stawki i zakres z kalkulatora. Finalną ofertę
                przygotowujemy po pomiarze oraz sprawdzeniu warunków montażu.
              </p>
              <div className="mt-6 grid gap-3">
                {["zakres ceny zamiast jednej kwoty", "pełny kalkulator krok po kroku", "bezpłatny pomiar przed ofertą"].map((item) => (
                  <p key={item} className="flex gap-3 font-bold leading-7 text-ink">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Orientacyjne ceny"
              title="Ceny sufitów napinanych"
              description="Poniższe stawki są punktem wyjścia do rozmowy. Projekty z LED, nadrukiem, translucent i wieloma poziomami wymagają indywidualnej wyceny."
            />
            <div className="mt-10 overflow-hidden rounded-lg bg-white shadow-card">
              {priceRows.map(([name, price]) => (
                <div
                  key={name}
                  className="grid gap-2 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center md:px-7"
                >
                  <span className="font-bold text-ink">{name}</span>
                  <span className="font-extrabold text-gold-dark sm:text-right">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="section-pad scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Pełny kalkulator"
              title="Policz orientacyjny zakres ceny"
              description="Przejdź przez 5 kroków. Wynik pokazuje bezpieczny przedział, nie dokładną kwotę po przecinku."
            />
            <div className="mt-10">
              <FullPriceCalculator />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Koszt" title="Od czego zależy cena?" align="center" />
            <CardGrid className="mt-10" columns={3}>
              {priceFactors.map((factor) => (
                <div key={factor} className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  <p className="font-bold leading-7 text-ink">{factor}</p>
                </div>
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Przykłady" title="Przykładowe wyceny" />
            <CardGrid className="mt-10" columns={4}>
              {examples.map(([title, text, price]) => (
                <article key={title} className="rounded-lg bg-white p-6 shadow-card">
                  <Calculator className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-extrabold text-ink">{title}</h2>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                  <p className="mt-4 text-2xl font-extrabold text-ink">{price}</p>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Dodatki" title="Dodatkowe rozwiązania" />
            <CardGrid className="mt-10" columns={4}>
              {extras.map((item) => (
                <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
                  <item.icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-3 text-lg font-bold text-muted">{item.text}</p>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Cena w praktyce"
              title="Co warto wiedzieć przed wyceną?"
              description="Orientacyjna cena za m² pomaga porównać warianty, ale kompletny koszt sufitu napinanego zależy od całego zakresu prac."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {seoBlocks.map((block) => (
                <article key={block.title} className="rounded-lg bg-white p-6 shadow-card md:p-8">
                  <h2 className="text-2xl font-extrabold leading-tight text-ink">{block.title}</h2>
                  <p className="mt-4 leading-7 text-muted">{block.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={pricingFaq} title="FAQ cenowe" />
        <CTASection
          title="Chcesz dokładną wycenę zamiast orientacyjnego zakresu?"
          description="Umów bezpłatny pomiar. Sprawdzimy pomieszczenie, profile, oświetlenie i przygotujemy konkretną ofertę."
          secondaryHref="/kontakt"
        />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
