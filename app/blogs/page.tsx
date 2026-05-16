import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
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
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group grid overflow-hidden rounded-[28px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_44px_rgba(47,75,111,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)] md:grid-cols-[0.42fr_0.58fr]"
              >
                <img src={post.image} alt="" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64 md:h-full" />
                <div className="p-5 sm:p-7">
                  <p className="text-sm font-black text-[var(--primary-strong)]">
                    {post.category} &middot; {post.readTime}
                  </p>
                  <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">{post.title}</h2>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{post.excerpt}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-black">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
