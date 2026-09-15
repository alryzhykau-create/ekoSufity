import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  // Folia nazywa się translucent, a slug mówił „podswietlany" — to samo słowo
  // co strona rozwiązania /rozwiazania/sufit-podswietlany. Adres poszedł za
  // nazwą, a stary zostaje na stałym przekierowaniu: linki z sieci, z artykułu
  // w poradniku i to, co już zaindeksowane, dalej działa.
  async redirects() {
    return [
      {
        source: "/rozwiazania/folie/podswietlany",
        destination: "/rozwiazania/folie/translucent",
        // 301, nie 308: klasyczny kod, który rozumie każdy crawler i narzędzie SEO.
        statusCode: 301
      },
      // Literówka w adresie: po polsku „gwiaździste", nie „gwiazdne". Stary
      // adres zostaje na stałym przekierowaniu z tego samego powodu co wyżej.
      {
        source: "/rozwiazania/gwiazdne-niebo",
        destination: "/rozwiazania/gwiazdziste-niebo",
        statusCode: 301
      },
      // Pierwsza wersja serwisu miała usługi pod /uslugi — dziś to /rozwiazania
      // z tymi samymi slugami. Wcześniej robiły to dwie strony z redirect()
      // (kod 307); tu jest na stałe i bez osobnych plików.
      {
        source: "/uslugi",
        destination: "/rozwiazania",
        statusCode: 301
      },
      {
        source: "/uslugi/:slug",
        destination: "/rozwiazania/:slug",
        statusCode: 301
      }
    ];
  }
};

export default nextConfig;
