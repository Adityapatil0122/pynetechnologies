import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { aiSolutions } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aiSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = aiSolutions.find((item) => item.slug === slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description
  };
}

export default async function AISolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = aiSolutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <section className="section-y bg-[#f2ffd0]">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">AI solution</span>
            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">{solution.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{solution.description}</p>
            <Button asChild className="mt-8" variant="pop">
              <Link href="/contact">
                Discuss AI use case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="p-7">
            <solution.icon className="h-14 w-14 text-[var(--primary-strong)]" />
            <h2 className="mt-6 text-3xl font-black">Capability mix</h2>
            <ul className="mt-6 grid gap-4">
              {solution.features.map((feature) => (
                <li className="flex gap-3 text-base font-bold" key={feature}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-strong)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      <section className="section-y">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Make it practical</span>
            <h2 className="mt-5 text-4xl font-black leading-tight">Start with the workflow, then choose the model.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Share the task you want to speed up. Pyne can shape the flow, data boundary, dashboard, and handoff.
            </p>
          </div>
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
