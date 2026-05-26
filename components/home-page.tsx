"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Cpu, ExternalLink, Gauge, MousePointerClick, Radio, Smartphone, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, type CSSProperties } from "react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ContactForm } from "@/components/contact-form";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { aiSolutions, blogPosts, clients, heroHighlights, processSteps, products, services, stats } from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

const cockpitModes = [
  {
    label: "Website check",
    title: "Homepage plan",
    metric: "1.8s",
    metricLabel: "load target",
    accent: "#00B8FF",
    icon: Gauge,
    stack: ["Hero", "SEO", "Speed"]
  },
  {
    label: "Lead flow",
    title: "Lead response",
    metric: "24/7",
    metricLabel: "reply support",
    accent: "#B8FF2C",
    icon: Cpu,
    stack: ["Chatbot", "Routing", "Handoff"]
  },
  {
    label: "App plan",
    title: "Product flow",
    metric: "4",
    metricLabel: "core screens",
    accent: "#FF6B5F",
    icon: Smartphone,
    stack: ["Login", "Dashboard", "Reports"]
  },
  {
    label: "Campaign plan",
    title: "Launch plan",
    metric: "3x",
    metricLabel: "creative ideas",
    accent: "#FFD84D",
    icon: Radio,
    stack: ["Ads", "Social", "WhatsApp"]
  }
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <AISection />
      <ProductsSection />
      <ProcessSection />
      <ClientsSection />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="noise relative overflow-hidden py-10 sm:py-14 lg:py-18">
      <div className="container-pyne relative z-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div className="min-w-0 max-w-full" initial={false} animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" />
            Satara studio for digital growth
          </span>
          <h1 className="mt-6 max-w-full break-words text-4xl font-black leading-[0.98] tracking-normal text-[var(--foreground)] sm:max-w-4xl sm:text-6xl lg:text-7xl">
            <span className="block">Websites, apps</span>
            <span className="block">and automation</span>
            <span className="block">built to win</span>
            <span className="gradient-text block">real customers.</span>
          </h1>
          <p className="mt-6 max-w-full text-lg leading-8 text-[var(--muted)] sm:max-w-2xl">
            Pyne Technologies crafts fast websites, polished apps, WhatsApp flows, digital campaigns, and brand visuals
            that make your business feel premium, trusted, and easy to choose.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="pop" size="lg">
              <Link href="/contact">
                Start a project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Explore services
                <MousePointerClick className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroHighlights.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,34,51,0.1)] bg-white px-4 py-2 text-sm font-black shadow-sm"
              >
                <item.icon className="h-4 w-4 text-[var(--primary-strong)]" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>
        <LaunchCockpit />
      </div>
    </section>
  );
}

function LaunchCockpit() {
  const [active, setActive] = useState(0);
  const mode = cockpitModes[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cockpitModes.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative min-h-[390px] min-w-0 max-w-full pt-4 sm:min-h-[500px] lg:-mt-4"
      aria-label="Interactive Pyne project planner"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="hero-spin-slow absolute left-1/2 top-[47%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(30,34,51,0.14)] sm:h-[430px] sm:w-[430px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="hero-spin-reverse absolute left-1/2 top-[47%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,184,255,0.22)] sm:h-[330px] sm:w-[330px]"
      />
      {cockpitModes.map((item, index) => {
        const angle = (index / cockpitModes.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 39;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const Icon = item.icon;

        return (
          <motion.button
            key={item.label}
            onClick={() => setActive(index)}
            whileTap={{ scale: 0.92 }}
            animate={index === active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={index === active ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
            className="focus-ring absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_16px_40px_rgba(47,75,111,0.16)] transition hover:scale-105 sm:h-14 sm:w-14"
            style={{ left: `${x}%`, top: `${y}%` }}
            aria-label={`Show ${item.label}`}
          >
            {index === active ? (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: item.accent }}
                animate={{ opacity: [0.8, 0], scale: [1, 1.55] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
              />
            ) : null}
            <Icon className="h-6 w-6" style={{ color: item.accent }} />
          </motion.button>
        );
      })}
      <div className="hero-breathe relative z-10 mx-auto mt-16 max-w-[390px] overflow-hidden rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_30px_80px_rgba(47,75,111,0.18)] backdrop-blur sm:mt-14 sm:p-5">
        <div className="rounded-[26px] bg-[#f5fbff] p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-[var(--primary-strong)] shadow-sm">
              <Zap className="h-4 w-4" />
              live project plan
            </span>
            <span className="rounded-full px-3 py-2 text-xs font-black" style={{ background: mode.accent }}>
              {mode.label}
            </span>
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4">
            <div>
              <p className="text-sm font-black text-[var(--muted)]">Now improving</p>
              <motion.h2
                key={mode.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-2xl font-black leading-none sm:text-3xl"
              >
                {mode.title}
              </motion.h2>
            </div>
            <motion.div
              key={mode.metric}
              initial={{ scale: 0.9, rotate: -4 }}
              animate={{ scale: 1, rotate: 0 }}
              className="rounded-[22px] bg-white p-4 text-center shadow-sm"
            >
              <p className="text-2xl font-black sm:text-3xl" style={{ color: mode.accent }}>
                {mode.metric}
              </p>
              <p className="mt-1 max-w-24 text-xs font-black leading-4 text-[var(--muted)]">{mode.metricLabel}</p>
            </motion.div>
          </div>
          <SignalPlayground accent={mode.accent} labels={mode.stack} active={active} />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {mode.stack.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl bg-white px-3 py-4 text-center text-sm font-black shadow-sm"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {["Brief", "Design", "Build", "Launch"].map((stage, index) => (
            <div key={stage} className="rounded-2xl border border-[rgba(30,34,51,0.08)] bg-white p-3">
              <div className="h-2 rounded-full bg-[#edf5f6]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: index <= active ? mode.accent : "#dbe8ee" }}
                  animate={{ width: index <= active ? "100%" : "35%" }}
                />
              </div>
              <p className="mt-2 text-center text-[11px] font-black text-[var(--muted)]">{stage}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 12, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hero-float-pill absolute right-3 top-3 z-20 rounded-full bg-[var(--lime)] px-4 py-3 text-xs font-black shadow-lg sm:right-6 sm:text-sm"
      >
        launch mode
      </motion.div>
    </motion.div>
  );
}

function SignalPlayground({ accent, labels, active }: { accent: string; labels: string[]; active: number }) {
  const bars = [44, 72, 56, 88, 62, 78];

  return (
    <div className="relative mt-5 h-28 overflow-hidden rounded-[24px] border border-white/80 bg-white/72 shadow-inner">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(30,34,51,0.06) 1px, transparent 1px), linear-gradient(rgba(30,34,51,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div
        aria-hidden
        className="hero-scan-css absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
      />
      <div className="relative z-10 flex h-full items-end justify-between gap-2 px-4 pb-4 pt-5">
        <div className="flex h-full flex-1 items-end gap-2">
          {bars.map((height, index) => (
            <span
              aria-hidden
              key={`${active}-${height}-${index}`}
              className="hero-wave-bar w-full rounded-full"
              style={
                {
                  "--bar-height": `${height}px`,
                  animationDelay: `${index * 0.12}s`,
                  background: index % 2 ? accent : "var(--primary)"
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="grid min-w-28 gap-2">
          {labels.map((label, index) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-black shadow-sm"
              animate={{ x: index === active % labels.length ? [0, -3, 0] : 0 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: index === active % labels.length ? accent : "#dbe8ee" }} />
              <span className="truncate">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="py-4">
      <div className="container-pyne grid gap-3 rounded-[30px] border border-[rgba(30,34,51,0.1)] bg-white/82 p-3 shadow-[0_24px_70px_rgba(47,75,111,0.1)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="rounded-[22px] bg-[#f5fbff] p-6 text-center" key={stat.label}>
            <p className="text-4xl font-black text-[var(--primary-strong)]">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-1 text-sm font-bold leading-5 text-[var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Web services"
          title="Everything needed to make your online presence work better."
          description="From fast websites to campaign visuals, Pyne keeps strategy, design, code, automation, and launch support connected."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, rotate: index % 2 ? -0.7 : 0.7 }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <Card className="relative h-[430px] overflow-hidden p-0">
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                    style={{ objectPosition: service.imagePosition ?? "center center" }}
                  />
                  <div className="service-card-wash" />
                  <div className="service-card-scrim" />
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/92 shadow-sm backdrop-blur" style={{ color: service.accent }}>
                      <service.icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-white/92 px-3 py-2 text-xs font-black text-[var(--foreground)] backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition duration-500 ease-out group-hover:-translate-y-6 group-focus-visible:-translate-y-6">
                    <p className="mini-heading" style={{ "--mini-heading-color": "rgba(255,255,255,0.78)" } as CSSProperties}>{service.kicker}</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight">{service.title}</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-40 group-focus-visible:opacity-100">
                      <p className="text-base font-semibold leading-7 text-white/82">{service.description}</p>
                    </div>
                    <div className="mt-5 flex translate-y-3 items-center gap-2 text-sm font-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      See details
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="section-y bg-[#f2ffd0]">
      <div className="container-pyne grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionIntro
          eyebrow="Automation"
          title="Useful systems for real business work."
          description="Chatbots, integrations, dashboards, and automation that reduce repeated work and help teams move faster."
          center={false}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link href={`/automation/${solution.slug}`} className="block rounded-[24px] bg-white p-6 shadow-[0_18px_42px_rgba(47,75,111,0.08)] transition hover:-translate-y-1">
                <solution.icon className="h-8 w-8 text-[var(--primary-strong)]" />
                <h3 className="mt-5 text-xl font-black">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{solution.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section-y bg-[#fff8ea]">
      <div className="container-pyne">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Products"
            title="Live products built for real business work."
            description="Explore LMS, public websites, WhatsApp tools, insurance content, print ecommerce, and study hall software from the Pyne product shelf."
            center={false}
          />
          <Button asChild variant="outline">
            <Link href="/products">
              View all products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            const productHref = product.href ?? product.liveUrl ?? "/products";
            const isExternal = Boolean(product.liveUrl && !product.href);

            return (
              <motion.article
                key={product.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[28px] border border-[rgba(30,34,51,0.08)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]"
              >
                <div className="relative h-48 overflow-hidden bg-[#e9fbff]">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,34,51,0.48)] to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-7 w-7" style={{ color: product.accent }} />
                  </div>
                  <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[var(--foreground)]">
                    {product.label}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="rounded-full bg-[#f5fbff] px-3 py-1 text-xs font-black text-[var(--foreground)]">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={productHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-black text-white shadow-[0_16px_34px_rgba(0,184,255,0.22)] transition hover:bg-[var(--primary-strong)]"
                  >
                    {isExternal ? "Open live product" : "View product"}
                    {isExternal ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="How we build"
          title="A clear path from idea to launch."
          description="We understand the audience, plan the flow, build the system, and check the details so it is easy to use and simple to extend."
        />
        <div className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div className="absolute left-8 right-8 top-12 hidden h-1 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--lime)] to-[var(--coral)] md:block" />
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white p-6 shadow-[0_16px_44px_rgba(47,75,111,0.08)]"
            >
              <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sun)] text-xl font-black">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mini-heading mt-5">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="section-y overflow-hidden bg-[#e9fbff]">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Who we help"
          title="Built for businesses that need clearer digital experiences."
          description="Pyne supports startups, education teams, local businesses, clinics, retail brands, hospitality teams, real estate, and service companies with practical digital systems."
        />
      </div>
      <div className="client-logo-strip mt-14 flex overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex min-w-max gap-8 px-4"
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex h-[132px] w-[360px] items-center justify-center rounded-[28px] border border-[rgba(30,34,51,0.08)] bg-white px-8 py-6 shadow-sm sm:w-[460px]">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={260}
                height={110}
                className={`${client.className ?? "max-h-20"} h-auto w-auto max-w-[78%] object-contain`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Notes"
            title="Small reads for better digital decisions."
            description="Ideas on web experience, automation, and the practical side of building useful digital products."
            center={false}
          />
          <Button asChild variant="outline">
            <Link href="/blogs">All posts</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block overflow-hidden rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white shadow-[0_18px_44px_rgba(47,75,111,0.08)]">
              <div className="relative h-44 overflow-hidden bg-[#075eb8]">
                <img src={post.image} alt="" className="h-full w-full object-cover opacity-[0.58] mix-blend-luminosity transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,42,112,0.48),rgba(0,184,255,0.34))]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,17,54,0.66)] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="mini-heading">{post.category}</p>
                <h3 className="mt-3 text-xl font-black leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section-y bg-[#fff0ec]">
      <div className="container-pyne grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="eyebrow">
            <Check className="h-4 w-4" />
            Ready when you are
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Bring the idea. We&apos;ll bring the design, code, and launch support.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Tell us what you want to build. The form opens WhatsApp or an email draft, so the first conversation can start quickly.
          </p>
        </div>
        <div className="rounded-[30px] border border-[rgba(30,34,51,0.1)] bg-white p-6 shadow-[0_24px_70px_rgba(47,75,111,0.12)]">
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
