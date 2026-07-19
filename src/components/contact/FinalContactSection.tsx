"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

type SubmitState = "idle" | "loading" | "success" | "error";

export function FinalContactSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Nie udało się wysłać formularza.");
      }

      form.reset();
      setState("success");
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Nie udało się wysłać formularza. Spróbuj ponownie."
      );
    }
  }

  return (
    <section className="section finalCtaSection">
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

          <div className="contactChips">
            <a className="contactChipPhone" href={siteConfig.contacts.phoneHref}>
              <img src="/icon/contact-block/phone.svg" alt="" aria-hidden="true" />
              {siteConfig.contacts.phoneDisplay}
            </a>
            <span className="contactChipHours">🕘 Pon–Pt 9:00–20:00</span>
          </div>
        </div>

        <form className="contactFormPanel" onSubmit={handleSubmit}>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconUser" aria-hidden="true" />
            <input name="name" type="text" placeholder="Imię i nazwisko" required autoComplete="name" />
          </label>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconPhone" aria-hidden="true" />
            <input name="phone" type="tel" placeholder="Numer telefonu" required autoComplete="tel" />
          </label>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconPin" aria-hidden="true" />
            <input name="city" type="text" placeholder="Miasto / miejscowość" autoComplete="address-level2" />
          </label>
          <label className="contactField">
            <span className="fieldIcon contactIconMask contactIconMessage" aria-hidden="true" />
            <textarea name="message" placeholder="Dodatkowe informacje (opcjonalnie)" rows={3} />
          </label>
          <label className="rodoField">
            <input name="rodo" type="checkbox" required />
            <span>Wyrażam zgodę na kontakt w sprawie pomiaru i wyceny sufitu napinanego.</span>
          </label>
          <button className="contactSubmit" type="submit" disabled={state === "loading"}>
            {state === "loading" ? "Wysyłanie..." : "Poproś o kontakt"}
            <span className="buttonArrow contactIconMask contactIconArrow" aria-hidden="true" />
          </button>
          <a className="contactCallButton" href={siteConfig.contacts.phoneHref}>
            Zadzwoń teraz {siteConfig.contacts.phoneDisplay}
          </a>
          {state === "error" ? <p className="formError">{errorMessage}</p> : null}
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
