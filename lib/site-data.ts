import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Palette,
  PenTool,
  PanelsTopLeft,
  Rocket,
  Smartphone,
  Sparkles,
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
  email: "hello@pynetechnologies.com",
  whatsappNumber: "910000000000",
  whatsappLabel: "+91 00000 00000",
  city: "Pune, India",
  tagline: "Web, AI, apps, and brand systems with a little voltage in the presentation."
};

export const aiSolutions: AISolution[] = [
  {
    slug: "chatbots",
    title: "AI-Powered Chatbots",
    description: "Conversation flows that answer fast, qualify leads, and keep the brand voice lively.",
    icon: Bot,
    features: ["Intent mapping", "WhatsApp flows", "Support automation", "Human handoff"]
  },
  {
    slug: "custom-solutions",
    title: "Custom AI Solutions",
    description: "Tailored automation for messy workflows, hidden bottlenecks, and repetitive operations.",
    icon: BrainCircuit,
    features: ["Workflow discovery", "Prototype sprints", "Model selection", "Deployment support"]
  },
  {
    slug: "integration",
    title: "AI Integration & API",
    description: "Plug AI into websites, dashboards, CRMs, and internal tools without rebuilding everything.",
    icon: Workflow,
    features: ["API architecture", "Data pipelines", "Admin dashboards", "Monitoring"]
  },
  {
    slug: "analytics",
    title: "Data Analytics & Insights",
    description: "Turn raw data into bright dashboards, useful signals, and faster decisions.",
    icon: ChartNoAxesCombined,
    features: ["Data cleanup", "Visual reports", "Prediction models", "Growth insights"]
  }
];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    kicker: "Fast sites with flavor",
    description: "Custom websites, eCommerce builds, and WordPress experiences that feel alive without becoming chaotic.",
    icon: Globe2,
    accent: "#00B8FF",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    features: ["Custom web development", "eCommerce storefronts", "WordPress builds", "Performance optimization"],
    outcomes: ["Sharper first impression", "Cleaner conversion paths", "Search-ready foundations"]
  },
  {
    slug: "app-development",
    title: "App Development",
    kicker: "Pocket-sized product energy",
    description: "Mobile and cross-platform apps for teams that need smooth flows, tidy dashboards, and launch-ready builds.",
    icon: Smartphone,
    accent: "#FF6B5F",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    features: ["iOS and Android apps", "Cross-platform delivery", "Product dashboards", "Maintenance plans"],
    outcomes: ["Usable product flows", "Reliable release paths", "Room to scale features"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    kicker: "Campaigns that do not whisper",
    description: "SEO, social campaigns, launch playbooks, and creative direction designed to make attention stick.",
    icon: Megaphone,
    accent: "#FFD84D",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    features: ["SEO strategy", "Social media campaigns", "Paid ad planning", "Analytics reporting"],
    outcomes: ["More qualified traffic", "Stronger campaign rhythm", "Clearer growth signals"]
  },
  {
    slug: "whatsapp-business",
    title: "WhatsApp Business API",
    kicker: "Chats that convert",
    description: "Official WhatsApp setup, green tick guidance, campaign templates, automations, and chatbot flows.",
    icon: MessageCircle,
    accent: "#92FFD0",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    features: ["API setup", "Green tick guidance", "Broadcast flows", "Chatbot journeys"],
    outcomes: ["Faster lead response", "Better support availability", "Lower manual follow-up"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    kicker: "Interfaces with rhythm",
    description: "Research, wireframes, prototypes, and visual systems for products that feel obvious after one tap.",
    icon: PenTool,
    accent: "#C9BBFF",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    features: ["User research", "Wireframing", "Visual design", "Usability testing"],
    outcomes: ["Less user confusion", "Cleaner product hierarchy", "Design system momentum"]
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    kicker: "Brand pieces with snap",
    description: "Logo systems, launch graphics, social creatives, print assets, and campaign visuals that pop in a feed.",
    icon: Palette,
    accent: "#B8FF2C",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    features: ["Brand identity", "Logo design", "Social media graphics", "Print-ready assets"],
    outcomes: ["Recognizable brand assets", "Faster content production", "Consistent visual tone"]
  }
];

export const navGroups: NavGroup[] = [
  {
    title: "AI Solutions",
    items: aiSolutions.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/ai/${item.slug}`
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
  { value: "150+", label: "digital builds imagined and shipped" },
  { value: "96%", label: "average launch checklist completion" },
  { value: "5+", label: "years of team delivery experience" },
  { value: "100+", label: "creative assets designed for campaigns" }
];

export const clients: ClientLogo[] = [
  { name: "FreshCart Studio", industry: "Retail" },
  { name: "BrightLearn Halls", industry: "Education" },
  { name: "PulseClinic", industry: "Healthcare" },
  { name: "QuickPrint", industry: "Print" },
  { name: "MetroNest", industry: "Real Estate" },
  { name: "NovaCafe", industry: "Hospitality" },
  { name: "FinSpark", industry: "Finance" },
  { name: "RouteLoop", industry: "Logistics" }
];

export const processSteps = [
  {
    title: "Spark Scan",
    description: "We map the audience, offer, competitors, and what the site or product must make people do.",
    icon: Sparkles
  },
  {
    title: "Storyboard",
    description: "We shape the page flow, conversion path, interface rhythm, and animation moments before building.",
    icon: PanelsTopLeft
  },
  {
    title: "Build Sprint",
    description: "Design and code move together, with reusable sections and content data instead of brittle one-offs.",
    icon: Code2
  },
  {
    title: "Launch Polish",
    description: "We tune performance, accessibility, responsiveness, SEO metadata, and small interactions.",
    icon: Rocket
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "websites-that-feel-alive",
    title: "Websites That Feel Alive Without Losing the Plot",
    category: "Web Design",
    date: "May 11, 2026",
    readTime: "4 min read",
    excerpt: "A practical guide to using animation, rhythm, and interaction without making visitors work too hard.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A lively website is not a page covered in motion. It is a page where the right things move at the right time, helping visitors understand what matters next.",
      "The best animation gives the interface a pulse. A service card can tilt, a statistic can count up, a hero object can drift, but the content must stay readable and the call to action must stay obvious.",
      "For Pyne, that means light surfaces, confident typography, colorful accents, and motion that supports decisions instead of stealing attention from them."
    ]
  },
  {
    slug: "whatsapp-automation-for-small-teams",
    title: "WhatsApp Automation for Small Teams That Move Fast",
    category: "Automation",
    date: "May 8, 2026",
    readTime: "5 min read",
    excerpt: "How WhatsApp flows can qualify leads, answer common questions, and make follow-up less painful.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "WhatsApp is often where the real buying conversation happens. When the first reply takes too long, the lead cools down.",
      "A strong WhatsApp setup starts with simple flows: welcome message, service selection, qualification questions, and a handoff to a person when the conversation becomes specific.",
      "The goal is not to replace human trust. The goal is to remove repeated typing so the team can spend more energy on the decisions that need judgment."
    ]
  },
  {
    slug: "ai-integration-before-ai-hype",
    title: "AI Integration Before AI Hype",
    category: "AI",
    date: "May 4, 2026",
    readTime: "6 min read",
    excerpt: "The smartest AI projects begin with workflow clarity, not model shopping.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "AI works best when it is attached to a real workflow. Before choosing a model, teams should ask which task is repeated, slow, error-prone, or hard to scale.",
      "A useful first version might summarize leads, classify support requests, draft replies, or generate internal reports from structured data.",
      "Once the workflow is clear, the technical choices become much easier: data source, API boundary, approval path, dashboard, and monitoring."
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
  { label: "AI", icon: WandSparkles },
  { label: "Web", icon: LayoutDashboard },
  { label: "Apps", icon: Smartphone },
  { label: "Brand", icon: Palette },
  { label: "Learning tools", icon: GraduationCap }
];
