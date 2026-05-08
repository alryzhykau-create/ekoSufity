import { Star } from "lucide-react";

const reviews = [
  [
    "Pan Alex doradził najlepsze rozwiązanie. Montaż wykonany szybko i bardzo dokładnie. Polecam każdemu!",
    "Michał, Wrocław",
  ],
  [
    "Sufit wygląda świetnie! Czysto, estetycznie i w jeden dzień. Świetny kontakt i pełen profesjonalizm.",
    "Kasia, Oława",
  ],
  [
    "Zdecydowanie polecam EkoSufity. Jakość na najwyższym poziomie, a cena uczciwa.",
    "Tomasz, Świdnica",
  ],
];

export function ReviewsSection() {
  return (
    <section id="opinie" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-5xl">Opinie klientów</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map(([text, author]) => (
            <figure key={author} className="rounded-lg bg-white p-6 shadow-card">
              <div className="flex gap-1 text-gold-dark" aria-label="Ocena pięć gwiazdek">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 leading-8 text-muted">"{text}"</blockquote>
              <figcaption className="mt-5 font-extrabold">- {author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

