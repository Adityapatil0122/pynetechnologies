import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Mail, MapPin, Share2 } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { brand, navGroups } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(30,34,51,0.08)] bg-[#fff8ea]">
      <div className="container-pyne section-y pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <SiteLogo />
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">{brand.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="cyan">
                <Link href="/contact">
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${brand.email}`}>
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item.href}>
                      <Link className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary-strong)]" href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-black">Company</h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Clients", "/clients"],
                  ["Blogs", "/blogs"],
                  ["Contact", "/contact"],
                  ["Privacy", "/legal/privacy-policy"],
                  ["Terms", "/legal/terms-of-service"]
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary-strong)]" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(30,34,51,0.08)] pt-6 text-sm font-semibold text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Pyne Technologies. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--primary-strong)]" />
              {brand.city}
            </span>
            <a className="transition hover:text-[var(--primary-strong)]" href="#" aria-label="Pyne Technologies social profile">
              <Share2 className="h-5 w-5" />
            </a>
            <a className="transition hover:text-[var(--primary-strong)]" href="#" aria-label="Pyne Technologies business profile">
              <BriefcaseBusiness className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
