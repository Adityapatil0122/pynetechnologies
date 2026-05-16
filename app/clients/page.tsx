import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Card } from "@/components/ui/card";
import { clients } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Clients",
  description: "Industries and sample client systems supported by Pyne Technologies."
};

export default function ClientsPage() {
  return (
    <section className="section-y">
      <div className="container-pyne">
        <SectionIntro
          eyebrow="Clients"
          title="Flexible digital systems for businesses with real-world messiness."
          description="The live client logos can be swapped in later. For now, this page shows the industries and use cases the Pyne system is designed around."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.04}>
            <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: client.accent }}>
                <client.icon className="h-7 w-7 text-[var(--foreground)]" />
              </div>
              <h2 className="mt-5 text-xl font-black">{client.name}</h2>
              <p className="mt-2 text-sm font-bold text-[var(--muted)]">{client.industry}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                <CheckCircle2 className="h-4 w-4 text-[var(--primary-strong)]" />
                Use case {String(index + 1).padStart(2, "0")}
              </p>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
