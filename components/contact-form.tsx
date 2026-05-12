"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/form-fields";
import { aiSolutions, brand, services } from "@/lib/site-data";

const interests = ["Website", "App", "AI", "Marketing", "WhatsApp", "Design", "Not sure yet"];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    service: services[0].title,
    message: ""
  });

  const serviceOptions = useMemo(
    () => [...services.map((service) => service.title), ...aiSolutions.map((solution) => solution.title), "Study Room Management App"],
    []
  );

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function buildMessage() {
    return [
      `Hello ${brand.name},`,
      `Name: ${form.name || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Interest: ${form.interest}`,
      `Service/Product: ${form.service}`,
      `Message: ${form.message || "I would like to discuss a project."}`
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const encoded = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
  }

  const emailHref = `mailto:${brand.email}?subject=${encodeURIComponent("Project inquiry for Pyne Technologies")}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Name">
          <Input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <Input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" />
        </Field>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-3"}>
        <Field label="Phone">
          <Input value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+91..." />
        </Field>
        <Field label="Interest">
          <Select value={form.interest} onChange={(event) => update("interest", event.target.value)}>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Service">
          <Select value={form.service} onChange={(event) => update("service", event.target.value)}>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field label="Message">
        <Textarea value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us what you want to build..." />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="pop" className="flex-1">
          <MessageCircle className="h-4 w-4" />
          Send on WhatsApp
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <a href={emailHref}>
            <Mail className="h-4 w-4" />
            Draft email
          </a>
        </Button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
