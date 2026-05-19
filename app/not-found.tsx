import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-y">
      <Reveal className="container-pyne max-w-2xl text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-4xl font-black sm:text-5xl">This page is not available.</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">The link may be old, or the page may have moved.</p>
        <Button asChild className="mt-8" variant="pop">
          <Link href="/">Back home</Link>
        </Button>
      </Reveal>
    </section>
  );
}
