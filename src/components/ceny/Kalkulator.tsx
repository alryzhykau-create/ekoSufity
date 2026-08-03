"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";

// Ceny jednostkowe — trzymane w jednym miejscu, żeby łatwo je zmienić.
const PRICES = {
  sufitPerM2: 120,
  freeNarozniki: 4,
  extraNaroznik: 30,
  ledLiniaPerMb: 250,
  punktPerSzt: 100,
  karniszPerMb: 300,
  minOrder: 1200,
  upperMargin: 1.25
} as const;

// Pusty / niepoprawny / ujemny ciąg traktujemy jako 0.
// Kalkulator liczy w pełnych jednostkach, więc bierzemy liczbę całkowitą.
function toNumber(value: string): number {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

// Liczby całkowite ze spacją jako separatorem tysięcy: 2400 -> "2 400".
function formatZl(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function Kalkulator() {
  const [powierzchnia, setPowierzchnia] = useState("");
  const [narozniki, setNarozniki] = useState("4");
  const [linieLed, setLinieLed] = useState("0");
  const [punkty, setPunkty] = useState("0");
  const [karnisz, setKarnisz] = useState("0");

  // Same cyfry: bez minusa i bez części dziesiętnej — „11,5 m²" staje się „11".
  const handleChange =
    (setter: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      const [whole] = event.target.value.split(/[.,]/);
      setter(whole.replace(/\D/g, ""));
    };

  const area = toNumber(powierzchnia);
  const corners = toNumber(narozniki);
  const led = toNumber(linieLed);
  const points = toNumber(punkty);
  const curtain = toNumber(karnisz);

  const sufitCost = area * PRICES.sufitPerM2;
  const cornersCost =
    corners > PRICES.freeNarozniki ? (corners - PRICES.freeNarozniki) * PRICES.extraNaroznik : 0;
  const ledCost = led * PRICES.ledLiniaPerMb;
  const pointsCost = points * PRICES.punktPerSzt;
  const curtainCost = curtain * PRICES.karniszPerMb;

  const rawSum = sufitCost + cornersCost + ledCost + pointsCost + curtainCost;
  const sum = Math.max(rawSum, PRICES.minOrder);
  const lower = Math.round(sum);
  const upper = Math.round(sum * PRICES.upperMargin);

  const hasArea = area > 0;

  // Rozbicie kosztu — wyłącznie prezentacja policzonych wyżej wartości.
  const breakdown: Array<[string, number]> = [];
  if (sufitCost > 0) breakdown.push([`Sufit ${area} m²`, sufitCost]);
  if (cornersCost > 0) breakdown.push([`Dodatkowe narożniki (${corners - PRICES.freeNarozniki})`, cornersCost]);
  if (ledCost > 0) breakdown.push([`Linie LED ${led} mb`, ledCost]);
  if (pointsCost > 0) breakdown.push([`Punkty światła ${points} szt.`, pointsCost]);
  if (curtainCost > 0) breakdown.push([`Ukryty karnisz ${curtain} mb`, curtainCost]);
  if (hasArea && rawSum < PRICES.minOrder) breakdown.push(["Minimalne zamówienie", PRICES.minOrder]);

  // Wiadomość na WhatsApp z aktualnych wartości kalkulatora — tylko wypełnione pola.
  const waLines = [
    "Dzień dobry! Interesuje mnie wycena sufitu napinanego.",
    `Powierzchnia: ${area} m²`
  ];
  if (corners > 0) waLines.push(`Narożniki: ${corners}`);
  if (led > 0) waLines.push(`Linie LED: ${led} mb`);
  if (points > 0) waLines.push(`Punkty światła: ${points} szt.`);
  if (curtain > 0) waLines.push(`Ukryty karnisz: ${curtain} mb`);
  waLines.push(`Orientacyjny koszt z kalkulatora: ${formatZl(lower)}–${formatZl(upper)} zł.`);
  waLines.push("Proszę o dokładną wycenę.");
  const waMessage = waLines.join("\n");

  return (
    <>
      <SectionHeader eyebrow="Kalkulator" title="Oblicz orientacyjny koszt" />

      <div className="kalkulator">
        <div className="card kalkulatorForm">
          <div className="kalkulatorFields">
            <label className="kalkulatorField kalkulatorField--full">
              <span className="kalkulatorLabel">Powierzchnia pomieszczenia</span>
              <span className="kalkulatorInputWrap">
                <input
                  className="kalkulatorInput"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  placeholder="np. 20"
                  value={powierzchnia}
                  onChange={handleChange(setPowierzchnia)}
                />
                <span className="kalkulatorUnit" aria-hidden="true">
                  m²
                </span>
              </span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Liczba narożników</span>
              <span className="kalkulatorInputWrap">
                <input
                  className="kalkulatorInput"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={narozniki}
                  onChange={handleChange(setNarozniki)}
                />
                <span className="kalkulatorUnit" aria-hidden="true">
                  szt.
                </span>
              </span>
              <span className="kalkulatorHint">4 narożniki w cenie, każdy dodatkowy +30 zł</span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Linie świetlne LED</span>
              <span className="kalkulatorInputWrap">
                <input
                  className="kalkulatorInput"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={linieLed}
                  onChange={handleChange(setLinieLed)}
                />
                <span className="kalkulatorUnit" aria-hidden="true">
                  mb
                </span>
              </span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Punkty światła</span>
              <span className="kalkulatorInputWrap">
                <input
                  className="kalkulatorInput"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={punkty}
                  onChange={handleChange(setPunkty)}
                />
                <span className="kalkulatorUnit" aria-hidden="true">
                  szt.
                </span>
              </span>
              <span className="kalkulatorHint">oprawy, lampy, żyrandol</span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Ukryty karnisz z LED</span>
              <span className="kalkulatorInputWrap">
                <input
                  className="kalkulatorInput"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={karnisz}
                  onChange={handleChange(setKarnisz)}
                />
                <span className="kalkulatorUnit" aria-hidden="true">
                  mb
                </span>
              </span>
            </label>
          </div>
        </div>

        <aside className="kalkulatorResult">
          <span className="priceKicker">Szacunkowy koszt</span>
          <div className="kalkulatorResultValue">
            {hasArea ? (
              <>
                <strong>{formatZl(lower)}</strong>
                <span className="kalkulatorResultRange">– {formatZl(upper)} zł</span>
              </>
            ) : (
              <span className="kalkulatorResultEmpty">Podaj powierzchnię</span>
            )}
          </div>

          {breakdown.length > 0 ? (
            <div className="kalkulatorLines">
              {breakdown.map(([label, value]) => (
                <div className="kalkulatorLine" key={label}>
                  <span>{label}</span>
                  <span>{formatZl(value)} zł</span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="kalkulatorActions">
            {hasArea ? (
              <Button className="kalkulatorWaCta" href={whatsappUrl(waMessage)}>
                <CtaIcon name="whatsapp" />
                Wyślij wyliczenie na WhatsApp
              </Button>
            ) : (
              /* Bez metrażu nie ma czego wysyłać, więc zostaje ogólna wiadomość —
                 ale napis dalej mówi wprost, że przycisk prowadzi na WhatsApp. */
              <Button
                className="kalkulatorWaCta"
                href={whatsappUrl(
                  "Dzień dobry, chcę umówić bezpłatny pomiar sufitu napinanego."
                )}
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            )}
            <Button href={siteConfig.contacts.phoneHref} variant="secondary">
              <CtaIcon name="phone" />
              Zadzwoń
            </Button>
          </div>
        </aside>
      </div>

      <p className="kalkulatorResultNote">
        Wstępny szacunek dla typowego pomieszczenia. Minimalne zamówienie 1200 zł. Dokładną cenę
        podajemy po bezpłatnym pomiarze.
      </p>
    </>
  );
}
