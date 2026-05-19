import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { seoMetadata } from "@/lib/seo";

export const metadata: Metadata = seoMetadata({
  title: "Pyne Technologies - Web, Apps, Automation, Marketing and Design",
  description:
    "Pyne Technologies builds clear websites, mobile apps, WhatsApp automation, marketing systems, UI/UX design, and graphic design for growing businesses.",
  path: "/",
  keywords: ["web development Satara", "mobile app development", "business automation"]
});

export default function Page() {
  return <HomePage />;
}
