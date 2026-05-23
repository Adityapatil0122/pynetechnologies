import type { MetadataRoute } from "next";
import { aiSolutions, blogPosts, legalPages, services } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

const lastModified = new Date("2026-05-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { route: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
    { route: "", changeFrequency: "weekly", priority: 1 },
    { route: "/services", changeFrequency: "monthly", priority: 0.8 },
    { route: "/automation", changeFrequency: "monthly", priority: 0.8 },
    { route: "/products", changeFrequency: "monthly", priority: 0.8 },
    { route: "/products/study-room", changeFrequency: "monthly", priority: 0.8 },
    { route: "/clients", changeFrequency: "monthly", priority: 0.8 },
    { route: "/blogs", changeFrequency: "monthly", priority: 0.8 },
    { route: "/contact", changeFrequency: "monthly", priority: 0.8 }
  ];

  return [
    ...staticRoutes.map(({ route, changeFrequency, priority }) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency,
      priority
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...aiSolutions.map((solution) => ({
      url: absoluteUrl(`/automation/${solution.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blogs/${post.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...legalPages.map((page) => ({
      url: absoluteUrl(`/legal/${page.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3
    }))
  ];
}
