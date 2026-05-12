import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Web Services",
  description: "Website development, app development, digital marketing, WhatsApp Business API, UI/UX design, and graphics designing from Pyne Technologies."
};

export default function ServicesPage() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Web services"
          title="Pick the digital engine your next move needs."
          description="Each service can stand alone, but the real fun starts when strategy, design, code, and campaigns work as one system."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card className="overflow-hidden p-0" key={service.slug}>
              <img src={service.image} alt="" className="h-44 w-full object-cover" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
