import type { ConsentCategories } from "@/lib/consent/consent";

/* MIEJSCE NA SKRYPTY ŚLEDZĄCE.

   Wywoływane po każdej zmianie zgody (po zapisie w banerze / oknie
   ustawień) i raz przy wejściu, gdy w localStorage leży ważna zgoda.
   Każdy skrypt ładuje się WYŁĄCZNIE, gdy jego kategoria jest włączona,
   i tylko raz na odsłonę strony — `loaded` pilnuje powtórek.

   Identyfikatory czytamy z .env (zob. .env.example); brak identyfikatora
   = skrypt się nie ładuje, więc na środowisku bez kluczy nic nie leci. */

const ids = {
  ga: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  tiktokPixel: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID
};

const loaded = {
  ga: false,
  googleAds: false,
  metaPixel: false,
  tiktokPixel: false
};

export function loadTrackingScripts(categories: ConsentCategories) {
  /* ——— Google Analytics 4 (kategoria: Analityczne) ———
     Tu wstaw ładowanie gtag.js z `ids.ga`:
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX">
       gtag('js', new Date()); gtag('config', ids.ga);
     Consent Mode jest już ustawiony w <head>, gtag.js go podchwyci. */
  if (categories.analytics && ids.ga && !loaded.ga) {
    loaded.ga = true;
  }

  /* ——— Google Ads (kategoria: Reklamowe) ———
     Tu wstaw gtag('config', ids.googleAds) — ten sam gtag.js co wyżej,
     więc jeśli GA już się załadował, wystarczy samo `config`. */
  if (categories.ads && ids.googleAds && !loaded.googleAds) {
    loaded.googleAds = true;
  }

  /* ——— Meta Pixel (kategoria: Reklamowe) ———
     Tu wstaw standardowy snippet fbq z `ids.metaPixel`
     i fbq('init', ids.metaPixel); fbq('track', 'PageView'). */
  if (categories.ads && ids.metaPixel && !loaded.metaPixel) {
    loaded.metaPixel = true;
  }

  /* ——— TikTok Pixel (kategoria: Reklamowe) ———
     Tu wstaw snippet ttq z `ids.tiktokPixel`
     i ttq.load(ids.tiktokPixel); ttq.page(). */
  if (categories.ads && ids.tiktokPixel && !loaded.tiktokPixel) {
    loaded.tiktokPixel = true;
  }
}
