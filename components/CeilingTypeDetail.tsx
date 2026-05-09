import { CardGrid } from "@/components/CardGrid";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import type { CeilingType } from "@/lib/ceilingTypes";
import { getFAQItemsByCategory } from "@/lib/faq";
import { ArrowRight, BadgeCheck, Check, Hammer, Image, Lightbulb, MapPin, MessageCircle, WalletCards } from "lucide-react";

const exampleProjects = [
  ["Wrocław, Krzyki", "18 m² | montaż 1 dzień"],
  ["Wrocław, Psie Pole", "14 m² | montaż 1 dzień"],
  ["Wrocław, Fabryczna", "22 m² | montaż 1-2 dni"],
];

const internalLinks = [
  { label: "Sprawdź ceny", href: "/ceny" },
  { label: "Zobacz realizacje", href: "/realizacje" },
  { label: "Kontakt i pomiar", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
];

export function CeilingTypeDetail({ type }: { type: CeilingType }) {
  const faqItems = [...type.faq, ...getFAQItemsByCategory("rodzaje-sufitow").slice(0, 2)];
  const whatsappText = encodeURIComponent(
    `Dzień dobry, interesuje mnie ${type.name.toLowerCase()}. Proszę o orientacyjną wycenę i termin pomiaru.`
  );

  return (
    <>
      <section className="pb-12 pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
              Rodzaje sufitów
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
              {type.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{type.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/ceny">
                Sprawdź cenę
              </a>
              <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/realizacje">
                Zobacz realizacje
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href={`https://wa.me/48791085385?text=${whatsappText}`}>
                <MessageCircle size={18} aria-hidden="true" />
                Napisz na WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-card">
            <img
              className="h-[360px] w-full object-cover md:h-[420px]"
              src={type.image}
              alt={type.name}
              width={1200}
              height={840}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <SectionHeading
            eyebrow="Co to jest"
            title={`Co to jest ${type.name.toLowerCase()}?`}
            description={type.description}
          />
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <Hammer className="h-10 w-10 text-gold-dark" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-extrabold text-ink">Jak wygląda decyzja przed montażem?</h2>
            <p className="mt-4 leading-7 text-muted">
              Przy pomiarze sprawdzamy wysokość pomieszczenia, ściany, oświetlenie, wentylację i miejsca,
              które wymagają dostępu technicznego. Dzięki temu wariant sufitu nie jest wybierany przypadkowo.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Gdzie się sprawdza" title="Najlepsze zastosowania" />
          <CardGrid className="mt-10" columns={3}>
            {type.bestFor.map((item) => (
              <article key={item} className="rounded-lg bg-white p-6 shadow-card">
                <MapPin className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{item}</h2>
              </article>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <SectionHeading eyebrow="Zalety" title="Najważniejsze korzyści" />
            <ul className="mt-8 space-y-4">
              {type.benefits.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-muted">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <SectionHeading eyebrow="O czym warto pamiętać" title="Ograniczenia i decyzje" />
            <ul className="mt-8 space-y-4">
              {type.limitations.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-muted">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Rozwiązania dodatkowe" title="Co można połączyć z tym sufitem?" align="center" />
          <CardGrid className="mt-10" columns={3}>
            {type.compatibleSolutions.map((item) => (
              <article key={item} className="rounded-lg bg-white p-6 shadow-card">
                <Lightbulb className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{item}</h2>
                <a className="mt-5 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/rozwiazania">
                  Zobacz rozwiązania
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </article>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Realizacje"
            title="Przykładowe inspiracje"
            description="To neutralne przykłady układów i lokalizacji. Docelowo warto podmienić je na prawdziwe zdjęcia realizacji dla konkretnego rodzaju sufitu."
          />
          <CardGrid className="mt-10" columns={3}>
            {exampleProjects.map(([location, meta]) => (
              <article key={location} className="overflow-hidden rounded-lg bg-white shadow-card">
                <img
                  className="h-52 w-full object-cover"
                  src={type.image}
                  alt={`${type.name} - ${location}`}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={520}
                />
                <div className="p-6">
                  <Image className="h-8 w-8 text-gold-dark" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-extrabold text-ink">{location}</h2>
                  <p className="mt-2 font-bold text-muted">{meta}</p>
                </div>
              </article>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 rounded-lg bg-white p-6 shadow-card md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <WalletCards className="h-12 w-12 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink md:text-5xl">Orientacyjna cena</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Orientacyjnie: <strong className="text-ink">{type.priceLabel}</strong>. Dokładna cena zależy od
                metrażu, profili, oświetlenia, liczby narożników i warunków montażowych.
              </p>
            </div>
            <div className="rounded-lg bg-porcelain p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                Pomiar i wycena
              </p>
              <p className="mt-4 leading-7 text-muted">
                Najlepiej zacząć od bezpłatnego pomiaru. Sprawdzimy pomieszczenie, doradzimy wariant
                i przygotujemy konkretną wycenę.
              </p>
              <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/ceny">
                Przejdź do cennika
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title={`FAQ: ${type.name.toLowerCase()}`} />
      <CTASection
        title={`${type.ctaText}?`}
        description="Umów bezpłatny pomiar. Doradzimy materiał, profile, oświetlenie i przygotujemy dokładną wycenę."
        secondaryHref="/kontakt"
      />

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <RelatedLinks currentSlug={type.slug} />
          <div className="rounded-lg bg-white p-6 shadow-card">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
              Przydatne strony
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((item) => (
                <a
                  key={item.href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                  href={item.href}
                >
                  {item.label}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
