import { cn } from "@/lib/utils";

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
      <span className="eyebrow">{eyebrow}</span>
      <Heading
        className={cn(
          "mt-5 max-w-full break-words text-3xl font-black leading-tight tracking-normal text-[var(--foreground)] [text-wrap:balance] sm:text-4xl lg:text-5xl",
          center && "mx-auto max-w-[22rem] sm:max-w-3xl"
        )}
      >
        {title}
      </Heading>
      <p className={cn("mt-4 max-w-full text-base leading-7 text-[var(--muted)] [text-wrap:pretty] sm:text-lg", center && "mx-auto max-w-[18.5rem] sm:max-w-3xl")}>{description}</p>
    </div>
  );
}
