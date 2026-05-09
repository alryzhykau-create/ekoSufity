import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CeilingTypeDetail } from "@/components/CeilingTypeDetail";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { Footer } from "@/components/sections/Footer";
import { ceilingTypes, getCeilingTypeBySlug } from "@/lib/ceilingTypes";

type CeilingTypePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ceilingTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: CeilingTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const type = getCeilingTypeBySlug(slug);

  if (!type) {
    return {};
  }

  return {
    title: { absolute: type.seoTitle },
    description: type.seoDescription,
    alternates: {
      canonical: `/rodzaje-sufitow/${type.slug}`,
    },
    openGraph: {
      title: type.seoTitle,
      description: type.seoDescription,
      images: [type.image],
    },
  };
}

export default async function CeilingTypePage({ params }: CeilingTypePageProps) {
  const { slug } = await params;
  const type = getCeilingTypeBySlug(slug);

  if (!type) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Rodzaje sufitów", href: "/rodzaje-sufitow" },
            { label: type.name, href: `/rodzaje-sufitow/${type.slug}` },
          ]}
        />
        <CeilingTypeDetail type={type} />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
