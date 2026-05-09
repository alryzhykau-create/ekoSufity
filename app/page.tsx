import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { PriceCalculator } from "@/components/PriceCalculator";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { CeilingTypesSection } from "@/components/sections/CeilingTypesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { LightingSection } from "@/components/sections/LightingSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { getStaticPageContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

const pageContent = getStaticPageContent("/");

export const metadata = createPageMetadata({
  title: pageContent.seoTitle,
  description: pageContent.seoDescription,
  path: pageContent.path,
});

export default function HomePage() {
  return (
    <>
      <SeoJsonLd />
      <Header />
      <main id="home" className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs />
        <Hero />
        <ServicesSection />
        <PricingSection />
        <PriceCalculator />
        <CeilingTypesSection />
        <SolutionsSection />
        <LightingSection />
        <GallerySection />
        <ProcessSection />
        <ReviewsSection />
        <ComparisonSection />
        <LocationsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
