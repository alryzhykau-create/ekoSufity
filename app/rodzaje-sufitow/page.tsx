import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { CeilingTypeCard } from "@/components/CeilingTypeCard";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { ceilingTypes } from "@/lib/ceilingTypes";
import { getStaticPageContent, mapContentFAQItems } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { ArrowRight, Check, Home, Lightbulb, MessageCircle, Store, WalletCards } from "lucide-react";

const pageContent = getStaticPageContent("/rodzaje-sufitow");

export const metadata = createPageMetadata({
  title: pageContent.seoTitle,
  description: pageContent.seoDescription,
  path: pageContent.path,
});

const faqItems: FAQItem[] = [
  ...mapContentFAQItems(pageContent.faq),
];

const comparisonRows = [
  ["Matowy", "spokojny, klasyczny efekt", "mieszkania, domy, biura"],
  ["Satynowy", "delikatny połysk", "salony, apartamenty, jasne wnętrza"],
  ["Błyszczący", "odbicia i optyczna głębia", "łazienki, korytarze, lokale"],
  ["Z oświetleniem", "LED, punkty i szyny w suficie", "salony, kuchnie, lokale usługowe"],
  ["Translucent", "równomierna świecąca powierzchnia", "recepcje, łazienki, strefy premium"],
  ["Z karniszem", "ukryta prowadnica zasłon", "salony i sypialnie z zasłonami"],
];

const applicationCards = [
  {
    icon: Home,
    title: "Mieszkania i domy",
    text: "Najczęściej wybierane są sufity matowe, satynowe, z LED oraz z ukrytym karniszem.",
  },
  {
    icon: Lightbulb,
    title: "Wnętrza z mocnym światłem",
    text: "Dobrze sprawdzają się sufity z liniami LED, translucent, podświetleniem obwodowym i punktami.",
  },
  {
    icon: Store,
    title: "Lokale usługowe",
    text: "Warto rozważyć sufity z nadrukiem, perforacją, połyskiem lub konstrukcją wielopoziomową.",
  },
];

export default function CeilingTypesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Rodzaje sufitów" href="/rodzaje-sufitow" />

        <section className="pb-14 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                {pageContent.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                {pageContent.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {pageContent.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/ceny">
                  Sprawdź ceny
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/realizacje">
                  Zobacz realizacje
                </a>
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20chc%C4%99%20dobra%C4%87%20rodzaj%20sufitu%20napinanego.">
                  <MessageCircle size={18} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <WalletCards className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">
                Jaki sufit wybrać?
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Najpierw określ efekt: spokojny mat, delikatna satyna, połysk, światło,
                nadruk albo konstrukcja. Przy pomiarze dobieramy membranę, profile i LED
                do konkretnego pomieszczenia.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Wyjaśnienie"
              title="Jakie są rodzaje sufitów napinanych?"
              description="Rodzaj sufitu określa nie tylko wygląd membrany, ale też sposób pracy ze światłem, możliwości techniczne i budżet. Proste warianty dobrze sprawdzają się w mieszkaniach, a rozwiązania dekoracyjne lub techniczne warto planować indywidualnie."
            />
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Katalog"
              title="Katalog rodzajów sufitów"
              description="Każda karta prowadzi do osobnej strony z opisem, zastosowaniem, ograniczeniami, ceną orientacyjną i FAQ."
              align="center"
            />
            <CardGrid className="mt-10" columns={3}>
              {ceilingTypes.map((type) => (
                <CeilingTypeCard key={type.slug} type={type} />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionHeading
              eyebrow="Wybór"
              title="Jak wybrać odpowiedni sufit do wnętrza?"
              description="Do spokojnych wnętrz najczęściej pasuje mat lub satyna. Do małych pomieszczeń można wykorzystać połysk. Przy nowoczesnych aranżacjach warto od razu zaplanować światło, profile i ewentualny ukryty karnisz."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Dobierz efekt do stylu wnętrza, nie tylko do ceny za m².",
                "Zaplanuj oświetlenie przed montażem sufitu.",
                "W łazience i kuchni uwzględnij wentylację oraz oprawy.",
                "Przy zasłonach warto od razu przewidzieć ukryty karnisz.",
              ].map((item) => (
                <article key={item} className="rounded-lg bg-white p-5 shadow-card">
                  <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Porównanie" title="Porównanie rodzajów sufitów" />
            <div className="mt-10 overflow-hidden rounded-lg bg-white shadow-card">
              <div className="grid gap-px bg-line md:grid-cols-3">
                <div className="bg-charcoal p-4 font-extrabold text-white">Rodzaj</div>
                <div className="bg-charcoal p-4 font-extrabold text-white">Efekt</div>
                <div className="bg-charcoal p-4 font-extrabold text-white">Najlepsze zastosowanie</div>
                {comparisonRows.map(([type, effect, bestFor]) => (
                  <div key={type} className="contents">
                    <div className="bg-white p-4 font-extrabold text-ink">{type}</div>
                    <div className="bg-white p-4 leading-7 text-muted">{effect}</div>
                    <div className="bg-white p-4 leading-7 text-muted">{bestFor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Zastosowania" title="Najczęstsze zastosowania" align="center" />
            <CardGrid className="mt-10" columns={3}>
              {applicationCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
                    <Icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                    <h2 className="mt-6 text-2xl font-extrabold text-ink">{item.title}</h2>
                    <p className="mt-3 leading-7 text-muted">{item.text}</p>
                    <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/realizacje">
                      Zobacz realizacje
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </CardGrid>
          </div>
        </section>

        <FAQSection items={faqItems} title="FAQ o rodzajach sufitów" />
        <CTASection
          title="Nie wiesz, który rodzaj sufitu wybrać?"
          description="Umów bezpłatny pomiar. Doradzimy membranę, profile, oświetlenie i przygotujemy wycenę dla konkretnego wnętrza."
          secondaryHref="/ceny"
          secondaryLabel="Sprawdź ceny"
        />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
