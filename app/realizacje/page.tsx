import { GalleryGrid } from "@/components/GalleryGrid";
import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getStaticPageContent, mapContentFAQItems } from "@/lib/content";
import { galleryProjects } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/metadata";
import { BadgeCheck, Images, Sparkles } from "lucide-react";

const pageContent = getStaticPageContent("/realizacje");

export const metadata = createPageMetadata({
  title: pageContent.seoTitle,
  description: pageContent.seoDescription,
  path: pageContent.path,
});

const faqItems: FAQItem[] = [
  ...mapContentFAQItems(pageContent.faq),
];

export default function RealizationsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Realizacje" href="/realizacje" />

        <section className="pb-12 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">{pageContent.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                {pageContent.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                {pageContent.lead}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black"
                  href="/kontakt"
                >
                  Zamów wycenę
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
                  href="/ceny"
                >
                  Sprawdź ceny
                </a>
              </div>
            </div>
            <div className="grid gap-4 rounded-lg bg-white p-5 shadow-card sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex gap-3">
                <Images className="h-6 w-6 shrink-0 text-gold-dark" aria-hidden="true" />
                <p className="font-bold leading-7 text-ink">Filtry po typie sufitu, świetle i pomieszczeniu.</p>
              </div>
              <div className="flex gap-3">
                <Sparkles className="h-6 w-6 shrink-0 text-gold-dark" aria-hidden="true" />
                <p className="font-bold leading-7 text-ink">Przykłady rozwiązań premium bez przeciążania formą.</p>
              </div>
              <div className="flex gap-3">
                <BadgeCheck className="h-6 w-6 shrink-0 text-gold-dark" aria-hidden="true" />
                <p className="font-bold leading-7 text-ink">Każda wycena jest dopasowana do konkretnego wnętrza.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Galeria"
              title="Przykładowe montaże i układy oświetlenia"
              description="Użyj filtrów, aby szybko znaleźć podobny typ sufitu, rodzaj światła albo pomieszczenie. Część zdjęć traktujemy jako inspiracje, dopóki nie zostaną potwierdzone jako rzeczywiste realizacje EkoSufity."
            />
            <div className="mt-10">
              <GalleryGrid projects={galleryProjects} showFilters />
            </div>
          </div>
        </section>

        <FAQSection items={faqItems} title="FAQ o realizacjach" />
        <CTASection
          title="Chcesz podobny efekt w swoim wnętrzu?"
          description="Wyślij zdjęcia pomieszczenia albo umów bezpłatny pomiar. Dobierzemy typ sufitu, światło i zakres prac."
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
