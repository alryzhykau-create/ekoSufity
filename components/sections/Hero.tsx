import Image from "next/image";
import { CalendarCheck, Clock3 } from "lucide-react";
import { getStaticPageContent } from "@/lib/content";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fm=webp&fit=crop&w=1400&q=85";
const homeContent = getStaticPageContent("/");
const heroBadges = homeContent.badges ?? [
  "Dojazd do 100 km gratis",
  "Montaż w 1 dzień",
  "Bez kurzu i remontu",
  "Ceny od 120 zł/m²",
];
const heroCtas = homeContent.ctas ?? ["Umów bezpłatny pomiar", "Zobacz ceny"];

const heroFeatures = [
  { label: heroBadges[0], imageSrc: "/images/dojazd-100km-gratis-icon.png" },
  { label: heroBadges[1], imageSrc: "/images/montaz-1-dzien-icon.png" },
  { label: heroBadges[2], imageSrc: "/images/bez-kurzu-i-remontu-icon.png" },
  { label: heroBadges[3], imageSrc: "/images/ceny-od-icon.png" },
];

function CtaButtons() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <a
        className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-charcoal px-5 text-base font-medium leading-none text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black sm:w-[272px]"
        href="#kontakt"
        aria-label="Umów bezpłatny pomiar"
      >
        <CalendarCheck size={20} aria-hidden="true" />
        {heroCtas[0]}
      </a>
      <a
        className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-5 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
        href="#cennik"
        aria-label="Zobacz ceny"
      >
        {heroCtas[1]}
      </a>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[620px] lg:block">
        <div className="relative mx-auto h-full max-w-7xl px-8">
          <div className="absolute -top-20 bottom-0 left-[40%] right-0 overflow-hidden rounded-bl-[42px]">
            <Image
              className="h-full w-full object-cover object-[center_24%]"
              src={heroImage}
              alt="Matowy sufit napinany z linią LED w salonie we Wrocławiu"
              width={1400}
              height={900}
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFEFD_0%,rgba(255,254,253,0.95)_7%,rgba(255,254,253,0.52)_15%,rgba(255,254,253,0)_26%)]" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fbfaf7]/55 to-transparent" />
            <div className="absolute bottom-[76px] left-[24%] inline-flex rounded-lg bg-[rgba(17,24,39,0.22)] px-5 py-3.5 text-[15px] font-semibold leading-[1.35] text-white shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-[18px]">
              Wrocław, sufit matowy + linia LED, montaż 1 dzień
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-start gap-8 px-5 pb-8 pt-24 lg:min-h-[620px] lg:grid-cols-[0.44fr_0.56fr] lg:pr-8 lg:pl-0 lg:pb-28 lg:pt-24">
        <div className="relative z-10 flex flex-col gap-6 lg:gap-7">
          <h1 className="max-w-[570px] [font-family:Montserrat,Inter,ui-sans-serif,system-ui,sans-serif] text-[2.25rem] font-bold leading-[1.06] tracking-normal text-[#111111] sm:text-5xl lg:max-w-[760px] lg:text-[52px] lg:leading-[58px]">
            <span className="block">Sufity napinane</span>
            <span className="block">we Wrocławiu</span>
            <span className="block text-gold-dark">i okolicach do 100 km</span>
          </h1>
          <p className="max-w-[560px] [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[16px] leading-[24px] text-[#333333] lg:max-w-[700px]">
            {homeContent.lead}
          </p>

          <div className="grid max-w-[560px] grid-cols-2 gap-4 [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[12px] font-semibold leading-[16px] sm:grid-cols-4 lg:max-w-[940px] lg:gap-x-8">
            {heroFeatures.map(({ label, imageSrc }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-white text-gold-dark">
                  <Image
                    className="h-8 w-8 object-contain"
                    src={imageSrc}
                    alt=""
                    width={96}
                    height={96}
                    aria-hidden="true"
                  />
                </span>
                <span className="leading-[16px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:gap-7">
            <CtaButtons />
            <p className="flex items-center gap-2 [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[12px] font-semibold leading-none text-[#B47A3C]">
              <Clock3 size={16} className="text-[#B47A3C]" aria-hidden="true" />
              {homeContent.microcopy}
            </p>
          </div>
        </div>

        <div className="relative lg:hidden">
          <div className="absolute -left-14 top-16 hidden h-72 w-72 rounded-full bg-white/70 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-lg bg-white shadow-soft">
            <Image
              className="h-[400px] w-full object-cover md:h-[500px]"
              src={heroImage}
              alt="Matowy sufit napinany z linią LED w salonie we Wrocławiu"
              width={1400}
              height={900}
              priority
              sizes="100vw"
            />
            <div className="absolute bottom-5 left-5 inline-flex max-w-[calc(100%-2.5rem)] rounded-lg bg-[rgba(17,24,39,0.22)] px-5 py-3.5 text-[15px] font-semibold leading-[1.35] text-white shadow-[0_12px_34px_rgba(0,0,0,0.12)] backdrop-blur-[18px]">
              Wrocław, sufit matowy + linia LED, montaż 1 dzień
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection as Hero };
