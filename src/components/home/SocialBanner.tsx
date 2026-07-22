import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/content/site";

const socialIconSrc: Record<string, string> = {
  Instagram: "/icon/footer-social/instagram.svg",
  TikTok: "/icon/footer-social/tiktok.svg",
  Facebook: "/icon/footer-social/facebook.svg",
  YouTube: "/icon/footer-social/youtube.svg"
};

/* Baner „Obserwuj nas w social media" — wspólny dla strony głównej i podstron. */
export function SocialBanner() {
  return (
    <div className="servicesCta">
      <div className="servicesCtaIcon" aria-hidden="true">
        <Image
          src="/icon/social-choice/phone-social-illustration.svg"
          alt=""
          width={112}
          height={112}
          sizes="112px"
        />
      </div>
      <span className="servicesCtaDivider" aria-hidden="true" />
      <div className="servicesCtaCopy">
        <h3>Obserwuj nas w social media</h3>
        <p>
          Zobacz nasze realizacje, filmy i porady w social media. Pokażemy, co sprawdza się
          najlepiej w prawdziwych wnętrzach.
        </p>
      </div>
      <div className="servicesCtaSocial" aria-label="Social media EkoSufity">
        {socialLinks.map((item) => (
          <Link
            aria-label={`${item.label} EkoSufity`}
            className="servicesCtaSocialLink"
            href={item.href}
            key={item.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="servicesCtaSocialCircle" aria-hidden="true">
              {item.label === "YouTube" ? (
                // Inline SVG: na hover prostokąt i trójkąt trzeba przemalować
                // osobno, filtrem oba zbielałyby i trójkąt by zniknął.
                <svg className="servicesCtaYtIcon" width="42" height="42" viewBox="0 0 24 24">
                  <rect x="2" y="5.7" width="20" height="12.6" rx="3.8" />
                  <path d="M10 9.15 15.1 12 10 14.85z" />
                </svg>
              ) : (
                <Image
                  className="servicesCtaSocialIcon"
                  src={socialIconSrc[item.label]}
                  alt=""
                  width={68}
                  height={68}
                  sizes="42px"
                />
              )}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
