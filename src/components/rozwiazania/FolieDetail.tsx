import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

const HREF = "/rozwiazania/folie";

const producers = [
  {
    id: "msd",
    title: "MSD",
    text: "MSD to chińska marka i jeden z największych producentów folii do sufitów napinanych na świecie. To nasz podstawowy materiał — najlepszy stosunek jakości do ceny. Linia Premium daje ponad 120 kolorów oraz faktury mat, satyna i połysk, a także wydruk, transparent i efekty dekoracyjne. Folia ma oznaczenia chroniące przed podróbką, klasę ognioodporności B1 i certyfikaty ekologiczne."
  },
  {
    id: "bauf",
    title: "Bauf",
    text: "Bauf to niemiecka marka i technologia — folia produkowana według europejskich norm. Dostępna w kilku seriach różniących się grubością i gęstością materiału. Każde 100 cm oznaczone jest zabezpieczeniem przed podróbką, a materiał ma wysoką klasę emisji A+. Dobry wybór, gdy zależy na niemieckim standardzie jakości."
  },
  {
    id: "teqtum",
    title: "Teqtum",
    text: "Teqtum to niemiecka marka z segmentu premium — najwyższa półka jakościowa. Materiał dla najbardziej wymagających realizacji, gdzie liczy się najlepsza jakość wykonania i wykończenia. Polecamy go do prestiżowych wnętrz i projektów, w których sufit ma być elementem najwyższej klasy."
  }
];

export function FolieDetail() {
  const image = visualAssets[0];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(HREF, "Folie do sufitów napinanych"),
          breadcrumbSchema([
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: "Folie", href: HREF }
          ])
        ]}
      />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs
              items={[
                { label: "Rozwiązania", href: "/rozwiazania" },
                { label: "Folie", href: HREF }
              ]}
            />
            <span className="eyebrow">Folie</span>
            <h1>Folie do sufitów napinanych</h1>
            <p className="pageLead">
              Montujemy folie od sprawdzonych producentów — MSD, Bauf i Teqtum. Materiał dobieramy
              pod projekt, oczekiwany efekt i warunki pomieszczenia. Poniżej krótko o każdej marce.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button
                href={whatsappUrl("Dzień dobry, chcę dobrać folię do sufitu napinanego.")}
                variant="secondary"
              >
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={760}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <p className="softLabel">
              {image.label}. Ostateczny efekt zależy od wybranej folii i pomieszczenia.
            </p>
          </aside>
        </div>
      </section>

      {producers.map((producer, index) => (
        <section
          className={`section${index % 2 === 1 ? " sectionAlt" : ""}`}
          id={producer.id}
          key={producer.id}
          style={{ scrollMarginTop: 90 }}
        >
          <div className="container">
            <SectionHeader eyebrow="Producent" title={producer.title} />
            <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
              {producer.text}
            </p>
          </div>
        </section>
      ))}

      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Nie wiesz, którą folię wybrać?</h2>
            <p>Na pomiarze doradzamy markę i materiał pod wnętrze, efekt i budżet.</p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button
              href={whatsappUrl("Dzień dobry, chcę dobrać folię do sufitu napinanego.")}
              variant="secondary"
            >
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
