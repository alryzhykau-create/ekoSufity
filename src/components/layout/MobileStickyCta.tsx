"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappUrl } from "@/content/site";

/* Pasek „Zadzwoń / WhatsApp" na telefonie. Na pierwszym ekranie dublował
   przyciski hero, więc pokazuje się dopiero, gdy przyciski hero wyjdą
   z widoku — pilnuje tego IntersectionObserver na ich rzędzie. Strona bez
   przycisków hero (artykuł, polityka) dostaje pasek od razu. */
export function MobileStickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("main .heroPrimaryCta");
    const row = heroCta?.closest(".buttonRow") ?? heroCta;

    if (!row || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(row);
    return () => observer.disconnect();
  }, [pathname]);

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
