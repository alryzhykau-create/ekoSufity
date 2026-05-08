"use client";

import { useEffect, useState } from "react";

const storageKey = "ekosufity-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(storageKey) !== "accepted");
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-[5.25rem] z-[60] px-4 md:bottom-5">
      <div className="mx-auto grid max-w-4xl gap-4 rounded-lg border border-line bg-white p-4 shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-5">
        <div>
          <p className="text-base font-extrabold text-ink">Pliki cookies</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Używamy niezbędnych plików cookies, aby strona działała prawidłowo i zapamiętała tę decyzję.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a
            className="inline-flex h-11 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-4 text-sm font-bold leading-none text-ink transition hover:border-gold hover:text-gold-dark"
            href="/polityka-prywatnosci"
          >
            Prywatność
          </a>
          <button
            className="inline-flex h-11 items-center justify-center rounded-lg bg-charcoal px-5 text-sm font-bold leading-none text-white transition hover:bg-black"
            type="button"
            onClick={() => {
              window.localStorage.setItem(storageKey, "accepted");
              setIsVisible(false);
            }}
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
