import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { artykuly } from "@/content/poradnik";
import { siteConfig, whatsappUrl } from "@/content/site";
import { seoMeta } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Poradnik — sufity napinane bez tajemnic",
  description:
    "Ceny, wady, faktury i przebieg montażu sufitów napinanych — wyjaśnione wprost przez montażystę. Wrocław i okolice do 100 km.",
  ...seoMeta("/poradnik")
};

export default function PoradnikPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Poradnik", href: "/poradnik" }])]} />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Poradnik", href: "/poradnik" }]} />
            <span className="eyebrow">Poradnik</span>
            <h1>Poradnik — sufity napinane bez tajemnic</h1>
            <p className="pageLead">
              Cena, wady, wybór faktury i przebieg montażu — opisane tak, jak tłumaczę to klientom
              na pomiarze. Bez marketingu i bez ukrywania niewygodnych rzeczy.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, mam pytanie o sufit napinany.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <div className="card artykulHeroPhoto">
            <Image
              src="/images/salon-22m2-photo.png"
              alt="Salon z sufitem napinanym i oświetleniem LED"
              width={900}
              height={620}
              priority
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid2 sectionCards">
            {artykuly.map((artykul) => (
              <Link className="card miniCard" href={`/poradnik/${artykul.slug}`} key={artykul.slug}>
                <div className="miniCardImg">
                  <Image
                    src={artykul.imageSrc}
                    alt=""
                    width={640}
                    height={400}
                    sizes="(max-width: 900px) 100vw, 620px"
                  />
                </div>
                <h3>{artykul.cardTitle}</h3>
                <p>{artykul.cardCopy}</p>
                <p className="cardArrowText">Czytaj →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalContactSection alt />
    </>
  );
}
