import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { seoMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata: Metadata = seoMetadata({
  title: "Digital Services",
  description:
    "Explore website development, app development, digital marketing, WhatsApp Business API, UI/UX design, and graphic design services from Pyne Technologies.",
  path: "/services",
  keywords: ["digital services", "website development", "app development", "graphic design"]
});

export default function ServicesPage() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Web services"
          title="Choose the digital service your business needs next."
          description="Start with one service or combine strategy, design, code, automation, and campaigns into one clear plan."
          headingLevel="h1"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
            <Card className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
              <img src={service.image} alt="" className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-48" />
              <div className="p-6">
                <service.icon className="h-9 w-9" style={{ color: service.accent }} />
                <h2 className="mt-4 text-2xl font-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li className="flex items-center gap-2 text-sm font-bold" key={feature}>
                      <CheckCircle2 className="h-4 w-4 text-[var(--primary-strong)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant="outline">
                  <Link href={`/services/${service.slug}`}>
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
