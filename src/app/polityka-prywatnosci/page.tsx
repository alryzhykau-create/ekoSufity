import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CopyEmailButton } from "@/components/legal/CopyEmailButton";
import { PrivacyToc } from "@/components/legal/PrivacyToc";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności EkoSufity zgodna z RODO: administrator danych, cele i podstawy przetwarzania, odbiorcy danych, okres przechowywania, Twoje prawa i pliki cookie.",
  ...seoMeta("/polityka-prywatnosci")
};

const tocItems = [
  { id: "administrator", label: "1. Administrator danych osobowych" },
  { id: "dane", label: "2. Jakie dane przetwarzamy" },
  { id: "cele", label: "3. Cele i podstawy prawne" },
  { id: "odbiorcy", label: "4. Odbiorcy danych" },
  { id: "eog", label: "5. Przekazywanie danych poza EOG" },
  { id: "cookies", label: "6. Pliki cookie i narzędzia" },
  { id: "profilowanie", label: "7. Profilowanie" },
  { id: "okres", label: "8. Okres przechowywania danych" },
  { id: "prawa", label: "9. Twoje prawa" },
  { id: "dobrowolnosc", label: "10. Dobrowolność podania danych" },
  { id: "zmiany", label: "11. Zmiany polityki prywatności" }
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }])} />

      <section className="pageHero">
        <div className="container pageHeroCopy">
          <Breadcrumbs items={[{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }]} />
          <span className="eyebrow">RODO</span>
          <h1>Polityka prywatności</h1>
          <p className="pageLead">
            Zasady przetwarzania danych osobowych użytkowników serwisu ekosufity.pl oraz osób
            kontaktujących się z EkoSufity telefonicznie, przez WhatsApp lub formularz kontaktowy.
          </p>
          <div className="privacyHeroBadges">
            <span className="badge">Ostatnia aktualizacja: 3.03.2026</span>
            <span className="badge">Zgodne z RODO (UE 2016/679)</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container privacyGrid">
          <aside className="privacyAside">
            <PrivacyToc items={tocItems} />
            <div className="privacyTocCard">
              <p>Masz pytanie o dane?</p>
              <p>Napisz — odpowiemy w ciągu 30 dni.</p>
              <CopyEmailButton email={siteConfig.contacts.email} />
            </div>
          </aside>

          <div className="privacyMain">
            <div className="privacyBlock" id="administrator">
              <h2>1. Administrator danych osobowych</h2>
              <p>
                Administratorem Twoich danych osobowych jest firma „EkoSufity — Aliaksei Ryzhykau” z
                siedzibą przy ul. Arbuzowa 13C, 54-054 Wrocław, NIP 8943174798 (dalej: „Administrator”
                lub „my”). We wszystkich sprawach dotyczących ochrony danych osobowych możesz
                skontaktować się z nami: e-mail{" "}
                <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>,
                telefon{" "}
                <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>.
              </p>
            </div>

            <div className="privacyBlock" id="dane">
              <h2>2. Jakie dane przetwarzamy</h2>
              <p>
                Przetwarzamy dane, które podajesz nam samodzielnie, oraz dane zbierane automatycznie
                podczas korzystania z serwisu:
              </p>
              <ul>
                <li>
                  Dane kontaktowe podane w formularzu, telefonicznie lub przez WhatsApp: imię, numer
                  telefonu oraz treść wiadomości (np. informacje o pomieszczeniu, metrażu i zakresie
                  prac).
                </li>
                <li>
                  Dane techniczne i o aktywności w serwisie: adres IP, typ i wersja przeglądarki,
                  system operacyjny, przybliżona lokalizacja, strony odwiedzane w serwisie oraz
                  sposób korzystania z nich — zbierane automatycznie za pomocą plików cookie i
                  podobnych technologii.
                </li>
              </ul>
            </div>

            <div className="privacyBlock" id="cele">
              <h2>3. Cele i podstawy prawne przetwarzania</h2>
              <p>Twoje dane przetwarzamy w następujących celach:</p>
              <ul>
                <li>
                  Obsługa zapytania, przygotowanie wyceny i umówienie pomiaru — podstawa: podjęcie
                  działań na Twoje żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).
                </li>
                <li>
                  Marketing i reklama, w tym w serwisach zewnętrznych — podstawa: Twoja zgoda (art. 6
                  ust. 1 lit. a RODO) oraz nasz prawnie uzasadniony interes polegający na promocji
                  usług (art. 6 ust. 1 lit. f RODO).
                </li>
                <li>
                  Wypełnienie obowiązków prawnych (np. podatkowych, księgowych) — podstawa: art. 6
                  ust. 1 lit. c RODO.
                </li>
                <li>
                  Ustalenie, dochodzenie lub obrona roszczeń — podstawa: nasz prawnie uzasadniony
                  interes (art. 6 ust. 1 lit. f RODO).
                </li>
              </ul>
            </div>

            <div className="privacyBlock" id="odbiorcy">
              <h2>4. Odbiorcy danych</h2>
              <p>
                Twoich danych nie sprzedajemy ani nie udostępniamy w celach zarobkowych. Dane mogą
                być powierzone lub udostępnione wyłącznie podmiotom, które wspierają działanie
                serwisu i naszą działalność:
              </p>
              <ul>
                <li>dostawcy hostingu i infrastruktury serwisu internetowego;</li>
                <li>
                  komunikator Telegram — za jego pośrednictwem odbieramy zgłoszenia wysłane przez
                  formularz kontaktowy;
                </li>
                <li>
                  dostawcy narzędzi analitycznych i reklamowych — o ile wyrazisz zgodę na odpowiednie
                  pliki cookie (szczegóły w pkt 6);
                </li>
                <li>podmioty uprawnione na podstawie przepisów prawa (np. organy administracji).</li>
              </ul>
            </div>

            <div className="privacyBlock" id="eog">
              <h2>5. Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)</h2>
              <p>
                Niektórzy dostawcy narzędzi analitycznych i reklamowych (Google, Meta — Facebook i
                Instagram, TikTok) mają siedzibę poza EOG, m.in. w Stanach Zjednoczonych. Oznacza to,
                że w przypadku korzystania z tych narzędzi Twoje dane mogą być przetwarzane poza EOG.
                Przekazywanie odbywa się z zastosowaniem zabezpieczeń wymaganych przez RODO —
                standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub na
                podstawie decyzji o odpowiednim stopniu ochrony (np. Data Privacy Framework).
                Narzędzia te uruchamiamy wyłącznie po wyrażeniu przez Ciebie zgody w banerze cookie.
              </p>
            </div>

            <div className="privacyBlock" id="cookies">
              <h2>6. Pliki cookie i narzędzia zewnętrzne</h2>
              <p>
                Serwis wykorzystuje pliki cookie i podobne technologie, które dzielimy na kategorie:
              </p>
              <ul>
                <li>
                  Niezbędne — konieczne do prawidłowego działania serwisu; są zawsze aktywne i nie
                  wymagają zgody.
                </li>
                <li>
                  Analityczne — pomagają nam zrozumieć, jak korzystasz z serwisu, i ulepszać stronę.
                  Korzystamy z: Google Analytics (Google Ireland Ltd. / Google LLC).
                </li>
                <li>
                  Reklamowe / marketingowe — umożliwiają wyświetlanie trafnych reklam i mierzenie ich
                  skuteczności. Korzystamy z: Google Ads (Google), Meta Pixel (Facebook, Instagram —
                  Meta Platforms Ireland Ltd.), TikTok Pixel (TikTok Technology Ltd.).
                </li>
              </ul>
              <p>
                Pliki cookie analityczne i reklamowe uruchamiamy wyłącznie po wyrażeniu przez Ciebie
                zgody w banerze cookie wyświetlanym przy wejściu na stronę. Zgodę możesz w każdej
                chwili zmienić lub wycofać w ustawieniach plików cookie oraz w ustawieniach swojej
                przeglądarki.
              </p>
            </div>

            <div className="privacyBlock" id="profilowanie">
              <h2>7. Profilowanie</h2>
              <p>
                W ramach działań reklamowych (Google, Meta, TikTok) Twoje dane mogą być
                wykorzystywane do profilowania — czyli automatycznego dopasowywania wyświetlanych
                reklam do Twoich zainteresowań na podstawie aktywności w internecie. Profilowanie to
                nie wywołuje wobec Ciebie skutków prawnych ani nie wpływa istotnie na Twoją sytuację.
                Odbywa się wyłącznie po wyrażeniu zgody na pliki cookie reklamowe i możesz je w
                każdej chwili wyłączyć, wycofując zgodę.
              </p>
            </div>

            <div className="privacyBlock" id="okres">
              <h2>8. Okres przechowywania danych</h2>
              <ul>
                <li>
                  Dane z zapytań przechowujemy przez czas niezbędny do obsługi zapytania i
                  ewentualnej realizacji usługi, a następnie przez okres wymagany przepisami (np.
                  podatkowymi) lub do przedawnienia roszczeń.
                </li>
                <li>Dane przetwarzane na podstawie zgody — do czasu jej wycofania.</li>
                <li>
                  Dane z plików cookie — przez okres ważności danego pliku cookie lub do czasu
                  wycofania zgody.
                </li>
              </ul>
            </div>

            <div className="privacyBlock" id="prawa">
              <h2>9. Twoje prawa</h2>
              <p>
                Przysługują Ci prawa do: dostępu do swoich danych i uzyskania ich kopii;
                sprostowania (poprawienia) danych; usunięcia danych („prawo do bycia zapomnianym”);
                ograniczenia przetwarzania; przenoszenia danych; wniesienia sprzeciwu wobec
                przetwarzania opartego na prawnie uzasadnionym interesie, w tym wobec profilowania na
                potrzeby marketingu; cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z
                prawem przetwarzania sprzed cofnięcia).
              </p>
              <p>
                Aby skorzystać z praw, napisz na adres{" "}
                <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>.
                Masz również prawo wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony
                Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.
              </p>
            </div>

            <div className="privacyBlock" id="dobrowolnosc">
              <h2>10. Dobrowolność podania danych</h2>
              <p>
                Podanie danych jest dobrowolne, ale niezbędne do obsługi zapytania i przygotowania
                wyceny. Bez podania numeru telefonu lub innych danych kontaktowych nie będziemy w
                stanie skontaktować się z Tobą i przygotować oferty.
              </p>
            </div>

            <div className="privacyBlock" id="zmiany">
              <h2>11. Zmiany polityki prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. Aktualna wersja jest
                zawsze dostępna na tej stronie.
              </p>
              <p className="footerMuted">Ostatnia aktualizacja: 3 marca 2026.</p>
            </div>

            <div className="privacyBlock privacyAttribution">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
