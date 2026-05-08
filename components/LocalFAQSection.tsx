import { FAQSection } from "@/components/sections/FAQSection";
import { getFAQItemsByCategory } from "@/lib/faq";
import type { LocationItem } from "@/lib/locations";

export function LocalFAQSection({ location }: { location: LocationItem }) {
  const faqItems = [
    ...location.faq,
    ...getFAQItemsByCategory("cena-i-wycena").slice(0, 1),
    ...getFAQItemsByCategory("montaz").slice(0, 1),
  ];

  return <FAQSection items={faqItems} title={`FAQ: sufity napinane ${location.name}`} />;
}
