import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { brand, services } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-14 lg:py-20">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow">{service.kicker}</span>
            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pop">
                <Link href="/contact">
                  Start this service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">All services</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_30px_80px_rgba(47,75,111,0.16)]">
            <img src={service.image} alt="" className="h-[360px] w-full rounded-[26px] object-cover" />
          </div>
        </div>
      </section>
      <section className="section-y bg-[#f5fbff]">
        <div className="container-pyne grid gap-8 lg:grid-cols-2">
          <Card className="p-7">
            <h2 className="text-3xl font-black">What Pyne builds here</h2>
            <ul className="mt-6 grid gap-4">
              {service.features.map((feature) => (
                <li className="flex gap-3 text-base font-bold" key={feature}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-strong)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-7">
            <h2 className="text-3xl font-black">Expected outcomes</h2>
            <ul className="mt-6 grid gap-4">
              {service.outcomes.map((outcome) => (
                <li className="flex gap-3 text-base font-bold" key={outcome}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-strong)]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      <section className="section-y">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Project inquiry</span>
            <h2 className="mt-5 text-4xl font-black leading-tight">Tell {brand.shortName} what you want to launch.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              The form opens WhatsApp or an email draft with your details already arranged.
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
