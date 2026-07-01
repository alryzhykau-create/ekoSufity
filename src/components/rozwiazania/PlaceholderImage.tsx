import type { CSSProperties } from "react";
import type { ImageSlot } from "@/content/rozwiazania";

type PlaceholderImageProps = {
  slot: ImageSlot;
  // Proporcje boksu, np. "4 / 3" (galeria) lub "900 / 640" (hero).
  ratio?: string;
  className?: string;
};

// Neutralny placeholder — realne zdjęcia Aleks doda później, podmieniając ścieżki w danych.
export function PlaceholderImage({ slot, ratio = "4 / 3", className = "" }: PlaceholderImageProps) {
  const style: CSSProperties = { aspectRatio: ratio };

  return (
    <div className={`rozPlaceholder ${className}`.trim()} role="img" aria-label={slot.alt} style={style}>
      <span className="rozPlaceholderCaption">{slot.caption ?? "przykładowy efekt"}</span>
    </div>
  );
}
