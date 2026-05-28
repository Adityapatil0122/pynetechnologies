import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Handshake, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { seoMetadata } from "@/lib/seo";
import { clients } from "@/lib/site-data";

export const metadata: Metadata = seoMetadata({
  title: "Our Clients",
  description: "See the client brands PYN Technologies supports with websites, apps, automation, marketing, and design.",
  path: "/clients",
  keywords: ["PYN Technologies clients", "digital project clients", "business website clients"]
});

const clientStats = [
  { value: "100+", label: "Happy Clients", accent: "#FF5757" },
  { value: "150+", label: "Projects Completed", accent: "#00B8FF" },
  { value: "96%", label: "Client Satisfaction", accent: "#8C6BFF" },
  { value: "5+", label: "Years of Experience", accent: "#FFD84D" }
];

const trustPoints = [
  "Real brands and operating businesses",
  "Logos and names sourced from Finlec Technologies",
  "Simple, scalable digital delivery"
];

export default function ClientsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f2ffd0] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-[rgba(30,34,51,0.08)]" />
        <div className="container-pyn grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Our Clients</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Trusted by brands building sharper digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A clean look at the businesses featured by Finlec Technologies, rebuilt here with a calmer layout,
              real client logos, and motion that keeps the page feeling alive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="pop">
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#client-logos">View clients</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <p key={point} className="flex items-start gap-2 text-sm font-bold leading-6">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-strong)]" />
                  {point}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {clients.slice(0, 6).map((client, index) => (
                <div
                  key={client.name}
                  className="group flex h-28 items-center justify-center rounded-[22px] border border-[rgba(30,34,51,0.08)] bg-white/88 p-5 shadow-[0_18px_44px_rgba(47,75,111,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(47,75,111,0.14)]"
                  style={{ transform: index % 2 === 0 ? "translateY(0)" : "translateY(16px)" }}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={220}
                    height={90}
                    priority={index < 3}
                    className={`${client.className ?? "max-h-16"} h-auto w-auto max-w-[82%] object-contain transition duration-500 group-hover:scale-105`}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[#f7fdff]">
        <div className="container-pyn">
          <Reveal>
            <SectionIntro
              eyebrow="Impact"
              title="A client base with momentum."
              description="The client page pairs these brands with simple proof points: completed projects, satisfaction, and delivery experience."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.05}>
                <Card className="h-full p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                  <p className="text-4xl font-black" style={{ color: stat.accent }}>
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm font-black text-[var(--muted)]">{stat.label}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="client-logos" className="section-y">
        <div className="container-pyn">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal className="md:max-w-2xl">
              <SectionIntro
                eyebrow="Logo Wall"
                title="The client brands, kept simple and easy to scan."
                description="A neat grid works better than a noisy showcase here: the logos get space, the names stay readable, and every card has a light motion detail."
                center={false}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,34,51,0.1)] bg-white px-4 py-2 text-sm font-black shadow-sm">
                <Sparkles className="h-4 w-4 text-[var(--primary-strong)]" />
                {clients.length} client logos
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={Math.min(index * 0.035, 0.28)}>
                <article className="group h-full overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_54px_rgba(47,75,111,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                  <div className="flex items-center justify-between px-5 pt-5">
                    <span className="text-xs font-black text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-1.5 w-12 rounded-full" style={{ backgroundColor: client.accent }} />
                  </div>
                  <div className="flex h-32 items-center justify-center p-6">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={260}
                      height={110}
                      className={`${client.className ?? "max-h-16"} h-auto w-auto max-w-[84%] object-contain transition duration-500 group-hover:scale-105`}
                    />
                  </div>
                  <div className="border-t border-[rgba(30,34,51,0.08)] px-5 py-4">
                    <h2 className="text-lg font-black">{client.name}</h2>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-pyn">
          <Reveal>
            <div className="grid gap-8 overflow-hidden rounded-[28px] bg-[var(--foreground)] p-8 text-white shadow-[0_28px_80px_rgba(30,34,51,0.22)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-black text-[var(--lime)]">
                  <Handshake className="h-4 w-4" />
                  Ready to join the wall
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                  Bring the same clean digital presence to your brand.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                  Share what you want to launch, improve, or automate. PYN can shape the page, flow, and delivery plan.
                </p>
              </div>
              <Button asChild variant="pop" className="w-full md:w-auto">
                <Link href="/contact">
                  Discuss your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
