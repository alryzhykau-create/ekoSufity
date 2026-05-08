import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQJsonLd } from "@/components/SeoJsonLd";
import { featuredFAQItems, type BasicFAQItem, type FAQItem as GlobalFAQItem } from "@/lib/faq";

export type FAQItem = BasicFAQItem | GlobalFAQItem;

export function FAQSection({
  items = featuredFAQItems,
  eyebrow = "FAQ",
  title = "Najczęstsze pytania",
  id = "faq",
}: {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section-pad scroll-mt-28">
      <FAQJsonLd items={items} />
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">{title}</h2>
        </div>
        <FAQAccordion items={items} />
        <div className="mt-6 rounded-lg border border-gold/30 bg-white p-5 text-center shadow-sm">
          <p className="font-bold text-ink">Nie znalazłeś odpowiedzi?</p>
          <a
            className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-charcoal px-5 text-sm font-bold leading-none text-white transition hover:bg-black"
            href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20mam%20pytanie%20o%20sufit%20napinany."
            target="_blank"
            rel="noreferrer"
          >
            Napisz do nas na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
