import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Nie znaleziono strony"
};

export default function NotFound() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <span className="eyebrow">Błąd 404</span>
          <h1>Nie znaleźliśmy tej strony</h1>
          <p className="pageLead">
            Strona mogła zostać przeniesiona albo adres ma literówkę. Zobacz{" "}
            <Link href="/ceny" className="inlineLink">
              ceny
            </Link>{" "}
            i{" "}
            <Link href="/rozwiazania" className="inlineLink">
              rozwiązania
            </Link>{" "}
            albo skontaktuj się z nami bezpośrednio.
          </p>
          <div className="buttonRow">
            <Button href="/">Wróć na stronę główną</Button>
            <Button href={siteConfig.contacts.phoneHref} variant="secondary">
              Zadzwoń: {siteConfig.contacts.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <section className="section finalCtaSection">
        <div className="container finalCtaCard">
          <div>
            <span className="eyebrow">Bezpłatny pomiar</span>
            <h2 className="sectionTitle">Szukasz sufitu napinanego?</h2>
            <p>
              Wyślij zdjęcie pomieszczenia, miasto i orientacyjny metraż — podpowiemy rozwiązanie i
              umówimy bezpłatny pomiar.
            </p>
          </div>
          <div className="buttonRow">
            <Button href={siteConfig.contacts.phoneHref}>Zadzwoń i umów pomiar</Button>
            <Button href={whatsappUrl()} variant="secondary">
              Napisz na WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
