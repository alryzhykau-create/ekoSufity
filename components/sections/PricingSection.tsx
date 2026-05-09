import { Bath, Home, LampDesk, Sparkles } from "lucide-react";

const priceRows = [
  ["Sufit matowy", "od 120 zł/m²"],
  ["Sufit satynowy", "od 140 zł/m²"],
  ["Sufit błyszczący", "od 150 zł/m²"],
  ["LED i rozwiązania dodatkowe", "wycena indywidualna"],
];

const priceExamples = [
  { title: "Łazienka 6 m²", price: "od 1200 zł", icon: Bath },
  { title: "Kuchnia 10 m²", price: "od 1600 zł", icon: Home },
  { title: "Salon 22 m²", price: "od 4200 zł", icon: Sparkles },
  { title: "Mieszkanie 45 m² z LED", price: "od 7600 zł", icon: LampDesk },
];

export function PricingSection() {
  return (
    <section id="cennik" className="section-pad scroll-mt-28 bg-white/45">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="pt-1">
            <h2 className="text-[1.95rem] font-extrabold uppercase leading-[1.12] tracking-[0.01em] text-ink md:text-[2.2rem]">
              Ile kosztuje sufit napinany?
            </h2>
            <div className="mt-6 overflow-hidden rounded-lg bg-white shadow-card">
              {priceRows.map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 last:border-b-0"
                >
                  <span className="font-bold text-ink">{name}</span>
                  <span className="text-right font-extrabold text-ink">{price}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-[460px] text-[15px] leading-7 text-muted">
              Dokładna cena zależy od metrażu, liczby narożników, oświetlenia i rodzaju
              profilu. Kalkulator pokazuje orientacyjny zakres, a finalną ofertę przygotowujemy po pomiarze.
            </p>
            <a
              className="mt-5 inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="#kontakt"
              aria-label="Poproś o dokładną wycenę"
            >
              Poproś o dokładną wycenę
            </a>
          </div>

          <div className="rounded-lg bg-white px-6 py-7 shadow-card md:px-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-muted">
              Przykładowe realizacje i ceny
            </p>
            <div className="mt-5 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
              {priceExamples.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-start px-0 sm:pr-6 lg:min-h-[196px] lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  <item.icon className="h-12 w-12 text-gold-dark" aria-hidden="true" />
                  <h3 className="mt-7 text-[1.05rem] font-extrabold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] font-black text-ink">{item.price}</p>
                  {index < priceExamples.length - 1 ? (
                    <span
                      className="pointer-events-none absolute right-0 top-1/2 hidden h-[164px] w-px -translate-y-1/2 bg-line/90 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
