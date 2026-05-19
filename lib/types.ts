import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  description?: string;
  href: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
  features: string[];
  outcomes: string[];
};

export type AISolution = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
};

export type ClientLogo = {
  name: string;
  industry: string;
  useCase: string;
  icon: LucideIcon;
  accent: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type LegalPage = {
  slug: string;
  title: string;
  updated: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};
