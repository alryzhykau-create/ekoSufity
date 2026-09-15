"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  consentAll,
  consentCategoryInfo,
  consentNone,
  OPEN_SETTINGS_EVENT,
  pushConsentUpdate,
  readStoredConsent,
  writeStoredConsent,
  type ConsentCategories,
  type OptionalCategory
} from "@/lib/consent/consent";
import { loadTrackingScripts } from "@/lib/consent/tracking";

type View = "hidden" | "banner" | "settings";

/* Baner cookies + okno ustawień. Renderuje się dopiero po zamontowaniu,
   bo decyzja „pokazać czy nie" zależy od localStorage, którego serwer
   nie widzi — inaczej hydracja rozjechałaby się z HTML-em. */
export function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [draft, setDraft] = useState<ConsentCategories>(consentNone);
  const firstControlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setDraft(stored.categories);
      loadTrackingScripts(stored.categories);
    } else {
      setView("banner");
    }
  }, []);

  /* Link „Ustawienia cookies" w stopce — otwiera okno z aktualnym wyborem. */
  useEffect(() => {
    function openSettings() {
      setDraft(readStoredConsent()?.categories ?? consentNone);
      setView("settings");
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  /* Fokus na pierwszy przełącznik, którym da się ruszyć — „Niezbędne" jest zablokowane. */
  useEffect(() => {
    if (view !== "settings") return;
    firstControlRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setView(readStoredConsent() ? "hidden" : "banner");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  const save = useCallback((categories: ConsentCategories) => {
    const stored = writeStoredConsent(categories);
    setDraft(stored.categories);
    pushConsentUpdate(stored.categories);
    loadTrackingScripts(stored.categories);
    setView("hidden");
  }, []);

  function toggle(key: OptionalCategory, on: boolean) {
    setDraft((prev) => ({ ...prev, [key]: on }));
  }

  if (view === "hidden") return null;

  if (view === "banner") {
    return (
      <div
        className="cookieBanner"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-text"
      >
        <div className="cookieBannerCopy">
          <p className="cookieTitle" id="cookie-banner-title">
            Pliki cookie
          </p>
          {/* Na telefonie baner zajmował pół ekranu — tam idzie krótsza wersja
              tekstu i etykiet. Obie wersje są w HTML, CSS pokazuje jedną
              (.cookieOnlyDesktop / .cookieOnlyMobile, próg 640px). */}
          <p className="cookieText cookieOnlyDesktop" id="cookie-banner-text">
            Używamy plików cookie, aby strona działała poprawnie oraz — za Twoją zgodą — do
            analizy ruchu i reklam. Szczegóły znajdziesz w{" "}
            <Link className="inlineLink" href="/polityka-prywatnosci">
              Polityce Prywatności
            </Link>
            . Możesz zaakceptować wszystkie, odrzucić opcjonalne albo wybrać własne ustawienia.
          </p>
          <p className="cookieText cookieOnlyMobile">
            Używamy plików cookie — do działania strony oraz, za Twoją zgodą, do analizy i
            reklam. Szczegóły w{" "}
            <Link className="inlineLink" href="/polityka-prywatnosci">
              Polityce Prywatności
            </Link>
            .
          </p>
        </div>
        {/* Trzy identyczne przyciski — odmowa ma dokładnie tę samą wagę co zgoda. */}
        <div className="cookieActions">
          <button className="btn btnOutlineGold" type="button" onClick={() => save(consentAll)}>
            {/* Jeden element w przycisku (flex) — inaczej „wszystkie" stałoby się
                osobnym elementem flex z odstępem 11px zamiast zwykłej spacji. */}
            <span>
              Akceptuj
              <span className="cookieOnlyDesktop"> wszystkie</span>
            </span>
          </button>
          <button className="btn btnOutlineGold" type="button" onClick={() => save(consentNone)}>
            {/* Jeden element w przycisku (flex) — inaczej „wszystkie" stałoby się
                osobnym elementem flex z odstępem 11px zamiast zwykłej spacji. */}
            <span>
              Odrzuć
              <span className="cookieOnlyDesktop"> wszystkie</span>
            </span>
          </button>
          <button className="btn btnOutlineGold" type="button" onClick={() => setView("settings")}>
            Ustawienia
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cookieModalBackdrop" role="presentation">
      <div
        className="cookieModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <p className="cookieTitle" id="cookie-settings-title">
          Ustawienia plików cookie
        </p>
        <p className="cookieText">
          Niezbędne są zawsze włączone. Pozostałe kategorie włączasz według uznania — decyzję
          możesz zmienić w każdej chwili w stopce strony.
        </p>

        <ul className="cookieCategoryList">
          {consentCategoryInfo.map((item, index) => {
            const locked = item.key === "necessary";
            const inputId = `cookie-cat-${item.key}`;

            return (
              <li className="cookieCategory" key={item.key}>
                <div className="cookieCategoryCopy">
                  <label htmlFor={inputId}>{item.label}</label>
                  <p>{item.description}</p>
                </div>
                <input
                  className="cookieSwitch"
                  id={inputId}
                  type="checkbox"
                  role="switch"
                  ref={index === 1 ? firstControlRef : undefined}
                  checked={locked ? true : draft[item.key]}
                  disabled={locked}
                  aria-checked={locked ? true : draft[item.key]}
                  onChange={(event) => {
                    if (!locked) toggle(item.key as OptionalCategory, event.target.checked);
                  }}
                />
              </li>
            );
          })}
        </ul>

        <p className="cookieText cookieModalNote">
          Szczegóły znajdziesz w{" "}
          <Link className="inlineLink" href="/polityka-prywatnosci">
            Polityce Prywatności
          </Link>
          .
        </p>

        <div className="cookieActions">
          <button className="btn btnOutlineGold" type="button" onClick={() => save(draft)}>
            Zapisz ustawienia
          </button>
          <button className="btn btnOutlineGold" type="button" onClick={() => save(consentAll)}>
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
