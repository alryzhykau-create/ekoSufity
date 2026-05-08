import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getFAQItemsByCategory } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";
import { solutionItems } from "@/lib/solutions";
import { ArrowRight, BadgeCheck, Check, Lightbulb, MessageCircle, PanelsTopLeft, Wrench } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Rozwiązania do sufitów napinanych | Oświetlenie, profile, wentylacja | EkoSufity",
  description:
    "Zobacz rozwiązania do sufitów napinanych: oświetlenie LED, profile, połączenia, wentylację, luki rewizyjne, ukryte karnisze i konstrukcje wielopoziomowe.",
  path: "/rozwiazania",
});

const faqItems: FAQItem[] = [
  ...getFAQItemsByCategory("oswietlenie").slice(1, 3),
  ...getFAQItemsByCategory("profile-i-konstrukcje").slice(0, 3),
  ...getFAQItemsByCategory("wentylacja").slice(0, 1),
  {
    question: "Czy rozwiązania techniczne trzeba wybrać przed pomiarem?",
    answer:
      "Nie musisz znać wszystkich detali, ale warto powiedzieć, czy planujesz LED, wentylację, ukryty karnisz, szyny lub dostęp serwisowy. To wpływa na konstrukcję i wycenę.",
  },
];

const popularSolutions = [
  {
    icon: Lightbulb,
    title: "LED w salonie i kuchni",
    text: "Linie LED, punkty świetlne i podświetlenie obwodowe pomagają wydzielić strefy bez ciężkiej zabudowy.",
  },
  {
    icon: PanelsTopLeft,
    title: "Profile przy ścianie i płytkach",
    text: "Dobrze dobrany profil decyduje o tym, czy krawędź sufitu wygląda czysto i pasuje do wykończenia.",
  },
  {
    icon: Wrench,
    title: "Dostęp techniczny",
    text: "Luki rewizyjne i dostęp do zasilaczy LED warto zaplanować przed montażem, a nie dopiero przy serwisie.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Rozwiązania" />

        <section className="pb-14 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Rozwiązania
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Rozwiązania do sufitów napinanych
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Dobry sufit napinany to nie tylko membrana. Ważne są oświetlenie LED,
                profile, połączenia, wentylacja, luki rewizyjne, ukryte karnisze i konstrukcje
                dopasowane do wnętrza.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/ceny">
                  Sprawdź ceny
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/realizacje">
                  Zobacz realizacje
                </a>
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20chc%C4%99%20dobra%C4%87%20rozwi%C4%85zania%20do%20sufitu%20napinanego.">
                  <MessageCircle size={18} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <BadgeCheck className="h-11 w-11 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">
                Rozwiązania dobieramy przed montażem
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Najważniejsze decyzje dotyczą profili, światła, kratek, zasilaczy i dostępu technicznego.
                Dzięki temu sufit wygląda lekko, ale działa praktycznie.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Katalog"
              title="Katalog rozwiązań"
              description="Wybierz kategorię i sprawdź, co trzeba zaplanować przed montażem sufitu napinanego."
              align="center"
            />
            <CardGrid className="mt-10" columns={3}>
              {solutionItems.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionHeading
              eyebrow="Dobór"
              title="Jak dobrać rozwiązanie do wnętrza?"
              description="Najpierw określ funkcję pomieszczenia: łazienka wymaga wentylacji, salon często potrzebuje kilku stref światła, a wnętrza z zasłonami warto zaplanować z ukrytym karniszem."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Oświetlenie i zasilacze planuj przed montażem.",
                "Profile dobierz do ścian, płytek, szaf i oczekiwanego efektu.",
                "Wentylacji nie wolno zasłaniać przypadkową membraną.",
                "Dostęp techniczny warto przewidzieć przy LED i instalacjach.",
              ].map((item) => (
                <article key={item} className="rounded-lg bg-white p-5 shadow-card">
                  <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Realizacje" title="Popularne rozwiązania w realizacjach" align="center" />
            <CardGrid className="mt-10" columns={3}>
              {popularSolutions.map((item) => {
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

        <FAQSection items={faqItems} title="FAQ o rozwiązaniach" />
        <CTASection
          title="Nie wiesz, które rozwiązania będą potrzebne?"
          description="Umów bezpłatny pomiar. Sprawdzimy wnętrze, instalacje i zaproponujemy praktyczny układ sufitu."
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
