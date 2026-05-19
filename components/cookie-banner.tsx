"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(localStorage.getItem("pyne-cookie-choice") === null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function choose(value: string) {
    localStorage.setItem("pyne-cookie-choice", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-[24px] border border-[rgba(30,34,51,0.12)] bg-white p-4 shadow-[0_24px_70px_rgba(47,75,111,0.18)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold leading-6 text-[var(--muted)]">
          We use simple cookies to keep the site working and improve our pages. Read the{" "}
          <Link className="font-black text-[var(--primary-strong)]" href="/legal/cookie-policy">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("declined")}>
            Decline
          </Button>
          <Button variant="cyan" size="sm" onClick={() => choose("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
