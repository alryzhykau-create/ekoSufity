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
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane - rodzaje, efekty i montaż",
  description:
    "Czym są sufity napinane, jakie są rodzaje materiałów i gdzie sprawdzają się najlepiej. Montaż we Wrocławiu i do 100 km od miasta.",
  ...seoMeta("/sufity-napinane")
};

// Karty rodzajów: opis + „gdzie się sprawdza" + link. Etykieta strzałki
// mówi, dokąd prowadzi karta: do podstrony faktury albo do rozwiązań.
const ceilingTypes: Array<{
  title: string;
  copy: string;
  fit: string;
  href: string;
  linkLabel: string;
}> = [
  {
    title: "Matowe",
    copy: "Spokojny, równy efekt do mieszkań, domów i lokali po remoncie.",
    fit: "Klasyka, która pasuje wszędzie. Najlepszy wybór, gdy nie chcesz kombinować — sprawdza się w salonie, sypialni i pokoju dziecka.",
    href: "/rozwiazania/folie/matowy",
    linkLabel: "Zobacz fakturę →"
  },
  {
    title: "Satynowe",
    copy: "Delikatny połysk bez mocnego odbicia światła.",
    fit: "Złoty środek: delikatny połysk dodaje elegancji, ale bez efektu lustra. Dobre do wnętrz, które chcesz lekko rozjaśnić.",
    href: "/rozwiazania/folie/satynowy",
    linkLabel: "Zobacz fakturę →"
  },
  {
    title: "Połysk",
    copy: "Efekt odbicia i wizualnego powiększenia pomieszczenia.",
    fit: "Efekt lustra optycznie powiększa pomieszczenie. Najlepsze do małych i ciemnych wnętrz — łazienek, korytarzy, kawalerek.",
    href: "/rozwiazania/folie/polysk",
    linkLabel: "Zobacz fakturę →"
  },
  {
    title: "Translucent",
    copy: "Materiał do podświetlenia i efektu miękkiego światła.",
    fit: "Świecąca płaszczyzna jako główne lub dekoracyjne światło — świetna do wnętrz bez okien i stref relaksu.",
    href: "/rozwiazania/folie/podswietlany",
    linkLabel: "Zobacz rozwiązania →"
  },
  {
    title: "Z LED",
    copy: "Linie świetlne, światło obwodowe, punkty i scenariusze oświetlenia.",
    fit: "Światło planujemy razem z sufitem jako jeden projekt — profile i przewody chowamy pod membraną.",
    href: "/rozwiazania/oswietlenie-led",
    linkLabel: "Zobacz rozwiązania →"
  },
  {
    title: "Do stref wilgotnych",
    copy: "Rozwiązania dobierane do łazienek, basenów i pomieszczeń z wilgocią.",
    fit: "Folia nie chłonie wody i wytrzymuje zalanie — wariant dobieramy po ocenie warunków w pomieszczeniu.",
    href: "/rozwiazania",
    linkLabel: "Zobacz rozwiązania →"
  },
  {
    title: "Z nadrukiem",
    copy: "Zdjęcie, wzór lub grafika nadrukowana na całej powierzchni sufitu.",
    fit: "Twoje zdjęcie, wzór lub niebo z chmurami na całej powierzchni. Gdy sufit ma być ozdobą albo elementem reklamowym w lokalu.",
    href: "/rozwiazania/sufit-z-nadrukiem",
    linkLabel: "Zobacz fakturę →"
  }
];

const folieCards = [
  {
    title: "MSD",
    copy: "Najczęściej montowana folia, najlepszy stosunek jakości do ceny. Ponad 120 kolorów w linii Premium.",
    href: "/rozwiazania/folie#msd",
    imageSrc: "/images/salon-22m2-photo.png"
  },
  {
    title: "Bauf",
    copy: "Niemiecka marka i technologia, produkcja według europejskich norm.",
    href: "/rozwiazania/folie#bauf",
    imageSrc: "/images/kuchnia-10m2-photo.png"
  },
  {
    title: "Teqtum",
    copy: "Niemiecka marka z segmentu premium. Najwyższa półka jakościowa.",
    href: "/rozwiazania/folie#teqtum",
    imageSrc: "/images/lazienka-6m2-photo.png"
  }
];

// Etapy współpracy — te same kroki co wcześniej, ale z numerem i krótkim
// podpisem, w rytmie sekcji „Jak wygląda współpraca?" ze strony głównej.
const processFlow = [
  { title: "Kontakt", copy: "Telefon lub WhatsApp — wystarczy zdjęcie i metraż." },
  { title: "Bezpłatny pomiar", copy: "Przyjeżdżamy, mierzymy pomieszczenie i doradzamy na miejscu." },
  { title: "Dobór materiału", copy: "Wybieramy fakturę, kolor i światło pod Twoje wnętrze." },
  { title: "Wycena", copy: "Podajemy cenę po pomiarze i ustaleniu pełnego zakresu." },
  { title: "Montaż", copy: "Montujemy zwykle w 1–2 dni i sprzątamy po sobie." }
];

// Miejsca montażu — kafle ze zdjęciem i podpisem.
const placeTiles = [
  { title: "Mieszkania i domy", imageSrc: "/images/salon-22m2-photo.png" },
  { title: "Łazienki i kuchnie", imageSrc: "/images/lazienka-6m2-photo.png" },
  { title: "Lokale komercyjne", imageSrc: "/images/mieszkanie-45m2-led-photo.png" }
];

const comparisonRows = [
  ["Koszt z materiałem", "od 120 zł/m²", "od 250 zł/m²"],
  ["Czas montażu", "1–2 dni", "3–5 dni"],
  ["Podczas montażu", "Bez wynoszenia mebli, bez kurzu i brudu", "Wynoszenie mebli, kurz, bałagan"],
  ["Odporność na wodę", "Nie boi się wody, wytrzymuje zalanie", "Chłonie wodę, odkształca się, pęka"],
  ["Pielęgnacja", "Można myć wodą lub łagodnym detergentem", "Wymaga przemalowania lub odnowienia"],
  ["Obniżenie sufitu", "Już od 3 cm", "Od 7–10 cm (konstrukcja ramy)"],
  ["Trwałość", "15–20 lat bez utraty wyglądu", "Z czasem pęknięcia i odpryski"],
  ["Konserwacja", "Nie wymaga dodatkowego wykończenia", "Wymaga okresowych napraw"]
];

const useCases = [
  ["Szybkie wyrównanie sufitu", "Gdy stary sufit jest nierówny, popękany albo trudny do estetycznego odnowienia."],
  ["Nowe mieszkanie", "Gdy chcesz od razu zaplanować sufit, światło i ukryte karnisze."],
  ["Remont bez ciężkich prac", "Gdy zależy Ci na czystszym procesie niż klasyczne mokre prace."],
  ["Wnętrza komercyjne", "Gdy sufit ma wyglądać schludnie i pasować do charakteru lokalu."]
];

// FAQ łączy dawne „częste obawy" z pytaniami praktycznymi — jedna lista,
// te same treści trafiają do FAQPage w JSON-LD.
const faqs = [
  {
    question: "Czy sufit się nie ugnie i nie obwiśnie?",
    answer:
      "Nie. Prawidłowo napięta folia pozostaje idealnie równa przez lata. A jeśli sąsiad z góry Cię zaleje — sufit zbierze wodę i ochroni wnętrze, wystarczy że ją odprowadzimy."
  },
  {
    question: "Czy to drogie?",
    answer:
      "Sufit napinany zwykle wychodzi taniej niż sufit z płyt karton-gips, a robi się go szybciej. Prosty sufit liczymy od 120 zł/m², a dokładną cenę podajemy po bezpłatnym pomiarze."
  },
  {
    question: "Ile to trwa i czy będzie bałagan?",
    answer:
      "Większość realizacji kończymy w 1–2 dni. Montaż jest czysty — nie skuwamy starego sufitu, nie ma gruzu, a po pracy sprzątamy po sobie. Mebli zwykle nie trzeba wynosić."
  },
  {
    question: "Czy stracę dużo wysokości?",
    answer:
      "Zwykle wystarczy obniżenie o około 3 cm. Trochę więcej miejsca potrzeba tylko tam, gdzie chowamy oświetlenie LED lub karnisz."
  },
  {
    question: "Czy można połączyć sufit z oświetleniem?",
    answer:
      "Tak. Można zaplanować punkty, linie świetlne, światło obwodowe albo materiał translucent, który rozprasza światło na całej powierzchni sufitu."
  },
  {
    question: "Jak dbać o sufit napinany?",
    answer:
      "Wystarczy przetrzeć powierzchnię wilgotną ściereczką z odrobiną łagodnego detergentu. Folia nie żółknie i nie wymaga malowania ani odnawiania."
  }
];

export default function StretchCeilingsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema("/sufity-napinane", "Sufity napinane"),
          breadcrumbSchema([{ label: "Sufity napinane", href: "/sufity-napinane" }]),
          faqSchema(faqs)
        ]}
      />

      {/* 1. Hero */}
      <section className="pageHero">
        <div className="container splitHero">
          <div className="pageHeroCopy">
            <Breadcrumbs items={[{ label: "Sufity napinane", href: "/sufity-napinane" }]} />
            <span className="eyebrow">Sufity napinane</span>
            <h1>Sufity napinane - rodzaje, efekty i montaż</h1>
            <p className="pageLead">
              Sufit napinany to lekka membrana na profilach — idealnie równa powierzchnia, ukryte
              LED-y i montaż w 1–2 dni bez kucia i gruzu.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref} className="heroPrimaryCta">
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                href={whatsappUrl("Dzień dobry, chcę dobrać rodzaj sufitu napinanego.")}
                variant="secondary"
                className="heroWhatsappCta waHoverFill"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
          <div className="pageHeroPhotos">
            <div className="pageHeroPhotoMain">
              <Image
                src="/images/salon-22m2-photo.png"
                alt="Salon z sufitem napinanym i linią LED"
                width={900}
                height={675}
                priority
                loading="eager"
                sizes="(max-width: 900px) 100vw, 530px"
              />
            </div>
            <div className="pageHeroPhotoSmall">
              <Image
                src="/images/lazienka-6m2-photo.png"
                alt="Łazienka z sufitem napinanym"
                width={400}
                height={400}
                sizes="(max-width: 900px) 44vw, 230px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Co to jest */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Co to jest" title="Co to jest sufit napinany?" />
          <p className="sectionLead sectionLead--wide">
            Sufit napinany to cienka, wytrzymała membrana rozpięta na profilach zamontowanych przy
            suficie lub ścianach. Powstaje idealnie równa powierzchnia — bez gładzenia, malowania i
            mokrych prac. Pod membraną chowamy oświetlenie, przewody i nierówności starego sufitu,
            więc widać tylko czysty efekt. Montaż jest szybki i czysty, zwykle zajmuje 1–2 dni i nie
            wymaga wynoszenia mebli.
          </p>
          <p className="sectionLead sectionLead--wide">
            Folia, z której robimy sufit, jest bezpieczna — nie wydziela zapachu, nie zawiera
            szkodliwych substancji i ma atesty, więc spokojnie sprawdza się w sypialni czy pokoju
            dziecka. Jest też trwała: dobrze napięty sufit zachowuje wygląd przez 15–20 lat, nie
            żółknie i nie pęka.
          </p>
          <p className="sectionLead sectionLead--wide">
            Codzienne utrzymanie jest proste — powierzchnię wystarczy przetrzeć wilgotną ściereczką z
            odrobiną łagodnego detergentu. Nie trzeba jej malować ani odnawiać. Folia nie chłonie
            wody, dlatego nadaje się także do łazienki, kuchni i pomieszczeń wilgotnych.
          </p>
        </div>
      </section>

      {/* 3. Rodzaje */}
      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Rodzaje"
            title="Najczęściej wybierane rodzaje sufitów napinanych"
            lead="Dobór materiału zależy od pomieszczenia, światła, efektu wizualnego i planowanych dodatków."
          />
          <div className="grid3 sectionCards">
            {ceilingTypes.map((type) => (
              <Link className="card miniCard" href={type.href} key={type.title}>
                <h3>{type.title}</h3>
                <p>{type.copy}</p>
                <p className="miniCardFit">{type.fit}</p>
                <p className="cardArrowText">{type.linkLabel}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3b. Folie */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Producenci"
            title="Folie sprawdzonych producentów"
            lead="Materiał dobieramy pod projekt, efekt i budżet."
          />
          <div className="grid3 sectionCards">
            {folieCards.map((card) => (
              <Link className="card miniCard" href={card.href} key={card.href}>
                <div className="miniCardImg">
                  <Image
                    src={card.imageSrc}
                    alt=""
                    width={480}
                    height={320}
                    sizes="(max-width: 900px) 100vw, 400px"
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <p className="cardArrowText">Poznaj folię →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Oświetlenie */}
      <section className="section sectionAlt">
        <div className="container altSplit">
          <div>
            <SectionHeader eyebrow="Oświetlenie" title="Oświetlenie w suficie napinanym" />
            <p className="sectionLead sectionLead--wide">
              Sufit napinany łączymy z dowolnym oświetleniem — planujemy je razem, jako jeden
              projekt. Montujemy linie świetlne LED, światło obwodowe, punkty, a także dowolne
              oprawy: halogeny, lampy i żyrandole. Zakładamy też system magnetyczny 48 V i
              podświetlenie translucent, gdy świecić ma cała powierzchnia. Profile, zasilacze i
              przewody chowamy pod membraną — widać tylko efekt końcowy.
            </p>
          </div>
          <div className="altSplitPhoto">
            <Image
              src="/images/kuchnia-10m2-photo.png"
              alt="Linie świetlne LED w suficie napinanym"
              width={800}
              height={640}
              sizes="(max-width: 900px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* 5. Gdzie */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Gdzie" title="Gdzie montujemy sufity napinane" />
          <p className="sectionLead sectionLead--wide">
            Sufity napinane sprawdzają się niemal w każdym pomieszczeniu. Montujemy je w mieszkaniach
            i domach — w salonach, kuchniach, sypialniach, łazienkach i na korytarzach. Wykonujemy je
            również w lokalach komercyjnych: restauracjach, gabinetach, sklepach i biurach. Radzimy
            sobie też z nietypowymi warunkami — pomieszczeniami wilgotnymi, basenami oraz skosami
            dachu na poddaszu.
          </p>
          <div className="placeTiles">
            {placeTiles.map((tile) => (
              <div className="placeTile" key={tile.title}>
                <Image
                  src={tile.imageSrc}
                  alt={tile.title}
                  width={640}
                  height={480}
                  sizes="(max-width: 900px) 100vw, 410px"
                />
                <div className="placeTileScrim" aria-hidden="true" />
                <h3>{tile.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Porównanie */}
      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Porównanie"
            title="Sufit napinany czy karton-gips?"
            lead="Sufit napinany i sufit z płyt karton-gips (G-K) to dwa różne rozwiązania. Poniżej porównanie, które pomaga zdecydować."
          />
          <div className="comparisonScroll">
            <table className="comparisonTable">
              <thead>
                <tr>
                  <th>Właściwość</th>
                  <th>Sufit napinany</th>
                  <th>Sufit z płyt G-K</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([property, stretch, gk]) => (
                  <tr key={property}>
                    <th scope="row">{property}</th>
                    <td data-label="Napinany">{stretch}</td>
                    <td data-label="Płyty G-K">{gk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Kiedy sufit napinany ma największy sens */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Zastosowanie"
            title="Kiedy sufit napinany ma największy sens?"
            lead="To rozwiązanie jest szczególnie praktyczne tam, gdzie liczy się estetyka, czysty efekt i możliwość połączenia sufitu ze światłem."
          />
          <div className="grid4 sectionCards">
            {useCases.map(([title, copy]) => (
              <article className="card miniCard" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cena */}
      <section className="section sectionAlt">
        <div className="container infoDeck">
          <article className="card infoCard">
            <span className="eyebrow">Cena</span>
            <h2 className="infoCardTitle">Ile kosztuje sufit napinany?</h2>
            <p>
              Dla prostego sufitu MSD w prostokątnym pomieszczeniu z 4 narożnikami przyjmujemy
              średnio ok. 120 zł/m² jako punkt odniesienia. Dokładna cena zależy od materiału,
              profili, LED i detali.
            </p>
            <Button href="/ceny" variant="secondary">
              Zobacz stronę cen →
            </Button>
          </article>
          <aside className="card infoCard">
            <span className="priceKicker">Proces</span>
            <ol className="stepFlow" aria-label="Etapy współpracy">
              {processFlow.map((step, index) => (
                <li className="stepFlowItem" key={step.title}>
                  <span className="stepFlowNumber">{index + 1}</span>
                  <div className="stepFlowBody">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* 9. FAQ — dawne „częste obawy" wchodzą do tej listy */}
      <section className="section faqSection">
        <div className="container">
          <div className="faqWrap">
            <aside className="faqAside">
              <span className="eyebrow">FAQ</span>
              <h2 className="sectionTitle">Najczęstsze pytania przed pomiarem</h2>
              <p className="sectionLead">Krótko wyjaśniamy cenę, pomiar, LED, montaż i pielęgnację.</p>
              <div className="faqNoAnswer">
                <p className="faqNoAnswerTitle">Nie znalazłeś odpowiedzi?</p>
                <p>Zadzwoń albo umów bezpłatny pomiar — odpowiemy na wszystkie pytania.</p>
                <Button href="/kontakt">Umów pomiar</Button>
              </div>
            </aside>
            <div className="faqList faqListSingle">
              {faqs.map((item, index) => (
                <details className="faqItem" key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Social media */}
      <section className="section sectionAlt">
        <div className="container">
          <SocialBanner />
        </div>
      </section>

      {/* 11. Kontakt */}
      <FinalContactSection alt={false} />
    </>
  );
}
