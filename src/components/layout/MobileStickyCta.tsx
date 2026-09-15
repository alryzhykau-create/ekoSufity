"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappUrl } from "@/content/site";
import { useHeroCtaOffscreen } from "@/lib/hooks/useHeroCtaOffscreen";

/* Pasek „Zadzwoń / WhatsApp" na telefonie. Na pierwszym ekranie dublował
   przyciski hero, więc pokazuje się dopiero, gdy przyciski hero wyjdą
   z widoku. Strona bez przycisków hero dostaje pasek od razu. */
export function MobileStickyCta() {
  const visible = useHeroCtaOffscreen();

  return (
    <div
      className={`mobileSticky${visible ? " is-visible" : ""}`}
      aria-label="Szybki kontakt"
      aria-hidden={!visible}
    >
      <Button href={siteConfig.contacts.phoneHref}>Zadzwoń</Button>
      <Button href={whatsappUrl()} variant="secondary">
        WhatsApp
      </Button>
    </div>
  );
}
