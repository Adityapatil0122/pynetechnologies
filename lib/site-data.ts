import {
  BriefcaseBusiness,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Coffee,
  Globe2,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Palette,
  PenTool,
  PanelsTopLeft,
  Printer,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  WandSparkles,
  Workflow
} from "lucide-react";
import type {
  AISolution,
  BlogPost,
  ClientLogo,
  LegalPage,
  NavGroup,
  Service,
  StatItem
} from "@/lib/types";

export const brand = {
  name: "Pyne Technologies",
  shortName: "Pyne",
  url: "https://pynetechnologies.com",
  email: "hello@pynetechnologies.com",
  whatsappNumber: "919960756292",
  whatsappLabel: "+91 99607 56292",
  city: "Satara",
  tagline: "Websites, apps, automation, marketing, and design for growing businesses."
};

export const aiSolutions: AISolution[] = [
  {
    slug: "chatbots",
    title: "Smart Chatbots",
    description: "Chatbots that answer common questions, qualify leads, and hand over to your team when needed.",
    icon: Bot,
    features: ["Intent mapping", "WhatsApp flows", "Support automation", "Human handoff"]
  },
  {
    slug: "custom-solutions",
    title: "Workflow Automation",
    description: "Custom automation for repeated tasks, slow approvals, and daily operations that need less manual work.",
    icon: BrainCircuit,
    features: ["Workflow discovery", "Prototype sprints", "Tool selection", "Deployment support"]
  },
  {
    slug: "integration",
    title: "API Integrations",
    description: "Connect websites, dashboards, CRMs, and internal tools so data moves without repeated copy-paste.",
    icon: Workflow,
    features: ["API architecture", "Data pipelines", "Admin dashboards", "Monitoring"]
  },
  {
    slug: "analytics",
    title: "Data Analytics & Insights",
    description: "Turn raw data into clear dashboards, useful reports, and better business decisions.",
    icon: ChartNoAxesCombined,
    features: ["Data cleanup", "Visual reports", "Prediction models", "Growth insights"]
  }
];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    kicker: "Fast, clear websites",
    description: "Custom websites, eCommerce stores, and WordPress sites that load quickly and explain your business clearly.",
    icon: Globe2,
    accent: "#00B8FF",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    features: ["Custom web development", "eCommerce storefronts", "WordPress builds", "Performance optimization"],
    outcomes: ["Stronger first impression", "Clearer conversion paths", "Search-ready pages"]
  },
  {
    slug: "app-development",
    title: "App Development",
    kicker: "Mobile apps that feel easy",
    description: "Mobile and cross-platform apps for teams that need simple flows, clear dashboards, and reliable launch support.",
    icon: Smartphone,
    accent: "#FF6B5F",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    features: ["iOS and Android apps", "Cross-platform delivery", "Product dashboards", "Maintenance plans"],
    outcomes: ["Easy product flows", "Reliable release process", "Room to add new features"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    kicker: "Campaigns with a clear plan",
    description: "SEO, social media campaigns, paid ads, and launch plans that help the right people find you.",
    icon: Megaphone,
    accent: "#FFD84D",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    features: ["SEO strategy", "Social media campaigns", "Paid ad planning", "Analytics reporting"],
    outcomes: ["More qualified traffic", "Regular campaign activity", "Clearer growth reports"]
  },
  {
    slug: "whatsapp-business",
    title: "WhatsApp Business API",
    kicker: "Better customer chats",
    description: "Official WhatsApp setup, green tick guidance, campaign templates, automation, and chatbot flows.",
    icon: MessageCircle,
    accent: "#92FFD0",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    features: ["API setup", "Green tick guidance", "Broadcast flows", "Chatbot journeys"],
    outcomes: ["Faster lead response", "Better support availability", "Lower manual follow-up"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    kicker: "Simple product screens",
    description: "Research, wireframes, prototypes, and visual design for products that feel easy to use.",
    icon: PenTool,
    accent: "#C9BBFF",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    features: ["User research", "Wireframing", "Visual design", "Usability testing"],
    outcomes: ["Less user confusion", "Clearer product structure", "Reusable design patterns"]
  },
  {
    slug: "graphics-designing",
    title: "Graphic Design",
    kicker: "Brand visuals that stay consistent",
    description: "Logo systems, launch graphics, social media creatives, print assets, and campaign visuals for your brand.",
    icon: Palette,
    accent: "#B8FF2C",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    features: ["Brand identity", "Logo design", "Social media graphics", "Print-ready assets"],
    outcomes: ["Recognizable brand assets", "Faster content production", "Consistent visual style"]
  }
];

export const navGroups: NavGroup[] = [
  {
    title: "Automation",
    items: aiSolutions.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/automation/${item.slug}`
    }))
  },
  {
    title: "Web Services",
    items: services.map((service) => ({
      title: service.title,
      description: service.kicker,
      href: `/services/${service.slug}`
    }))
  },
  {
    title: "Products",
    items: [
      {
        title: "Study Room Management App",
        description: "For Abhyasika and study halls. Coming soon.",
        href: "/products/study-room"
      }
    ]
  }
];

export const stats: StatItem[] = [
  { value: "150+", label: "digital projects planned and delivered" },
  { value: "96%", label: "average launch checklist completion" },
  { value: "5+", label: "years of team delivery experience" },
  { value: "100+", label: "creative assets made for campaigns" }
];

export const clients: ClientLogo[] = [
  { name: "FreshCart Studio", industry: "Retail", useCase: "Online store and campaign support", icon: ShoppingBag, accent: "#B8FF2C" },
  { name: "BrightLearn Halls", industry: "Education", useCase: "Study hall and student management tools", icon: GraduationCap, accent: "#00B8FF" },
  { name: "PulseClinic", industry: "Healthcare", useCase: "Appointment and patient inquiry flows", icon: HeartPulse, accent: "#FF6B5F" },
  { name: "QuickPrint", industry: "Print", useCase: "Order forms and local search visibility", icon: Printer, accent: "#FFD84D" },
  { name: "MetroNest", industry: "Real Estate", useCase: "Lead capture and property landing pages", icon: Building2, accent: "#C9BBFF" },
  { name: "NovaCafe", industry: "Hospitality", useCase: "Menu pages, offers, and WhatsApp orders", icon: Coffee, accent: "#92FFD0" },
  { name: "RouteLoop", industry: "Logistics", useCase: "Tracking dashboards and workflow reports", icon: Truck, accent: "#00B8FF" },
  { name: "CraftDesk", industry: "Services", useCase: "Service pages and quote requests", icon: BriefcaseBusiness, accent: "#FF6B5F" }
];

export const processSteps = [
  {
    title: "Discovery",
    description: "We understand your audience, offer, competitors, and the action each visitor should take.",
    icon: Sparkles
  },
  {
    title: "Plan",
    description: "We shape the page flow, user journey, content, and key screens before the build starts.",
    icon: PanelsTopLeft
  },
  {
    title: "Build",
    description: "Design and code move together, with reusable sections and clean content data.",
    icon: Code2
  },
  {
    title: "Launch",
    description: "We check speed, mobile layout, accessibility, SEO metadata, and small interactions before launch.",
    icon: Rocket
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "websites-that-feel-alive",
    title: "Websites That Feel Clear and Modern",
    category: "Web Design",
    date: "May 11, 2026",
    readTime: "4 min read",
    excerpt: "A simple guide to using motion and interaction without making visitors work too hard.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A modern website does not need motion everywhere. It needs the right details to move at the right time so visitors understand what matters next.",
      "Good animation should make the page feel smooth and clear. A card can lift, a number can count up, or a button can respond, but the content must stay easy to read.",
      "For Pyne, that means clean layouts, clear writing, strong color, and motion that helps people decide what to do next."
    ]
  },
  {
    slug: "whatsapp-automation-for-small-teams",
    title: "WhatsApp Automation for Small Teams",
    category: "Automation",
    date: "May 8, 2026",
    readTime: "5 min read",
    excerpt: "How WhatsApp flows can qualify leads, answer common questions, and reduce manual follow-up.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "WhatsApp is often where the real buying conversation happens. When the first reply takes too long, the lead can lose interest.",
      "A strong WhatsApp setup starts with simple flows: welcome message, service selection, qualification questions, and a handoff to a person when the conversation becomes specific.",
      "The goal is not to replace people. The goal is to reduce repeated typing so the team can spend more time on work that needs judgment."
    ]
  },
  {
    slug: "automation-before-hype",
    title: "Start Automation with a Clear Workflow",
    category: "Automation",
    date: "May 4, 2026",
    readTime: "6 min read",
    excerpt: "The best automation projects start with a clear workflow, not a long list of tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Automation works best when it is attached to a real workflow. Before choosing a tool, teams should ask which task is repeated, slow, error-prone, or hard to scale.",
      "A useful first version might summarize leads, classify support requests, draft replies, or generate internal reports from structured data.",
      "Once the workflow is clear, the technical choices become easier: data source, approval path, dashboard, and monitoring."
    ]
  }
];

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "May 11, 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Pyne Technologies collects contact details submitted through forms, including name, email, phone number, selected interest, and message content."
        ]
      },
      {
        heading: "How we use it",
        body: [
          "We use submitted information to respond to inquiries, understand project requirements, and improve our services. We do not sell visitor data."
        ]
      },
      {
        heading: "Contact",
        body: [`For privacy questions, contact ${brand.email}.`]
      }
    ]
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    updated: "May 11, 2026",
    sections: [
      {
        heading: "Cookie use",
        body: [
          "This site may use essential cookies for basic functionality and optional analytics cookies after user consent."
        ]
      },
      {
        heading: "Control",
        body: ["Visitors can disable cookies in their browser settings. Some site features may become less convenient."]
      }
    ]
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    updated: "May 11, 2026",
    sections: [
      {
        heading: "Website use",
        body: ["The content on this website is provided for general information about Pyne Technologies services."]
      },
      {
        heading: "Project engagements",
        body: [
          "Any paid work, deliverables, timelines, and responsibilities should be confirmed in a written proposal or agreement."
        ]
      }
    ]
  }
];

export const heroHighlights = [
  { label: "Automation", icon: WandSparkles },
  { label: "Web", icon: LayoutDashboard },
  { label: "Apps", icon: Smartphone },
  { label: "Brand", icon: Palette },
  { label: "Learning tools", icon: GraduationCap }
];
