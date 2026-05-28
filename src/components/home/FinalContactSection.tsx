"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

type SubmitState = "idle" | "loading" | "success" | "error";

function FieldIcon({ type }: { type: "user" | "phone" | "pin" | "message" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 4.8 8.7 4c.6-.2 1.2.1 1.5.6l1 2.4c.2.5.1 1-.3 1.4L9.8 9.5a10.2 10.2 0 0 0 4.7 4.7l1.1-1.1c.4-.4.9-.5 1.4-.3l2.4 1c.5.2.8.9.6 1.5l-.8 2.1c-.2.6-.8 1-1.4.9C9.9 17.8 6.2 14.1 5.7 6.2c0-.6.3-1.2.9-1.4Z" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-5.3 6-11A6 6 0 0 0 6 10c0 5.7 6 11 6 11Z" />
        <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.9a3.8 3.8 0 0 1-3.8 3.8H11l-4.4 4v-4.3A3.8 3.8 0 0 1 5 11.1V6.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  );
}

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
          <span className="eyebrow">Bezpłatny pomiar</span>
          <h2>Umów pomiar sufitu we Wrocławiu lub okolicy</h2>
          <p>Zostaw numer telefonu. Oddzwonimy, doradzimy i przygotujemy wycenę po pomiarze.</p>

          <div className="finalContactBenefits">
            <div>
              <span className="benefitIcon" aria-hidden="true">
                <img src="/icon/final-contact/szybki-termin.svg" alt="" />
              </span>
              <strong>Szybki termin</strong>
              <p>Kontakt zwykle w ten sam dzień.</p>
            </div>
            <div>
              <span className="benefitIcon" aria-hidden="true">
                <img src="/icon/final-contact/bezplatnie.svg" alt="" />
              </span>
              <strong>Bezpłatnie</strong>
              <p>Pomiar i dojazd do 100 km.</p>
            </div>
            <div>
              <span className="benefitIcon" aria-hidden="true">
                <img src="/icon/final-contact/bez-zobowiazan.svg" alt="" />
              </span>
              <strong>Bez zobowiązań</strong>
              <p>Wycena na miejscu, bez presji.</p>
            </div>
          </div>
        </div>

        <form className="contactFormPanel" onSubmit={handleSubmit}>
          <label className="contactField">
            <FieldIcon type="user" />
            <input name="name" type="text" placeholder="Imię i nazwisko" required autoComplete="name" />
          </label>
          <label className="contactField">
            <FieldIcon type="phone" />
            <input name="phone" type="tel" placeholder="Numer telefonu" required autoComplete="tel" />
          </label>
          <label className="contactField">
            <FieldIcon type="pin" />
            <input name="city" type="text" placeholder="Miasto / miejscowość" autoComplete="address-level2" />
          </label>
          <label className="contactField">
            <FieldIcon type="message" />
            <textarea name="message" placeholder="Dodatkowe informacje (opcjonalnie)" rows={3} />
          </label>
          <label className="rodoField">
            <input name="rodo" type="checkbox" required />
            <span>Wyrażam zgodę na kontakt w sprawie pomiaru i wyceny sufitu napinanego.</span>
          </label>
          <button className="contactSubmit" type="submit" disabled={state === "loading"}>
            {state === "loading" ? "Wysyłanie..." : "Umów bezpłatny pomiar"}
            <span aria-hidden="true">→</span>
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
