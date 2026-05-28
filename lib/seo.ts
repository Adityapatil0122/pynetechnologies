import type { Metadata } from "next";
import { brand } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

const defaultImage = "/pyn-logo.svg";

const baseKeywords = [
  "PYN Technologies",
  "website development",
  "app development",
  "automation",
  "WhatsApp Business API",
  "digital marketing",
  "UI UX design",
  "graphic design",
  "Satara"
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function seoMetadata({ title, description, path, keywords = [], image = defaultImage, noIndex = false }: SeoMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const brandedTitle = title.includes(brand.name) ? title : `${title} | ${brand.name}`;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: brand.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${brand.name} - ${title}` }],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [imageUrl]
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true }
  };
}
