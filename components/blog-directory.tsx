"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, ChevronLeft, ChevronRight, Clock, Search, SlidersHorizontal, Tags } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";

type BlogDirectoryProps = {
  posts: BlogPost[];
  initialCategory?: string;
  initialQuery?: string;
};

type SortMode = "featured" | "newest" | "az" | "readTime";

const postsPerPage = 4;

const sortLabels: { value: SortMode; label: string }[] = [
  { value: "featured", label: "Featured order" },
  { value: "newest", label: "Newest first" },
  { value: "az", label: "A to Z" },
  { value: "readTime", label: "Quick reads" }
];

export function BlogDirectory({ posts, initialCategory, initialQuery }: BlogDirectoryProps) {
  const requestedCategory = initialCategory && posts.some((post) => post.category === initialCategory) ? initialCategory : "All Categories";
  const [activeCategory, setActiveCategory] = useState(requestedCategory);
  const [query, setQuery] = useState(initialQuery ?? "");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    });

    return [
      { name: "All Categories", count: posts.length },
      ...Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    ];
  }, [posts]);

  const popularTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags).slice(0, 12);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts
      .filter((post) => activeCategory === "All Categories" || post.category === activeCategory)
      .filter((post) => {
        if (!normalizedQuery) return true;
        const searchable = [post.title, post.excerpt, post.category, post.author, ...(post.tags ?? [])].filter(Boolean).join(" ").toLowerCase();
        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sortMode === "featured") return 0;
        if (sortMode === "az") return a.title.localeCompare(b.title);
        if (sortMode === "readTime") return Number.parseInt(a.readTime, 10) - Number.parseInt(b.readTime, 10);
        return Date.parse(b.date) - Date.parse(a.date);
      });
  }, [activeCategory, posts, query, sortMode]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const visiblePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice((visiblePage - 1) * postsPerPage, visiblePage * postsPerPage);
  const recentPosts = posts.slice(0, 5);

  useEffect(() => {
    setActiveCategory(requestedCategory);
  }, [requestedCategory]);

  useEffect(() => {
    setQuery(initialQuery ?? "");
  }, [initialQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query, sortMode]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const showPage = (page: number) => {
    setCurrentPage(page);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectCategory = (name: string) => {
    setActiveCategory(name);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (name === "All Categories") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", name);
      }
      url.searchParams.delete("tag");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  const selectTag = (tag: string) => {
    setQuery(tag);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tag", tag);
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <div className="min-w-0">
        <div className="flex flex-col gap-5 rounded-[28px] border border-[rgba(30,34,51,0.08)] bg-white/78 p-5 shadow-[0_18px_54px_rgba(47,75,111,0.08)] backdrop-blur sm:p-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="mini-heading">Article library</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[var(--foreground)]">Latest Articles</h2>
            <p className="mt-2 text-sm font-bold text-[var(--muted)]">
              {filteredPosts.length} of {posts.length} articles showing
            </p>
          </div>
          <label className="flex w-full max-w-xs items-center gap-3 rounded-full border border-[rgba(30,34,51,0.12)] bg-white px-4 py-3 text-sm font-black shadow-sm xl:w-auto">
            <SlidersHorizontal className="h-4 w-4 text-[var(--primary-strong)]" />
            <span className="sr-only">Sort articles</span>
            <select className="w-full bg-transparent text-[var(--foreground)] outline-none" value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
              {sortLabels.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categoryCounts.map((category) => {
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectCategory(category.name)}
                className={cn(
                  "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition",
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-[0_16px_34px_rgba(0,184,255,0.2)]"
                    : "bg-white/82 text-[var(--muted)] shadow-sm hover:bg-[#f5fbff] hover:text-[var(--foreground)]"
                )}
              >
                {category.name}
                <span className={cn("rounded-full px-2 py-0.5 text-xs", isActive ? "bg-white/20 text-white" : "bg-[#f5fbff] text-[var(--foreground)]")}>{category.count}</span>
              </button>
            );
          })}
        </div>

        {filteredPosts.length > 0 ? (
          <>
            <div ref={resultsRef} className="mt-8 grid gap-6 md:grid-cols-2">
              {paginatedPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
            {totalPages > 1 ? (
              <Pagination page={visiblePage} totalPages={totalPages} onPageChange={showPage} />
            ) : null}
          </>
        ) : (
          <div className="mt-8 rounded-[28px] border border-[rgba(30,34,51,0.1)] bg-white p-8 text-center shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
            <p className="text-xl font-black">No articles found</p>
            <p className="mt-2 text-sm font-bold text-[var(--muted)]">Try a different category or search term.</p>
          </div>
        )}
      </div>

      <aside className="lg:sticky lg:top-24">
        <div className="space-y-5">
          <div className="rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
            <div className="p-5">
              <label className="relative block">
                <span className="sr-only">Search articles</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles..."
                  className="focus-ring h-12 w-full rounded-full border border-[rgba(30,34,51,0.1)] bg-[#f8fbff] pl-12 pr-4 text-sm font-bold outline-none placeholder:text-[#8b94a7]"
                  type="search"
                />
              </label>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
            <div className="flex items-center gap-3 border-t-4 border-[var(--primary)] bg-white p-5">
              <Bookmark className="h-5 w-5 text-[var(--primary-strong)]" />
              <h3 className="text-xl font-black">Categories</h3>
            </div>
            <div className="divide-y divide-[rgba(30,34,51,0.08)]">
              {categoryCounts.map((category) => {
                const isActive = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => selectCategory(category.name)}
                    className={cn(
                      "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-black transition",
                      isActive ? "bg-[#eaf4ff] text-[var(--primary-strong)]" : "text-[var(--muted)] hover:bg-[#f8fbff] hover:text-[var(--foreground)]"
                    )}
                  >
                    <span>{category.name}</span>
                    <span className={cn("rounded-full px-2.5 py-1 text-xs", isActive ? "bg-[var(--primary)] text-white" : "bg-[#f1f4f8] text-[var(--muted)]")}>{category.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
            <div className="flex items-center gap-3 bg-[#f8fbff] p-5">
              <Clock className="h-5 w-5 text-[var(--primary-strong)]" />
              <h3 className="text-xl font-black">Recent Posts</h3>
            </div>
            <div className="divide-y divide-[rgba(30,34,51,0.08)]">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group flex gap-4 p-4 transition hover:bg-[#f8fbff]">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#075eb8]">
                    <img src={post.image} alt="" className="h-full w-full object-cover opacity-[0.62] mix-blend-luminosity" />
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,42,112,0.42),rgba(0,184,255,0.32))]" />
                  </span>
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-black leading-snug transition group-hover:text-[var(--primary-strong)]">{post.title}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--muted)]">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white p-5 shadow-[0_18px_54px_rgba(47,75,111,0.08)]">
            <div className="mb-4 flex items-center gap-3">
              <Tags className="h-5 w-5 text-[var(--primary-strong)]" />
              <h3 className="text-xl font-black">Popular Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => selectTag(tag)}
                  className="focus-ring rounded-full bg-[#f5fbff] px-3 py-1.5 text-xs font-black text-[var(--muted)] transition hover:bg-[var(--primary)] hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Pagination({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (page: number) => void }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mt-10 flex justify-center" aria-label="Blog pagination">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(30,34,51,0.1)] bg-white text-[var(--muted)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)] disabled:cursor-not-allowed disabled:bg-[#f8fbff] disabled:text-[#a9b2c4] disabled:hover:border-[rgba(30,34,51,0.1)]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {pages.map((pageNumber) => {
          const isActive = page === pageNumber;

          return (
            <button
              key={pageNumber}
              type="button"
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "focus-ring inline-flex h-12 w-12 items-center justify-center rounded-lg border text-base font-black shadow-sm transition",
                isActive
                  ? "border-[var(--primary-strong)] bg-[var(--primary-strong)] text-white"
                  : "border-[rgba(30,34,51,0.1)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
              )}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          aria-label="Next page"
          disabled={page === totalPages}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(30,34,51,0.1)] bg-white text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)] disabled:cursor-not-allowed disabled:bg-[#f8fbff] disabled:text-[#a9b2c4] disabled:hover:border-[rgba(30,34,51,0.1)]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[26px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#075eb8]">
        <img src={post.image} alt="" className="h-full w-full object-cover opacity-[0.58] mix-blend-luminosity transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,42,112,0.48),rgba(0,184,255,0.36))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,17,54,0.72)] via-transparent to-transparent" />
        <span className="absolute right-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-l-full bg-[var(--primary)] px-4 py-2 text-xs font-black text-white shadow-sm">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="break-words text-2xl font-black leading-tight text-[var(--foreground)] transition group-hover:text-[var(--primary-strong)]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-base leading-7 text-[var(--muted)]">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[#f5fbff] px-3 py-1 text-xs font-black text-[var(--foreground)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-[rgba(30,34,51,0.08)] pt-5 text-sm font-black">
          <span>Read more</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f5fbff] text-[var(--primary-strong)] transition group-hover:translate-x-1 group-hover:bg-[var(--primary)] group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
