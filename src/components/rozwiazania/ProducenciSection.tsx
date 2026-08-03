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
    imageSrc: "/images/marka-msd.jpg"
  },
  {
    title: "Bauf",
    copy: "Niemiecka marka i technologia, produkcja według europejskich norm.",
    href: "/rozwiazania/folie#bauf",
    imageSrc: "/images/marka-bauf.jpg"
  },
  {
    title: "Teqtum",
    copy: "Niemiecka marka z segmentu premium. Najwyższa półka jakościowa.",
    href: "/rozwiazania/folie#teqtum",
    imageSrc: "/images/marka-teqtum.jpg"
  }
];

export function ProducenciSection({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`section${alt ? " sectionAlt" : ""}`}>
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
  );
}
