import Image from "next/image";
import Link from "next/link";
import { visualAssets } from "@/content/visual-assets";

type GalleryTile = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  /* Klucz pomieszczenia — musi zgadzać się z roomLabels w visual-assets. */
  room: string;
};

const galleryTiles: GalleryTile[] = [
  { src: "/images/salon-22m2-photo.png", alt: visualAssets[0].alt, kicker: "Salon", title: "Salon z sufitem napinanym i linią LED", room: "salon" },
  { src: visualAssets[1].src, alt: visualAssets[1].alt, kicker: "Kuchnia", title: "Kuchnia z czystym wykończeniem", room: "kuchnia" },
  { src: visualAssets[2].src, alt: visualAssets[2].alt, kicker: "Łazienka", title: "Łazienka i strefa wilgotna", room: "łazienka" },
  { src: visualAssets[3].src, alt: visualAssets[3].alt, kicker: "Mieszkanie", title: "Mieszkanie z linią LED", room: "mieszkanie" }
];

// Wstęga jedzie płynnie, więc kafle renderujemy dwa razy — druga połowa jest
// kopią (aria-hidden), żeby pętla translateX(-50%) była bezszwowa.
const marqueeTiles = [...galleryTiles, ...galleryTiles];

export function GallerySection() {
  return (
    <section className="section gallerySection">
      <div className="container">
        <div className="sectionSplitHeader galleryHeader">
          <div>
            <span className="eyebrow">Inspiracje</span>
            <h2 className="sectionTitle">Zobacz, jaki efekt można uzyskać</h2>
            <p className="sectionLead">
              Materiały pokazują przykładowe efekty i kierunki projektowe. Wizualizacje traktujemy
              jako inspirację - realne realizacje oznaczamy oddzielnie.
            </p>
          </div>
        </div>

        <div className="insViewport">
          <div className="insRibbon">
          {marqueeTiles.map((tile, index) => (
            <Link
              className="insTile"
              key={`${tile.src}-${index}`}
              href={`/realizacje?room=${encodeURIComponent(tile.room)}`}
              /* Druga połowa to wizualna kopia pętli: klikalna, ale niewidoczna
                 dla czytników i pomijana Tabem, żeby nie dublować linków. */
              aria-hidden={index >= galleryTiles.length ? true : undefined}
              tabIndex={index >= galleryTiles.length ? -1 : undefined}
            >
              <Image
                src={tile.src}
                alt={index >= galleryTiles.length ? "" : tile.alt}
                fill
                sizes="360px"
                loading={index < galleryTiles.length ? "eager" : "lazy"}
              />
              <div className="insOverlay" />
              <div className="insCaption">
                <span className="insKicker">{tile.kicker}</span>
                <h3>{tile.title}</h3>
              </div>
            </Link>
          ))}
          </div>
        </div>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <Link className="sectionArrowLink" href="/realizacje">
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}
