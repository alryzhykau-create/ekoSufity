import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSolutionCards } from "@/content/rozwiazania";
import { siteConfig, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Rozwiązania - sufity napinane, LED i karnisze",
  description:
    "Rozwiązania EkoSufity: sufity napinane, oświetlenie LED, linie świetlne i ukryte karnisze. Montaż we Wrocławiu i do 100 km.",
  ...seoMeta("/rozwiazania")
};

// Kafle mozaiki, które zajmują 2 komórki (są wyższe od pozostałych).
const largeTiles = new Set([
  "folie",
  "oswietlenie-led",
  "gwiazdne-niebo",
  "sufit-podswietlany"
]);

// Tła kafli: wizualizacja tam, gdzie mamy pasujące zdjęcie, dla reszty
// gradient nawiązujący do tematu (zamiast jednego gradientu na 11 kaflach).
const tileBackgrounds: Record<string, string> = {
  folie: "url(/images/hero.png)",
  "oswietlenie-led": "url(/images/lazienka-6m2-photo.png)",
  "linie-swietlne": "url(/images/mieszkanie-45m2-led-photo.png)",
  "system-magnetyczny": "url(/images/kuchnia-10m2-photo.png)",
  "sufity-wielopoziomowe": "url(/images/salon-22m2-photo.png)",
  "gwiazdne-niebo": "linear-gradient(165deg, #26304a, #0b0e18)",
  "sufit-podswietlany": "radial-gradient(circle at 50% 8%, #a26f24, #2b2013 70%)",
  "szczelina-cienia": "linear-gradient(160deg, #4a4238, #191612)",
  "sufit-z-nadrukiem": "linear-gradient(150deg, #6d5d4a, #2e261c)",
  wentylacja: "linear-gradient(150deg, #5c6258, #23261f)",
  "karnisze-sufitowe": "linear-gradient(150deg, #746753, #35291a)"
};

const scenarios = [
  ["Salon i mieszkanie", "Równy matowy sufit, delikatne światło obwodowe i ukryte prowadzenie detali."],
  ["Kuchnia", "Czyste wykończenie, punkty świetlne i materiał dobrany do codziennego użytkowania."],
  ["Łazienka i wilgoć", "Rozwiązanie dobierane po ocenie warunków pomieszczenia i wentylacji."],
  ["Lokal komercyjny", "Efekt wizualny, który ma wyglądać schludnie i wspierać charakter miejsca."]
];

const process = [
  ["1", "Pomieszczenie", "Ustalamy typ wnętrza, metraż, narożniki i techniczne ograniczenia."],
  ["2", "Efekt", "Wybieramy mat, połysk, LED, linie świetlne, karnisz albo prosty wariant."],
  ["3", "Wycena", "Podajemy cenę po pomiarze i rozdzielamy koszt sufitu od dodatków."],
  ["4", "Montaż", "Wykonujemy zakres zgodnie z ustaleniami i przekazujemy informacje o gwarancji."]
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/rozwiazania"), breadcrumbSchema([{ label: "Rozwiązania", href: "/rozwiazania" }])]} />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs items={[{ label: "Rozwiązania", href: "/rozwiazania" }]} />
            <span className="eyebrow">Rozwiązania</span>
            <h1>Rozwiązania do sufitów napinanych</h1>
            <p className="pageLead">
              Tu wybierasz nie tylko sufit, ale cały efekt: materiał, światło, linie LED, ukryty
              karnisz i detale dopasowane do pomieszczenia.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl("Dzień dobry, chcę dobrać rozwiązanie do sufitu napinanego.")} variant="secondary">
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <aside className="card pageVisualCard">
            <Image
              src={visualAssets[3].src}
              alt={visualAssets[3].alt}
              width={900}
              height={760}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <p className="softLabel">Wizualizacja przykładowego efektu sufitu z linią LED.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Zakres"
            title="Wybierz zakres, który chcesz omówić"
            lead="Każda karta prowadzi do osobnej strony z wyjaśnieniem, dla kogo jest dane rozwiązanie, jak wygląda wycena i co ustalamy na pomiarze."
          />
          <div className="solutionMosaic">
            {getSolutionCards().map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`mosaicTile${largeTiles.has(card.slug) ? " mosaicTile--large" : ""}`}
                style={
                  tileBackgrounds[card.slug]
                    ? { backgroundImage: tileBackgrounds[card.slug] }
                    : undefined
                }
              >
                <div className="mosaicTileBody">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="mosaicTileLink">Zobacz rozwiązanie →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Scenariusze"
            title="Rozwiązanie dobieramy do pomieszczenia"
            lead="Inaczej planuje się sufit do salonu, inaczej do łazienki, a inaczej do lokalu usługowego."
          />
          <div className="grid4 sectionCards">
            {scenarios.map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section processSection">
        <div className="container">
          <div className="centerHeader">
            <SectionHeader
              eyebrow="Logika projektu"
              title="Jak układamy zakres przed wyceną?"
              lead="Dzięki temu klient rozumie, co jest sufitem bazowym, a co dodatkowym rozwiązaniem."
            />
          </div>
          <div className="processPanel">
            <div className="stepList">
              {process.map(([number, title, copy]) => (
                <article className="card miniCard" key={title}>
                  <span className="stepNumber">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section finalCtaSection sectionAlt">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Nie musisz znać technologii przed kontaktem</h2>
            <p>Wyślij zdjęcie pomieszczenia, miasto i orientacyjny metraż. Podpowiemy, które rozwiązanie ma sens.</p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń</Button>
            <Button href={whatsappUrl("Dzień dobry, chcę wysłać zdjęcie pomieszczenia do doboru rozwiązania.")} variant="secondary">
              Wyślij zdjęcie
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
