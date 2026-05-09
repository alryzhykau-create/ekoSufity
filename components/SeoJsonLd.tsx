import type { BasicFAQItem } from "@/lib/faq";
import { featuredFAQItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function FAQJsonLd({ items = featuredFAQItems }: { items?: BasicFAQItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const businessId = `${siteConfig.url}/#business`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": businessId,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: siteConfig.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.streetAddress,
          postalCode: siteConfig.postalCode,
          addressLocality: siteConfig.city,
          addressCountry: siteConfig.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "PL",
          availableLanguage: ["pl"],
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Wrocław",
          },
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 51.1079,
              longitude: 17.0385,
            },
            geoRadius: 100000,
          },
        ],
        serviceType: "Sufity napinane",
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href.startsWith("http") ? item.href : `${siteConfig.url}${item.href}`,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name = "Montaż sufitów napinanych we Wrocławiu",
  areaServed = siteConfig.areaServed,
}: {
  name?: string;
  areaServed?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name,
        description: siteConfig.description,
        serviceType: "Sufity napinane",
        areaServed,
        provider: {
          "@id": `${siteConfig.url}/#business`,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          price: "120",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "120",
            priceCurrency: "PLN",
            unitText: "m²",
          },
          availability: "https://schema.org/InStock",
        },
      }}
    />
  );
}

export function SeoJsonLd() {
  return <ServiceJsonLd />;
}
