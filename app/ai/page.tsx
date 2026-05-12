import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { aiSolutions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "AI chatbots, custom AI solutions, API integrations, and data analytics from Pyne Technologies."
};

export default function AIPage() {
  return (
    <section className="section-y bg-[#f2ffd0]">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="AI solutions"
          title="Automation with manners, dashboards with brains."
          description="Pyne plans AI around actual work: support, lead handling, reporting, operations, and internal tools."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {aiSolutions.map((solution) => (
            <Card className="p-7" key={solution.slug}>
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
                <Link href={`/ai/${solution.slug}`}>
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
