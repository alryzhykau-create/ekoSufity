"use client";

import {
  additionalSolutionOptions,
  calculatePriceRange,
  ceilingTypeOptions,
  formatCalculatorPrice,
  lightingOptions,
  locationOptions,
  roomTypeOptions,
  type AdditionalSolution,
  type CeilingType,
  type LightingType,
  type LocationType,
  type RoomType,
} from "@/lib/calculator";
import { CalendarCheck, ChevronLeft, ChevronRight, MessageCircle, Send } from "lucide-react";
import { useMemo, useState } from "react";

const steps = [
  "Pomieszczenie",
  "Sufit",
  "Oświetlenie",
  "Rozwiązania",
  "Wynik",
];

export function FullPriceCalculator() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState(22);
  const [roomType, setRoomType] = useState<RoomType>("salon");
  const [location, setLocation] = useState<LocationType>("wroclaw");
  const [ceilingType, setCeilingType] = useState<CeilingType>("msd-premium");
  const [lighting, setLighting] = useState<LightingType>("brak");
  const [additionalSolutions, setAdditionalSolutions] = useState<AdditionalSolution[]>([]);

  const calculation = useMemo(
    () =>
      calculatePriceRange({
        area,
        roomType,
        location,
        ceilingType,
        lighting,
        additionalSolutions,
      }),
    [additionalSolutions, area, ceilingType, lighting, location, roomType]
  );

  const selectedRoom = roomTypeOptions.find((option) => option.value === roomType)?.label ?? "Salon";
  const selectedLocation = locationOptions.find((option) => option.value === location)?.label ?? "Wrocław";
  const selectedCeiling = ceilingTypeOptions.find((option) => option.value === ceilingType)?.label ?? "MSD Premium";
  const selectedLighting = lightingOptions.find((option) => option.value === lighting)?.label ?? "Bez oświetlenia";
  const selectedAddons = additionalSolutionOptions
    .filter((option) => additionalSolutions.includes(option.value))
    .map((option) => option.label);

  const whatsAppText = encodeURIComponent(
    `Dzień dobry, proszę o dokładną wycenę sufitu napinanego:
- Powierzchnia: ${area} m²
- Pomieszczenie: ${selectedRoom}
- Miasto: ${selectedLocation}
- Rodzaj sufitu: ${selectedCeiling}
- Oświetlenie: ${selectedLighting}
- Dodatkowe rozwiązania: ${selectedAddons.length ? selectedAddons.join(", ") : "brak"}
- Szacunkowy koszt z kalkulatora: od ${formatCalculatorPrice(calculation.minTotal)} zł do ${formatCalculatorPrice(calculation.maxTotal)} zł`
  );

  const goNext = () => setStep((value) => Math.min(value + 1, steps.length - 1));
  const goBack = () => setStep((value) => Math.max(value - 1, 0));

  const toggleAddon = (value: AdditionalSolution) => {
    setAdditionalSolutions((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  return (
    <div className="overflow-hidden rounded-lg bg-charcoal text-white shadow-soft">
      <div className="border-b border-white/10 p-5 md:p-7">
        <div className="grid gap-3 sm:grid-cols-5">
          {steps.map((label, index) => (
            <button
              key={label}
              className={[
                "rounded-lg border px-3 py-3 text-left text-sm font-bold transition",
                index === step
                  ? "border-gold bg-gold text-white"
                  : index < step
                    ? "border-gold/40 bg-white/10 text-gold"
                    : "border-white/10 bg-white/5 text-white/65",
              ].join(" ")}
              type="button"
              onClick={() => setStep(index)}
            >
              <span className="block text-xs opacity-80">Krok {index + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg bg-white p-5 text-ink md:p-7">
          {step === 0 ? (
            <div className="grid gap-6">
              <NumberField label="Powierzchnia" suffix="m²" value={area} min={5} max={180} onChange={setArea} />
              <SelectField label="Typ pomieszczenia" value={roomType} options={roomTypeOptions} onChange={(value) => setRoomType(value as RoomType)} />
              <SelectField label="Miasto" value={location} options={locationOptions} onChange={(value) => setLocation(value as LocationType)} />
            </div>
          ) : null}

          {step === 1 ? (
            <ChoiceGrid
              label="Rodzaj sufitu"
              value={ceilingType}
              options={ceilingTypeOptions.map((option) => ({
                label: option.label,
                value: option.value,
                description:
                  option.price <= 170
                    ? `orientacyjnie od ${option.price} zł/m²`
                    : "wycena indywidualna",
              }))}
              onChange={(value) => setCeilingType(value as CeilingType)}
            />
          ) : null}

          {step === 2 ? (
            <ChoiceGrid
              label="Oświetlenie"
              value={lighting}
              options={lightingOptions.map((option) => ({
                label: option.label,
                value: option.value,
                description:
                  option.value === "brak"
                    ? "bez dodatkowych punktów"
                    : "wpływa na zakres wyceny",
              }))}
              onChange={(value) => setLighting(value as LightingType)}
            />
          ) : null}

          {step === 3 ? (
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold-dark">
                Dodatkowe rozwiązania
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {additionalSolutionOptions.map((option) => {
                  const checked = additionalSolutions.includes(option.value);

                  return (
                    <label
                      key={option.value}
                      className={[
                        "flex cursor-pointer items-center gap-3 rounded-lg border p-4 font-bold transition",
                        checked
                          ? "border-gold bg-porcelain text-gold-dark"
                          : "border-line bg-white text-ink hover:border-gold",
                      ].join(" ")}
                    >
                      <input
                        className="h-4 w-4 accent-gold"
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddon(option.value)}
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold-dark">
                Wynik orientacyjny
              </p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-ink">
                Szacunkowy koszt: od {formatCalculatorPrice(calculation.minTotal)} zł do{" "}
                {formatCalculatorPrice(calculation.maxTotal)} zł
              </h3>
              <p className="mt-4 leading-7 text-muted">
                To zakres orientacyjny, zaokrąglony do pełnych setek. Dokładną kwotę potwierdzamy
                dopiero po pomiarze, sprawdzeniu profili, instalacji i warunków montażu.
              </p>
              <div className="mt-6 grid gap-3">
                <ResultLine label="Powierzchnia" value={`${area} m²`} />
                <ResultLine label="Pomieszczenie" value={selectedRoom} />
                <ResultLine label="Miasto" value={selectedLocation} />
                <ResultLine label="Sufit" value={selectedCeiling} />
                <ResultLine label="Oświetlenie" value={selectedLighting} />
                <ResultLine label="Dodatki" value={selectedAddons.length ? selectedAddons.join(", ") : "brak"} />
              </div>
            </div>
          ) : null}
        </div>

        <aside className="flex flex-col justify-between gap-7">
          <div>
            <p className="text-sm text-white/60">Aktualny zakres</p>
            <p className="mt-3 text-4xl font-extrabold leading-tight text-gold md:text-5xl">
              od {formatCalculatorPrice(calculation.minTotal)} zł
            </p>
            <p className="mt-1 text-2xl font-extrabold text-white/85">
              do {formatCalculatorPrice(calculation.maxTotal)} zł
            </p>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Kalkulator nie zastępuje pomiaru. Pokazuje realny przedział do rozmowy o materiale,
              świetle i rozwiązaniach technicznych.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-bold text-white">Co wpływa na wynik?</p>
            <div className="mt-4 space-y-3">
              {calculation.breakdown.map((item) => (
                <div key={item.label} className="text-sm">
                  <p className="font-bold text-white">{item.label}</p>
                  <p className="mt-1 text-white/60">
                    od {formatCalculatorPrice(item.minValue)} zł do {formatCalculatorPrice(item.maxValue)} zł
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-5 text-base font-medium leading-none text-white transition hover:bg-gold-dark"
              href={`https://wa.me/48791085385?text=${whatsAppText}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Wyślij wynik na WhatsApp"
            >
              <Send size={20} aria-hidden="true" />
              Wyślij wynik na WhatsApp
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white px-5 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="/kontakt"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Zamów bezpłatny pomiar
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 text-base font-medium leading-none text-white transition hover:border-gold hover:text-gold"
              href="/kontakt#formularz"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Poproś o dokładną wycenę
            </a>
          </div>
        </aside>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/10 p-5 md:p-7">
        <button
          className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-35"
          type="button"
          onClick={goBack}
          disabled={step === 0}
        >
          <ChevronLeft size={18} aria-hidden="true" />
          Wstecz
        </button>
        {step < steps.length - 1 ? (
          <button
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-gold px-5 text-sm font-bold text-white transition hover:bg-gold-dark"
            type="button"
            onClick={goNext}
          >
            Dalej
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        ) : (
          <button
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-ink transition hover:text-gold-dark"
            type="button"
            onClick={() => setStep(0)}
          >
            Przelicz od nowa
          </button>
        )}
      </div>
    </div>
  );
}

function NumberField({
  label,
  suffix,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-3 text-sm font-bold">
        {label}
        <span className="rounded-full bg-porcelain px-3 py-1 text-gold-dark">
          {value} {suffix}
        </span>
      </span>
      <input
        className="range mt-4 w-full"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold">{label}</span>
      <select
        className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-4 font-semibold outline-none transition focus:border-gold"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChoiceGrid({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string; description: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold-dark">{label}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <button
              key={option.value}
              className={[
                "rounded-lg border p-4 text-left transition",
                selected
                  ? "border-gold bg-porcelain text-gold-dark"
                  : "border-line bg-white text-ink hover:border-gold",
              ].join(" ")}
              type="button"
              onClick={() => onChange(option.value)}
            >
              <span className="block font-extrabold">{option.label}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0">
      <span className="font-bold text-muted">{label}</span>
      <span className="text-right font-extrabold text-ink">{value}</span>
    </div>
  );
}
