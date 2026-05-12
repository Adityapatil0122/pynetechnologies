"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const numeric = Number.parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    if (!Number.isFinite(numeric)) {
      return;
    }
    let frame = 0;
    const total = 42;
    const start = window.requestAnimationFrame(() => setDisplay("0"));
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(`${Math.round(numeric * progress)}${suffix}`);
      if (frame >= total) window.clearInterval(timer);
    }, 24);
    return () => {
      window.cancelAnimationFrame(start);
      window.clearInterval(timer);
    };
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}
