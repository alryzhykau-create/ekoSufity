"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/content/site";
import {
  finishLabels,
  roomLabels,
  visualAssets,
  type FinishKey,
  type RoomKey
} from "@/content/visual-assets";

type RealizacjeGalleryProps = {
  initialRoom?: string;
  initialFinish?: string;
};

const ALL = "all";

export function RealizacjeGallery({ initialRoom, initialFinish }: RealizacjeGalleryProps) {
  // Chipy budujemy tylko z wartości, które faktycznie występują w danych —
  // dzięki temu nie ma pustych filtrów, a lista rośnie razem ze zdjęciami.
  const rooms = useMemo(
    () => (Object.keys(roomLabels) as RoomKey[]).filter((r) => visualAssets.some((a) => a.room === r)),
    []
  );
  // Wszystkie 4 faktury pokazujemy zawsze — spójnie z fakturami na stronie.
  // Jeśli danej faktury nie ma jeszcze w realizacjach, filtr pokaże pusty stan.
  const finishes = useMemo(() => Object.keys(finishLabels) as FinishKey[], []);

  const [room, setRoom] = useState<string>(
    initialRoom && rooms.includes(initialRoom as RoomKey) ? initialRoom : ALL
  );
  const [finish, setFinish] = useState<string>(
    initialFinish && finishes.includes(initialFinish as FinishKey) ? initialFinish : ALL
  );

  const filtered = visualAssets.filter(
    (a) => (room === ALL || a.room === room) && (finish === ALL || a.finish === finish)
  );

  return (
    <div>
      <div className="filterBar" role="group" aria-label="Filtry realizacji">
        <div className="filterGroup">
          <span className="filterGroupLabel">Pomieszczenie</span>
          <button
            type="button"
            className={`filterChip${room === ALL ? " is-active" : ""}`}
            onClick={() => setRoom(ALL)}
            aria-pressed={room === ALL}
          >
            Wszystkie
          </button>
          {rooms.map((r) => (
            <button
              type="button"
              key={r}
              className={`filterChip${room === r ? " is-active" : ""}`}
              onClick={() => setRoom(r)}
              aria-pressed={room === r}
            >
              {roomLabels[r]}
            </button>
          ))}
        </div>

        <div className="filterGroup">
          <span className="filterGroupLabel">Faktura</span>
          <button
            type="button"
            className={`filterChip${finish === ALL ? " is-active" : ""}`}
            onClick={() => setFinish(ALL)}
            aria-pressed={finish === ALL}
          >
            Wszystkie
          </button>
          {finishes.map((f) => (
            <button
              type="button"
              key={f}
              className={`filterChip${finish === f ? " is-active" : ""}`}
              onClick={() => setFinish(f)}
              aria-pressed={finish === f}
            >
              {finishLabels[f]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="galleryGrid">
          {filtered.map((asset, index) => (
            <Link
              className="galleryCard"
              key={asset.src}
              href={whatsappUrl(`Dzień dobry, interesuje mnie podobny efekt: ${asset.title}.`)}
            >
              <Image
                src={asset.src}
                alt={asset.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 400px"
              />
              {/* Uczciwe oznaczenie: to wizualizacja, nie zdjęcie z montażu. */}
              <span className="galleryBadge" title={asset.label}>
                Wizualizacja
              </span>
              <span className="galleryScrim" aria-hidden="true" />
              <span className="galleryCaption">
                <h3>{asset.title}</h3>
                <span className="galleryMeta">{asset.meta}</span>
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card galleryEmpty">
          <h3>Brak realizacji w tym filtrze</h3>
          <p>Napisz na WhatsApp — dobierzemy materiał i światło pod Twój efekt.</p>
          <Link
            className="btn btnPrimary"
            href={whatsappUrl("Dzień dobry, szukam realizacji sufitu napinanego pod konkretny efekt.")}
          >
            Napisz na WhatsApp
          </Link>
        </div>
      )}
    </div>
  );
}
