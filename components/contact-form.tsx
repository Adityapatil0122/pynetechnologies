"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form-fields";
import { aiSolutions, brand, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const interests = ["Website", "App", "Automation", "Marketing", "WhatsApp", "Design", "Not sure yet"];

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

  const emailHref = `mailto:${brand.email}?subject=${encodeURIComponent("Project inquiry for PYN Technologies")}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Full name">
          <Input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <Input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="Your email" />
        </Field>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Phone">
          <Input value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Your phone" />
        </Field>
        <Field label="Project type">
          <PYNDropdown value={form.interest} options={interests} onChange={(value) => update("interest", value)} />
        </Field>
      </div>
      <Field label="Service">
        <PYNDropdown value={form.service} options={serviceOptions} onChange={(value) => update("service", value)} />
      </Field>
      <Field label="Message">
        <Textarea value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us about your project" />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="pop" className="flex-1">
          <MessageCircle className="h-4 w-4" />
          Send message
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

function PYNDropdown({
  value,
  options,
  onChange
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedIndex = Math.max(0, options.indexOf(value));

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function choose(nextValue: string) {
    onChange(nextValue);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((current) => !current);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (selectedIndex + direction + options.length) % options.length;
      onChange(options[nextIndex]);
      setOpen(true);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          "focus-ring flex h-12 w-full min-w-0 items-center justify-between gap-3 rounded-2xl border bg-white px-4 text-left text-sm font-bold text-[var(--foreground)] shadow-sm transition",
          open
            ? "border-[var(--primary)] shadow-[0_0_0_4px_rgba(0,184,255,0.16)]"
            : "border-[rgba(30,34,51,0.14)] hover:border-[var(--primary)]"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
      >
        <span className="truncate">{value}</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-[var(--primary-strong)] transition", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 overflow-hidden rounded-[22px] border border-[rgba(30,34,51,0.1)] bg-white p-2 shadow-[0_24px_70px_rgba(47,75,111,0.18)]"
            role="listbox"
          >
            <div className="max-h-64 overflow-y-auto pr-1">
              {options.map((option) => {
                const selected = option === value;

                return (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => choose(option)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-black transition",
                      selected
                        ? "bg-[#e9fbff] text-[var(--primary-strong)]"
                        : "text-[var(--foreground)] hover:bg-[#f2ffd0]"
                    )}
                  >
                    <span className="truncate">{option}</span>
                    {selected ? <Check className="h-4 w-4 shrink-0" /> : null}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
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
