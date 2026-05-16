"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, Home } from "lucide-react";
import { motion } from "motion/react";

export function FloatingQuickNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 grid gap-3">
      {!isHome ? (
        <motion.div whileTap={{ scale: 0.94 }}>
          <Link
            href="/"
            className="focus-ring flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(30,34,51,0.1)] bg-white/94 text-[var(--primary-strong)] shadow-[0_18px_42px_rgba(47,75,111,0.14)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#f5fbff]"
            aria-label="Go to home page"
          >
            <Home className="h-6 w-6" />
          </Link>
        </motion.div>
      ) : null}
      <motion.button
        type="button"
        onClick={scrollToTop}
        whileTap={{ scale: 0.94 }}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(30,34,51,0.1)] bg-white/94 text-[var(--primary-strong)] shadow-[0_18px_42px_rgba(47,75,111,0.14)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#f5fbff]"
        aria-label="Back to top"
      >
        <ArrowUp className="h-7 w-7" />
      </motion.button>
    </div>
  );
}
