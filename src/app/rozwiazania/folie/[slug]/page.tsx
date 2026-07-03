import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FakturaDetail } from "@/components/rozwiazania/FakturaDetail";
import { faktury, getFaktura } from "@/content/folie-faktury";
import { seoMeta } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return faktury.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const faktura = getFaktura(slug);

  if (!faktura) {
    return {};
  }

  return {
    title: faktura.metaTitle,
    description: faktura.metaDescription,
    ...seoMeta(`/rozwiazania/folie/${slug}`)
  };
}

export default async function FakturaPage({ params }: PageProps) {
  const { slug } = await params;
  const faktura = getFaktura(slug);

  if (!faktura) {
    notFound();
  }

  return <FakturaDetail faktura={faktura} />;
}
