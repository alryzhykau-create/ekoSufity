import { SectionHeader } from "@/components/ui/SectionHeader";

// Porównanie z płytami G-K — sekcja używana na /sufity-napinane i /faq,
// więc tabela i liczby mają jedno źródło.
const comparisonRows = [
  ["Koszt z materiałem", "średnio ok. 120 zł/m²", "od 250 zł/m²"],
  ["Czas montażu", "1–2 dni", "3–5 dni"],
  ["Podczas montażu", "Bez wynoszenia mebli, bez kurzu i brudu", "Wynoszenie mebli, kurz, bałagan"],
  ["Odporność na wodę", "Nie boi się wody, wytrzymuje zalanie", "Chłonie wodę, odkształca się, pęka"],
  ["Pielęgnacja", "Można myć wodą lub łagodnym detergentem", "Wymaga przemalowania lub odnowienia"],
  ["Obniżenie sufitu", "Już od 3 cm", "Od 7–10 cm (konstrukcja ramy)"],
  ["Trwałość", "15–20 lat bez utraty wyglądu", "Z czasem pęknięcia i odpryski"],
  ["Konserwacja", "Nie wymaga dodatkowego wykończenia", "Wymaga okresowych napraw"]
];

export function ComparisonSection({ alt = true }: { alt?: boolean }) {
  return (
    <section className={`section${alt ? " sectionAlt" : ""}`}>
      <div className="container">
        <SectionHeader
          eyebrow="Porównanie"
          title="Sufit napinany czy karton-gips?"
          lead="Sufit napinany i sufit z płyt karton-gips (G-K) to dwa różne rozwiązania. Poniżej porównanie, które pomaga zdecydować."
          leadClassName="sectionLead--full"
        />
        <div className="comparisonScroll">
          <table className="comparisonTable">
            <thead>
              <tr>
                <th>Właściwość</th>
                <th>Sufit napinany</th>
                <th>Sufit z płyt G-K</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([property, stretch, gk]) => (
                <tr key={property}>
                  <th scope="row">{property}</th>
                  <td data-label="Napinany">{stretch}</td>
                  <td data-label="Płyty G-K">{gk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
