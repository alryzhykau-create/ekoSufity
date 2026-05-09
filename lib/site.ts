const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ekosufity.pl";

export const siteConfig = {
  name: "EkoSufity",
  domain: "ekosufity.pl",
  url: siteUrl,
  title: "Sufity napinane Wrocław | EkoSufity",
  description:
    "Sufity napinane we Wrocławiu i okolicach do 100 km. Bezpłatny pomiar, szybki montaż bez kurzu i uczciwa wycena.",
  defaultImage: "/images/wroclaw-radius-map.jpg",
  phone: "+48 791 085 385",
  phoneHref: "tel:+48791085385",
  whatsappHref:
    "https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%20zapyta%C4%87%20o%20sufit%20napinany%20i%20um%C3%B3wi%C4%87%20bezp%C5%82atny%20pomiar.",
  email: "ekosufity@gmail.com",
  streetAddress: "Strzegomska 204",
  postalCode: "53-611",
  city: "Wrocław",
  country: "PL",
  openingHours: "Mo-Fr 09:00-20:00",
  areaServed: "Wrocław i okolice do 100 km",
  priceRange: "od 120 zł/m²",
  locale: "pl_PL",
};
