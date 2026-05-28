"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const closeDropdowns = () => {
      setActiveDropdown(null);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeDropdowns();
      }
    };

    window.addEventListener("scroll", closeDropdowns, { passive: true });
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeDropdowns);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(30,34,51,0.08)] bg-[#fffdf7]/86 backdrop-blur-xl">
      <div className="container-pyn flex h-[72px] items-center justify-between gap-5">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navGroups.map((group) => (
            <div
              className="relative"
              key={group.title}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActiveDropdown(null);
                }
              }}
              onFocus={() => setActiveDropdown(group.title)}
              onMouseEnter={() => {
                setActiveDropdown(group.title);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
              }}
            >
              <Link
                href={group.href}
                className={cn(
                  "focus-ring inline-flex cursor-pointer items-center gap-1 rounded-full px-4 py-3 text-sm font-extrabold text-[var(--foreground)] transition hover:bg-white",
                  (activeDropdown === group.title || pathname === group.href || pathname.startsWith(`${group.href}/`)) &&
                    "bg-white text-[var(--primary-strong)]"
                )}
                aria-expanded={activeDropdown === group.title}
                aria-haspopup="menu"
                onClick={() => {
                  setActiveDropdown(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setActiveDropdown(null);
                  }
                }}
              >
                {group.title}
                <ChevronDown className={cn("h-4 w-4 transition", activeDropdown === group.title && "rotate-180")} />
              </Link>
              <AnimatePresence>
                {activeDropdown === group.title ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 4 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full w-[390px] -translate-x-1/2"
                  >
                    <div className="rounded-[22px] border border-[rgba(30,34,51,0.1)] bg-white p-2 shadow-[0_24px_60px_rgba(47,75,111,0.16)]">
                      <Link
                        href={group.href}
                        className="focus-ring flex items-center justify-between gap-3 rounded-[16px] px-4 py-3 text-sm font-black text-[var(--primary-strong)] transition hover:bg-[#f7fbff]"
                        onClick={() => {
                          setActiveDropdown(null);
                        }}
                      >
                        <span>{group.title} overview</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                      </Link>
                      {group.items.map((item) => {
                        const isExternal = item.href.startsWith("http");
                        const Icon = item.icon;

                        return (
                          <Link
                            href={item.href}
                            key={item.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                            className="focus-ring group/item flex items-start justify-between gap-4 border-t border-[rgba(30,34,51,0.07)] p-4 transition first:border-t-0 hover:bg-[#f7fbff]"
                            onClick={() => {
                              setActiveDropdown(null);
                            }}
                          >
                            <span className="flex min-w-0 items-start gap-3">
                              {Icon ? (
                                <Icon
                                  className="mt-0.5 h-4 w-4 shrink-0"
                                  aria-hidden="true"
                                  style={{ color: item.accent ?? "var(--primary-strong)" }}
                                />
                              ) : null}
                              <span className="min-w-0">
                                <span className="block text-sm font-black">{item.title}</span>
                                <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{item.description}</span>
                              </span>
                            </span>
                            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--primary-strong)] opacity-70 transition group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
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
            <div className="container-pyn max-h-[calc(100vh-72px)] overflow-y-auto py-3">
              {navGroups.map((group) => (
                <div className="py-3" key={group.title}>
                  <Link
                    href={group.href}
                    className="focus-ring mini-heading inline-flex px-2 py-1"
                    onClick={() => setOpen(false)}
                  >
                    {group.title} overview
                  </Link>
                  <div className="mt-2 grid gap-2">
                    {group.items.map((item) => {
                      const isExternal = item.href.startsWith("http");
                      const Icon = item.icon;

                      return (
                        <Link
                          className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-black shadow-sm"
                          href={item.href}
                          key={item.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {Icon ? (
                            <Icon
                              className="mt-0.5 h-4 w-4 shrink-0"
                              aria-hidden="true"
                              style={{ color: item.accent ?? "var(--primary-strong)" }}
                            />
                          ) : null}
                          <span>
                            {item.title}
                            <span className="mt-1 block text-xs font-semibold leading-5 text-[var(--muted)]">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
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
