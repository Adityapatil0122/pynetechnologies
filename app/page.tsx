import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { seoMetadata } from "@/lib/seo";

export const metadata: Metadata = seoMetadata({
  title: "PYN Technologies - Web, Apps, Automation, Marketing and Design",
  description:
    "PYN Technologies crafts fast websites, polished apps, WhatsApp flows, digital campaigns, and brand visuals for growing businesses.",
  path: "/",
  keywords: ["web development Satara", "mobile app development", "business automation"]
});

export default function Page() {
  return <HomePage />;
}
