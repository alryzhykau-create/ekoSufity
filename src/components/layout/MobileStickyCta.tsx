import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappUrl } from "@/content/site";

export function MobileStickyCta() {
  return (
    <div className="mobileSticky" aria-label="Szybki kontakt">
      <Button href={siteConfig.contacts.phoneHref}>Zadzwoń</Button>
      <Button href={whatsappUrl()} variant="secondary">
        WhatsApp
      </Button>
    </div>
  );
}
