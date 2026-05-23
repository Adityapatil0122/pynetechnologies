import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/site-data";
import { seoMetadata } from "@/lib/seo";

export const metadata: Metadata = seoMetadata({
  title: "Products",
  description:
    "Explore Pyne Technologies products including ITROOTS LMS, ITROOTS website and CMS, WhatsApp Business Suite, Insurance Majha, Quick Prints, and Study Room Management App.",
  path: "/products",
  keywords: ["Pyne products", "ITROOTS LMS", "WhatsApp Business Suite", "Insurance Majha", "Quick Prints ecommerce"]
});

export default function ProductsPage() {
  return (
    <>
      <section className="section-y overflow-hidden bg-[#e9fbff]">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Product shelf
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">Products we have built and shaped.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              LMS systems, public websites, WhatsApp tools, insurance content, ecommerce, and business dashboards made for real daily use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pop">
                <Link href="/contact">
                  Build a product
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services/app-development">See app development</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(0, 4).map((product) => {
                const Icon = product.icon;

                return (
                  <div key={product.slug} className="rounded-[24px] bg-white p-5 shadow-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: product.accent }}>
                      <Icon className="h-7 w-7 text-[var(--foreground)]" />
                    </div>
                    <p className="mt-4 text-lg font-black">{product.title}</p>
                    <p className="mt-1 text-sm font-bold text-[var(--muted)]">{product.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-pyne">
          <SectionIntro
            eyebrow="Product list"
            title="Each product has its own clear job."
            description="These products cover learning, business websites, customer chats, insurance education, print ecommerce, and local operations."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              const productHref = product.href ?? product.liveUrl ?? "/products";
              const isExternal = Boolean(product.liveUrl && !product.href);

              return (
                <Reveal key={product.slug} delay={index * 0.04}>
                  <Card className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                    <div className="relative h-56 overflow-hidden bg-[#f5fbff]">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,34,51,0.55)] to-transparent" />
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-7 w-7" style={{ color: product.accent }} />
                      </div>
                      <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black">{product.label}</span>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-black">{product.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.description}</p>
                      <div className="mt-5 grid gap-2">
                        {product.features.map((feature) => (
                          <span key={feature} className="rounded-2xl bg-[#f5fbff] px-4 py-3 text-sm font-black">
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
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
