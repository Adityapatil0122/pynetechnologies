import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Pyne Technologies notes on web design, automation, AI, marketing, and product presentation."
};

export default function BlogsPage() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Blogs"
          title="Ideas for making digital work feel sharper."
          description="Short, practical reads from the Pyne perspective."
        />
        <div className="mt-12 grid gap-7">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group grid overflow-hidden rounded-[28px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_44px_rgba(47,75,111,0.08)] md:grid-cols-[0.42fr_0.58fr]"
            >
              <img src={post.image} alt="" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full" />
              <div className="p-7">
                <p className="text-sm font-black text-[var(--primary-strong)]">
                  {post.category} · {post.readTime}
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight">{post.title}</h2>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-black">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
