import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ChatLauncher } from "@/components/ai/ChatLauncher";
import { CookieBanner } from "@/components/cookie-banner";
import { FloatingQuickNav } from "@/components/floating-quick-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://pynetechnologies.com"),
  title: {
    default: "Pyne Technologies - Web, AI, Apps, Marketing and Design",
    template: "%s | Pyne Technologies"
  },
  description:
    "Pyne Technologies builds websites, apps, AI solutions, WhatsApp automation, digital marketing systems, UI/UX, and graphics.",
  openGraph: {
    title: "Pyne Technologies",
    description: "Web, AI, apps, marketing, and brand systems with bright motion and practical delivery.",
    url: absoluteUrl(),
    siteName: "Pyne Technologies",
    images: [{ url: "/pyne-logo.svg", width: 1200, height: 630, alt: "Pyne Technologies logo" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyne Technologies",
    description: "Fresh digital builds for web, AI, apps, marketing, and design.",
    images: ["/pyne-logo.svg"]
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
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingQuickNav />
        <FloatingWhatsApp />
        <ChatLauncher />
        <CookieBanner />
      </body>
    </html>
  );
}
