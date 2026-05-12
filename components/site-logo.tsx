import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site-data";

export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-2xl" aria-label={`${brand.name} home`}>
      <Image src="/pyne-logo.svg" alt="" width={compact ? 120 : 158} height={compact ? 36 : 48} priority />
    </Link>
  );
}
