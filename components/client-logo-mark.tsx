import type { SVGProps } from "react";
import type { ClientLogo } from "@/lib/types";

type ClientLogoMarkProps = SVGProps<SVGSVGElement> & {
  mark: ClientLogo["mark"];
};

export function ClientLogoMark({ mark, ...props }: ClientLogoMarkProps) {
  const shared = {
    viewBox: "0 0 260 90",
    role: "img",
    ...props
  };

  switch (mark) {
    case "gromax":
      return (
        <svg {...shared} aria-label="Gromax logo">
          <text x="22" y="48" fill="#5E89A9" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="800">Gromax</text>
          <text x="24" y="66" fill="#8AA1B2" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.6">AGRI EQUIPMENT LIMITED</text>
        </svg>
      );
    case "insurance-majha":
      return (
        <svg {...shared} aria-label="Insurance Majha logo">
          <path d="M30 21l23-9 23 9v17c0 18-9 29-23 37-14-8-23-19-23-37V21z" fill="#45D88D" />
          <path d="M48 45l8 8 16-20" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="88" y="44" fill="#20283D" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="850">Insurance</text>
          <text x="88" y="65" fill="#25B970" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="850">Majha</text>
        </svg>
      );
    case "socializer":
      return (
        <svg {...shared} aria-label="Socializer logo">
          <text x="38" y="55" fill="#20283D" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="850">Socializer</text>
          <rect x="176" y="19" width="39" height="17" rx="8" fill="#FF4B57" />
          <text x="184" y="31" fill="#fff" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="800">Media</text>
        </svg>
      );
    case "spyra-exim":
      return (
        <svg {...shared} aria-label="Spyra Exim logo">
          <circle cx="43" cy="45" r="18" fill="none" stroke="#6C9184" strokeWidth="5" />
          <path d="M25 45h36M43 27c7 8 10 28 0 36M43 27c-7 8-10 28 0 36" stroke="#6C9184" strokeWidth="3" fill="none" strokeLinecap="round" />
          <text x="75" y="53" fill="#4D5D62" fontFamily="Arial, sans-serif" fontSize="27" fontWeight="800">Spyra Exim</text>
        </svg>
      );
    case "technomania":
      return (
        <svg {...shared} aria-label="Technomania Energy LLP logo">
          <path d="M28 59l22-39h31L67 43h28L72 76H39l16-17H28z" fill="#315D9B" />
          <path d="M61 20h32L72 50H42l19-30z" fill="#8AC63F" opacity="0.92" />
          <text x="103" y="38" fill="#78B93E" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="900">TECHNOMANIA</text>
          <text x="103" y="56" fill="#4A6D94" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="900" letterSpacing="2">ENERGY LLP</text>
        </svg>
      );
    case "rightspot":
      return (
        <svg {...shared} aria-label="Rightspot logo">
          <path d="M44 18c12 0 22 10 22 22 0 17-22 36-22 36S22 57 22 40c0-12 10-22 22-22z" fill="#FF894D" />
          <circle cx="44" cy="40" r="8" fill="#fff" />
          <text x="80" y="54" fill="#315FA8" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="850">Rightspot</text>
        </svg>
      );
    case "ai-vendor":
      return (
        <svg {...shared} aria-label="A and I Vendor logo">
          <path d="M26 61l25-41 21 41H58l-7-13-8 13H26z" fill="#FF5C5C" />
          <path d="M70 61l25-41 21 41h-15l-6-12-8 12H70z" fill="#38D19D" />
          <text x="123" y="49" fill="#151923" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900">A&amp;I VENDOR</text>
          <text x="124" y="64" fill="#151923" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700">Vendor for Architecture And Interior Designers</text>
        </svg>
      );
    case "tested-ok":
      return (
        <svg {...shared} aria-label="Tested OK logo">
          <circle cx="48" cy="45" r="25" fill="#1F7CCF" />
          <circle cx="48" cy="45" r="17" fill="#fff" />
          <path d="M38 45l7 7 14-17" fill="none" stroke="#31B765" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <text x="84" y="54" fill="#2D73C9" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="900">TESTED OK</text>
        </svg>
      );
  }
}
