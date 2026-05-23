import type { Metadata } from "next";
import { BlogDirectory } from "@/components/blog-directory";
import { SectionIntro } from "@/components/section-intro";
import { seoMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site-data";

type Props = {
  searchParams?: Promise<{ category?: string; tag?: string }>;
};

export const metadata: Metadata = seoMetadata({
  title: "Blogs",
  description: "Read simple notes from Pyne Technologies on web design, automation, marketing, and product planning.",
  path: "/blogs",
  keywords: ["web design blog", "automation blog", "digital marketing tips"]
});

export default async function BlogsPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Blogs"
          title="Simple ideas for better digital work."
          description="Short, practical reads on websites, automation, marketing, and product planning."
          headingLevel="h1"
        />
        <BlogDirectory posts={blogPosts} initialCategory={params?.category} initialQuery={params?.tag} />
      </div>
    </section>
  );
}
