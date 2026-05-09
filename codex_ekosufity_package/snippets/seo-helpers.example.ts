// Example helpers for EkoSufity SEO. Adapt to the actual project structure.

export type BusinessData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  areaServed: string[];
  priceRange: string;
};

export function absoluteUrl(path: string, siteUrl: string) {
  const normalizedBase = siteUrl.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export function createLocalBusinessJsonLd(business: BusinessData, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strzegomska 204',
      postalCode: '53-611',
      addressLocality: 'Wrocław',
      addressCountry: 'PL',
    },
    areaServed: business.areaServed,
    priceRange: business.priceRange,
    openingHours: 'Mo-Fr 09:00-20:00',
  };
}

export function createFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
