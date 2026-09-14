"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { siteConfig, whatsappUrl } from "@/content/site";

type SubmitState = "idle" | "loading" | "success" | "error";

/* Po tylu sekundach bez odpowiedzi serwera uznajemy wysyłkę za nieudaną —
   inaczej zawieszone połączenie trzymałoby klienta na „Wysyłanie..." bez końca. */
const CZAS_NA_ODPOWIEDZ_MS = 15000;

/* `alt` steruje tłem sekcji w naprzemiennej zebrze — domyślnie krem,
   strona przekazuje false, gdy jej rytm kończy się na bieli. */
export function FinalContactSection({ alt = true }: { alt?: boolean }) {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const kontroler = new AbortController();
    const zegar = setTimeout(() => kontroler.abort(), CZAS_NA_ODPOWIEDZ_MS);

    /* Każde niepowodzenie — 503 bez kluczy, 500, brak sieci, przekroczony
       czas — kończy się tym samym blokiem z telefonem i WhatsAppem. Pola
       zostają wypełnione, a przycisk znów aktywny, żeby dało się spróbować
       jeszcze raz. Szczegół techniczny błędu klientowi nic nie mówi. */
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        signal: kontroler.signal
      });
      const result = (await response.json()) as { ok?: boolean };

      if (!response.ok || !result.ok) {
        throw new Error("Wysyłka nieudana");
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    } finally {
      clearTimeout(zegar);
    }
  }

  return (
    <section className={`section finalCtaSection${alt ? " sectionAlt" : ""}`}>
      <div className="container finalContactCard">
        <div className="finalContactCopy">
          <span className="eyebrow">Kontakt z fachowcem</span>
          <h2 aria-label="Masz pytanie o sufit, doradzimy konkretnie">
            Masz pytanie o sufit?
            <span>Doradzimy konkretnie</span>
          </h2>
          <p>
            Zostaw numer i miasto. Oddzwonimy, odpowiemy na pytania i podpowiemy, jakie rozwiązanie
            ma sens w Twoim wnętrzu. Wolisz bez formularza? Zadzwoń od razu.
          </p>

          {/* Telefon i WhatsApp parą — kto nie chce dzwonić, pisze. Godziny i rok
              schodzą do linii pod przyciskami, żeby rząd został jednym rzędem. */}
          <div className="contactChips">
            <a className="contactChipPhone" href={siteConfig.contacts.phoneHref}>
              <img src="/icon/contact-block/phone.svg" alt="" aria-hidden="true" />
              {siteConfig.contacts.phoneDisplay}
            </a>
            <a
              className="contactChipWa"
              href={whatsappUrl("Dzień dobry, mam pytanie o sufit napinany.")}
            >
              <CtaIcon name="whatsapp" />
              Napisz na WhatsApp
            </a>
          </div>

          <p className="contactHoursLine">
            Pon–Pt 9:00–20:00 · montujemy sufity napinane od 2020 roku
          </p>
        </div>

        <form className="contactFormPanel" onSubmit={handleSubmit}>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconUser" aria-hidden="true" />
            <input name="name" type="text" placeholder="Imię i Nazwisko" required autoComplete="name" />
          </label>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconPhone" aria-hidden="true" />
            <input name="phone" type="tel" placeholder="Numer telefonu" required autoComplete="tel" />
          </label>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconMessage" aria-hidden="true" />
            <textarea
              name="message"
              placeholder={"Wiadomość — opisz pomieszczenie\n(np. Wrocław, salon 25 m², LED)"}
              rows={3}
            />
          </label>
          <label className="rodoField">
            <input name="rodo" type="checkbox" required />
            <span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i
              przygotowania wyceny zgodnie z{" "}
              <Link href="/polityka-prywatnosci">Polityką Prywatności</Link>.
            </span>
          </label>
          <button className="contactSubmit" type="submit" disabled={state === "loading"}>
            {state === "loading" ? "Wysyłanie..." : "Poproś o kontakt"}
            <span className="buttonArrow contactIconMask contactIconArrow" aria-hidden="true" />
          </button>
          {state === "error" ? (
            <div className="formErrorBox" role="alert">
              <p className="formErrorTitle">Nie udało się wysłać formularza</p>
              <p className="formErrorText">
                Przepraszamy, coś poszło nie tak. Zadzwoń lub napisz na WhatsApp — odpowiem od
                razu.
              </p>
              <div className="formErrorActions">
                <a className="btn btnPrimary heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                  <CtaIcon name="phone" />
                  Zadzwoń: {siteConfig.contacts.phoneDisplay}
                </a>
                <a
                  className="btn btnSecondary heroWhatsappCta waHoverFill"
                  href={whatsappUrl("Dzień dobry, chcę zapytać o wycenę sufitu napinanego")}
                >
                  <CtaIcon name="whatsapp" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
          ) : null}
        </form>
      </div>

      {state === "success" ? (
        <div className="successModalBackdrop" role="presentation">
          <div className="successModal" role="dialog" aria-modal="true" aria-labelledby="success-title">
            <button className="successClose" type="button" onClick={() => setState("idle")} aria-label="Zamknij">
              ×
            </button>
            <div className="successIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m7.5 12.3 3 3 6-6" />
              </svg>
            </div>
            <h3 id="success-title">Dziękujemy za przesłanie zapytania!</h3>
            <p>
              Odpowiemy tak szybko, jak to możliwe. Jeśli Twoje zapytanie wymaga szybkiej odpowiedzi,
              zadzwoń do nas pod numer tel:
            </p>
            <a href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</a>
            <button type="button" onClick={() => setState("idle")}>
              Gotowe
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
