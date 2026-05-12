import type { Metadata } from "next";
import { Building2, CheckCircle2 } from "lucide-react";
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
            <Card className="p-6" key={client.name}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9fbff]">
                <Building2 className="h-6 w-6 text-[var(--primary-strong)]" />
              </div>
              <h2 className="mt-5 text-xl font-black">{client.name}</h2>
              <p className="mt-2 text-sm font-bold text-[var(--muted)]">{client.industry}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                <CheckCircle2 className="h-4 w-4 text-[var(--primary-strong)]" />
                Use case {String(index + 1).padStart(2, "0")}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
