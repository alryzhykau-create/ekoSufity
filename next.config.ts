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
      }
    ];
  }
};

export default nextConfig;
