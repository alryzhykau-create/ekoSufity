"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
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
function toNumber(value: string): number {
  const parsed = Number.parseFloat(value);
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

  // Nie pozwalamy wpisać wartości ujemnej.
  const handleChange =
    (setter: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      const next = event.target.value;
      if (next === "" || Number.parseFloat(next) >= 0) {
        setter(next);
      }
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

      <div className="kalkulator" style={{ marginTop: 34 }}>
        <div className="card kalkulatorForm">
          <div className="kalkulatorFields">
            <label className="kalkulatorField kalkulatorField--full">
              <span className="kalkulatorLabel">Powierzchnia pomieszczenia (m²)</span>
              <input
                className="kalkulatorInput"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                placeholder="np. 20"
                value={powierzchnia}
                onChange={handleChange(setPowierzchnia)}
              />
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Liczba narożników</span>
              <input
                className="kalkulatorInput"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={narozniki}
                onChange={handleChange(setNarozniki)}
              />
              <span className="kalkulatorHint">4 narożniki w cenie, każdy dodatkowy +30 zł</span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Linie świetlne LED (mb)</span>
              <input
                className="kalkulatorInput"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                value={linieLed}
                onChange={handleChange(setLinieLed)}
              />
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Punkty światła (szt.)</span>
              <input
                className="kalkulatorInput"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={punkty}
                onChange={handleChange(setPunkty)}
              />
              <span className="kalkulatorHint">oprawy, lampy, żyrandol</span>
            </label>

            <label className="kalkulatorField">
              <span className="kalkulatorLabel">Ukryty karnisz z LED (mb)</span>
              <input
                className="kalkulatorInput"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                value={karnisz}
                onChange={handleChange(setKarnisz)}
              />
            </label>
          </div>
        </div>

        <aside className="card kalkulatorResult">
          <span className="softLabel">Szacunkowy koszt</span>
          <div className="kalkulatorResultValue">
            {hasArea ? (
              <>
                Orientacyjnie: {formatZl(lower)} – {formatZl(upper)} zł
              </>
            ) : (
              "Podaj powierzchnię"
            )}
          </div>
          <p className="kalkulatorResultNote">
            To wstępny szacunek dla typowego pomieszczenia. Minimalne zamówienie 1200 zł. Dokładną
            cenę podajemy po bezpłatnym pomiarze.
          </p>
          <div className="buttonRow">
            {hasArea ? (
              <Button href={whatsappUrl(waMessage)}>Wyślij wyliczenie na WhatsApp</Button>
            ) : (
              <Button
                href={whatsappUrl(
                  "Dzień dobry, chcę umówić bezpłatny pomiar sufitu napinanego."
                )}
              >
                Umów bezpłatny pomiar
              </Button>
            )}
            <Button href={siteConfig.contacts.phoneHref} variant="secondary">
              Zadzwoń
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
