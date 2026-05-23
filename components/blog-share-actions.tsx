"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Share2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogShareActionsProps = {
  title: string;
  url: string;
};

const shareButtonClass =
  "focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5";

export function BlogShareActions({ title, url }: BlogShareActionsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="border-t border-[rgba(30,34,51,0.08)] pt-8">
      <h3 className="text-xl font-black text-[var(--foreground)]">Share this article</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(shareButtonClass, "bg-[#1877f2] hover:bg-[#0e65d5]")}
        >
          <Share2 className="h-4 w-4" />
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(shareButtonClass, "bg-[#111827] hover:bg-[#232b3a]")}
        >
          <Send className="h-4 w-4" />
          X
        </a>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(shareButtonClass, "bg-[#25d366] hover:bg-[#1fb855]")}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#f1f4f8] px-4 py-2 text-sm font-black text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[#e7edf6]"
        >
          {copied ? <Check className="h-4 w-4 text-[#20a35a]" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
