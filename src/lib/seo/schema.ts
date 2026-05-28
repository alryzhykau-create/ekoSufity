import { absoluteUrl, siteConfig } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url: siteConfig.baseUrl,
    telephone: siteConfig.contacts.phoneDisplay,
    email: siteConfig.contacts.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Wrocław i miejscowości do 100 km"
    },
    knowsLanguage: siteConfig.languages,
    priceRange: "średnio ok. 120 zł/m²",
    description:
      "Montaż sufitów napinanych we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis i wycena po sprawdzeniu pomieszczenia."
  };
}

export function serviceSchema(path: string, name = "Montaż sufitów napinanych") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brand,
      telephone: siteConfig.contacts.phoneDisplay
    },
    areaServed: "Wrocław i do 100 km od miasta",
    url: absoluteUrl(path),
    serviceType: "Sufity napinane"
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: absoluteUrl("/")
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: absoluteUrl(item.href)
      }))
    ]
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
