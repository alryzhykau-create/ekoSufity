import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RozwiazanieDetail } from "@/components/rozwiazania/RozwiazanieDetail";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getRozwiazanie, rozwiazania } from "@/content/rozwiazania";
import { getService, services } from "@/content/services";
import { siteConfig, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ServiceDetail = {
  eyebrow: string;
  imageIndex: number;
  whatIs: string;
  options: string[];
  benefits: string[];
  optionCards?: { title: string; desc: string }[];
  benefitCards?: { title: string; desc: string }[];
};

const details: Partial<Record<(typeof services)[number]["slug"], ServiceDetail>> = {
  "oswietlenie-led": {
    eyebrow: "Światło",
    imageIndex: 3,
    whatIs:
      "Oświetlenie LED planujemy razem z sufitem napinanym — jako jeden, spójny projekt światła. Łączymy linie świetlne, punkty, podświetlenie obwodowe i translucent, dobierając barwę i scenariusz do wnętrza. Profile, zasilacze i przewody chowamy pod membraną, więc widać tylko czysty efekt. Zakres i wycenę ustalamy po bezpłatnym pomiarze.",
    options: ["światło obwodowe", "punkty LED", "podświetlenie translucent", "zasilacze i sterowanie"],
    benefits: [
      "światło zaplanowane razem z sufitem",
      "czytelny podział kosztu sufitu i oświetlenia",
      "dobór scenariusza do salonu, kuchni, łazienki lub lokalu"
    ],
    optionCards: [
      {
        title: "Linie świetlne LED",
        desc: "Wąskie, równe linie światła wtopione w sufit — proste albo geometryczne. Profil z maskownicą daje czysty efekt bez widocznych opraw."
      },
      {
        title: "Punkty świetlne",
        desc: "Halogeny, oprawy podtynkowe, lampy i miejsca pod żyrandol. Rozmieszczenie dobieramy pod układ pomieszczenia."
      },
      {
        title: "Podświetlenie obwodowe",
        desc: "Delikatna poświata po obwodzie sufitu i na ścianę. Wizualnie unosi sufit i buduje nastrój."
      },
      {
        title: "Podświetlenie translucent",
        desc: "Membrana translucent podświetlona od wewnątrz — cała powierzchnia świeci miękkim, równym światłem, jak świetlny panel na cały sufit."
      },
      {
        title: "Sterowanie i barwa światła",
        desc: "Regulacja jasności, zmiana barwy (ciepła, neutralna, zimna), efekty RGB i płynne przejścia. Dobieramy zasilacze i sterowanie pod scenariusz oświetlenia."
      }
    ],
    benefitCards: [
      {
        title: "Światło zaplanowane razem z sufitem",
        desc: "Profile, zasilacze i przewody chowamy pod membraną na etapie montażu. Później nie da się tego dołożyć bez demontażu sufitu — dlatego ustalamy wszystko przed pomiarem."
      },
      {
        title: "Jeden wykonawca, spójny efekt",
        desc: "Sufit i oświetlenie robimy w jednym zakresie. Barwa światła, układ linii i punktów są dopasowane do siebie i do wnętrza."
      },
      {
        title: "Czysty, trwały montaż",
        desc: "Bez widocznych puszek i przewodów. Na oświetlenie LED dajemy 2 lata gwarancji, na membranę — 15 lat, a na montaż — 5 lat."
      }
    ]
  },
  "linie-swietlne": {
    eyebrow: "Linie świetlne",
    imageIndex: 1,
    whatIs:
      "Linie świetlne to wąskie, równe pasy światła LED wtopione w sufit napinany — proste albo geometryczne. Dają nowoczesny, minimalistyczny efekt i pozwalają wydzielić strefy wnętrza bez ścianek. Profil z maskownicą ukrywa źródło światła, więc widać tylko czystą linię. Układ i długość dobieramy pod pomieszczenie na etapie pomiaru.",
    options: ["linie proste", "linie geometryczne", "linie 27-30 mm", "linie 50 mm"],
    benefits: [
      "nowoczesny efekt dekoracyjny",
      "możliwość podkreślenia stref we wnętrzu",
      "wycena po ustaleniu długości i układu linii"
    ],
    optionCards: [
      {
        title: "Linie proste",
        desc: "Wąskie, równe pasy światła wzdłuż sufitu. Podstawa nowoczesnego, minimalistycznego wnętrza."
      },
      {
        title: "Linie geometryczne",
        desc: "Kwadraty, ramki, załamania i formy przestrzenne z linii LED. Efekt na zamówienie."
      },
      {
        title: "Profil 27–30 mm",
        desc: "Wąska linia do delikatnego akcentu i doświetlenia stref."
      },
      {
        title: "Profil 50 mm",
        desc: "Szersza linia jako mocniejszy element dekoracyjny i główne światło."
      }
    ],
    benefitCards: [
      {
        title: "Nowoczesny efekt dekoracyjny",
        desc: "Linia światła zmienia charakter sufitu i porządkuje przestrzeń."
      },
      {
        title: "Podział stref",
        desc: "Światłem można wydzielić jadalnię, kuchnię czy strefę wypoczynku bez ścianek."
      },
      {
        title: "Ukryte prowadzenie",
        desc: "Profil i zasilanie chowamy pod membraną — widać tylko czystą linię światła."
      }
    ]
  },
  "karnisze-sufitowe": {
    eyebrow: "Karnisze",
    imageIndex: 0,
    whatIs:
      "Ukryty karnisz to wnęka w suficie, w której chowają się szyny i mocowania zasłon. Zasłony wychodzą wtedy prosto z sufitu, bez widocznego karnisza — wnętrze wygląda schludnie i nowocześnie. Niszę można połączyć z podświetleniem LED, które daje miękką poświatę zza zasłon. Rozwiązanie planujemy razem z sufitem, na etapie montażu.",
    options: ["nisza karniszowa", "ukryty karnisz", "karnisz z podświetleniem", "połączenie z LED"],
    benefits: [
      "czysta linia przy oknie",
      "możliwość ukrycia prowadzenia zasłon",
      "estetyczne połączenie sufitu z detalem wykończeniowym"
    ],
    optionCards: [
      {
        title: "Nisza karniszowa",
        desc: "Ukryta wnęka w suficie, w której chowa się karnisz i szyny zasłon."
      },
      {
        title: "Karnisz z dociągnięciem",
        desc: "Wnęka wykończona tak, że zasłony sięgają idealnie do sufitu."
      },
      {
        title: "Karnisz z podświetleniem",
        desc: "Taśma LED w niszy daje miękką poświatę zza zasłon."
      },
      {
        title: "Połączenie z LED",
        desc: "Podświetlenie karnisza łączymy ze scenariuszem światła w pomieszczeniu."
      }
    ],
    benefitCards: [
      {
        title: "Czysta linia przy oknie",
        desc: "Zasłony wychodzą prosto z sufitu, bez widocznego karnisza."
      },
      {
        title: "Ukryte prowadzenie zasłon",
        desc: "Szyny i mocowania znikają w niszy — wnętrze wygląda schludnie."
      },
      {
        title: "Efekt razem z sufitem",
        desc: "Niszę planujemy na etapie montażu sufitu, żeby wszystko pasowało idealnie."
      }
    ]
  }
};

const faqs = [
  {
    question: "Czy to jest w cenie sufitu bazowego?",
    answer: "Nie zawsze. Dodatki takie jak LED, linie świetlne, karnisze, profile i zasilacze wyceniamy jako osobny zakres."
  },
  {
    question: "Czy można wysłać zdjęcie przed pomiarem?",
    answer: "Tak. Zdjęcie, miasto i orientacyjny metraż pomagają szybciej ustalić, co warto omówić na pomiarze."
  },
  {
    question: "Kiedy znam dokładną cenę?",
    answer: "Dokładną cenę podajemy po bezpłatnym pomiarze i ustaleniu materiału, narożników oraz dodatków."
  }
];

export function generateStaticParams() {
  return [
    // "folie" ma własny katalog /rozwiazania/folie, więc pomijamy je tutaj.
    ...services.filter((service) => service.slug !== "folie").map((service) => ({ slug: service.slug })),
    ...rozwiazania.map((item) => ({ slug: item.slug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const rozwiazanie = getRozwiazanie(slug);
  if (rozwiazanie) {
    return {
      title: rozwiazanie.metaTitle,
      description: rozwiazanie.metaDescription
    };
  }

  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.h1} - Wrocław i do 100 km`,
    description: `${service.copy} Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia i kontakt przez telefon lub WhatsApp.`
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;

  const rozwiazanie = getRozwiazanie(slug);
  if (rozwiazanie) {
    return <RozwiazanieDetail rozwiazanie={rozwiazanie} />;
  }

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const detail = details[service.slug];

  if (!detail) {
    notFound();
  }

  const image = visualAssets[detail.imageIndex];
  const optionCards =
    detail.optionCards ??
    detail.options.map((option) => ({
      title: option,
      desc: "Zakres do omówienia i wyceny po sprawdzeniu pomieszczenia."
    }));
  const benefitCards =
    detail.benefitCards ??
    detail.benefits.map((benefit) => ({
      title: benefit,
      desc: "Ustalamy to przed montażem, żeby końcowy zakres był czytelny."
    }));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.href, service.h1),
          breadcrumbSchema([
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: service.title, href: service.href }
          ]),
          faqSchema(faqs)
        ]}
      />

      <section className="pageHero">
        <div className="container splitHero">
          <div>
            <Breadcrumbs
              items={[
                { label: "Rozwiązania", href: "/rozwiazania" },
                { label: service.title, href: service.href }
              ]}
            />
            <span className="eyebrow">{detail.eyebrow}</span>
            <h1>{service.h1}</h1>
            <p className="pageLead">
              {service.copy} Działamy we Wrocławiu i w miejscowościach do 100 km od miasta.
              Zakres dobieramy po obejrzeniu pomieszczenia, a dodatki wyceniamy oddzielnie.
            </p>
            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
              <Button href={whatsappUrl(`Dzień dobry, interesuje mnie: ${service.title}.`)} variant="secondary">
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
            <p className="softLabel">{image.label}. Ostateczny efekt zależy od pomieszczenia i ustalonego zakresu.</p>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader eyebrow="O rozwiązaniu" title="Co to jest" />
          <p className="sectionLead" style={{ marginTop: 18, maxWidth: 900 }}>
            {detail.whatIs}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Możliwości"
            title="Co możemy zaplanować w tym zakresie?"
            lead="Na pomiarze doprecyzowujemy wariant, materiał, układ i elementy dodatkowe."
          />
          <div className="grid4 sectionCards">
            {optionCards.map((card) => (
              <article className="card miniCard" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container pricePanel">
          <div>
            <SectionHeader
              eyebrow="Wycena"
              title="Cena zależy od zakresu i detali"
              lead="Dla prostego sufitu MSD punktem odniesienia jest średnio ok. 120 zł/m². Rozwiązania dodatkowe liczymy po ustaleniu długości, punktów, profili i zasilaczy."
            />
          </div>
          <div className="card">
            <h3>Co wpływa na koszt?</h3>
            <div className="factorList">
              {["metraż", "liczba narożników", "rodzaj materiału", "LED i profile", "nietypowe przejścia"].map((item) => (
                <div className="factor" key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Korzyści"
            title="Dlaczego warto zaplanować to razem z sufitem?"
            lead="Dzięki temu unikamy przypadkowych detali i od razu wiemy, co jest bazą, a co dodatkiem."
          />
          <div className="grid3 sectionCards">
            {benefitCards.map((card) => (
              <article className="card miniCard" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container faqShell">
          <div className="centerHeader">
            <SectionHeader eyebrow="FAQ" title="Pytania przed pomiarem" />
          </div>
          <div className="faqGrid">
            {faqs.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="faqCta">
            <p>Chcesz sprawdzić, czy to pasuje do Twojego wnętrza?</p>
            <Button href={whatsappUrl(`Dzień dobry, chcę zapytać o: ${service.title}.`)} variant="dark">
              Zapytaj na WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
