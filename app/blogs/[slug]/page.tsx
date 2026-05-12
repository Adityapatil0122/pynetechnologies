import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container-pyne max-w-4xl">
          <Button asChild variant="outline" size="sm">
            <Link href="/blogs">
              <ArrowLeft className="h-4 w-4" />
              Back to blogs
            </Link>
          </Button>
          <p className="mt-8 text-sm font-black text-[var(--primary-strong)]">
            {post.category} · {post.date} · {post.readTime}
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-8 text-[var(--muted)]">{post.excerpt}</p>
        </div>
      </section>
      <div className="container-pyne max-w-5xl">
        <img src={post.image} alt="" className="h-[380px] w-full rounded-[34px] object-cover shadow-[0_28px_70px_rgba(47,75,111,0.14)]" />
      </div>
      <section className="section-y pt-14">
        <div className="container-pyne max-w-3xl">
          <div className="space-y-7 text-lg leading-9 text-[var(--muted)]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
