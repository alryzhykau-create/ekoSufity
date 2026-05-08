import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { CeilingTypesSection } from "@/components/sections/CeilingTypesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { getFAQItemsByCategory } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";
import { Clock3, Layers3, ShieldCheck, Sparkles, Wrench, XCircle } from "lucide-react";

export const metadata = createPageMetadata({
  title: "O sufitach napinanych",
  description:
    "Dowiedz się, czym jest sufit napinany, z czego składa się system, jakie ma zalety, ograniczenia i jak wygląda montaż.",
  path: "/o-sufitach",
});

const systemParts = [
  ["Membrana", "Elastyczna powłoka tworząca idealnie równą powierzchnię sufitu."],
  ["Profile", "Elementy montażowe mocowane przy ścianach lub w konstrukcji."],
  ["Oświetlenie", "LED, punkty, szyny i oprawy dopasowane do projektu."],
  ["Detale techniczne", "Wentylacja, luki rewizyjne i przejścia instalacyjne."],
];

const advantages = [
  { title: "Szybki montaż", text: "Większość standardowych realizacji wykonujemy w 1 dzień.", icon: Clock3 },
  { title: "Bez kurzu", text: "Bez szpachlowania, cyklinowania i długiego remontu.", icon: Wrench },
  { title: "Idealna powierzchnia", text: "Sufit jest równy, estetyczny i gotowy od razu po montażu.", icon: Sparkles },
  { title: "Odporność na wilgoć", text: "Dobre rozwiązanie do łazienek, kuchni i pomieszczeń technicznych.", icon: ShieldCheck },
];

const limitations = [
  "dokładny pomiar jest konieczny przed produkcją",
  "elementy instalacyjne trzeba zaplanować przed montażem",
  "ostre przedmioty mogą uszkodzić membranę",
  "nietypowe konstrukcje wymagają indywidualnej wyceny",
];

const steps = [
  ["Pomiar", "Sprawdzamy wymiary, ściany, narożniki i instalacje."],
  ["Projekt", "Dobieramy materiał, profile, oświetlenie i detale techniczne."],
  ["Montaż profili", "Przygotowujemy konstrukcję pod membranę i światło."],
  ["Naciągnięcie sufitu", "Montujemy powłokę, oprawy i sprawdzamy efekt końcowy."],
];

const aboutFaq: FAQItem[] = [
  ...getFAQItemsByCategory("rodzaje-sufitow").slice(0, 2),
  ...getFAQItemsByCategory("montaz").slice(0, 3),
  ...getFAQItemsByCategory("oswietlenie").slice(0, 1),
];

export default function AboutCeilingsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="O sufitach" />

        <section className="pb-12 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                O sufitach napinanych
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Co to jest sufit napinany?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                To lekki system wykończenia sufitu, w którym specjalna membrana jest naciągana
                na profile. Pozwala szybko uzyskać równą powierzchnię, ukryć instalacje i
                zaplanować nowoczesne oświetlenie.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <Layers3 className="h-12 w-12 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-extrabold text-ink">Z czego składa się system?</h2>
              <div className="mt-6 space-y-4">
                {systemParts.map(([title, text]) => (
                  <div key={title} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                    <p className="font-extrabold text-ink">{title}</p>
                    <p className="mt-1 leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Zalety" title="Dlaczego klienci wybierają sufity napinane?" />
            <CardGrid className="mt-10" columns={4}>
              {advantages.map((item) => (
                <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
                  <item.icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <SectionHeading
              eyebrow="Ograniczenia"
              title="Co warto wiedzieć przed decyzją?"
              description="Sufit napinany jest szybkim i czystym rozwiązaniem, ale najlepszy efekt wymaga dobrego planu przed montażem."
            />
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <ul className="space-y-4">
                {limitations.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-muted">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ComparisonSection />

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Montaż" title="Jak wygląda montaż?" align="center" />
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {steps.map(([title, text], index) => (
                <article key={title} className="rounded-lg bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-xl font-black text-ink">
                    {index + 1}
                  </div>
                  <h2 className="mt-6 text-xl font-extrabold text-ink">{title}</h2>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CeilingTypesSection />
        <SolutionsSection />
        <FAQSection items={aboutFaq} title="FAQ o sufitach napinanych" />
        <CTASection
          title="Nie wiesz, jaki sufit pasuje do Twojego wnętrza?"
          description="Umów bezpłatny pomiar. Doradzimy materiał, profile, oświetlenie i najlepszy sposób montażu."
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
