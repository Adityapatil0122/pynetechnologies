import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { legalPages } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: `${page.title} for Pyne Technologies.`
  };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = legalPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <section className="section-y">
      <Reveal className="container-pyne max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">{page.title}</h1>
        <p className="mt-3 text-sm font-bold text-[var(--muted)]">Last updated: {page.updated}</p>
        <div className="mt-10 space-y-9 rounded-[28px] border border-[rgba(30,34,51,0.1)] bg-white p-5 shadow-[0_18px_44px_rgba(47,75,111,0.08)] sm:p-7">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[var(--muted)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
