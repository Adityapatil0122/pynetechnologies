"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { navGroups } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SiteLogo } from "@/components/site-logo";

const singleLinks = [
  { href: "/clients", label: "Clients" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(30,34,51,0.08)] bg-[#fffdf7]/86 backdrop-blur-xl">
      <div className="container-pyne flex h-[72px] items-center justify-between gap-5">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navGroups.map((group) => (
            <div className="group relative" key={group.title}>
              <button className="focus-ring inline-flex items-center gap-1 rounded-full px-4 py-3 text-sm font-extrabold text-[var(--foreground)] transition hover:bg-white">
                {group.title}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[360px] -translate-x-1/2 translate-y-3 opacity-0 transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                <div className="rounded-[24px] border border-[rgba(30,34,51,0.1)] bg-white p-3 shadow-[0_24px_60px_rgba(47,75,111,0.16)]">
                  {group.items.map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      className="focus-ring group/item flex items-start justify-between gap-4 rounded-2xl p-4 transition hover:bg-[#f5fbff]"
                    >
                      <span>
                        <span className="block text-sm font-black">{item.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{item.description}</span>
                      </span>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 text-[var(--primary-strong)] transition group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {singleLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "focus-ring rounded-full px-4 py-3 text-sm font-extrabold transition hover:bg-white",
                pathname === link.href && "bg-white text-[var(--primary-strong)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="pop">
            <Link href="/contact">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_rgba(47,75,111,0.12)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-[rgba(30,34,51,0.08)] bg-[#fffdf7] lg:hidden"
          >
            <div className="container-pyne max-h-[calc(100vh-72px)] overflow-y-auto py-3">
              {navGroups.map((group) => (
                <div className="py-3" key={group.title}>
                  <p className="px-2 text-xs font-black uppercase text-[var(--primary-strong)]">{group.title}</p>
                  <div className="mt-2 grid gap-2">
                    {group.items.map((item) => (
                      <Link
                        className="rounded-2xl bg-white p-4 text-sm font-black shadow-sm"
                        href={item.href}
                        key={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                        <span className="mt-1 block text-xs font-semibold leading-5 text-[var(--muted)]">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid gap-2 py-3">
                {singleLinks.map((link) => (
                  <Link
                    className="rounded-2xl bg-white p-4 text-sm font-black shadow-sm"
                    href={link.href}
                    key={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button asChild variant="pop" className="mt-3 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Start a project
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
