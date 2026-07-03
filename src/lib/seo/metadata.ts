import type { Metadata } from "next";

// Zwraca canonical + og:url dla konkretnej ścieżki.
// Ścieżki są względne — Next.js rozwiązuje je względem `metadataBase`
// ustawionego w root layout (https://ekosufity.pl).
export function seoMeta(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: {
      url: path,
      siteName: "EkoSufity",
      locale: "pl_PL",
      type: "website"
    }
  };
}
