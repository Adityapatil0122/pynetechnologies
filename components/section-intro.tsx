import { Sparkles } from "lucide-react";

export function SectionIntro({
  eyebrow,
  title,
  description,
  center = true,
  headingLevel = "h2"
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="eyebrow">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </span>
      <Heading className="mt-5 text-3xl font-black tracking-normal text-[var(--foreground)] sm:text-4xl lg:text-5xl">{title}</Heading>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  );
}
