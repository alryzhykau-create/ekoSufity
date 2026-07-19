import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/content/site";

const RATING = "5,0";
const REVIEWS_COUNT = 15;

const reviews = [
  {
    name: "Dawid Drozdowski",
    text: "Sufit napinany świetnie się wkomponował w wielkopłytowy pokój z krzywymi ścianami. Tańsza, mniej brudząca i ogólnie dużo lepsza alternatywa dla sufitów z płyty."
  },
  {
    name: "P. S.",
    text: "Super Fachowiec, terminowość, dokładność i efekt WOW na koniec. Polecam w 100%"
  },
  {
    name: "Konrad Golczyk",
    text: "Serdecznie polecam firmę oraz ludzi w niej pracujących, bardzo profesjonalni. Terminy, realizacje oraz jakość wykonania w 100%."
  },
  {
    name: "Agnieszka Piestrak",
    text: "Sufit wyszedł wspaniale, ekipa profesjonalna i bardzo dokładna. Polecam serdecznie."
  },
  {
    name: "Piotr Hliwa",
    text: "Sufity wykonane perfekcyjnie, pełen profesjonalizm firmy EkoSufity. Dodatkowy atut to bardzo miły i profesjonalny szef. Serdecznie polecamy."
  }
];

// Różne kolory awatarów (styl Google).
const avatarColors = ["#4285F4", "#DB4437", "#0F9D58", "#C9791C", "#7B5EA7"];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="16" height="16" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section className="section reviewsBlock">
      <div className="container">
        <SectionHeader eyebrow="Opinie" title="Co mówią klienci w Google" />

        <div className="reviewsSummary">
          <span className="reviewsScore">{RATING}</span>
          <div className="reviewsSummaryMeta">
            <span className="reviewsStars" aria-hidden="true">
              ★★★★★
            </span>
            <span className="reviewsSummaryNote">na podstawie {REVIEWS_COUNT} opinii w Google</span>
          </div>
        </div>

        <div className="reviewsViewport">
          <div className="reviewsTrack">
            {[...reviews, ...reviews].map((review, index) => {
              const isClone = index >= reviews.length;
              return (
                <article
                  className="reviewCard"
                  key={`${review.name}-${index}`}
                  aria-hidden={isClone ? true : undefined}
                >
                  <div className="reviewCardTop">
                    <span
                      className="reviewAvatar"
                      style={{ background: avatarColors[index % reviews.length % avatarColors.length] }}
                      aria-hidden="true"
                    >
                      {review.name.charAt(0)}
                    </span>
                    <div className="reviewMeta">
                      <span className="reviewName">{review.name}</span>
                      <span className="reviewStars" aria-hidden="true">
                        ★★★★★
                      </span>
                    </div>
                    <span className="reviewGoogle">
                      <GoogleG />
                      Google
                    </span>
                  </div>
                  <p className="reviewText">{review.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="reviewsCta">
          <a
            className="btn btnPrimary"
            href={siteConfig.contacts.googleBusinessProfileHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz wszystkie opinie w Google
          </a>
        </div>
      </div>
    </section>
  );
}
