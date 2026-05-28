import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ChatLauncher } from "@/components/ai/ChatLauncher";
import { CookieBanner } from "@/components/cookie-banner";
import { FloatingQuickNav } from "@/components/floating-quick-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aiSolutions, brand, services } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  applicationName: brand.name,
  title: {
    default: "PYN Technologies - Web, Apps, Automation, Marketing and Design",
    template: "%s | PYN Technologies"
  },
  description:
    "PYN Technologies builds websites, apps, WhatsApp automation, digital marketing systems, UI/UX design, and graphic design for growing businesses.",
  keywords: [
    "PYN Technologies",
    "website development company",
    "app development company",
    "automation services",
    "WhatsApp Business API",
    "digital marketing",
    "UI UX design",
    "graphic design",
    "Satara",
    "Maharashtra"
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: absoluteUrl()
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "PYN Technologies",
    description: "Websites, apps, automation, marketing, UI/UX design, and graphic design for growing businesses.",
    url: absoluteUrl(),
    siteName: "PYN Technologies",
    images: [{ url: "/pyn-logo.svg", width: 1200, height: 630, alt: "PYN Technologies logo" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PYN Technologies",
    description: "Websites, apps, automation, marketing, and design for growing businesses.",
    images: ["/pyn-logo.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#fffdf7",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: brand.name,
    url: brand.url,
    logo: absoluteUrl("/pyn-logo.svg"),
    image: absoluteUrl("/pyn-logo.svg"),
    email: brand.email,
    telephone: `+${brand.whatsappNumber}`,
    description: brand.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.city,
      addressRegion: "Maharashtra",
      addressCountry: "IN"
    },
    areaServed: ["India"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${brand.whatsappNumber}`,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PYN Technologies services",
      itemListElement: [...services, ...aiSolutions].map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description
        }
      }))
    }
  };

  return (
    <html lang="en">
      <body className={sora.variable}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main className="page-shell pt-[72px]">{children}</main>
        <SiteFooter />
        <FloatingQuickNav />
        <FloatingWhatsApp />
        <ChatLauncher />
        <CookieBanner />
      </body>
    </html>
  );
}
