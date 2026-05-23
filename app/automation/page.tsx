import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Activity, ArrowRight, Clock3, GitBranch, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { seoMetadata } from "@/lib/seo";
import { aiSolutions } from "@/lib/site-data";

export const metadata: Metadata = seoMetadata({
  title: "Automation Services",
  description:
    "Pyne Technologies builds chatbots, workflow automation, API integrations, and analytics dashboards for business teams.",
  path: "/automation",
  keywords: ["automation services", "chatbots", "API integrations", "analytics dashboards"]
});

const heroImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80";

const automationDetails = [
  {
    slug: "chatbots",
    label: "Reply layer",
    use: "Best for first replies, FAQs, lead questions, and support handoff.",
    result: "Faster response time"
  },
  {
    slug: "custom-solutions",
    label: "Workflow layer",
    use: "Best for repeated tasks, approvals, internal updates, and team follow-up.",
    result: "Less manual work"
  },
  {
    slug: "integration",
    label: "Connection layer",
    use: "Best for moving data between websites, CRMs, dashboards, and tools.",
    result: "Cleaner data flow"
  },
  {
    slug: "analytics",
    label: "Insight layer",
    use: "Best for reports, business dashboards, trends, and decision support.",
    result: "Clearer decisions"
  }
];

const gains = [
  { title: "Quick replies", value: "24/7", icon: Clock3 },
  { title: "Cleaner handoff", value: "1 flow", icon: GitBranch },
  { title: "Less repeated work", value: "Daily", icon: Zap },
  { title: "Better tracking", value: "Live", icon: Activity }
];

function SolutionTile({
  solution,
  index,
  align
}: {
  solution: (typeof aiSolutions)[number];
  index: number;
  align: "left" | "right";
}) {
  const detail = automationDetails.find((item) => item.slug === solution.slug);
  const palette = [
    "from-[#e9fbff] to-white",
    "from-[#fff0ec] to-white",
    "from-[#f5fbff] to-white",
    "from-[#fff8ea] to-white"
  ][index];

  return (
    <Reveal delay={index * 0.06}>
      <Link
        href={`/automation/${solution.slug}`}
        className="group block focus-ring rounded-[30px]"
      >
        <Card className={`relative h-full overflow-hidden bg-gradient-to-br ${palette} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(47,75,111,0.16)]`}>
          <div
            className={`absolute top-1/2 hidden h-0.5 w-16 bg-[var(--primary)] lg:block ${
              align === "left" ? "-right-16" : "-left-16"
            }`}
          />
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
              <solution.icon className="h-7 w-7 text-[var(--primary-strong)]" />
            </span>
            <span className="min-w-0">
              <span className="mini-heading block">{detail?.label}</span>
              <span className="mt-1 block text-2xl font-black leading-tight">{solution.title}</span>
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{detail?.use}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {solution.features.slice(0, 3).map((feature) => (
              <span key={feature} className="rounded-full bg-white px-3 py-2 text-xs font-black shadow-sm">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[rgba(30,34,51,0.08)] pt-5">
            <span className="text-sm font-black text-[var(--muted)]">{detail?.result}</span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--primary-strong)] shadow-sm transition group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </Card>
      </Link>
    </Reveal>
  );
}

export default function AutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f2ffd0]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Analytics dashboard with charts and business data"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f2ffd0] via-[#f2ffd0]/72 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f2ffd0] to-transparent" />
        </div>

        <div className="container-pyne relative z-10 flex min-h-[580px] items-end py-14 lg:py-20">
          <Reveal className="max-w-3xl pb-4">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" />
              AI Solutions
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              We build AI solutions that save time and reduce daily work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Pyne helps your team reply faster, manage leads, connect tools, and see business data clearly. Start with one problem, and we turn it into a simple working system.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cyan" size="lg">
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#automation-map">View AI solutions</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="automation-map" className="section-y bg-[#f2ffd0]">
        <div className="container-pyne">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">AI solutions</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">AI should fit into the way your business already works.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Pick one area below. Pyne can build it as a small first system, then connect the rest when your team is ready.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.82fr_1fr] lg:items-center">
            <div className="grid gap-6">
              {aiSolutions.slice(0, 2).map((solution, index) => (
                <SolutionTile key={solution.slug} solution={solution} index={index} align="left" />
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="relative mx-auto flex aspect-square max-w-[420px] items-center justify-center rounded-full border border-[rgba(30,34,51,0.12)] bg-white/75 p-8 shadow-[0_28px_90px_rgba(47,75,111,0.14)]">
                <div className="absolute inset-7 rounded-full border border-dashed border-[rgba(0,184,255,0.35)]" />
                <div className="absolute inset-16 rounded-full border border-[rgba(184,255,44,0.8)]" />
                <div className="relative z-10 rounded-[36px] bg-[var(--foreground)] p-7 text-center text-white shadow-[0_28px_70px_rgba(30,34,51,0.24)]">
                  <Sparkles className="mx-auto h-10 w-10 text-[var(--lime)]" />
                  <p className="mini-heading mt-4" style={{ "--mini-heading-color": "var(--mint)" } as CSSProperties}>Pyne AI hub</p>
                  <h3 className="mt-2 text-3xl font-black leading-tight">One system, four useful parts</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-white/74">
                    Reply faster, reduce repeated work, connect tools, and understand your data.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              {aiSolutions.slice(2).map((solution, index) => (
                <SolutionTile key={solution.slug} solution={solution} index={index + 2} align="right" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[#fffdf7]">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              Why it matters
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Automation should make the team calmer, not confused.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Pyne keeps each solution simple: one clear problem, one useful flow, and one place to check the result. That makes it easier for your team to trust and use.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {gains.map((gain, index) => (
              <Reveal key={gain.title} delay={index * 0.05}>
                <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                  <gain.icon className="h-9 w-9 text-[var(--primary-strong)]" />
                  <p className="mt-5 text-4xl font-black">{gain.value}</p>
                  <h3 className="mt-2 text-lg font-black">{gain.title}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y tech-wire-bg relative overflow-hidden bg-[#e9fbff]">
        <div aria-hidden className="tech-desk-item tech-monitor hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-phone hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-keyboard hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-mouse hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-cpu hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-printer hidden lg:block" />
        <div aria-hidden className="tech-desk-item tech-files hidden lg:block" />
        <div aria-hidden className="tech-cable tech-cable-one hidden lg:block" />
        <div aria-hidden className="tech-cable tech-cable-two hidden lg:block" />
        <div aria-hidden className="tech-cable tech-cable-three hidden lg:block" />
        <div className="container-pyne relative z-10 grid gap-8 lg:grid-cols-[0.8fr_0.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Start small</span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Pick one task you want to make easier.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Tell us what takes too much time right now. We will suggest the simplest AI solution and help your team use it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Button asChild variant="cyan" size="lg" className="w-full">
              <Link href="/contact">
                Start AI project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
