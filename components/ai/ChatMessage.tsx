import { Sparkles } from "lucide-react";
import type { PynAiMessage } from "@/lib/pyn-ai";

export function ChatMessage({ message }: { message: PynAiMessage }) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={isAssistant ? "flex items-start gap-3" : "flex justify-end"}>
      {isAssistant ? (
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_12px_26px_rgba(0,184,255,0.22)]">
          <Sparkles className="h-5 w-5" />
        </span>
      ) : null}
      <div
        className={
          isAssistant
            ? "max-w-[82%] rounded-[22px] rounded-tl-md bg-[#f1f5ff] px-4 py-3 text-sm font-semibold leading-6 text-[var(--foreground)]"
            : "max-w-[82%] rounded-[22px] rounded-tr-md bg-[var(--foreground)] px-4 py-3 text-sm font-semibold leading-6 text-white"
        }
      >
        {message.content}
      </div>
    </div>
  );
}
