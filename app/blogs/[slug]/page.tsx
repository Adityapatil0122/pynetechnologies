import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { seoMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return seoMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    keywords: [post.category, "Pyne Technologies blog", "digital business tips"],
    image: post.image
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="py-10 sm:py-12 lg:py-16">
        <Reveal className="container-pyne max-w-4xl">
          <Button asChild variant="outline" size="sm">
            <Link href="/blogs">
              <ArrowLeft className="h-4 w-4" />
              Back to blogs
            </Link>
          </Button>
          <p className="mt-8 text-sm font-black text-[var(--primary-strong)]">
            {post.category} &middot; {post.date} &middot; {post.readTime}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)] sm:text-xl">{post.excerpt}</p>
        </Reveal>
      </section>
      <Reveal className="container-pyne max-w-5xl" delay={0.08}>
        <img src={post.image} alt="" className="h-64 w-full rounded-[28px] object-cover shadow-[0_28px_70px_rgba(47,75,111,0.14)] sm:h-[380px] sm:rounded-[34px]" />
      </Reveal>
      <section className="section-y pt-14">
        <Reveal className="container-pyne max-w-3xl">
          <div className="space-y-7 text-lg leading-9 text-[var(--muted)]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>
    </article>
  );
}
