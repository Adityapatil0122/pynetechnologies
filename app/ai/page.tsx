import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { seoMetadata } from "@/lib/seo";
import { aiSolutions } from "@/lib/site-data";

export const metadata: Metadata = seoMetadata({
  title: "Automation Services",
  description:
    "Pyne Technologies builds chatbots, workflow automation, API integrations, and analytics dashboards for business teams.",
  path: "/automation",
  keywords: ["automation services", "chatbots", "API integrations", "analytics dashboards"],
  noIndex: true
});

export default function AIPage() {
  return (
    <section className="section-y bg-[#f2ffd0]">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Automation"
          title="Automation that supports everyday business work."
          description="Pyne plans systems around real tasks like support, lead handling, reporting, operations, and internal tools."
          headingLevel="h1"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {aiSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 0.06}>
            <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)] sm:p-7">
              <solution.icon className="h-10 w-10 text-[var(--primary-strong)]" />
              <h2 className="mt-5 text-2xl font-black">{solution.title}</h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{solution.description}</p>
              <ul className="mt-5 space-y-2">
                {solution.features.map((feature) => (
                  <li className="flex items-center gap-2 text-sm font-bold" key={feature}>
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary-strong)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6" variant="outline">
                <Link href={`/automation/${solution.slug}`}>
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
