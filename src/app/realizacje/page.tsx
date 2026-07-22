import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { seoMeta } from "@/lib/seo/metadata";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { SocialBanner } from "@/components/home/SocialBanner";
import { RealizacjeGallery } from "@/components/realizacje/RealizacjeGallery";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig, whatsappUrl } from "@/content/site";

// Karty „Zobacz też" — te same przejścia, co wcześniejsze przyciski.
const nextSteps = [
  ["Rozwiązania", "Poznaj wszystkie rozwiązania i dodatki.", "Zobacz rozwiązania →", "/rozwiazania"],
  ["Ceny", "Sprawdź, od czego zależy koszt.", "Zobacz ceny →", "/ceny"],
  ["Kontakt", "Masz podobny efekt? Napisz do nas.", "Napisz do nas →", "/kontakt"]
];

export const metadata: Metadata = {
  title: "Realizacje i inspiracje sufitów napinanych",
  description:
    "Zobacz inspiracje i docelowo realne realizacje sufitów napinanych: mieszkania, domy, lokale, restauracje i pomieszczenia wilgotne.",
  ...seoMeta("/realizacje")
};

type PageProps = {
  searchParams: Promise<{ room?: string; faktura?: string }>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { room, faktura } = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Realizacje", href: "/realizacje" }])} />

      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Realizacje", href: "/realizacje" }]} />
            <span className="eyebrow">Galeria</span>
            <h1>Realizacje i inspiracje sufitów napinanych</h1>
            <p className="pageLead">
              Pokazujemy przykładowe efekty, inspiracje i docelowo realne realizacje EkoSufity.
              Wizualizacje oznaczamy oddzielnie, aby było jasne, czy oglądasz inspirację, czy
              wykonany projekt.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, chcę zapytać o podobny efekt sufitu.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          {/* Czwarty wariant pary zdjęć — mniejsze wychodzi w prawo u góry. */}
          <div className="pageHeroPhotos pageHeroPhotos--topRight">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/salon-22m2-photo.png"
                alt="Salon z sufitem napinanym i linią świetlną"
                width={900}
                height={675}
                priority
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/mieszkanie-45m2-led-photo.png"
                alt="Mieszkanie z sufitem napinanym i LED"
                width={400}
                height={400}
                sizes="(max-width: 900px) 52vw, 235px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Realizacje"
            title="Inspiracje i przykładowe efekty"
            lead="Materiały wizualne z obecnego archiwum traktujemy jako wizualizacje i inspiracje. Realne zdjęcia wykonanych prac będą oznaczone jako „Realizacja EkoSufity”."
          />
          <RealizacjeGallery initialRoom={room} initialFinish={faktura} />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader eyebrow="Nawigacja" title="Zobacz też" />
          <div className="grid3 sectionCards">
            {nextSteps.map(([title, copy, arrow, href]) => (
              <Link className="card miniCard" href={href} key={href}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <p className="cardArrowText">{arrow}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      <FinalContactSection />
    </>
  );
}
