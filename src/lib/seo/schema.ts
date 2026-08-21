import { absoluteUrl, siteConfig, socialLinks } from "@/content/site";

/* Adres biura podajemy tylko tutaj, w JSON-LD — na widocznych stronach go nie
   ma i mieć nie ma. Adres rejestracji firmy (Arbuzowa) żyje osobno, wyłącznie
   w polityce prywatności, bo to wymóg RODO, a nie dane kontaktowe.
   Ocen (aggregateRating) tu nie ma celowo: opinie zbiera profil Google, a
   wystawianie ich we własnej rozmetce łamie wytyczne. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/#firma`,
    name: siteConfig.brand,
    url: siteConfig.baseUrl,
    telephone: siteConfig.contacts.phoneDisplay,
    email: siteConfig.contacts.email,
    image: absoluteUrl("/images/salon-22m2-photo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Strzegomska 204",
      postalCode: "54-432",
      addressLocality: "Wrocław",
      addressCountry: "PL"
    },
    /* Współrzędne budynku przy Strzegomskiej 204 (OpenStreetMap). */
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.1114551,
      longitude: 16.9598691
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Wrocław i miejscowości do 100 km",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.region
      }
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00"
      }
    ],
    /* Profil w Google i konta społecznościowe — po nich Google łączy stronę
       z tą samą firmą. */
    sameAs: [
      siteConfig.contacts.googleBusinessProfileHref,
      ...socialLinks.map((item) => item.href)
    ],
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

// Artykuł poradnika. Autor to konkretna osoba, bo cała treść jest pisana
// w pierwszej osobie — to samo nazwisko widnieje w karcie autora na stronie.
export function articleSchema(input: {
  path: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: absoluteUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "pl-PL",
    author: {
      "@type": "Person",
      name: "Aleks",
      jobTitle: "Specjalista od sufitów napinanych",
      worksFor: { "@type": "Organization", name: siteConfig.brand }
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.baseUrl
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(input.path)
    }
  };
}
