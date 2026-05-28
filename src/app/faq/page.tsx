import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageFaqs } from "@/content/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Najczęstsze pytania o sufity napinane",
  description:
    "FAQ EkoSufity: cena, pomiar, dojazd, gwarancja, LED, WhatsApp i status wizualizacji."
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "FAQ", href: "/faq" }]), faqSchema([...homepageFaqs])]} />

      <section className="pageHero">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
          <span className="eyebrow">FAQ</span>
          <h1>Najczęstsze pytania o sufity napinane</h1>
          <p className="pageLead">
            Odpowiadamy na najważniejsze pytania o koszt, pomiar, dojazd, gwarancję i kontakt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Pytania przed kontaktem" />
          <div className="faqGrid">
            {homepageFaqs.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
