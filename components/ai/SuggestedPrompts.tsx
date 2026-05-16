export function SuggestedPrompts({
  prompts,
  onPick,
  disabled
}: {
  prompts: string[];
  onPick: (prompt: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          disabled={disabled}
          onClick={() => onPick(prompt)}
          className="focus-ring rounded-full border border-[rgba(30,34,51,0.12)] bg-white px-3 py-2 text-left text-xs font-black text-[var(--muted)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--foreground)] disabled:pointer-events-none disabled:opacity-50"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
