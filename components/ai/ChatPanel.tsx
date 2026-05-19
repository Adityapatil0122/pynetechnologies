"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, Loader2, RotateCcw, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ChatMessage } from "@/components/ai/ChatMessage";
import { SuggestedPrompts } from "@/components/ai/SuggestedPrompts";
import { pyneAiSuggestions, type PyneAiMessage } from "@/lib/pyne-ai";

const greeting: PyneAiMessage = {
  role: "assistant",
  content: "Hi, I'm Pyne Guide. Ask me about services, automation, products, pricing, or how to start a project."
};

export function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<PyneAiMessage[]>(() => {
    if (typeof window === "undefined") return [greeting];

    try {
      const saved = window.localStorage.getItem("pyne-ai-messages");
      if (!saved) return [greeting];
      const parsed = JSON.parse(saved) as PyneAiMessage[];
      return Array.isArray(parsed) && parsed.length ? parsed : [greeting];
    } catch {
      return [greeting];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    window.localStorage.setItem("pyne-ai-messages", JSON.stringify(messages.slice(-16)));
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages: PyneAiMessage[] = [...messages, { role: "user", content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/pyne-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) })
      });
      const data = (await response.json()) as { reply?: string };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply || "I did not understand that. Ask me about Pyne services, automation, apps, websites, or contact details."
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now, but Pyne can help with websites, apps, WhatsApp automation, design, and marketing."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function resetChat() {
    setMessages([greeting]);
    setInput("");
    window.localStorage.removeItem("pyne-ai-messages");
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            aria-hidden
            className="fixed inset-0 z-40 bg-[rgba(30,34,51,0.2)] backdrop-blur-[3px] md:bg-transparent md:backdrop-blur-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-44 z-50 flex max-h-[min(720px,calc(100dvh-200px))] flex-col overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_30px_90px_rgba(30,34,51,0.24)] sm:left-auto sm:right-6 sm:w-[430px]"
            aria-label="Pyne Guide chat panel"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[rgba(30,34,51,0.08)] bg-[#f5fbff] p-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                  <Sparkles className="h-6 w-6" />
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[var(--mint)]" />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-black">Pyne Guide</h2>
                  <p className="truncate text-sm font-bold text-[var(--muted)]">Pyne support guide &middot; quick replies</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="focus-ring rounded-full p-2 transition hover:bg-white" type="button" onClick={resetChat} aria-label="Reset Pyne Guide chat">
                  <RotateCcw className="h-5 w-5" />
                </button>
                <button className="focus-ring rounded-full p-2 transition hover:bg-white" type="button" onClick={onClose} aria-label="Close Pyne Guide">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="grid flex-1 gap-4 overflow-y-auto p-5">
              {messages.map((message, index) => (
                <ChatMessage key={`${message.role}-${index}-${message.content}`} message={message} />
              ))}
              {loading ? (
                <div className="flex items-center gap-3 text-sm font-black text-[var(--muted)]">
                  <Loader2 className="h-4 w-4 animate-spin text-[var(--primary-strong)]" />
                  Pyne Guide is thinking
                </div>
              ) : null}
            </div>

            <div className="grid gap-4 border-t border-[rgba(30,34,51,0.08)] p-5">
              {messages.length <= 2 ? <SuggestedPrompts prompts={pyneAiSuggestions} onPick={sendMessage} disabled={loading} /> : null}
              <form onSubmit={handleSubmit} className="flex items-end gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask Pyne Guide"
                  className="focus-ring max-h-32 min-h-12 flex-1 resize-none rounded-2xl border border-[rgba(30,34,51,0.14)] bg-white px-4 py-3 text-sm font-semibold leading-6 placeholder:text-[#8a91a5]"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="focus-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_14px_30px_rgba(0,184,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)] disabled:pointer-events-none disabled:opacity-50"
                  aria-label="Send message to Pyne Guide"
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
              </form>
              <p className="text-center text-[11px] font-semibold leading-4 text-[var(--muted)]">
                Please confirm important project details with the Pyne team.
              </p>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
