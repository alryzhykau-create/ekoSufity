import type { Metadata } from "next";

/* Jeden obraz podglądu dla całej strony — plik leży w public/og-image.jpg.
   Ścieżka jest względna, Next.js dokleja `metadataBase` z root layoutu. */
export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Sufity napinane we Wrocławiu — ekoSufity"
};

/* Next.js nie scala `openGraph` strony z tym z layoutu, tylko podmienia
   cały obiekt. Dlatego obraz podglądu wraca tutaj — każda strona, która
   ustawia własne metadane przez `seoMeta`, dostaje go z powrotem. */
export const ogSite: NonNullable<Metadata["openGraph"]> = {
  siteName: "ekoSufity",
  locale: "pl_PL",
  type: "website",
  images: [ogImage]
};

export const twitterSite: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  images: [ogImage.url]
};

// Zwraca canonical + og:url dla konkretnej ścieżki.
// Ścieżki są względne — Next.js rozwiązuje je względem `metadataBase`
// ustawionego w root layout (https://ekosufity.pl).
export function seoMeta(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: {
      url: path,
      ...ogSite
    },
    twitter: { ...twitterSite }
  };
}
