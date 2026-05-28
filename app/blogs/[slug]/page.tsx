import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bookmark, CalendarDays, Clock, Tags } from "lucide-react";
import { BlogShareActions } from "@/components/blog-share-actions";
import { Button } from "@/components/ui/button";
import { seoMetadata } from "@/lib/seo";
import { blogPosts, brand } from "@/lib/site-data";
import type { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPostByRoute(slug: string) {
  const numericRoute = Number.parseInt(slug, 10);

  if (`${numericRoute}` === slug && numericRoute >= 1 && numericRoute <= blogPosts.length) {
    return blogPosts[numericRoute - 1];
  }

  return blogPosts.find((item) => item.slug === slug);
}

function getCategoryCounts() {
  const counts = new Map<string, number>();
  blogPosts.forEach((post) => {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  });

  return Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function generateStaticParams() {
  return [
    ...blogPosts.map((post) => ({ slug: post.slug })),
    ...blogPosts.map((_, index) => ({ slug: `${index + 1}` }))
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostByRoute(slug);
  if (!post) return {};

  return seoMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    keywords: [post.category, "PYN Technologies blog", "digital business tips"],
    image: post.image
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostByRoute(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3);
  const recentPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 5);
  const categoryCounts = getCategoryCounts();
  const articleUrl = `${brand.url}/blogs/${post.slug}`;

  return (
    <article className="bg-[#f7fbff]">
      <BlogHero post={post} />
      <section className="pb-16 pt-6 md:pt-10">
        <div className="container-pyn grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="min-w-0 overflow-hidden rounded-[28px] border border-[rgba(30,34,51,0.08)] bg-white p-5 shadow-[0_18px_54px_rgba(47,75,111,0.08)] sm:p-8 lg:p-10">
            <Button asChild variant="outline" size="sm">
              <Link href="/blogs">
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </Button>

            <div className="relative mt-8 h-64 overflow-hidden rounded-[24px] bg-[#eef8ff] sm:h-[400px]">
              <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
            </div>

            <div className="mt-8 rounded-[24px] bg-[#f8fbff] p-5 sm:p-7">
              <p className="text-lg font-bold italic leading-8 text-[var(--muted)] sm:text-xl">{post.excerpt}</p>
            </div>

            <div className="mt-9 space-y-7 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <BlogShareActions title={post.title} url={articleUrl} />
            </div>

            {relatedPosts.length > 0 ? (
              <div className="mt-10 lg:hidden">
                <RelatedArticles posts={relatedPosts} title="You might also enjoy" />
              </div>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-24">
            <BlogSidebar currentPost={post} categories={categoryCounts} recentPosts={recentPosts} relatedPosts={relatedPosts} />
          </aside>
        </div>
      </section>
    </article>
  );
}

function BlogHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden bg-[#075eb8] py-16 md:min-h-[62vh]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42] mix-blend-luminosity" style={{ backgroundImage: `url(${post.image})` }} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,42,112,0.94)_0%,rgba(0,108,216,0.86)_52%,rgba(0,184,255,0.76)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,17,54,0.82)] via-[rgba(0,100,205,0.18)] to-[rgba(102,218,255,0.22)]" />
      <div className="container-pyn relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Link
            href={`/blogs?category=${encodeURIComponent(post.category)}`}
            className="focus-ring inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[var(--primary-strong)] shadow-sm"
          >
            {post.category}
          </Link>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.32)] sm:text-4xl lg:text-6xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-bold text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.28)]">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2 md:border-l md:border-white/24 md:pl-5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSidebar({
  currentPost,
  categories,
  recentPosts,
  relatedPosts
}: {
  currentPost: BlogPost;
  categories: { name: string; count: number }[];
  recentPosts: BlogPost[];
  relatedPosts: BlogPost[];
}) {
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags ?? []))).slice(0, 10);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
        <div className="flex items-center gap-3 border-t-4 border-[var(--primary)] bg-white p-5">
          <Bookmark className="h-5 w-5 text-[var(--primary-strong)]" />
          <h2 className="text-xl font-black">Categories</h2>
        </div>
        <div className="divide-y divide-[rgba(30,34,51,0.08)]">
          <Link
            href="/blogs"
            className="flex items-center justify-between px-5 py-4 text-sm font-black text-[var(--muted)] transition hover:bg-[#f8fbff] hover:text-[var(--foreground)]"
          >
            <span>All Categories</span>
            <span className="rounded-full bg-[#f1f4f8] px-2.5 py-1 text-xs">{blogPosts.length}</span>
          </Link>
          {categories.map((category) => {
            const isActive = category.name === currentPost.category;

            return (
              <Link
                key={category.name}
                href={`/blogs?category=${encodeURIComponent(category.name)}`}
                className={cn(
                  "flex items-center justify-between px-5 py-4 text-sm font-black transition",
                  isActive ? "bg-[#eaf4ff] text-[var(--primary-strong)]" : "text-[var(--muted)] hover:bg-[#f8fbff] hover:text-[var(--foreground)]"
                )}
              >
                <span>{category.name}</span>
                <span className={cn("rounded-full px-2.5 py-1 text-xs", isActive ? "bg-[var(--primary)] text-white" : "bg-[#f1f4f8] text-[var(--muted)]")}>
                  {category.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
        <div className="flex items-center gap-3 bg-[#f8fbff] p-5">
          <Clock className="h-5 w-5 text-[var(--primary-strong)]" />
          <h2 className="text-xl font-black">Recent Posts</h2>
        </div>
        <div className="divide-y divide-[rgba(30,34,51,0.08)]">
          {recentPosts.map((post) => (
            <CompactPostLink key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white p-5 shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
        <div className="mb-4 flex items-center gap-3">
          <Tags className="h-5 w-5 text-[var(--primary-strong)]" />
          <h2 className="text-xl font-black">Popular Tags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/blogs?tag=${encodeURIComponent(tag)}`} className="rounded-full bg-[#f5fbff] px-3 py-1.5 text-xs font-black text-[var(--muted)] transition hover:bg-[var(--primary)] hover:text-white">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {relatedPosts.length > 0 ? (
        <div className="hidden lg:block">
          <RelatedArticles posts={relatedPosts} title="Related Articles" />
        </div>
      ) : null}
    </div>
  );
}

function RelatedArticles({ posts, title }: { posts: BlogPost[]; title: string }) {
  return (
    <div className="rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white p-5 shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
      <h2 className="text-xl font-black text-[var(--foreground)]">{title}</h2>
      <div className="mt-4 grid gap-4">
        {posts.map((post) => (
          <CompactPostLink key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

function CompactPostLink({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex gap-4 rounded-2xl p-3 transition hover:bg-[#f8fbff]">
      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#075eb8]">
        <Image src={post.image} alt="" fill sizes="64px" className="object-cover opacity-[0.62] mix-blend-luminosity" />
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,42,112,0.42),rgba(0,184,255,0.32))]" />
      </span>
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-sm font-black leading-snug transition group-hover:text-[var(--primary-strong)]">{post.title}</h3>
        <p className="mt-1 text-xs font-bold text-[var(--muted)]">{post.date}</p>
      </div>
    </Link>
  );
}
