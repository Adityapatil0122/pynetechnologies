import type { Metadata } from "next";
import { Clock3, Mail, MapPin, PhoneCall, Send, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { seoMetadata } from "@/lib/seo";
import { brand } from "@/lib/site-data";

export const metadata: Metadata = seoMetadata({
  title: "Contact",
  description:
    "Contact Pyne Technologies for website development, app development, WhatsApp automation, marketing, UI/UX design, graphic design, and automation projects.",
  path: "/contact",
  keywords: ["contact Pyne Technologies", "web development inquiry", "app development inquiry"]
});

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Call us",
      value: brand.whatsappLabel,
      detail: "For quick project chats and simple questions.",
      href: `tel:+${brand.whatsappNumber}`,
      icon: PhoneCall,
      accent: "var(--lime)"
    },
    {
      title: "Email us",
      value: brand.email,
      detail: "For proposals, files, and project notes.",
      href: `mailto:${brand.email}`,
      icon: Mail,
      accent: "var(--primary)"
    },
    {
      title: "Business hours",
      value: "Monday - Saturday",
      detail: "10:00 AM - 6:00 PM",
      icon: Clock3,
      accent: "var(--sun)"
    },
    {
      title: "Location",
      value: brand.city,
      detail: "",
      icon: MapPin,
      accent: "var(--coral)"
    }
  ];

  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-[44%] bg-[#e9fbff]" />
      <div className="noise absolute inset-x-0 top-0 h-[44%]" />
      <div className="container-pyne relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" />
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-[var(--foreground)] sm:text-6xl">
            Let&apos;s plan the next thing you want to launch.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Send a brief, an early idea, or the exact screen you need. We&apos;ll turn it into a clear next step.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] xl:gap-8">
          <Reveal>
          <Card className="relative overflow-visible rounded-[30px] bg-white p-6 shadow-[0_28px_90px_rgba(47,75,111,0.13)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--lime)] to-[var(--coral)]" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-[var(--primary-strong)]">Message</p>
                <h2 className="mt-2 text-3xl font-black">Send us a message</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--lime)] shadow-[0_14px_34px_rgba(123,194,0,0.18)]">
                <Send className="h-6 w-6 text-[var(--foreground)]" />
              </div>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>
          </Reveal>

          <Reveal delay={0.08}>
          <Card className="relative overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_28px_90px_rgba(47,75,111,0.13)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--sun)] via-[var(--primary)] to-[var(--mint)]" />
            <div className="relative">
              <p className="text-sm font-black uppercase text-[var(--primary-strong)]">Details</p>
              <h2 className="mt-2 text-3xl font-black">Get in touch</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Direct lines for calls, emails, working hours, and location.
              </p>

              <div className="mt-8 grid gap-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={{ background: item.accent }}>
                        <Icon className="h-6 w-6 text-[var(--foreground)]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-black">{item.title}</span>
                        <span className="mt-1 block break-words text-base font-bold text-[var(--foreground)]">{item.value}</span>
                        {item.detail ? <span className="mt-1 block text-sm leading-5 text-[var(--muted)]">{item.detail}</span> : null}
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      className="focus-ring flex items-start gap-4 rounded-[22px] p-3 transition hover:bg-[#f5fbff]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title} className="flex items-start gap-4 rounded-[22px] p-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
