import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności EkoSufity zgodna z RODO: administrator danych, cele i podstawy przetwarzania, odbiorcy danych, okres przechowywania, Twoje prawa i pliki cookie.",
  ...seoMeta("/polityka-prywatnosci")
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }])} />

      <section className="pageHero">
        <div className="container pageHeroCopy">
          <Breadcrumbs items={[{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }]} />
          <span className="eyebrow">Dokument</span>
          <h1>Polityka prywatności</h1>
          <p className="pageLead">
            Zasady przetwarzania danych osobowych użytkowników serwisu ekosufity.pl oraz osób
            kontaktujących się z EkoSufity telefonicznie, przez WhatsApp lub formularz kontaktowy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card privacyTextCard" style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2>Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych jest firma „EkoSufity — Aliaksei Ryzhykau” z siedzibą
              przy ul. Arbuzowa 13C, 54-054 Wrocław, NIP 8943174798. Kontakt w sprawach danych
              osobowych: e-mail{" "}
              <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>,
              tel.{" "}
              <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>.
            </p>

            <h2>Jakie dane zbieramy</h2>
            <p>
              Za pośrednictwem serwisu ekosufity.pl oraz innych form kontaktu zbieramy i
              przetwarzamy:
            </p>
            <ul>
              <li>
                dane podane w formularzu kontaktowym lub przy kontakcie telefonicznym/WhatsApp: imię,
                numer telefonu oraz treść wiadomości (np. informacje o pomieszczeniu i zakresie
                prac);
              </li>
              <li>
                dane o aktywności w serwisie oraz dane techniczne urządzenia (adres IP, typ
                przeglądarki, przybliżona lokalizacja), zbierane automatycznie za pomocą plików
                cookie.
              </li>
            </ul>

            <h2>Cel i podstawa prawna przetwarzania</h2>
            <p>Dane przetwarzamy w celu:</p>
            <ul>
              <li>
                obsługi zapytania, przygotowania wyceny i umówienia pomiaru — na podstawie działań
                podejmowanych na żądanie osoby, której dane dotyczą (art. 6 ust. 1 lit. b RODO);
              </li>
              <li>
                prowadzenia marketingu, w tym reklamy w serwisach zewnętrznych — na podstawie zgody
                lub naszego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. a i f RODO);
              </li>
              <li>
                wypełnienia obowiązków prawnych, np. podatkowych i księgowych (art. 6 ust. 1 lit. c
                RODO).
              </li>
            </ul>

            <h2>Odbiorcy danych</h2>
            <p>Dane mogą być przekazywane:</p>
            <ul>
              <li>dostawcom usług hostingu i infrastruktury serwisu;</li>
              <li>
                operatorowi komunikatora Telegram — za jego pośrednictwem odbieramy zgłoszenia z
                formularza kontaktowego;
              </li>
              <li>
                dostawcom narzędzi analitycznych i reklamowych: Google (Google Ads, Google
                Analytics), Meta (Facebook, Instagram) oraz TikTok — jeżeli wyrazisz zgodę na
                odpowiednie pliki cookie;
              </li>
              <li>podmiotom uprawnionym na podstawie przepisów prawa.</li>
            </ul>

            <h2>Okres przechowywania danych</h2>
            <p>
              Dane przechowujemy przez okres niezbędny do realizacji celu, w jakim zostały zebrane —
              do czasu zakończenia obsługi zapytania, a w przypadku danych przetwarzanych na
              podstawie zgody — do czasu jej cofnięcia. Dłużej przechowujemy dane, gdy wymagają tego
              przepisy prawa (np. podatkowe).
            </p>

            <h2>Twoje prawa</h2>
            <p>
              Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz cofnięcia zgody w
              dowolnym momencie. Żądania możesz zgłaszać na adres{" "}
              <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>.
              Masz również prawo wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony
              Danych Osobowych (UODO).
            </p>

            <h2>Pliki cookie</h2>
            <p>Serwis wykorzystuje pliki cookie:</p>
            <ul>
              <li>niezbędne — konieczne do prawidłowego działania strony (zawsze aktywne);</li>
              <li>
                analityczne — pomagają nam zrozumieć, jak korzystasz ze strony (Google Analytics);
              </li>
              <li>
                reklamowe/marketingowe — umożliwiają wyświetlanie trafnych reklam w serwisach
                Google, Meta (Facebook, Instagram) i TikTok.
              </li>
            </ul>
            <p>
              Cookie analityczne i reklamowe uruchamiamy wyłącznie po wyrażeniu zgody w banerze
              cookie. Zgodę możesz zmienić lub cofnąć w każdej chwili w ustawieniach plików cookie.
            </p>

            <h2>Kontakt</h2>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych możesz skontaktować się z nami:
              e-mail{" "}
              <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>,
              tel.{" "}
              <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>.
            </p>
            <p>
              W sprawach nieuregulowanych zastosowanie mają przepisy Kodeksu cywilnego oraz RODO
              (Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r.).
            </p>
            <p className="footerMuted">Ostatnia aktualizacja: 27 lipca 2026.</p>

            <h2>Wykorzystane materiały</h2>
            <p>
              Ikona WhatsApp: „logotyp WhatsApp” autorstwa Rebin Infotech,{" "}
              <Link
                href="https://icon-icons.com/authors/290-rebin-infotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icon-Icons.com
              </Link>
              , licencja{" "}
              <Link
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY 4.0
              </Link>
              .
            </p>
            <p>
              Ikona telefonu: „telefon — sylwetka słuchawki” autorstwa Dave Gandy,{" "}
              <Link
                href="https://icon-icons.com/authors/370-dave-gandy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icon-Icons.com
              </Link>
              .
            </p>
            <p>
              Ikona wiadomości: „dymek rozmowy — czat” autorstwa Egor Rumyantsev,{" "}
              <Link
                href="https://icon-icons.com/authors/779-egor-rumyantsev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icon-Icons.com
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
