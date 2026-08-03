"use client";

import { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";

type CopyEmailCardProps = {
  email: string;
  label: string;
  note: string;
};

// Kafelek z adresem e-mail: kliknięcie kopiuje adres do schowka zamiast
// otwierać klienta poczty — mailto: bywa nieskonfigurowane i nic nie robi.
// Znak kopiowania siedzi w prawym górnym rogu, żeby nie dokładać wiersza
// i nie podnosić kafelka ponad sąsiednie.
export function CopyEmailCard({ email, label, note }: CopyEmailCardProps) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copy = async () => {
    const ok = await copyToClipboard(email);
    setState(ok ? "copied" : "error");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setState("idle"), 2400);
  };

  return (
    <button
      className="contactCard contactCardCopy"
      type="button"
      onClick={copy}
      aria-label={`Skopiuj adres e-mail ${email}`}
    >
      <span className="contactCardCopyIcon" aria-hidden="true">
        {state === "copied" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="11" height="11" rx="2.5" />
            <path
              d="M15 6.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <strong className="contactCardValue">{email}</strong>
      <span className="contactCardLabel">{label}</span>
      <span className="contactCardNote">
        {state === "idle" ? note : null}
        {state === "copied" ? "Adres skopiowany do schowka." : null}
        {state === "error" ? "Nie udało się skopiować — zaznacz adres ręcznie." : null}
      </span>
    </button>
  );
}
