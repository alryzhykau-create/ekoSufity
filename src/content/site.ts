export const siteConfig = {
  brand: "EkoSufity",
  descriptor: "Sufity napinane",
  baseUrl: "https://ekosufity.pl",
  serviceArea: "Wrocław i do 100 km od miasta",
  region: "Dolny Śląsk",
  languages: ["polski", "białoruski", "rosyjski", "ukraiński"],
  contacts: {
    phoneDisplay: "+48 791 085 385",
    phoneHref: "tel:+48791085385",
    whatsappDisplay: "WhatsApp",
    whatsappHref: "https://wa.me/48791085385",
    googleBusinessProfileHref: "https://share.google/Jw2ydy4KMAOkC3WZv",
    email: "ekosufity@gmail.com",
    hours: "pon. - pt. 9:00-20:00"
  },
  offerFacts: {
    measurement: "Bezpłatny pomiar bez dodatkowych opłat",
    travel: "Dojazd do 100 km od Wrocławia gratis",
    basePrice:
      "średnio ok. 120 zł/m² dla prostego sufitu MSD w prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów",
    warranty: "15 lat na płótno, 5 lat na montaż i 2 lata na oświetlenie LED"
  },
  owner: {
    description:
      "Nazywam się Aleks i osobiście pomagam dobrać sufit, oświetlenie oraz detale wykończenia do wnętrza, budżetu i oczekiwań klienta. Nadzoruję realizację i dbam o to, aby efekt był estetyczny, trwały i dopracowany."
  }
} as const;

export const socialLinks = [
  { href: "https://www.instagram.com/ekosufity/", label: "Instagram", iconSrc: "/icon/footer-social/instagram.svg" },
  { href: "https://www.tiktok.com/@eko_sufity_napinane", label: "TikTok", iconSrc: "/icon/footer-social/tiktok.svg" },
  { href: "https://www.facebook.com/ekosufity/", label: "Facebook", iconSrc: "/icon/footer-social/facebook.svg" },
  { href: "https://www.youtube.com/@EkoSufityNapinane", label: "YouTube", iconSrc: "/icon/footer-social/youtube.svg" }
] as const;

export function whatsappUrl(message?: string) {
  if (!message) {
    return siteConfig.contacts.whatsappHref;
  }

  return `${siteConfig.contacts.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalizedPath}`;
}
