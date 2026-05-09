import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { ConstructionCard } from "@/components/ConstructionCard";
import { Header } from "@/components/Header";
import { LightingCard } from "@/components/LightingCard";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { ProfileCard } from "@/components/ProfileCard";
import { RevisionHatchCard } from "@/components/RevisionHatchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VentilationCard } from "@/components/VentilationCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getFAQItemsByCategory } from "@/lib/faq";
import { lightingItems } from "@/lib/lighting";
import { createPageMetadata } from "@/lib/metadata";
import { getRelatedSolutions, getSolutionBySlug, solutionItems } from "@/lib/solutions";
import { ArrowRight, BadgeCheck, Check, MessageCircle, PanelsTopLeft, WalletCards } from "lucide-react";

type SolutionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const faqCategoryBySlug: Record<string, string> = {
  oswietlenie: "oswietlenie",
  profile: "profile-i-konstrukcje",
  wentylacja: "wentylacja",
  "luki-rewizyjne": "luki-rewizyjne",
  "poziomy-i-konstrukcje": "profile-i-konstrukcje",
};

const internalLinks = [
  { label: "Sprawdź ceny", href: "/ceny" },
  { label: "Zobacz realizacje", href: "/realizacje" },
  { label: "Kontakt i pomiar", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
];

export function generateStaticParams() {
  return solutionItems
    .filter((solution) => solution.slug !== "oswietlenie")
    .map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return createPageMetadata({
    title: solution.seoTitle,
    description: solution.seoDescription,
    path: `/rozwiazania/${solution.slug}`,
    image: solution.image,
  });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const related = getRelatedSolutions(solution.related);
  const faqItems = [
    ...solution.faq,
    ...getFAQItemsByCategory(faqCategoryBySlug[solution.slug] ?? "profile-i-konstrukcje").slice(0, 2),
  ];
  const whatsappText = encodeURIComponent(
    `Dzień dobry, interesuje mnie rozwiązanie: ${solution.title}. Proszę o wycenę i termin pomiaru.`
  );

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: solution.title, href: `/rozwiazania/${solution.slug}` },
          ]}
        />

        <section className="pb-12 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Rozwiązania
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                {solution.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{solution.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/kontakt">
                  Zamów konsultację
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/rozwiazania">
                  Wszystkie rozwiązania
                </a>
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href={`https://wa.me/48791085385?text=${whatsappText}`}>
                  <MessageCircle size={18} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-card">
              <Image
                className="h-[360px] w-full object-cover md:h-[420px]"
                src={solution.image}
                alt={solution.h1}
                width={1200}
                height={840}
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {solution.detailSections.map((section) => (
                <article key={section.title} className="rounded-lg bg-white p-6 shadow-card md:p-8">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink">{section.title}</h2>
                  <p className="mt-4 leading-7 text-muted">{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Zastosowanie" title="Gdzie się sprawdza?" />
            <CardGrid className="mt-10" columns={3}>
              {solution.applications.map((application) => (
                <article key={application} className="rounded-lg bg-white p-6 shadow-card">
                  <PanelsTopLeft className="h-9 w-9 text-gold-dark" aria-hidden="true" />
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
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 leading-7 text-muted">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <SectionHeading eyebrow="Co trzeba zaplanować" title="Decyzje przed montażem" />
              <ul className="mt-8 space-y-4">
                {solution.planning.map((item) => (
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
            <SectionHeading eyebrow="Warianty" title="Dostępne elementy i warianty" />
            <CardGrid className="mt-10" columns={3}>
              {solution.slug === "oswietlenie"
                ? lightingItems.map((item) => <LightingCard key={item.slug} item={item} />)
                : solution.items.map((item) => renderSolutionItem(solution.slug, item))}
            </CardGrid>
          </div>
        </section>

        {solution.extraItems ? (
          <section className="section-pad bg-white/45">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <SectionHeading eyebrow="Połączenia" title="Rodzaje połączeń" />
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {solution.extraItems.map((item) => (
                  <div key={item} className="rounded-lg bg-white px-5 py-4 font-bold text-ink shadow-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 rounded-lg bg-white p-6 shadow-card md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <WalletCards className="h-12 w-12 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink md:text-5xl">
                  Orientacyjna cena
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Dla tego rozwiązania: <strong className="text-ink">{solution.priceLabel}</strong>. Końcowa
                  wycena zależy od zakresu prac, długości profili, liczby punktów, dostępu serwisowego i warunków
                  montażu.
                </p>
              </div>
              <div className="rounded-lg bg-porcelain p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                  Pomiar i wycena
                </p>
                <p className="mt-4 leading-7 text-muted">
                  Najlepiej sprawdzić rozwiązanie podczas bezpłatnego pomiaru. Wtedy weryfikujemy instalacje,
                  profile, wysokość i możliwe kolizje techniczne.
                </p>
                <a className="mt-6 inline-flex items-center gap-2 font-bold text-gold-dark transition hover:text-ink" href="/ceny">
                  Przejdź do cennika
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
                Powiązane rozwiązania
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <a
                    key={item.slug}
                    className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                    href={`/rozwiazania/${item.slug}`}
                  >
                    {item.title}
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
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

        <FAQSection items={faqItems} title={`FAQ: ${solution.title.toLowerCase()}`} />
        <CTASection
          title={`${solution.ctaText}?`}
          description="Umów bezpłatny pomiar. Sprawdzimy pomieszczenie, instalacje i dobierzemy rozwiązanie do konkretnego wnętrza."
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

function renderSolutionItem(slug: string, item: { title: string; description: string }) {
  if (slug === "profile") {
    return <ProfileCard key={item.title} title={item.title} description={item.description} />;
  }

  if (slug === "wentylacja") {
    return <VentilationCard key={item.title} title={item.title} description={item.description} />;
  }

  if (slug === "luki-rewizyjne") {
    return <RevisionHatchCard key={item.title} title={item.title} description={item.description} />;
  }

  return <ConstructionCard key={item.title} title={item.title} description={item.description} />;
}
