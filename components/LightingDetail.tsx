import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import type { LightingItem } from "@/lib/lighting";
import { getRelatedLighting } from "@/lib/lighting";
import { ArrowRight, BadgeCheck, Cable, Check, Lightbulb, MessageCircle, WalletCards } from "lucide-react";

const internalLinks = [
  { label: "Sprawdź cenę sufitu z LED", href: "/ceny" },
  { label: "Zobacz realizacje", href: "/realizacje" },
  { label: "Kontakt i pomiar", href: "/kontakt" },
  { label: "Wszystkie opcje oświetlenia", href: "/rozwiazania/oswietlenie" },
];

export function LightingDetail({ item }: { item: LightingItem }) {
  const related = getRelatedLighting(item.slug, 4);
  const whatsappText = encodeURIComponent(
    `Dzień dobry, interesuje mnie ${item.name.toLowerCase()} w suficie napinanym. Proszę o wycenę i termin pomiaru.`
  );

  return (
    <>
      <section className="pb-12 pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
              Oświetlenie
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{item.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/kontakt">
                {item.ctaText}
              </a>
              <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/ceny">
                Sprawdź cenę
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
              src={item.image}
              alt={item.name}
              width={1200}
              height={840}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Czym jest to rozwiązanie"
            title={`Czym są ${item.name.toLowerCase()}?`}
            description={item.description}
          />
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <Lightbulb className="h-10 w-10 text-gold-dark" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">
              Połączenie z sufitem napinanym
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Oświetlenie trzeba połączyć z membraną, profilami, konstrukcją i elektryką.
              Dlatego rozmieszczenie światła, zasilanie i dostęp techniczny ustalamy przed montażem.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Gdzie się sprawdza" title="Najlepsze zastosowania" />
          <CardGrid className="mt-10" columns={3}>
            {item.bestFor.map((application) => (
              <article key={application} className="rounded-lg bg-white p-6 shadow-card">
                <Lightbulb className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{application}</h2>
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
              {item.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 leading-7 text-muted">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <SectionHeading eyebrow="Co trzeba zaplanować przed montażem" title="Plan techniczny światła" />
            <ul className="mt-8 space-y-4">
              {item.planningNotes.map((planning) => (
                <li key={planning} className="flex gap-3 leading-7 text-muted">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  {planning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Możliwości" title="Co można wykonać?" />
          <CardGrid className="mt-10" columns={3}>
            {item.variants.map((variant) => (
              <article key={variant} className="rounded-lg bg-white p-6 shadow-card">
                <Check className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{variant}</h2>
              </article>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <Cable className="h-11 w-11 text-gold-dark" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink">
              Zasilacze i dostęp techniczny
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Zasilacze, sterowniki i połączenia powinny być dostępne po montażu. Najczęściej planuje się
              luk rewizyjny, dostęp w zabudowie albo inne miejsce serwisowe ustalone podczas pomiaru.
            </p>
            <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/rozwiazania/luki-rewizyjne">
              Zobacz dostęp techniczny
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <WalletCards className="h-11 w-11 text-gold-dark" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink">Orientacyjna cena</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Orientacyjnie: <strong className="text-ink">{item.priceLabel}</strong>. Dokładna cena zależy od
              konstrukcji, profili, zasilaczy, sterowania i warunków montażu.
            </p>
            <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/ceny">
              Sprawdź cennik
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Kompatybilność" title="Z jakimi sufitami można to połączyć?" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {item.compatibleCeilings.map((ceiling) => (
              <a
                key={ceiling}
                className="rounded-lg bg-white px-5 py-4 font-bold text-ink shadow-card transition hover:text-gold-dark"
                href="/rodzaje-sufitow"
              >
                {ceiling}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
              Podobne rozwiązania
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((relatedItem) => (
                <a
                  key={relatedItem.slug}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                  href={`/rozwiazania/oswietlenie/${relatedItem.slug}`}
                >
                  {relatedItem.name}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
              Powiązane linki
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {internalLinks.map((link) => (
                <a
                  key={link.href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                  href={link.href}
                >
                  {link.label}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={item.faq} title={`FAQ: ${item.name.toLowerCase()}`} />
      <CTASection
        title={`${item.ctaText}?`}
        description="Umów bezpłatny pomiar. Sprawdzimy konstrukcję, elektrykę, profile i dobierzemy bezpieczne rozwiązanie."
        secondaryHref="/kontakt"
      />
    </>
  );
}
