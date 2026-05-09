import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { Header } from "@/components/Header";
import { LightingCard } from "@/components/LightingCard";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getFAQItemsByCategory } from "@/lib/faq";
import { lightingItems } from "@/lib/lighting";
import { createPageMetadata } from "@/lib/metadata";
import { ArrowRight, BadgeCheck, Cable, Check, Lightbulb, MessageCircle, WalletCards } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Oświetlenie sufitów napinanych | LED i szyny | EkoSufity",
  description:
    "Zobacz opcje oświetlenia do sufitów napinanych: linie LED, punkty świetlne, taśmy LED, szyny magnetyczne, oprawy wpuszczane i podświetlenie obwodowe.",
  path: "/rozwiazania/oswietlenie",
});

const planningItems = [
  "rozmieszczenie światła",
  "moc i barwa LED",
  "typ opraw oraz profili",
  "miejsce na zasilacze",
  "sterowanie i ściemnianie",
  "dostęp serwisowy po montażu",
];

const applicationCards = [
  {
    title: "Salon i kuchnia",
    text: "Najczęściej stosuje się linie LED, punkty świetlne, szyny magnetyczne i podświetlenie strefowe.",
  },
  {
    title: "Łazienka i korytarz",
    text: "Praktyczne są punkty świetlne, oprawy wpuszczane i światło dobrane do wilgoci oraz wentylacji.",
  },
  {
    title: "Sypialnia i strefa wypoczynku",
    text: "Dobrze sprawdzają się taśmy LED, miękkie podświetlenie obwodowe i światło dekoracyjne.",
  },
];

const faqItems: FAQItem[] = [
  ...getFAQItemsByCategory("oswietlenie"),
  {
    question: "Czy oświetlenie wpływa na cenę sufitu napinanego?",
    answer:
      "Tak. Na cenę wpływa liczba punktów, długość linii LED, rodzaj profili, zasilacze, sterowanie i dostęp techniczny.",
  },
  {
    question: "Gdzie montuje się zasilacze LED?",
    answer:
      "Zasilacze powinny być w miejscu z dostępem serwisowym, na przykład w luku rewizyjnym, zabudowie, szafce technicznej albo innym uzgodnionym miejscu.",
  },
];

export default function LightingCatalogPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: "Oświetlenie", href: "/rozwiazania/oswietlenie" },
          ]}
        />

        <section className="pb-14 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Oświetlenie
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Oświetlenie do sufitów napinanych
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Sufit napinany można połączyć z wieloma rodzajami oświetlenia — od
                klasycznych punktów świetlnych po linie LED, taśmy LED, szyny magnetyczne
                i dekoracyjne podświetlenie obwodowe. Dobór oświetlenia warto zaplanować
                przed montażem sufitu.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="#opcje-oswietlenia">
                  Zobacz opcje oświetlenia
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/ceny">
                  Sprawdź ceny
                </a>
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20chc%C4%99%20dobra%C4%87%20o%C5%9Bwietlenie%20do%20sufitu%20napinanego.">
                  <MessageCircle size={18} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <Lightbulb className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">
                Światło trzeba zaplanować przed sufitem
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Przed montażem ustalamy przebieg przewodów, rozmieszczenie opraw, profile,
                zasilacze, sterowanie i dostęp serwisowy. Dzięki temu efekt jest estetyczny
                i praktyczny.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Wyjaśnienie"
              title="Jakie oświetlenie można zastosować w suficie napinanym?"
              description="W suficie napinanym można wykonać światło główne, dekoracyjne i strefowe. Najczęściej stosuje się punkty świetlne, linie LED, taśmy LED, oprawy wpuszczane, szyny magnetyczne oraz podświetlenie obwodowe."
            />
          </div>
        </section>

        <section id="opcje-oswietlenia" className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Katalog"
              title="Katalog kart oświetlenia"
              description="Porównaj typy oświetlenia i przejdź do szczegółów, aby zobaczyć zastosowania, planowanie, cenę orientacyjną i FAQ."
              align="center"
            />
            <CardGrid className="mt-10" columns={3}>
              {lightingItems.map((item) => (
                <LightingCard key={item.slug} item={item} />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionHeading
              eyebrow="Planowanie"
              title="Co trzeba zaplanować przed montażem oświetlenia?"
              description="Najlepszy efekt powstaje wtedy, gdy światło, profile, elektryka i dostęp serwisowy są zaplanowane przed naciągnięciem membrany."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {planningItems.map((item) => (
                <article key={item} className="rounded-lg bg-white p-5 shadow-card">
                  <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
            <article className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <Cable className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink">
                Gdzie montuje się zasilacze LED i dostęp techniczny?
              </h2>
              <p className="mt-5 leading-7 text-muted">
                Zasilacze LED powinny być dostępne po montażu. Najczęściej planuje się je
                w luku rewizyjnym, szafce technicznej, zabudowie meblowej albo innym miejscu
                uzgodnionym podczas pomiaru.
              </p>
              <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/rozwiazania/luki-rewizyjne">
                Zobacz luki rewizyjne
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <WalletCards className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink">
                Oświetlenie a cena sufitu
              </h2>
              <p className="mt-5 leading-7 text-muted">
                Na cenę wpływa długość linii LED, liczba punktów, typ opraw, rodzaj profilu,
                zasilacze, sterowanie i czas montażu. Dlatego przy bardziej rozbudowanym świetle
                podajemy zakres orientacyjny i potwierdzamy cenę po pomiarze.
              </p>
              <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/ceny#calculator">
                Sprawdź kalkulator
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Zastosowania" title="Najczęstsze zastosowania" align="center" />
            <CardGrid className="mt-10" columns={3}>
              {applicationCards.map((item) => (
                <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
                  <BadgeCheck className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-6 text-2xl font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <FAQSection items={faqItems} title="FAQ o oświetleniu do sufitów napinanych" />
        <CTASection
          title="Chcesz zaplanować oświetlenie w suficie napinanym?"
          description="Umów bezpłatny pomiar. Sprawdzimy konstrukcję, elektrykę, profile i dobierzemy oświetlenie do konkretnego wnętrza."
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
