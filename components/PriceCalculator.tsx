"use client";

import {
  calculatePriceRange,
  ceilingTypeOptions,
  formatCalculatorPrice,
  lightingOptions,
  type CeilingType,
  type LightingType,
} from "@/lib/calculator";
import { Calculator, Send } from "lucide-react";
import { useMemo, useState } from "react";

export function PriceCalculator() {
  const [area, setArea] = useState(20);
  const [ceilingType, setCeilingType] = useState<CeilingType>("msd-premium");
  const [lighting, setLighting] = useState<LightingType>("brak");

  const selectedCeiling = ceilingTypeOptions.find((option) => option.value === ceilingType);
  const selectedLighting = lightingOptions.find((option) => option.value === lighting);
  const calculation = useMemo(
    () =>
      calculatePriceRange({
        area,
        roomType: "salon",
        location: "wroclaw",
        ceilingType,
        lighting,
        additionalSolutions: [],
      }),
    [area, ceilingType, lighting]
  );

  const whatsAppText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę sufitu napinanego:
- Powierzchnia: ${area} m²
- Rodzaj sufitu: ${selectedCeiling?.label ?? "MSD Premium"}
- Oświetlenie: ${selectedLighting?.label ?? "Bez oświetlenia"}
- Szacunkowy koszt: od ${formatCalculatorPrice(calculation.minTotal)} zł do ${formatCalculatorPrice(calculation.maxTotal)} zł`
  );

  return (
    <section id="calculator" className="section-pad scroll-mt-28 bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-gold">
              <Calculator size={28} aria-hidden="true" />
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">
              Mini-kalkulator
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight md:text-5xl">
              Sprawdź orientacyjny zakres ceny
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Ustaw podstawowe parametry. Pełny kalkulator z miastem, pomieszczeniem i dodatkami
              znajdziesz na stronie cennika.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-6">
            <p className="text-sm text-white/60">Szacunkowy koszt:</p>
            <p className="mt-2 text-3xl font-extrabold leading-tight text-gold md:text-5xl">
              od {formatCalculatorPrice(calculation.minTotal)} zł do{" "}
              {formatCalculatorPrice(calculation.maxTotal)} zł
            </p>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Zakres jest orientacyjny i zaokrąglony. Dokładną cenę potwierdzamy po pomiarze.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 text-ink shadow-soft md:p-8">
          <div className="space-y-7">
            <label className="block">
              <span className="flex items-center justify-between gap-4 text-sm font-bold">
                Powierzchnia pomieszczenia
                <span className="rounded-full bg-porcelain px-3 py-1 text-gold-dark">
                  {area} m²
                </span>
              </span>
              <input
                className="range mt-4 w-full"
                type="range"
                min="5"
                max="80"
                value={area}
                onChange={(event) => setArea(Number(event.target.value))}
                aria-label="Powierzchnia pomieszczenia"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold">Rodzaj sufitu</span>
              <select
                className="mt-3 w-full rounded-lg border border-line bg-white px-4 py-4 text-base font-semibold outline-none transition focus:border-gold"
                value={ceilingType}
                onChange={(event) => setCeilingType(event.target.value as CeilingType)}
                aria-label="Rodzaj sufitu"
              >
                {ceilingTypeOptions.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold">Oświetlenie</span>
              <select
                className="mt-3 w-full rounded-lg border border-line bg-white px-4 py-4 text-base font-semibold outline-none transition focus:border-gold"
                value={lighting}
                onChange={(event) => setLighting(event.target.value as LightingType)}
                aria-label="Oświetlenie"
              >
                {lightingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-5 text-center text-base font-medium leading-none text-white transition hover:bg-gold-dark"
              href={`https://wa.me/48791085385?text=${whatsAppText}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Wyślij wynik na WhatsApp"
            >
              <Send size={20} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-5 text-center text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="/ceny#calculator"
            >
              Pełny kalkulator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
