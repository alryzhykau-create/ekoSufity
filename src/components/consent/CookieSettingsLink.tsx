"use client";

import { OPEN_SETTINGS_EVENT } from "@/lib/consent/consent";

/* Link w stopce do zmiany decyzji o cookies. Stopka jest komponentem
   serwerowym, więc sam przycisk jest kliencki i tylko wysyła zdarzenie,
   które baner odbiera. */
export function CookieSettingsLink() {
  return (
    <button
      className="footerLinkButton"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Ustawienia cookies
    </button>
  );
}
