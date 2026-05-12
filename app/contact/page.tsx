import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pyne Technologies for web, app, AI, WhatsApp, marketing, UI/UX, and graphics projects."
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-pyne grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">Tell us what you want to make loud, useful, or beautifully obvious.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Send details through WhatsApp or email. V1 keeps this intentionally simple so hosting does not need database or mail credentials.
          </p>
          <div className="mt-8 grid gap-4">
            <Card className="flex items-center gap-4 p-5">
              <Mail className="h-6 w-6 text-[var(--primary-strong)]" />
              <span className="font-black">{brand.email}</span>
            </Card>
            <Card className="flex items-center gap-4 p-5">
              <MessageCircle className="h-6 w-6 text-[#25d366]" />
              <span className="font-black">{brand.whatsappLabel}</span>
            </Card>
            <Card className="flex items-center gap-4 p-5">
              <MapPin className="h-6 w-6 text-[var(--coral)]" />
              <span className="font-black">{brand.city}</span>
            </Card>
          </div>
        </div>
        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}
