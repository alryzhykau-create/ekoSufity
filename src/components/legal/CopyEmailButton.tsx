"use client";

import { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";

type CopyEmailButtonProps = {
  email: string;
};

// Kopiuje adres do schowka zamiast otwierać klienta poczty — mailto: bywa
// nieskonfigurowane i wtedy kliknięcie nic nie daje.
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const flash = (next: "copied" | "error") => {
    setState(next);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setState("idle"), 2400);
  };

  const copy = async () => {
    const ok = await copyToClipboard(email);
    flash(ok ? "copied" : "error");
  };

  return (
    <>
      <button type="button" className="privacyCopyButton" onClick={copy}>
        {state === "copied" ? (
          <>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m5 12.5 4.5 4.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Skopiowano
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="9"
                y="9"
                width="11"
                height="11"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M15 6.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Skopiuj adres e-mail
          </>
        )}
      </button>
      <p className="privacyCopyStatus" role="status" aria-live="polite">
        {state === "copied" ? `Skopiowano: ${email}` : ""}
        {state === "error" ? `Nie udało się skopiować. Adres: ${email}` : ""}
      </p>
    </>
  );
}
