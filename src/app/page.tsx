import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FinalContactSection } from "@/components/home/FinalContactSection";
import { GallerySection } from "@/components/home/GallerySection";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { homepageFaqs } from "@/content/faqs";
import { services } from "@/content/services";
import { siteConfig, socialLinks, whatsappUrl } from "@/content/site";
import { visualAssets } from "@/content/visual-assets";
import { seoMeta } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sufity napinane Wrocław i do 100 km",
  description:
    "Sufity napinane z montażem we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis, cena średnio ok. 120 zł/m² dla prostego sufitu MSD.",
  ...seoMeta("/")
};

const trustItems = [
  {
    title: "Wycena ze zdjęcia",
    copy: "Wyślij zdjęcie i wymiary — przygotujemy wstępną wycenę.",
    icon: "camera",
    imageSrc: "/icon/trust-final/wycena-ze-zdjecia.webp"
  },
  {
    title: "Dopasowany efekt",
    copy: "Dobieramy sufit, LED i światło do stylu wnętrza.",
    icon: "bulb",
    imageSrc: "/icon/trust-final/efekt-dopasowany-do-wnetrza.webp"
  },
  {
    title: "Montaż bez remontu",
    copy: "Równa powierzchnia bez skuwania starego sufitu.",
    icon: "tools",
    imageSrc: "/icon/trust-final/montaz-bez-remontu.webp"
  },
  {
    title: "Światło z klimatem",
    copy: "Projektujemy LED tak, by wnętrze było jaśniejsze i przytulne.",
    icon: "sparkles",
    imageSrc: "/icon/trust-final/swiatlo-klimat.webp"
  }
] as const;

const socialChoiceIconSrc = {
  Instagram: "/icon/footer-social/instagram.svg",
  TikTok: "/icon/footer-social/tiktok.svg",
  Facebook: "/icon/footer-social/facebook.svg",
  YouTube: "/icon/footer-social/youtube.svg"
} as const;

type TrustIconName = (typeof trustItems)[number]["icon"];

function TrustIcon({ name }: { name: TrustIconName }) {
  const iconProps = {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "camera") {
    return (
      <svg {...iconProps}>
        <path d="M14.2 16.1h3.2l1.8-3.1h5.6l1.8 3.1h3.2a3 3 0 0 1 3 3v9.5a3 3 0 0 1-3 3H14.2a3 3 0 0 1-3-3v-9.5a3 3 0 0 1 3-3Z" />
        <path d="M22 27.8a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z" />
        <path d="M29.4 19.3h.1" />
      </svg>
    );
  }

  if (name === "bulb") {
    return (
      <svg {...iconProps}>
        <path d="M22 8.5a8.5 8.5 0 0 0-5.1 15.3c1.3.9 2.1 2.4 2.1 4h6c0-1.6.8-3.1 2.1-4A8.5 8.5 0 0 0 22 8.5Z" />
        <path d="M18.8 31h6.4" />
        <path d="M20 34.5h4" />
        <path d="M13.5 13.5 11.8 12" />
        <path d="M30.5 13.5 32.2 12" />
        <path d="M22 5.5V3.2" />
      </svg>
    );
  }

  if (name === "tools") {
    return (
      <svg {...iconProps}>
        <path d="M29.7 10.3a7 7 0 0 0-8.8 8.8L11.8 28.2a3.2 3.2 0 0 0 4.5 4.5l9.1-9.1a7 7 0 0 0 8.8-8.8l-4.1 4.1-4.5-4.5 4.1-4.1Z" />
        <path d="M14 30.5h.1" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M22 7.5c1.5 7.1 3.4 9 10.5 10.5C25.4 19.5 23.5 21.4 22 28.5 20.5 21.4 18.6 19.5 11.5 18 18.6 16.5 20.5 14.6 22 7.5Z" />
      <path d="M32.2 25.2c.8 3.5 1.8 4.5 5.3 5.3-3.5.8-4.5 1.8-5.3 5.3-.8-3.5-1.8-4.5-5.3-5.3 3.5-.8 4.5-1.8 5.3-5.3Z" />
      <path d="M12.8 27.2c.6 2.5 1.3 3.2 3.8 3.8-2.5.6-3.2 1.3-3.8 3.8-.6-2.5-1.3-3.2-3.8-3.8 2.5-.6 3.2-1.3 3.8-3.8Z" />
    </svg>
  );
}

const heroFeatures = [
  {
    label: "Bezpłatny pomiar",
    icon: "shieldBolt",
    imageSrc: "/icon/hero/hero-bezplatny-pomiar.avif"
  },
  {
    label: "Dojazd do 100 km",
    icon: "mapPin",
    imageSrc: "/icon/hero/hero-dojazd-100km.avif"
  },
  {
    label: "15 lat gwarancji",
    icon: "tag",
    imageSrc: "/icon/hero/hero-15-lat-gwarancji.avif"
  },
  {
    label: "Czysty montaż",
    icon: "shield",
    imageSrc: "/icon/hero/hero-czysty-montaz.avif"
  }
] as const;

type HeroFeatureIconName = (typeof heroFeatures)[number]["icon"];

function HeroFeatureIcon({ name }: { name: HeroFeatureIconName }) {
  const iconProps = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "mapPin") {
    return (
      <svg {...iconProps}>
        <path d="M16 4.5a7.3 7.3 0 0 0-7.3 7.3C8.7 17.2 16 25 16 25s7.3-7.8 7.3-13.2A7.3 7.3 0 0 0 16 4.5Z" />
        <path d="M16 14.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M22 25h3.2" />
      </svg>
    );
  }

  if (name === "tag") {
    return (
      <svg {...iconProps}>
        <path d="M7.5 8.5v8L18.3 27.3l7.8-7.8L15.3 8.5H7.5Z" />
        <path d="M11.9 12.9h.1" />
        <path d="m18.8 15.1-3.7 3.7" />
      </svg>
    );
  }

  if (name === "shieldBolt") {
    return (
      <svg {...iconProps}>
        <path d="M16 4.6 7.5 8v6.5c0 5.2 3.5 10 8.5 11.5 5-1.5 8.5-6.3 8.5-11.5V8L16 4.6Z" />
        <path d="m16.8 10.2-4.6 7h3.7l-1 4.7 4.7-7.1H16l.8-4.6Z" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M16 4.6 7.5 8v6.5c0 5.2 3.5 10 8.5 11.5 5-1.5 8.5-6.3 8.5-11.5V8L16 4.6Z" />
      <path d="m12 16 2.7 2.7 5.6-5.8" />
    </svg>
  );
}

function CtaIcon({ name }: { name: "phone" | "whatsapp" | "camera" }) {
  const iconProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "phone") {
    return (
      <svg {...iconProps}>
        <path d="M9.3 6.4 7.1 8.6c-.5.5-.6 1.2-.4 1.8 1.4 5 5.8 9.4 10.9 10.9.6.2 1.3 0 1.8-.4l2.2-2.2-3.8-3-1.7 1.7c-2.2-1.1-4.2-3.1-5.3-5.3l1.7-1.7-3.2-4Z" />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg {...iconProps}>
        <path d="M8.8 10.4h2.1l1.1-1.9h4l1.1 1.9h2.1a2 2 0 0 1 2 2v6.2a2 2 0 0 1-2 2H8.8a2 2 0 0 1-2-2v-6.2a2 2 0 0 1 2-2Z" />
        <path d="M14 18a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M14 4.8a9 9 0 0 0-7.6 13.8l-1 4 4.1-1A9 9 0 1 0 14 4.8Z" />
      <path d="M10.6 10.3c.2-.4.5-.5.8-.5h.5c.3 0 .5.2.6.4l.8 1.8c.1.3.1.6-.1.8l-.5.5c.7 1.4 1.8 2.4 3.2 3.2l.6-.6c.2-.2.5-.2.8-.1l1.7.8c.3.1.5.4.5.7v.5c0 .4-.2.7-.5.9-1 .8-2.6.6-4.4-.3a10.9 10.9 0 0 1-5-5c-.8-1.8-1-3.3-.3-4.3.2-.4.5-.6.9-.8Z" />
    </svg>
  );
}

type ServiceSlug = (typeof services)[number]["slug"];

const solutionVisuals = {
  folie: {
    src: "/images/solutions/sufity-napinane-sketch.png",
    alt: "Szkic salonu z sufitem napinanym i linią światła",
    iconSrc: "/icon/rozwiazania/sufity-napinane.webp"
  },
  "oswietlenie-led": {
    src: "/images/solutions/oswietlenie-led-sketch.png",
    alt: "Szkic wnętrza z punktami oświetlenia LED w suficie",
    iconSrc: "/icon/rozwiazania/oswietlenie.webp"
  },
  "linie-swietlne": {
    src: "/images/solutions/linie-swietlne-sketch.png",
    alt: "Szkic pokoju z geometryczną linią świetlną w suficie",
    iconSrc: "/icon/rozwiazania/linie-swietlne.webp"
  },
  "karnisze-sufitowe": {
    src: "/images/solutions/ukryte-karnisze-sketch.png",
    alt: "Szkic okna z ukrytym karniszem i podświetleniem",
    iconSrc: "/icon/rozwiazania/ukryte-karnisze.webp"
  }
} satisfies Record<ServiceSlug, { src: string; alt: string; iconSrc: string }>;

const priceRows = [
  ["Sufit napinany", "od 120 zł/m²"],
  ["Linie świetlne LED", "od 250 zł/mb"],
  ["Ukryty karnisz z LED", "od 300 zł/mb"],
  ["Punkt oświetlenia", "od 100 zł/szt."]
];

const priceExamples = [
  {
    title: "Łazienka 6 m²",
    price: "od 1800 zł",
    image: "/images/lazienka-6m2-photo.png",
    alt: "Łazienka z sufitem napinanym"
  },
  {
    title: "Kuchnia 10 m²",
    price: "od 3000 zł",
    image: "/images/kuchnia-10m2-photo.png",
    alt: "Kuchnia z sufitem napinanym"
  },
  {
    title: "Salon 22 m²",
    price: "od 7200 zł",
    image: "/images/salon-22m2-photo.png",
    alt: "Salon z sufitem napinanym"
  },
  {
    title: "Mieszkanie 45 m² z LED",
    price: "od 9350 zł",
    image: "/images/mieszkanie-45m2-led-photo.png",
    alt: "Mieszkanie z sufitem napinanym i linią LED"
  }
];

const segments = [
  {
    badge: "Salon / kuchnia / łazienka",
    title: "Mieszkania",
    copy: "Do salonu, kuchni, łazienki, korytarza i nowych mieszkań po odbiorze.",
    imageSrc: "/icon/dla-kogo-final/mieszkania-v3.avif",
    iconKey: "mieszkania",
    featured: true
  },
  {
    badge: "Duże przestrzenie",
    title: "Domy",
    copy: "Do większych pomieszczeń, indywidualnych układów i projektów z oświetleniem.",
    imageSrc: "/icon/dla-kogo-final/domy-v3.avif",
    iconKey: "domy",
    featured: false
  },
  {
    badge: "Bez mokrych prac",
    title: "Remonty",
    copy: "Gdy chcesz wyrównać sufit bez długich mokrych prac i kolejnego malowania.",
    imageSrc: "/icon/dla-kogo-final/remonty-v3.avif",
    iconKey: "remonty",
    featured: false
  },
  {
    badge: "Schludny wygląd",
    title: "Lokale komercyjne",
    copy: "Do biur, salonów usługowych i przestrzeni, które muszą wyglądać schludnie.",
    imageSrc: "/icon/dla-kogo-final/lokale-komercyjne-v3.avif",
    iconKey: "lokale",
    featured: false
  },
  {
    badge: "Efekt klimatu",
    title: "Restauracje",
    copy: "Do wnętrz, gdzie sufit i światło budują klimat miejsca.",
    imageSrc: "/icon/dla-kogo-final/restauracje-v3.avif",
    iconKey: "restauracje",
    featured: false
  },
  {
    badge: "Odporność na wilgoć",
    title: "Baseny i strefy wilgotne",
    copy: "Do pomieszczeń, w których ważna jest odporność na wilgoć i łatwe utrzymanie.",
    imageSrc: "/icon/dla-kogo-final/baseny-strefy-wilgotne-v3.avif",
    iconKey: "wilgotne",
    featured: false
  }
] as const;

const processSteps = [
  {
    icon: "phone",
    title: "Kontakt",
    copy: "Napisz do nas na WhatsApp lub wyślij zdjęcie i metraż pomieszczenia.",
    imageSrc: "/icon/proces-premium-gold/proces-kontakt-v2.avif"
  },
  {
    icon: "measure",
    title: "Pomiar",
    copy: "Przyjeżdżamy, mierzymy pomieszczenie, narożniki, oświetlenie i doradzamy.",
    imageSrc: "/icon/proces-premium-gold/proces-pomiar-v2.avif"
  },
  {
    icon: "estimate",
    title: "Wycena",
    copy: "Podajemy cenę po pomiarze i ustaleniu pełnego zakresu prac.",
    imageSrc: "/icon/proces-premium-gold/proces-wycena-v2.avif"
  },
  {
    icon: "drill",
    title: "Montaż",
    copy: "Wykonujemy montaż sufitu napinanego zgodnie z ustaleniami.",
    imageSrc: "/icon/proces-premium-gold/proces-montaz-v2.avif"
  },
  {
    icon: "shield",
    title: "Odbiór",
    copy: "Sprawdzasz efekt, a my przekazujemy informacje o gwarancji.",
    imageSrc: "/icon/proces-premium-gold/proces-odbior-v2.avif"
  }
] as const;

type ProcessIconName = (typeof processSteps)[number]["icon"] | "pencil";

function ProcessIllustration({ name }: { name: ProcessIconName }) {
  const iconProps = {
    viewBox: "0 0 180 150",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  return (
    <svg className="processSketch" {...iconProps}>
      <path
        className="processSketchFill"
        d="M42 92c-5.5-27.3 18-52 47.5-55.4 33-3.8 62.2 16.1 56.2 46.2-5.1 25.6-33.8 39.2-61.4 36.3-20.1-2.1-38.2-9-42.3-27.1Z"
      />
      {name === "phone" ? (
        <>
          <path d="M72 33h38c7 0 12 5 12 12v64c0 7-5 12-12 12H72c-7 0-12-5-12-12V45c0-7 5-12 12-12Z" />
          <path d="M78 42h26" />
          <path d="M89 111h6" />
          <path d="M90 60c-12 0-22 9-22 20 0 7 4 13 10 17l-2 10 11-5c1 0 2 .1 3 .1 12 0 22-9 22-20S102 60 90 60Z" />
          <path d="M80 76c2 8 9 14 18 17" />
          <path d="M80 76l5-4 5 6-4 4" />
          <path d="M98 93l3-5 7 4-4 6" />
        </>
      ) : null}
      {name === "measure" ? (
        <>
          <path d="M38 93c33-18 62-29 92-19 12 4 18 12 15 21-6 20-54 24-86 13-15-5-24-11-21-15Z" />
          <path d="M60 87 136 63" />
          <path d="m63 76 73-23 13 39-73 24-13-40Z" />
          <path d="M74 83 86 79" />
          <path d="M91 78 103 74" />
          <path d="M108 72 120 68" />
          <path d="M124 67 136 63" />
          <path d="M77 95 91 91" />
          <path d="M98 89 112 85" />
          <path d="M120 82 134 78" />
          <path d="M48 98c15 18 76 24 100 0" />
        </>
      ) : null}
      {name === "estimate" ? (
        <>
          <path d="M54 42h48l10 12v66H54V42Z" />
          <path d="M101 42v14h12" />
          <path d="M68 62h27" />
          <path d="M68 76h32" />
          <path d="M68 90h25" />
          <path d="M116 80h34v42h-34V80Z" />
          <path d="M124 91h18" />
          <path d="M125 102h5" />
          <path d="M136 102h5" />
          <path d="M125 113h5" />
          <path d="M136 113h5" />
          <path d="M71 36h18" />
          <path d="M77 31v10" />
        </>
      ) : null}
      {name === "drill" ? (
        <>
          <path d="M42 71h55l12 10h18v17h-27L89 88H42V71Z" />
          <path d="M127 84h18" />
          <path d="M145 80 158 86 145 92" />
          <path d="M67 88h24l10 38H78L67 88Z" />
          <path d="M101 102h28v20H91" />
          <path d="M52 59h42v12H52V59Z" />
          <path d="M76 57v-8h26l14 10" />
          <path d="M54 80h20" />
        </>
      ) : null}
      {name === "shield" ? (
        <>
          <path d="M90 31 133 47v31c0 26-16 47-43 60-27-13-43-34-43-60V47l43-16Z" />
          <path d="M70 78 86 94l30-36" />
          <path d="M58 54c14-4 23-8 32-13 9 5 18 9 32 13" />
        </>
      ) : null}
      {name === "pencil" ? (
        <>
          <path d="m62 101 58-58 18 18-58 58-27 9 9-27Z" />
          <path d="m112 51 18 18" />
          <path d="m62 101 18 18" />
          <path d="M49 125c21 4 53 0 83-12" />
        </>
      ) : null}
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/"), faqSchema([...homepageFaqs])]} />

      <section className="hero">
        <div className="heroBackdrop" aria-hidden="true">
          <div className="heroBackdropInner">
            <div className="heroBackdropImage">
              <Image
                src={visualAssets[0].src}
                alt=""
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="heroImageFade" />
              <span className="heroImageNote">Sufit dwupoziomowy z LED — Wrocław. Realizacja: 2 dni.</span>
            </div>
          </div>
        </div>

        <div className="container heroShell">
          <div className="heroCopy">
            <h1>
              <span>Sufity napinane</span>{" "}
              <span>
                we Wrocławiu <span className="heroTitleAccent">i okolicach</span>
              </span>
            </h1>
            <p className="heroLead">
              Montujemy sufity napinane z oświetleniem LED w mieszkaniach, domach, lokalach
              usługowych i pomieszczeniach wilgotnych. Obsługujemy Wrocław oraz okolice do 100 km.
            </p>

            <div className="heroFeatureGrid" aria-label="Najważniejsze informacje">
              {heroFeatures.map((feature) => (
                <div className="heroFeature" key={feature.label}>
                  <span className="heroFeatureIcon">
                    <Image src={feature.imageSrc} alt="" width={60} height={60} />
                  </span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="buttonRow">
              <Button href={siteConfig.contacts.phoneHref} className="heroPrimaryCta">
                <CtaIcon name="phone" />
                Zadzwoń i umów pomiar
              </Button>
              <Button
                href={whatsappUrl(
                  "Dzień dobry, chcę zapytać o sufit napinany. Mogę wysłać zdjęcie i metraż."
                )}
                variant="secondary"
                className="heroWhatsappCta"
              >
                <CtaIcon name="whatsapp" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>

          <div className="heroMobileVisual">
            <Image
              src={visualAssets[0].src}
              alt={visualAssets[0].alt}
              width={1024}
              height={1024}
              priority
              loading="eager"
              sizes="100vw"
            />
            <span className="badge imageCaption">{visualAssets[0].label}</span>
          </div>
        </div>
      </section>

      <section className="trustBar">
        <div className="container grid4">
          {trustItems.map((item) => (
            <article className="card trustCard" key={item.title}>
              <div className={`trustIcon trustIcon--${item.icon}`} aria-hidden="true">
                <Image src={item.imageSrc} alt="" width={64} height={64} />
              </div>
              <div className="trustText">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Od czego zacząć?" title="Wybierz swoją ścieżkę" />
          <div className="grid2" style={{ marginTop: 34 }}>
            <article
              className="card miniCard"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                background: "var(--accent-soft)",
                borderColor: "var(--accent)"
              }}
            >
              <span className="audienceBadge" style={{ background: "var(--accent)", color: "var(--black)" }}>
                Wiem, czego chcę
              </span>
              <h3 style={{ marginTop: 14 }}>Sufit napinany — wycena i pomiar</h3>
              <p>Znasz sufity napinane? Przejdź od razu do cen, realizacji i bezpłatnego pomiaru.</p>
              <div className="buttonRow" style={{ marginTop: "auto", paddingTop: 18 }}>
                <Button href="/ceny">Zobacz ceny</Button>
              </div>
            </article>

            <article
              className="card miniCard"
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
            >
              <span className="audienceBadge">Dopiero poznaję temat</span>
              <h3 style={{ marginTop: 14 }}>Co to jest sufit napinany?</h3>
              <p>
                Nie znasz się na sufitach napinanych? Wyjaśnimy, czym są, czym różnią się od
                karton-gipsu i ile kosztują.
              </p>
              <div className="buttonRow" style={{ marginTop: "auto", paddingTop: 18 }}>
                <Button href="/sufity-napinane" variant="secondary">
                  Dowiedz się więcej
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section pricingSection" id="cena">
        <div className="container pricingDeck">
          <article className="card priceTableCard">
            <span className="eyebrow">Cena</span>
            <h2 className="priceCardTitle">Ile kosztuje sufit napinany?</h2>
            <div className="priceRows">
              {priceRows.map(([name, value]) => (
                <div className="priceRow" key={name}>
                  <span>{name}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <p className="softLabel">
              Kalkulator pokazuje orientacyjny zakres.
              <br />
              Finalna cena po pomiarze.
            </p>
            <Button href="/ceny#kalkulator" variant="secondary">
              Przejdź do kalkulatora
            </Button>
          </article>

          <aside className="priceExamplesPanel" aria-labelledby="price-examples-title">
            <div className="priceExamplesHeader">
              <span className="priceKicker" id="price-examples-title">
                Opis realizacji i ceny
              </span>
            </div>
            <div className="priceExampleGrid">
              {priceExamples.map((example) => (
                <article className="priceExampleItem" key={example.title}>
                  <div className="priceExampleImage">
                    <Image src={example.image} alt={example.alt} fill sizes="(max-width: 700px) 100vw, 180px" />
                  </div>
                  <div className="priceExampleBody">
                    <h3>{example.title}</h3>
                    <strong>{example.price}</strong>
                  </div>
                </article>
              ))}
            </div>
            <p className="softLabel">
              Przykładowe realizacje z oświetleniem i dodatkami. Sam sufit liczony jest od 120
              zł/m² — sprawdź w{" "}
              <Link href="/ceny#kalkulator" style={{ color: "var(--accent)" }}>
                kalkulatorze
              </Link>
              .
            </p>
            <div className="priceExamplesActions">
              <Link className="sectionArrowLink" href="/realizacje">
                Zobacz więcej realizacji
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section audienceSection">
        <div className="container audienceContainer">
          <div className="audienceHeader">
            <SectionHeader
              eyebrow="Dla kogo"
              title="Dobieramy sufit do mieszkania, domu i lokalu"
              lead="Najpierw rozpoznajemy typ pomieszczenia, potem dobieramy materiał, światło i detale."
            />
          </div>
          <div className="audienceCards" aria-label="Typy pomieszczeń">
            {segments.map((segment) => (
              <article
                className={`audienceCard${"featured" in segment && segment.featured ? " audienceCardFeatured" : ""}`}
                key={segment.title}
              >
                <div className="audienceCardTop">
                  <span className="audienceBadge">{segment.badge}</span>
                  {"featured" in segment && segment.featured ? (
                    <span className="audienceStar" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="m12 3.6 2.3 5.1 5.5.7-4.1 3.7 1.1 5.5-4.8-2.8-4.8 2.8 1.1-5.5-4.1-3.7 5.5-.7L12 3.6Z" />
                      </svg>
                    </span>
                  ) : null}
                </div>
                <div className="audienceCardBody">
                  <span className="audienceIcon" aria-hidden="true">
                    <Image
                      className={`audienceIconImage audienceIconImage--${segment.iconKey}`}
                      src={segment.imageSrc}
                      alt=""
                      width={256}
                      height={256}
                      loading="eager"
                    />
                  </span>
                  <div className="audienceCopy">
                    <h3>{segment.title}</h3>
                    <p>{segment.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="section processSection">
        <div className="container">
          <div className="centerHeader processHeader">
            <SectionHeader eyebrow="Proces" title="Jak wygląda współpraca?" />
          </div>
          <ol className="processCards" aria-label="Etapy współpracy">
            {processSteps.map((step, index) => (
              <li className="processCard" key={step.title}>
                <span className="processNumber">{index + 1}</span>
                <div className="processIllustration" aria-hidden="true">
                  <Image className="processImage" src={step.imageSrc} alt="" width={160} height={160} />
                </div>
                <h3>{step.title}</h3>
                <span className="processDivider" aria-hidden="true" />
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="processCta">
            <div className="processCtaIcon" aria-hidden="true">
              <Image
                className="processCtaImage"
                src={trustItems[0].imageSrc}
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="processCtaText">
              <h3>Chcesz poznać orientacyjny koszt swojego sufitu?</h3>
              <p>Wyślij zdjęcie pomieszczenia - przygotujemy wstępną wycenę.</p>
            </div>
            <Button
              className="processCtaButton"
              href={whatsappUrl(
                "Dzień dobry, chcę poznać orientacyjny koszt sufitu napinanego. Mogę wysłać zdjęcie pomieszczenia i metraż."
              )}
            >
              Wyślij zdjęcie na WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section servicesSection">
        <div className="container">
          <div className="servicesHeader">
            <span className="eyebrow">Rozwiązania</span>
            <h2 className="sectionTitle">Sufit, światło i detale w jednym projekcie</h2>
            <p className="sectionLead">
              Zaczynamy od sufitu, ale od razu myślimy o świetle, karniszach i detalach, które
              wpływają na finalny efekt.
            </p>
          </div>
          <div className="grid4 sectionCards servicesGrid">
            {services.map((service) => {
              const visual = solutionVisuals[service.slug];

              return (
                <article className={`card serviceCard serviceCard--${service.slug}`} key={service.href}>
                  <div className="serviceImage">
                    <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 700px) 100vw, 25vw" />
                  </div>
                  <span className="serviceIcon" aria-hidden="true">
                    <Image
                      className="serviceIconImage"
                      src={visual.iconSrc}
                      alt=""
                      width={160}
                      height={160}
                      sizes="112px"
                    />
                  </span>
                  <div className="serviceCardBody">
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <Link href={service.href}>Zobacz rozwiązanie</Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link className="sectionArrowLink" href="/rozwiazania">
              Zobacz wszystkie rozwiązania
            </Link>
          </div>
          <div className="servicesCta">
            <div className="servicesCtaIcon" aria-hidden="true">
              <Image
                src="/icon/social-choice/phone-social-illustration.svg"
                alt=""
                width={112}
                height={112}
                sizes="112px"
              />
            </div>
            <span className="servicesCtaDivider" aria-hidden="true" />
            <div className="servicesCtaCopy">
              <h3>Nie wiesz, które rozwiązanie wybrać?</h3>
              <p>
                Zobacz nasze realizacje, filmy i porady w social media. Pokażemy, co sprawdza się
                najlepiej w prawdziwych wnętrzach.
              </p>
            </div>
            <div className="servicesCtaSocial" aria-label="Social media EkoSufity">
              {socialLinks.map((item) => (
                <Link
                  aria-label={`${item.label} EkoSufity`}
                  className="servicesCtaSocialLink"
                  href={item.href}
                  key={item.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="servicesCtaSocialIcon"
                    src={socialChoiceIconSrc[item.label]}
                    alt=""
                    width={68}
                    height={68}
                    sizes="68px"
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section ownerSection">
        <div className="container ownerDeck">
          <article className="card ownerBlock">
            <span className="eyebrow ownerEyebrow">Za EkoSufity stoi konkretna osoba</span>
            <div className="ownerPhoto">
              <Image
                src="/images/aleks-ekosufity-v2.webp"
                alt="Specjalista EkoSufity"
                width={900}
                height={900}
                sizes="(max-width: 700px) 100vw, 180px"
              />
            </div>
            <div className="ownerCopy">
              <h2 className="sectionTitle">Osobiście odpowiadam za jakość Twojego sufitu</h2>
              <p>{siteConfig.owner.description}</p>
              <p className="softLabel ownerSignature">
                <strong>Aleks</strong>
                <span>Specjalista od sufitów napinanych</span>
              </p>
            </div>
            <aside className="ownerArea">
              <p className="ownerAreaTitle">Działamy we Wrocławiu i okolicy do 100 km</p>
              <p>Wrocław, Oława, Oleśnica, Legnica, Wałbrzych, Świdnica i inne miejscowości.</p>
              <Image
                src="/images/mapa-dzialamy-do-100-km.png"
                alt="Mapa obszaru działania EkoSufity do 100 km od Wrocławia"
                width={420}
                height={420}
                sizes="(max-width: 900px) 80vw, 220px"
              />
            </aside>
          </article>
        </div>
      </section>

      <GoogleReviews />

      <section className="section faqSection">
        <div className="container faqShell">
          <div className="faqHeader">
            <SectionHeader
              eyebrow="FAQ"
              title="Najczęstsze pytania przed pomiarem"
              lead="Krótko wyjaśniamy cenę, pomiar, LED, montaż i gwarancję."
            />
          </div>
          <div className="faqList">
            {homepageFaqs.map((item, index) => (
              <details className="faqItem" key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalContactSection />
    </>
  );
}
