import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-pyne max-w-2xl text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-5xl font-black">This page wandered off.</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">The link may be old, or the page has not been wired into Pyne yet.</p>
        <Button asChild className="mt-8" variant="pop">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
