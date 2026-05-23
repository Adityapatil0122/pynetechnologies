import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers3, LineChart, Rocket, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
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

const heroImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";

const serviceNotes = [
  "Launch a new website or online store",
  "Turn an app idea into usable screens",
  "Bring more traffic through search and campaigns",
  "Handle leads and support on WhatsApp",
  "Make product screens easier to use",
  "Keep brand creatives consistent"
];

const serviceCombos = [
  {
    title: "New business launch",
    description: "Website, logo basics, SEO setup, contact flow, and launch creatives.",
    icon: Rocket
  },
  {
    title: "Product build",
    description: "UI/UX design, app screens, dashboard planning, and release support.",
    icon: Layers3
  },
  {
    title: "Growth system",
    description: "Landing pages, digital marketing, WhatsApp follow-up, and reports.",
    icon: LineChart
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5fbff]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Team workspace with laptops, notes, and planning material"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fffdf7] via-[#fffdf7]/88 to-[#fffdf7]/28" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fffdf7] to-transparent" />
        </div>

        <div className="container-pyne relative z-10 grid min-h-[560px] items-end gap-8 py-14 lg:grid-cols-[0.72fr_0.28fr] lg:py-20">
          <Reveal className="max-w-3xl pb-4">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Web Services overview
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              A complete digital service menu for growing businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This page brings every Web Services dropdown item into one clear place. Compare what Pyne builds, see what each service includes, and choose the right starting point.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pop" size="lg">
                <Link href="/contact">
                  Start with a brief
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#service-list">View all services</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="pb-4">
            <div className="grid gap-3 rounded-[28px] border border-white bg-white/88 p-4 shadow-[0_28px_80px_rgba(47,75,111,0.16)] backdrop-blur">
              <div className="flex items-center gap-3 rounded-2xl bg-[#f2ffd0] p-4">
                <Compass className="h-7 w-7 text-[var(--primary-strong)]" />
                <div>
                  <p className="text-sm font-black text-[var(--muted)]">Inside this page</p>
                  <p className="text-2xl font-black">{services.length} services</p>
                </div>
              </div>
              {serviceNotes.slice(0, 4).map((note) => (
                <p key={note} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-strong)]" />
                  {note}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="service-list" className="section-y bg-[#fffdf7]">
        <div className="container-pyne">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">All services</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Each service has a clear role in your digital system.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Website, app, marketing, WhatsApp, design, and brand visuals are shown together here so the Web Services tab feels like a real page, not only a dropdown.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05} className={index === 0 ? "lg:col-span-2" : undefined}>
                <Card className="group relative h-[460px] overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_78px_rgba(47,75,111,0.16)]">
                  <img src={service.image} alt={`${service.title} service preview`} className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-focus-within:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,32,0.94)] via-[rgba(10,20,32,0.44)] to-[rgba(10,20,32,0.05)] transition duration-500 group-hover:via-[rgba(10,20,32,0.72)]" />
                  <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/92 shadow-sm backdrop-blur" style={{ color: service.accent }}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-white/92 px-3 py-2 text-xs font-black text-[var(--foreground)] backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 ease-out sm:p-7 group-hover:-translate-y-6 group-focus-within:-translate-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/76">{service.kicker}</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight">{service.title}</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-64 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-64 group-focus-within:opacity-100">
                      <p className="text-base font-semibold leading-7 text-white/82">{service.description}</p>
                      <div className="mt-5 grid gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="flex items-center gap-2 text-sm font-bold text-white/90">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--lime)]" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <Button asChild variant={index === 0 ? "cyan" : "outline"} className="border-white/60 bg-white/92 text-[var(--foreground)] hover:bg-white">
                        <Link href={`/services/${service.slug}`}>
                          Open {service.title}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[#e9fbff]">
        <div className="container-pyne">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Service paths</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Not sure which service to pick first?</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              These common paths show how Pyne can combine services when one page, app, or campaign needs more than one skill.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceCombos.map((combo, index) => (
              <Reveal key={combo.title} delay={index * 0.06}>
                <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                  <combo.icon className="h-10 w-10 text-[var(--primary-strong)]" />
                  <h3 className="mt-5 text-2xl font-black">{combo.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{combo.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[#fff0ec]">
        <div className="container-pyne grid gap-8 lg:grid-cols-[0.8fr_0.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Next step</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Tell us what you want the website, app, or campaign to do.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Pyne will help you turn the service list into a simple plan with the right pages, screens, automations, and launch tasks.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Button asChild variant="pop" size="lg" className="w-full">
              <Link href="/contact">
                Contact Pyne
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
