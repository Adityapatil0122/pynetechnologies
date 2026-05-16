import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "focus-ring h-12 min-w-0 w-full rounded-2xl border border-[rgba(30,34,51,0.14)] bg-white px-4 text-sm font-semibold text-[var(--foreground)] placeholder:text-[#8a91a5]",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-32 min-w-0 w-full resize-y rounded-2xl border border-[rgba(30,34,51,0.14)] bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] placeholder:text-[#8a91a5]",
        className
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-black text-[var(--foreground)]", className)} {...props} />;
}
