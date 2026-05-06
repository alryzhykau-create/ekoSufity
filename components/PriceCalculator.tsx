"use client";

import { Calculator, Send } from "lucide-react";
import { useMemo, useState } from "react";

const ceilingTypes = [
  { label: "Sufit matowy", price: 120 },
  { label: "Sufit satynowy", price: 140 },
  { label: "Sufit z linią LED", price: 170 },
  { label: "Sufit premium / niestandardowy", price: 190 },
];

const formatPrice = (value: number) => new Intl.NumberFormat("pl-PL").format(value);

export function PriceCalculator() {
  const [area, setArea] = useState(20);
  const [typeIndex, setTypeIndex] = useState(0);
  const [ledMeters, setLedMeters] = useState(0);
  const [lamps, setLamps] = useState(0);

  const selectedType = ceilingTypes[typeIndex];
  const finalTotal = useMemo(() => {
    const base = area * selectedType.price;
    const led = ledMeters * 150;
    const lighting = lamps * 70;
    return Math.max(base + led + lighting, 1200);
  }, [area, selectedType.price, ledMeters, lamps]);

  const whatsAppText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę sufitu napinanego:
- Powierzchnia: ${area} m²
- Rodzaj: ${selectedType.label}
- Linie LED: ${ledMeters} mb
- Lampy: ${lamps} szt.
- Orientacyjna cena z kalkulatora: ${finalTotal} zł`
  );

  return (
    <section id="calculator" className="section-pad scroll-mt-28 bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-gold">
              <Calculator size={28} aria-hidden="true" />
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">
              Kalkulator ceny
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight md:text-5xl">
              Sprawdź orientacyjną cenę sufitu
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Ustaw parametry pomieszczenia i poznaj przybliżony koszt realizacji przed
              bezpłatnym pomiarem.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <p className="text-sm text-white/60">Orientacyjna cena:</p>
            <p className="mt-2 text-4xl font-extrabold text-gold md:text-5xl">
              od {formatPrice(finalTotal)} zł
            </p>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Cena orientacyjna. Dokładną wycenę przygotujemy po bezpłatnym pomiarze.
            </p>
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-5 text-ink shadow-soft md:p-8">
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
                className="mt-3 w-full rounded-2xl border border-line bg-white px-4 py-4 text-base font-semibold outline-none transition focus:border-gold"
                value={typeIndex}
                onChange={(event) => setTypeIndex(Number(event.target.value))}
                aria-label="Rodzaj sufitu"
              >
                {ceilingTypes.map((type, index) => (
                  <option key={type.label} value={index}>
                    {type.label} - {type.price} zł/m²
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="flex items-center justify-between gap-4 text-sm font-bold">
                Linie LED
                <span className="rounded-full bg-porcelain px-3 py-1 text-gold-dark">
                  {ledMeters} mb
                </span>
              </span>
              <input
                className="range mt-4 w-full"
                type="range"
                min="0"
                max="40"
                value={ledMeters}
                onChange={(event) => setLedMeters(Number(event.target.value))}
                aria-label="Linie LED"
              />
            </label>

            <label className="block">
              <span className="flex items-center justify-between gap-4 text-sm font-bold">
                Punkty świetlne / lampy
                <span className="rounded-full bg-porcelain px-3 py-1 text-gold-dark">
                  {lamps} szt.
                </span>
              </span>
              <input
                className="range mt-4 w-full"
                type="range"
                min="0"
                max="20"
                value={lamps}
                onChange={(event) => setLamps(Number(event.target.value))}
                aria-label="Punkty świetlne lub lampy"
              />
            </label>
          </div>

          <a
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-center font-extrabold text-white transition hover:bg-gold-dark"
            href={`https://wa.me/48791085385?text=${whatsAppText}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Wyślij wycenę na WhatsApp"
          >
            <Send size={20} aria-hidden="true" />
            Wyślij wycenę na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
