import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { LocationFilters } from "@/components/LocationFilters";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { locations } from "@/lib/locations";
import { createPageMetadata } from "@/lib/metadata";
import { ArrowRight, BadgeCheck, Check, MapPinned, MessageCircle, Route, WalletCards } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Sufity napinane Wrocław i okolice | Lokalizacje | EkoSufity",
  description:
    "Montujemy sufity napinane we Wrocławiu i miejscowościach w promieniu do około 100 km. Zobacz obsługiwane lokalizacje i zapytaj o wycenę.",
  path: "/lokalizacje",
});

const faqItems: FAQItem[] = [
  {
    question: "W jakim obszarze działacie?",
    answer:
      "Obsługujemy Wrocław i miejscowości w promieniu do około 100 km. Dalsze lokalizacje wyceniamy indywidualnie.",
  },
  {
    question: "Czy dojeżdżacie na pomiar poza Wrocław?",
    answer:
      "Tak. Pomiar poza Wrocławiem umawiamy po krótkiej rozmowie o lokalizacji, metrażu i planowanym zakresie prac.",
  },
  {
    question: "Czy lokalizacja wpływa na cenę?",
    answer:
      "Może wpływać na logistykę, ale podstawą wyceny pozostaje metraż, rodzaj sufitu, profile, oświetlenie i szczegóły montażu.",
  },
  {
    question: "Co jeśli mojej miejscowości nie ma na liście?",
    answer:
      "Napisz na WhatsApp i podaj lokalizację. Sprawdzimy możliwość pomiaru oraz przygotujemy indywidualną informację.",
  },
];

const popularSolutions = [
  {
    title: "Sufity matowe i satynowe",
    text: "Najczęstszy wybór do mieszkań, domów i biur, gdy efekt ma być spokojny i elegancki.",
    href: "/rodzaje-sufitow",
  },
  {
    title: "Oświetlenie LED",
    text: "Linie LED, punkty świetlne, taśmy i podświetlenie obwodowe planowane przed montażem.",
    href: "/rozwiazania/oswietlenie",
  },
  {
    title: "Profile i dostęp techniczny",
    text: "Detale przy ścianach, płytkach, szafach, wentylacji i zasilaczach LED.",
    href: "/rozwiazania/profile",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Lokalizacje" />

        <section className="pb-14 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Lokalizacje
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Sufity napinane we Wrocławiu i okolicach
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Montujemy sufity napinane we Wrocławiu oraz w miejscowościach w promieniu
                do około 100 km. Wykonujemy pomiar, doradzamy rodzaj sufitu, oświetlenie,
                profile i rozwiązania techniczne dopasowane do konkretnego wnętrza.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="#lista-lokalizacji">
                  Sprawdź lokalizacje
                </a>
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20chc%C4%99%20zapyta%C4%87%20o%20sufit%20napinany%20w%20mojej%20lokalizacji.">
                  <MessageCircle size={18} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/kontakt">
                  Zamów wycenę
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <MapPinned className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">
                Obszar działania
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Obsługujemy Wrocław i miejscowości w promieniu do około 100 km.
                Dalsze lokalizacje wyceniamy indywidualnie.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-lg bg-white p-6 shadow-card">
                <Route className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-6 text-xl font-extrabold text-ink">Pomiar po ustaleniu zakresu</h2>
                <p className="mt-3 leading-7 text-muted">
                  Przed wizytą ustalamy miejscowość, metraż, rodzaj sufitu i planowane rozwiązania.
                </p>
              </article>
              <article className="rounded-lg bg-white p-6 shadow-card">
                <BadgeCheck className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-6 text-xl font-extrabold text-ink">Wrocław i okolice</h2>
                <p className="mt-3 leading-7 text-muted">
                  Najważniejszy obszar to Wrocław, dzielnice Wrocławia oraz miejscowości podmiejskie.
                </p>
              </article>
              <article className="rounded-lg bg-white p-6 shadow-card">
                <WalletCards className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-6 text-xl font-extrabold text-ink">Wycena indywidualna</h2>
                <p className="mt-3 leading-7 text-muted">
                  Cena zależy od metrażu, materiału, profili, oświetlenia i warunków montażu.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="lista-lokalizacji" className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Lista lokalizacji"
              title="Obsługiwane lokalizacje"
              description="Wybierz miejscowość lub dzielnicę, aby zobaczyć lokalną stronę z opisem usług, popularnymi rozwiązaniami, FAQ i linkami do wyceny."
            />
            <div className="mt-10">
              <LocationFilters locations={locations} />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Rozwiązania" title="Najczęściej wybierane rozwiązania" align="center" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {popularSolutions.map((solution) => (
                <a
                  key={solution.href}
                  className="rounded-lg bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                  href={solution.href}
                >
                  <Check className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-extrabold text-ink">{solution.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{solution.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark">
                    Zobacz więcej
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionHeading
              eyebrow="Współpraca"
              title="Jak wygląda pomiar i montaż w lokalizacji?"
              description="Najpierw zbieramy podstawowe informacje, potem umawiamy pomiar, dobieramy materiał i rozwiązania techniczne, a po akceptacji wyceny planujemy montaż."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Kontakt i zdjęcia", "Pomiar i doradztwo", "Wycena zakresu", "Montaż sufitu"].map((item) => (
                <article key={item} className="rounded-lg bg-white p-5 shadow-card">
                  <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqItems} title="FAQ lokalizacyjne" />
        <CTASection
          title="Chcesz sprawdzić termin w swojej miejscowości?"
          description="Napisz, gdzie ma być wykonany sufit i jaki zakres planujesz. Potwierdzimy możliwość pomiaru oraz przygotujemy dalsze kroki."
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
