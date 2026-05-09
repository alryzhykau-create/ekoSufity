import content from "@/src/data/ekoSufityContent.json";

export type ContentFAQItem = {
  q: string;
  a: string;
};

export type StaticPageContent = (typeof content.staticPages)[number];

export function getStaticPageContent(path: string): StaticPageContent {
  const page = content.staticPages.find((item) => item.path === path);

  if (!page) {
    throw new Error(`Missing static page content for path: ${path}`);
  }

  return page;
}

export function mapContentFAQItems(items: ContentFAQItem[] = []) {
  return items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));
}

export { content as ekoSufityContent };
