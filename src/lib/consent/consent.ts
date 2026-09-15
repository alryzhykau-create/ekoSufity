/* Zgoda na cookies — jedno źródło prawdy dla banera, okna ustawień,
   Google Consent Mode v2 i skryptów śledzących.

   Zapis trzymamy w localStorage pod kluczem `cookie-consent`. Wersja
   (`CONSENT_VERSION`) rośnie, gdy zmienia się skład kategorii — stary
   zapis przestaje wtedy być ważny i baner pyta jeszcze raz. Zgoda
   wygasa po 12 miesiącach. */

export const CONSENT_STORAGE_KEY = "cookie-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_TTL_MS = 365 * 24 * 60 * 60 * 1000;

/* Zdarzenie, którym stopka (albo cokolwiek innego) prosi o otwarcie
   okna ustawień — baner go nasłuchuje. */
export const OPEN_SETTINGS_EVENT = "cookie-consent:open-settings";

export type OptionalCategory = "analytics" | "ads" | "adPersonalization";

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
  adPersonalization: boolean;
};

export type StoredConsent = {
  version: number;
  date: string;
  categories: ConsentCategories;
};

export const consentNone: ConsentCategories = {
  necessary: true,
  analytics: false,
  ads: false,
  adPersonalization: false
};

export const consentAll: ConsentCategories = {
  necessary: true,
  analytics: true,
  ads: true,
  adPersonalization: true
};

/* Kategorie widoczne w oknie ustawień — kolejność jak na ekranie. */
export const consentCategoryInfo: {
  key: keyof ConsentCategories;
  label: string;
  description: string;
}[] = [
  {
    key: "necessary",
    label: "Niezbędne",
    description: "Potrzebne do działania strony i formularza kontaktowego."
  },
  {
    key: "analytics",
    label: "Analityczne",
    description: "Pomagają nam zrozumieć, jak korzystasz ze strony."
  },
  {
    key: "ads",
    label: "Reklamowe",
    description: "Pozwalają wyświetlać trafniejsze reklamy."
  },
  {
    key: "adPersonalization",
    label: "Personalizacja reklam",
    description: "Dopasowanie treści reklam do Twoich zainteresowań."
  }
];

/* Google Consent Mode v2: cztery sygnały, wszystkie domyślnie „denied". */
export type GtagConsentState = "granted" | "denied";

export type GtagConsent = {
  analytics_storage: GtagConsentState;
  ad_storage: GtagConsentState;
  ad_user_data: GtagConsentState;
  ad_personalization: GtagConsentState;
};

/* Mapa kategorii na sygnały Google:
   Analityczne → analytics_storage, Reklamowe → ad_storage,
   Personalizacja reklam → ad_user_data + ad_personalization. */
export function toGtagConsent(categories: ConsentCategories): GtagConsent {
  const flag = (on: boolean): GtagConsentState => (on ? "granted" : "denied");

  return {
    analytics_storage: flag(categories.analytics),
    ad_storage: flag(categories.ads),
    ad_user_data: flag(categories.adPersonalization),
    ad_personalization: flag(categories.adPersonalization)
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/* Skrypt wstrzykiwany do <head> PRZED jakimkolwiek skryptem zewnętrznym.
   Zakłada dataLayer i zaślepkę gtag (żeby wywołania nie wywalały strony
   bez gtag.js), ustawia domyślne „denied", a gdy w localStorage leży
   ważna zgoda — od razu ją przywraca, zanim cokolwiek się załaduje. */
export const consentDefaultsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
try {
  var raw = localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});
  var saved = raw ? JSON.parse(raw) : null;
  if (saved && saved.version === ${CONSENT_VERSION} && saved.categories
      && Date.now() - new Date(saved.date).getTime() < ${CONSENT_TTL_MS}) {
    var c = saved.categories;
    gtag('consent','update',{
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.ads ? 'granted' : 'denied',
      ad_user_data: c.adPersonalization ? 'granted' : 'denied',
      ad_personalization: c.adPersonalization ? 'granted' : 'denied'
    });
  }
} catch (e) {}
`.trim();

/* Odczyt zapisu. Zwraca null, gdy zgody nie ma, jest w starej wersji,
   wygasła albo localStorage jest niedostępny (tryb prywatny itp.). */
export function readStoredConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const saved = JSON.parse(raw) as Partial<StoredConsent>;
    if (saved.version !== CONSENT_VERSION || !saved.categories || !saved.date) return null;

    const age = Date.now() - new Date(saved.date).getTime();
    if (!Number.isFinite(age) || age < 0 || age > CONSENT_TTL_MS) return null;

    return {
      version: CONSENT_VERSION,
      date: saved.date,
      categories: {
        necessary: true,
        analytics: Boolean(saved.categories.analytics),
        ads: Boolean(saved.categories.ads),
        adPersonalization: Boolean(saved.categories.adPersonalization)
      }
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(categories: ConsentCategories): StoredConsent {
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    categories: { ...categories, necessary: true }
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* Bez localStorage zgoda działa do odświeżenia strony — baner wróci. */
  }

  return stored;
}

/* Przekazuje wybór do Google Consent Mode. gtag to zaślepka z <head>,
   więc wywołanie jest bezpieczne także bez podpiętego gtag.js. */
export function pushConsentUpdate(categories: ConsentCategories) {
  window.gtag?.("consent", "update", toGtagConsent(categories));
}
