import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQExplorer } from "@/components/FAQExplorer";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { FAQJsonLd } from "@/components/SeoJsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { allFAQItems, faqCategories } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ — sufity napinane | Pytania i odpowiedzi | EkoSufity",
  description:
    "Najczęstsze pytania o sufity napinane: ceny, montaż, oświetlenie, profile, wentylacja, luki rewizyjne, pielęgnacja, gwarancja i lokalizacje.",
  path: "/faq",
});

const relatedLinks = [
  { label: "Ceny", href: "/ceny" },
  { label: "O sufitach", href: "/o-sufitach" },
  { label: "Rodzaje sufitów", href: "/rodzaje-sufitow" },
  { label: "Oświetlenie", href: "/rozwiazania/oswietlenie" },
  { label: "Profile", href: "/rozwiazania/profile" },
  { label: "Wentylacja", href: "/rozwiazania/wentylacja" },
  { label: "Luki rewizyjne", href: "/rozwiazania/luki-rewizyjne" },
  { label: "Lokalizacje", href: "/lokalizacje" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd items={allFAQItems} />
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "FAQ", href: "/faq" },
          ]}
        />

        <section className="pb-12 pt-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">FAQ</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                FAQ — sufity napinane
              </h1>
              <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">
                Zebraliśmy najczęstsze pytania dotyczące sufitów napinanych, cen, montażu,
                oświetlenia, profili, wentylacji, luków rewizyjnych i realizacji we Wrocławiu oraz okolicach.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black" href="/ceny">
                  Sprawdź ceny
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20mam%20pytanie%20o%20sufit%20napinany." target="_blank" rel="noreferrer">
                  Napisz na WhatsApp
                </a>
                <a className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark" href="/kontakt">
                  Zamów wycenę
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQExplorer categories={faqCategories} />

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold-dark">
                Powiązane strony
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Nie znalazłeś odpowiedzi?"
          description="Napisz na WhatsApp albo zostaw kontakt. Odpowiemy na pytania i przygotujemy wycenę pod konkretne wnętrze."
          secondaryHref="/kontakt"
          showCalculatorLink={false}
        />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
