import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { LocalFAQSection } from "@/components/LocalFAQSection";
import { LocationHero } from "@/components/LocationHero";
import { NearbyLocations } from "@/components/NearbyLocations";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/SeoJsonLd";
import { getFallbackProjects, getProjectsByLocationSlug } from "@/lib/gallery";
import { getRelatedLocations, type LocationItem } from "@/lib/locations";
import { siteConfig } from "@/lib/site";
import { ArrowRight, BadgeCheck, Calculator, Check, Hammer, Image, MessageCircle, WalletCards } from "lucide-react";

const solutionLinks: Record<string, string> = {
  "Sufity matowe": "/rodzaje-sufitow/matowe",
  "Sufity satynowe": "/rodzaje-sufitow/satynowe",
  "Sufity błyszczące": "/rodzaje-sufitow/blyszczace",
  "Sufity z oświetleniem LED": "/rozwiazania/oswietlenie",
  "Linie LED": "/rozwiazania/oswietlenie/linie-led",
  "Taśmy LED": "/rozwiazania/oswietlenie/tasmy-led",
  "Podświetlenie obwodowe": "/rozwiazania/oswietlenie/podswietlenie-obwodowe",
  "Punkty świetlne": "/rozwiazania/oswietlenie/punkty-swietlne",
  "Oprawy wpuszczane": "/rozwiazania/oswietlenie/oprawy-wpuszczane",
  "Szyny magnetyczne": "/rozwiazania/oswietlenie/szyny-magnetyczne",
  "Ukryty karnisz": "/rodzaje-sufitow/z-karniszem",
  "Wentylacja": "/rozwiazania/wentylacja",
  "Luki rewizyjne": "/rozwiazania/luki-rewizyjne",
};

const internalLinks = [
  { label: "Ceny", href: "/ceny" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
  { label: "Rodzaje sufitów", href: "/rodzaje-sufitow" },
  { label: "Oświetlenie", href: "/rozwiazania/oswietlenie" },
];

export function LocationPageTemplate({ location }: { location: LocationItem }) {
  const localProjects = getProjectsByLocationSlug(location.slug, 3);
  const projects = localProjects.length > 0 ? localProjects : getFallbackProjects(3);
  const relatedLocations = getRelatedLocations(location.slug, 6);
  const whatsappText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę sufitu napinanego w lokalizacji ${location.name}.`
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: location.title,
          serviceType: "Montaż sufitów napinanych",
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: siteConfig.name,
            telephone: siteConfig.phone,
            url: siteConfig.url,
          },
          areaServed: {
            "@type": location.type === "city" ? "City" : "Place",
            name: location.name,
          },
        }}
      />

      <Breadcrumbs
        visible
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Lokalizacje", href: "/lokalizacje" },
          { label: location.name, href: `/lokalizacje/${location.slug}` },
        ]}
      />

      <LocationHero location={location} />

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Lokalny opis"
            title={`Montaż sufitów napinanych: ${location.name}`}
            description={`Projektujemy i montujemy sufity napinane w lokalizacji ${location.name} i okolicach. Wykonujemy sufity matowe, satynowe, błyszczące, z oświetleniem LED, profilami i rozwiązaniami technicznymi.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {location.localBenefits.map((benefit) => (
              <article key={benefit} className="rounded-lg bg-white p-5 shadow-card">
                <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                <p className="mt-4 font-bold leading-7 text-ink">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Zakres"
            title="Jakie sufity wykonujemy?"
            description="Dobieramy membranę, profile, oświetlenie i rozwiązania techniczne do funkcji pomieszczenia, wysokości, instalacji i oczekiwanego efektu."
          />
          <CardGrid className="mt-10" columns={3}>
            {["Sufity matowe", "Sufity satynowe", "Sufity błyszczące", "Sufity z oświetleniem LED", "Wentylacja", "Luki rewizyjne"].map((item) => (
              <a
                key={item}
                className="rounded-lg bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                href={solutionLinks[item] ?? "/rodzaje-sufitow"}
              >
                <Hammer className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{item}</h2>
                <p className="mt-3 leading-7 text-muted">
                  Rozwiązanie dobieramy po pomiarze i rozmowie o funkcji pomieszczenia.
                </p>
              </a>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Popularne rozwiązania"
            title={`Co najczęściej wybierają klienci: ${location.name}`}
            description="Poniżej pokazujemy rozwiązania, które najczęściej pasują do podobnych mieszkań, domów i lokali."
            align="center"
          />
          <CardGrid className="mt-10" columns={3}>
            {location.popularSolutions.map((solution) => (
              <a
                key={solution}
                className="rounded-lg bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                href={solutionLinks[solution] ?? "/rozwiazania"}
              >
                <BadgeCheck className="h-9 w-9 text-gold-dark" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold text-ink">{solution}</h2>
                <p className="mt-3 leading-7 text-muted">
                  Zobacz szczegóły rozwiązania i sprawdź, co trzeba zaplanować przed montażem.
                </p>
              </a>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 rounded-lg bg-white p-6 shadow-card md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <WalletCards className="h-12 w-12 text-gold-dark" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-ink md:text-5xl">
                Ile kosztuje sufit napinany w lokalizacji {location.name}?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Cena sufitu napinanego zależy od powierzchni, rodzaju materiału, profili,
                oświetlenia i szczegółów montażu. Orientacyjne ceny możesz sprawdzić
                w cenniku lub kalkulatorze.
              </p>
            </div>
            <div className="grid gap-3">
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/ceny">
                <WalletCards size={18} aria-hidden="true" />
                Sprawdź ceny
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/ceny#calculator">
                <Calculator size={18} aria-hidden="true" />
                Przejdź do kalkulatora
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href={`https://wa.me/48791085385?text=${whatsappText}`}>
                <MessageCircle size={18} aria-hidden="true" />
                Napisz na WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Współpraca"
            title="Jak wygląda współpraca lokalnie?"
            description="Najpierw ustalamy zakres i lokalizację, następnie umawiamy pomiar, dobieramy sufit i rozwiązania, przygotowujemy wycenę oraz planujemy montaż."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Kontakt i zdjęcia", "Pomiar w lokalizacji", "Dobór rozwiązań", "Montaż po akceptacji"].map((item) => (
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
          <SectionHeading
            eyebrow="Realizacje"
            title={`Realizacje: ${location.name} i okolice`}
            description={
              localProjects.length > 0
                ? "Poniżej znajdziesz przykłady z tej lokalizacji."
                : "Nie każda lokalizacja ma jeszcze osobny zestaw zdjęć, dlatego pokazujemy reprezentatywne przykłady z aktualnej galerii."
            }
          />
          <div className="mt-10">
            <GalleryGrid projects={projects} showFilters={false} />
          </div>
          <a
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
            href="/realizacje"
          >
            <Image size={18} aria-hidden="true" />
            Zobacz wszystkie realizacje
          </a>
        </div>
      </section>

      <LocalFAQSection location={location} />
      <CTASection
        title={location.ctaText}
        description="Napisz na WhatsApp albo zostaw kontakt. Ustalimy zakres, termin pomiaru i przygotujemy dokładną wycenę."
        secondaryHref="/kontakt"
      />

      <section className="section-pad bg-white/45">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Linki" title="Przydatne strony" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {internalLinks.map((link) => (
              <a
                key={link.href}
                className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                href={link.href}
              >
                {link.label}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <NearbyLocations locations={relatedLocations} />
    </>
  );
}
