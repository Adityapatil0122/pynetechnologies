"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ChatPanel } from "@/components/ai/ChatPanel";

export function ChatLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatPanel open={open} onClose={() => setOpen(false)} />
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="focus-ring fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--foreground)] text-white shadow-[0_22px_50px_rgba(30,34,51,0.28)] transition hover:-translate-y-1"
        aria-label={open ? "Close Pyne Guide" : "Open Pyne Guide"}
        whileTap={{ scale: 0.94 }}
      >
        <span className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-25 blur-md" />
        {open ? <MessageCircle className="relative h-7 w-7" /> : <Sparkles className="relative h-7 w-7" />}
      </motion.button>
    </>
  );
}
