import Image from "next/image";
import Link from "next/link";
import { visualAssets } from "@/content/visual-assets";

type GalleryCard = (typeof visualAssets)[number] & {
  tags: string[];
};

const galleryCards: GalleryCard[] = [
  {
    ...visualAssets[0],
    src: "/images/salon-22m2-photo.png",
    tags: ["salon", "LED", "połysk"]
  },
  {
    ...visualAssets[1],
    tags: ["kuchnia", "jasny efekt"]
  },
  {
    ...visualAssets[2],
    tags: ["łazienka", "wilgoć"]
  },
  {
    ...visualAssets[3],
    tags: ["mieszkanie", "LED", "klimat"]
  }
];

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

        <div className="galleryGrid">
          {galleryCards.map((asset, index) => (
            <article className="card galleryCard" key={asset.src}>
              <div className="galleryImage">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 700px) 100vw, 280px"
                />
              </div>
              <div className="galleryContent">
                <h3>{asset.title}</h3>
                <div className="galleryTags" aria-label={`Kategorie: ${asset.tags.join(", ")}`}>
                  {asset.tags.map((tag) => (
                    <span className="galleryTag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  className="galleryCta"
                  href={`/realizacje?room=${encodeURIComponent(asset.room)}`}
                >
                  Zobacz podobne realizacje
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
