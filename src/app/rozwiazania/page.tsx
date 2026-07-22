import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { FinalContactSection } from "@/components/contact/FinalContactSection";
import { SocialBanner } from "@/components/home/SocialBanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaIcon } from "@/components/ui/CtaIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSolutionCards } from "@/content/rozwiazania";
import { siteConfig, whatsappUrl } from "@/content/site";
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
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Rozwiązania", href: "/rozwiazania" }]} />
            <span className="eyebrow">Rozwiązania</span>
            <h1>Rozwiązania i dodatki do sufitów napinanych</h1>
            <p className="pageLead">
              Folie, oświetlenie LED, linie świetlne, system magnetyczny 48 V, podświetlenie,
              gwiaździste niebo, nadruk, wentylacja i ukryte karnisze — planujemy je razem z
              sufitem, na etapie pomiaru.
            </p>
            <div className="buttonRow">
              <Button className="heroPrimaryCta" href={siteConfig.contacts.phoneHref}>
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                className="heroWhatsappCta waHoverFill"
                href={whatsappUrl("Dzień dobry, chcę dobrać rozwiązanie do sufitu napinanego.")}
                variant="secondary"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          {/* Zdjęcia lustrzane wobec /sufity-napinane — mniejsze wychodzi w prawo. */}
          <div className="pageHeroPhotos pageHeroPhotos--right">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/mieszkanie-45m2-led-photo.png"
                alt="Sufit napinany z liniami świetlnymi LED w salonie"
                width={900}
                height={675}
                priority
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/salon-22m2-photo.png"
                alt="Matowy sufit napinany ze światłem obwodowym"
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
            eyebrow="Zakres"
            title="Wybierz zakres, który chcesz omówić"
            lead="Każda karta prowadzi do rozwiązania z wyjaśnieniem, dla kogo jest, jak wygląda wycena i co ustalamy na pomiarze."
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

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Logika projektu"
            title="Jak układamy zakres przed wyceną?"
            lead="Dzięki temu widać, co jest sufitem bazowym, a co dodatkowym rozwiązaniem."
          />
          <div className="stepList sectionCards">
            {process.map(([number, title, copy]) => (
              <article className="card miniCard" key={title}>
                <span className="stepNumber">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      <FinalContactSection alt={false} />
    </>
  );
}
