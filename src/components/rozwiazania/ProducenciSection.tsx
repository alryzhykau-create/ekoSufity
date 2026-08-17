import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Karty producentów folii — sekcja używana na /sufity-napinane i /faq,
// więc dane i układ trzymamy w jednym miejscu.
const folieCards = [
  {
    title: "MSD",
    copy: "Najczęściej montowana folia, najlepszy stosunek jakości do ceny. Ponad 120 kolorów w linii Premium.",
    href: "/rozwiazania/folie#msd",
    imageSrc: "/images/marka-msd.jpg",
    cena: "120 zł"
  },
  {
    title: "Bauf",
    copy: "Niemiecka marka i technologia, produkcja według europejskich norm.",
    href: "/rozwiazania/folie#bauf",
    imageSrc: "/images/marka-bauf.jpg",
    cena: "135 zł"
  },
  {
    title: "Teqtum",
    copy: "Niemiecka marka z segmentu premium. Najwyższa półka jakościowa.",
    href: "/rozwiazania/folie#teqtum",
    imageSrc: "/images/marka-teqtum.jpg",
    cena: "170 zł"
  }
];

type ProducenciSectionProps = {
  alt?: boolean;
  /* Cena za m² na karcie — pokazujemy ją tylko na /ceny. */
  zCenami?: boolean;
  /* Bez własnej sekcji: karty wchodzą jako kolejny blok w istniejącej sekcji,
     żeby nie łamać naprzemiennych tł stron. */
  bezSekcji?: boolean;
};

export function ProducenciSection({
  alt = false,
  zCenami = false,
  bezSekcji = false
}: ProducenciSectionProps) {
  const tresc = (
    <>
      <SectionHeader
        eyebrow="Producenci"
        title={zCenami ? "Cena folii według producenta" : "Folie sprawdzonych producentów"}
        lead={
          zCenami
            ? "Ceny prostego sufitu: prostokąt, 4 narożniki, bez dodatków. Materiał dobieramy pod projekt, efekt i budżet."
            : "Materiał dobieramy pod projekt, efekt i budżet."
        }
      />
      {/* Na /ceny kwoty stoją na kartach, w pozostałych miejscach prowadzimy
          do cennika — cena zależy od producenta i ludzie o to pytają. */}
      {zCenami ? null : (
        <p className="poradnikHint">
          <Link className="inlineLink" href="/ceny#ceny-folii">
            Ceny folii MSD, Bauf i Teqtum →
          </Link>
        </p>
      )}
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
            {zCenami ? (
              <p className="foliaPrice">
                <strong>{card.cena}</strong>
                <span>/m²</span>
              </p>
            ) : null}
            <p>{card.copy}</p>
            <p className="cardArrowText">Poznaj folię →</p>
          </Link>
        ))}
      </div>
    </>
  );

  if (bezSekcji) {
    // Kotwica dla linków „ceny folii" z /rozwiazania/folie.
    return (
      <div className="producenciBlok" id="ceny-folii" style={{ scrollMarginTop: 90 }}>
        {tresc}
      </div>
    );
  }

  return (
    <section className={`section${alt ? " sectionAlt" : ""}`}>
      <div className="container">{tresc}</div>
    </section>
  );
}
