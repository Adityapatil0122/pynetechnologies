import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site-data";

const logoSizes = {
  compact: { width: 126, height: 39 },
  header: { width: 176, height: 54 },
  footer: { width: 198, height: 61 }
};

export function SiteLogo({ compact = false, placement = "header" }: { compact?: boolean; placement?: "header" | "footer" }) {
  const size = compact ? logoSizes.compact : logoSizes[placement];

  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-2xl" aria-label={`${brand.name} home`}>
      <Image src="/pyn-logo.svg" alt="" width={size.width} height={size.height} priority />
    </Link>
  );
}
