import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/site-data";

export function FloatingWhatsApp() {
  const text = encodeURIComponent(`Hello ${brand.name}, I am interested in your services.`);

  return (
    <a
      href={`https://wa.me/${brand.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_34px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#18bf57]"
      aria-label="Chat with PYN Technologies on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
