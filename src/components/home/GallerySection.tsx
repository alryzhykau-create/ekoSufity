import Image from "next/image";
import Link from "next/link";
import { visualAssets } from "@/content/visual-assets";

type GalleryTile = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
};

const galleryTiles: GalleryTile[] = [
  { src: "/images/salon-22m2-photo.png", alt: visualAssets[0].alt, kicker: "Salon", title: "Salon z sufitem napinanym i linią LED" },
  { src: visualAssets[1].src, alt: visualAssets[1].alt, kicker: "Kuchnia", title: "Kuchnia z czystym wykończeniem" },
  { src: visualAssets[2].src, alt: visualAssets[2].alt, kicker: "Łazienka", title: "Łazienka i strefa wilgotna" },
  { src: visualAssets[3].src, alt: visualAssets[3].alt, kicker: "Mieszkanie", title: "Mieszkanie z linią LED" }
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
      </div>

      <div className="insViewport">
        <div className="insRibbon">
          {marqueeTiles.map((tile, index) => (
            <div
              className="insTile"
              key={`${tile.src}-${index}`}
              aria-hidden={index >= galleryTiles.length ? true : undefined}
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
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <Link className="sectionArrowLink" href="/realizacje">
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}
