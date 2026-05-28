import {
  BookOpenCheck,
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
  Printer,
  Rocket,
  ShieldCheck,
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
  Product,
  Service,
  StatItem
} from "@/lib/types";

export const brand = {
  name: "PYN Technologies",
  shortName: "PYN",
  url: "https://pyntechnologies.com",
  email: "hello@pyntechnologies.com",
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
    image: "/services/website-development.jpg",
    imagePosition: "center 48%",
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
    image: "/services/app-development.jpg",
    imagePosition: "center 50%",
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
    image: "/services/digital-marketing.jpg",
    imagePosition: "center 50%",
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
    image: "/services/whatsapp-business.jpg",
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
    image: "/services/ui-ux-design.jpg",
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
    image: "/services/graphics-designing.jpg",
    features: ["Brand identity", "Logo design", "Social media graphics", "Print-ready assets"],
    outcomes: ["Recognizable brand assets", "Faster content production", "Consistent visual style"]
  }
];

export const products: Product[] = [
  {
    slug: "study-room",
    title: "Study Room Management App",
    label: "Education operations",
    description: "Seat tracking, fees, renewals, student records, and reminders for Abhyasika and study halls.",
    icon: GraduationCap,
    accent: "#B8FF2C",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    href: "/products/study-room",
    features: ["Seat planning", "Student records", "Fee reminders", "Admin dashboard"]
  },
  {
    slug: "itroots-lms",
    title: "ITROOTS LMS System",
    label: "Learning platform",
    description: "A learning system for course delivery, student access, training progress, and institute learning workflows.",
    icon: BookOpenCheck,
    accent: "#00B8FF",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://lms.itroots.co.in",
    features: ["Student learning portal", "Course access", "Progress tracking", "Training workflow"]
  },
  {
    slug: "itroots-cms",
    title: "ITROOTS Website + CMS",
    label: "Public website",
    description: "A public training website with course pages, counselling lead flow, placements, blogs, and content control.",
    icon: Globe2,
    accent: "#FFD84D",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://itroots.co.in",
    features: ["Course pages", "Lead forms", "Placement content", "CMS updates"]
  },
  {
    slug: "whatsapp-business-suite",
    title: "WhatsApp Business Suite",
    label: "Customer conversations",
    description: "A WhatsApp-focused product for business chats, lead handling, campaigns, and simple customer follow-up.",
    icon: MessageCircle,
    accent: "#92FFD0",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://whatsapp.itroots.co.in",
    features: ["Business chat inbox", "Lead follow-up", "Campaign support", "Customer updates"]
  },
  {
    slug: "insurance-majha",
    title: "Insurance Majha",
    label: "Insurance content",
    description: "A Marathi insurance platform that explains car insurance, add-on covers, IDV, NCB, and roadside help in simple terms.",
    icon: ShieldCheck,
    accent: "#C9BBFF",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://insurancemajha.com/car-insurance/",
    features: ["Car insurance content", "Cover explanations", "Marathi pages", "Policy education"]
  },
  {
    slug: "quick-prints",
    title: "Quick Prints",
    label: "Printing ecommerce",
    description: "An ecommerce website for custom printing, built to help users browse print products and place orders online.",
    icon: Printer,
    accent: "#FF6B5F",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://quickprinttechnology.in/",
    features: ["Print product catalog", "Online ordering", "Custom print flow", "Ecommerce experience"]
  }
];

const aiSolutionAccents = ["#00B8FF", "#8C6BFF", "#FF6B5F", "#58C900"] as const;

export const navGroups: NavGroup[] = [
  {
    title: "AI Solutions",
    href: "/automation",
    items: aiSolutions.map((item, index) => ({
      title: item.title,
      description: item.description,
      href: `/automation/${item.slug}`,
      icon: item.icon,
      accent: aiSolutionAccents[index % aiSolutionAccents.length]
    }))
  },
  {
    title: "Web Services",
    href: "/services",
    items: services.map((service) => ({
      title: service.title,
      description: service.kicker,
      href: `/services/${service.slug}`,
      icon: service.icon,
      accent: service.accent
    }))
  },
  {
    title: "Products",
    href: "/products",
    items: products.map((product) => ({
      title: product.title,
      description: product.label,
      href: product.href ?? product.liveUrl ?? "/products",
      icon: product.icon,
      accent: product.accent
    }))
  }
];

export const stats: StatItem[] = [
  { value: "150+", label: "digital projects planned and delivered" },
  { value: "96%", label: "average launch checklist completion" },
  { value: "5+", label: "years of team delivery experience" },
  { value: "100+", label: "creative assets made for campaigns" }
];

const finlecLogoBase = "https://finlectechnologies.com";

export const clients: ClientLogo[] = [
  {
    name: "Rightspot",
    logo: `${finlecLogoBase}/lovable-uploads/309c1f97-c237-4e54-85a9-a263116f0227.png`,
    accent: "#FF894D"
  },
  {
    name: "Media",
    logo: `${finlecLogoBase}/lovable-uploads/06971542-6afe-4a98-84bc-7d6198ab1c34.png`,
    accent: "#FF5757"
  },
  {
    name: "Majha",
    logo: `${finlecLogoBase}/lovable-uploads/f604ee91-7a5f-46ba-8369-842cd70b9beb.png`,
    accent: "#42D68B"
  },
  {
    name: "Alpha Trekkers",
    logo: `${finlecLogoBase}/lovable-uploads/b2e726d7-25ff-4c7f-82b3-8b3ae78603d7.png`,
    accent: "#00B8FF"
  },
  {
    name: "IAS",
    logo: `${finlecLogoBase}/lovable-uploads/d94c437d-5e32-4000-b493-48db76990a91.png`,
    accent: "#C9BBFF"
  },
  {
    name: "Spyra Exim",
    logo: `${finlecLogoBase}/lovable-uploads/099a6f11-12c3-4cdd-a738-e0a638ecec40.png`,
    accent: "#6C9184"
  },
  {
    name: "Shivraj",
    logo: `${finlecLogoBase}/lovable-uploads/dee93a32-4bbc-4572-a51e-c37bd9e75b19.png`,
    accent: "#FFD84D"
  },
  {
    name: "Tested OK",
    logo: `${finlecLogoBase}/lovable-uploads/99dc411c-69f1-4d9e-b5bf-355d03eebd46.png`,
    accent: "#1F7CCF",
    className: "max-h-12"
  },
  {
    name: "Guru Properties",
    logo: `${finlecLogoBase}/lovable-uploads/7d73450c-a8dd-4511-867c-bd46589f4fe7.png`,
    accent: "#8C6BFF"
  },
  {
    name: "Digital",
    logo: `${finlecLogoBase}/lovable-uploads/d46ddff1-ee6c-46d6-a7dc-359466a6afac.png`,
    accent: "#58C900"
  },
  {
    name: "Quick Print",
    logo: `${finlecLogoBase}/lovable-uploads/a5a80f12-374c-443e-9d9f-fa65ac91c5bb.png`,
    accent: "#FF6B5F"
  },
  {
    name: "AM",
    logo: `${finlecLogoBase}/lovable-uploads/70cbdf37-3166-46da-a5f0-38588750a1a2.png`,
    accent: "#00B8FF"
  },
  {
    name: "Launchpadd",
    logo: `${finlecLogoBase}/lovable-uploads/cd58c925-57fd-4ac0-beed-31e936b81997.png`,
    accent: "#B8FF2C"
  },
  {
    name: "Technomania",
    logo: `${finlecLogoBase}/lovable-uploads/15837858-39ee-48c3-a5a5-34da64b033fa.png`,
    accent: "#8AC63F"
  },
  {
    name: "Gromax",
    logo: `${finlecLogoBase}/lovable-uploads/dba395d3-577f-4c45-b6f6-9f759b542a64.png`,
    accent: "#6EA0C7"
  }
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

const blogPostLibrary: BlogPost[] = [
  {
    slug: "responsive-design-principles-modern-websites",
    title: "Responsive Design Principles for Modern Websites",
    category: "Website Development",
    author: "PYN Team",
    date: "May 21, 2026",
    readTime: "7 min read",
    excerpt: "Discover the essential principles of responsive web design that make a website shine across mobile phones, tablets, laptops, and desktop computers.",
    image: `${finlecLogoBase}/lovable-uploads/responsive%20design.png`,
    tags: ["Web Design", "Mobile First", "Accessibility"],
    content: [
      "Responsive web design has become the standard approach for building modern websites. With the increasing variety of devices used to access the internet, creating websites that adapt seamlessly to different screen sizes is no longer optional. It is essential.",
      "The foundation of responsive design lies in fluid grids and flexible layouts. Instead of fixed-width designs, responsive websites use relative units like percentages so content can flow and resize based on viewport dimensions.",
      "Media queries are the backbone of responsive development. These CSS rules let teams apply different styles based on device characteristics, mainly screen width, so the layout can transform across phones, tablets, desktops, and everything in between.",
      "Mobile-first design starts with the smallest screens first, then progressively enhances the experience for larger devices. Beginning with mobile constraints forces teams to prioritize content and functionality clearly.",
      "Performance optimization plays a crucial role in responsive design. Mobile users often face bandwidth limitations, so image optimization, lazy loading, and fewer HTTP requests become vital.",
      "Testing across multiple devices is non-negotiable in responsive development. Browser developer tools help, but testing on real devices reveals rendering, touch, and operating system differences.",
      "Accessibility should be integrated throughout the responsive design process. Touch-friendly navigation, readable text sizes, and strong contrast ratios help websites remain usable for people with diverse abilities.",
      "The future of responsive design is evolving with CSS Grid, Flexbox, and container queries. These tools make it possible to build interfaces that respond to content, not just viewport dimensions."
    ]
  },
  {
    slug: "website-speed-user-experience-seo",
    title: "The Impact of Website Speed on User Experience and SEO",
    category: "Website Development",
    author: "PYN Team",
    date: "May 19, 2026",
    readTime: "8 min read",
    excerpt: "Learn why website speed matters for both user satisfaction and search engine ranking, plus actionable techniques to improve site performance.",
    image: `${finlecLogoBase}/lovable-uploads/Impact%20design.png`,
    tags: ["SEO", "Performance", "Core Web Vitals"],
    content: [
      "Website speed has become a critical factor in the success of any online presence. Users expect near-instant loading times, and search engines increasingly prioritize performance when determining rankings.",
      "The statistics are direct: Google has reported that 53% of mobile users abandon sites that take longer than three seconds to load. Even small delays can reduce conversions and engagement.",
      "Search engines have incorporated page speed into ranking systems. Core Web Vitals made performance a formal SEO consideration because fast pages usually create better user experiences.",
      "Measuring website performance requires understanding metrics like First Contentful Paint, Largest Contentful Paint, and Time to Interactive. Each metric reveals a different part of the loading experience.",
      "Image optimization is one of the most effective ways to improve load time. Proper sizing, WebP formats, lazy loading, and responsive images reduce payload without sacrificing visual quality.",
      "Server response time is another important piece. Better hosting, caching, and content delivery networks reduce Time to First Byte and improve the overall feel of the site.",
      "JavaScript and CSS optimization also matter. Minifying resources, removing render-blocking code, and delivering critical CSS help important content appear sooner.",
      "Regular performance audits should become part of website maintenance. Tools like PageSpeed Insights, GTmetrix, and WebPageTest help teams spot bottlenecks and keep improving."
    ]
  },
  {
    slug: "essential-ecommerce-website-features",
    title: "Essential Features for E-commerce Websites in 2024",
    category: "Website Development",
    author: "PYN Team",
    date: "May 17, 2026",
    readTime: "7 min read",
    excerpt: "Stay ahead with must-have features for modern e-commerce websites that improve conversions and enhance customer experience.",
    image: `${finlecLogoBase}/lovable-uploads/Essential%20Design.png`,
    tags: ["E-commerce", "Conversion", "Websites"],
    content: [
      "The e-commerce landscape continues to evolve rapidly, with customer expectations rising every year. Some website features have moved from being competitive advantages to essential requirements.",
      "Advanced search now extends beyond basic keyword matching. Shoppers expect autocomplete suggestions, product attribute filters, and visual discovery tools that make product finding faster.",
      "Personalization is a core part of successful e-commerce experiences. Product recommendations, personalized offers, and tailored browsing journeys can increase conversion rates and order values.",
      "Mobile optimization is non-negotiable because mobile commerce drives a major share of online sales. Small-screen checkout, touch-friendly navigation, and mobile payments are now expected.",
      "Checkout optimization remains one of the most powerful ways to reduce cart abandonment. Guest checkout, one-click purchasing, progress indicators, and address autocomplete reduce friction.",
      "Augmented reality features have become useful in categories like furniture, cosmetics, and eyewear, where customers want to preview products before purchase.",
      "Sustainability information is increasingly important to buyers. Modern stores highlight eco-friendly product attributes, responsible shipping options, and brand commitments.",
      "Omnichannel capabilities connect online and physical retail. Real-time inventory, buy-online-pickup-in-store, and unified customer accounts create a more complete shopping experience."
    ]
  },
  {
    slug: "native-vs-cross-platform-mobile-app-development",
    title: "Native vs. Cross-Platform Mobile App Development: Making the Right Choice",
    category: "App Development",
    author: "PYN Team",
    date: "May 15, 2026",
    readTime: "8 min read",
    excerpt: "Navigate the decision between native and cross-platform development approaches for your next mobile application project.",
    image: `${finlecLogoBase}/lovable-uploads/Nativ%20vs%20cross.png`,
    tags: ["Mobile Apps", "React Native", "Flutter"],
    content: [
      "When starting a mobile app project, one of the first major decisions is choosing between native and cross-platform development. This choice affects timeline, cost, performance, and user experience.",
      "Native app development means building specifically for one platform using official languages and tools. iOS apps commonly use Swift with Xcode, while Android apps use Kotlin or Java with Android Studio.",
      "Cross-platform frameworks like React Native, Flutter, and Xamarin allow teams to write one codebase and deploy across multiple platforms. These frameworks have improved significantly over the last few years.",
      "Performance considerations often drive the decision. Graphically intensive apps, advanced animations, and heavy device hardware usage may benefit from native development.",
      "Development efficiency often favors cross-platform work. A shared codebase can reduce duplicated effort, shorten release cycles, and make maintenance easier for small teams.",
      "User experience consistency is more complex. Native apps can follow platform guidelines closely, while cross-platform apps need careful design to feel natural on both iOS and Android.",
      "Team expertise matters. A team with strong web and JavaScript skills may move quickly with React Native, while teams with Swift and Kotlin experience may prefer native builds.",
      "Long-term maintenance should be considered early. Native apps require separate updates per platform, while cross-platform apps may wait for framework support when new platform APIs are released."
    ]
  },
  {
    slug: "offline-first-mobile-applications",
    title: "Building Offline-First Mobile Applications for Reliable User Experiences",
    category: "App Development",
    author: "PYN Team",
    date: "May 13, 2026",
    readTime: "7 min read",
    excerpt: "Learn how to design and develop applications that function smoothly even when network connectivity is unreliable or unavailable.",
    image: `${finlecLogoBase}/lovable-uploads/building%20Offline.png`,
    tags: ["Offline First", "Mobile Apps", "Reliability"],
    content: [
      "Connectivity is still inconsistent for many mobile users. People experience weak networks in rural areas, underground transport, elevators, and busy public places.",
      "Offline-first development treats offline operation as the default state instead of an exception. Online connectivity becomes an enhancement rather than a requirement for core use.",
      "Local data storage is the foundation of offline-first apps. Options include SQLite, Realm, file-based storage, and key-value stores, depending on data complexity.",
      "Synchronization is the hardest part. Teams must decide how to handle conflicts when local changes and server changes disagree after the device reconnects.",
      "The user interface should communicate offline status clearly without interrupting the flow. Users should understand what is available now and what will sync later.",
      "Background synchronization capabilities are stronger than ever. Mobile systems can schedule sync work when connectivity returns, even if the app is not actively open.",
      "Testing offline functionality requires deliberate scenarios. Teams should simulate slow connections, intermittent networks, complete offline states, and sync conflict cases.",
      "The business value is practical. Apps that work reliably in difficult network conditions often see better engagement, retention, and reviews."
    ]
  },
  {
    slug: "content-marketing-organic-traffic-growth",
    title: "Content Marketing Strategies That Drive Organic Traffic Growth",
    category: "Digital Marketing",
    author: "PYN Team",
    date: "May 11, 2026",
    readTime: "8 min read",
    excerpt: "Discover proven content marketing approaches that attract qualified visitors and position your brand as an industry authority.",
    image: `${finlecLogoBase}/lovable-uploads/content%20marketing.png`,
    tags: ["Content Marketing", "SEO", "Organic Growth"],
    content: [
      "Content marketing continues to be one of the most effective ways to generate sustainable organic traffic. Unlike paid ads, useful content can keep attracting visitors over time.",
      "Understanding search intent is the foundation of a strong strategy. Content should answer what users are trying to accomplish, not just include a target keyword.",
      "Comprehensive content often performs better than short, generic posts. Useful pillar pages answer related questions and help a brand build topical authority.",
      "Topic clusters organize content into connected networks. A pillar page supported by focused subtopic articles helps users and search engines understand subject depth.",
      "Visual elements are no longer optional. Relevant images, charts, infographics, and videos can improve comprehension, engagement, and shareability.",
      "Content repurposing increases return on research. A single idea can become a blog post, short video, carousel, email, and sales enablement resource.",
      "Updating existing content often produces faster gains than publishing new posts. Refreshing outdated data, improving readability, and expanding coverage can revive performance.",
      "Measurement should go beyond traffic. Strong teams track how content visitors become subscribers, leads, sales conversations, and customers."
    ]
  },
  {
    slug: "social-media-advertising-roi",
    title: "Social Media Advertising: Maximizing ROI Across Platforms",
    category: "Digital Marketing",
    author: "PYN Team",
    date: "May 9, 2026",
    readTime: "7 min read",
    excerpt: "Learn how to optimize social media advertising budgets through platform-specific strategies and advanced targeting.",
    image: `${finlecLogoBase}/lovable-uploads/social%20media.png`,
    tags: ["Social Ads", "Performance Marketing", "ROI"],
    content: [
      "Social media advertising has become a sophisticated ecosystem where success depends on platform strategy, precise targeting, and continuous optimization.",
      "Platform selection should follow audience behavior rather than popularity. Each network attracts different users and supports different engagement patterns.",
      "Creative strategy must match the platform. Ads that feel native to the environment usually perform better than messages copied unchanged across every channel.",
      "Audience targeting now goes beyond demographics. Interests, behaviors, life events, custom audiences, and lookalike audiences can all improve relevance.",
      "Retargeting helps brands convert people who already showed interest. Segmenting by page views, cart activity, or product category makes follow-up more useful.",
      "Testing separates strong advertisers from average ones. Creative variations, audience segments, placements, and bidding strategies should be tested systematically.",
      "Attribution needs care because each platform tends to emphasize its own contribution. Cross-platform reporting gives a more balanced view of the customer journey.",
      "Automation and AI have changed campaign management. Machine learning can optimize delivery and predict likely converters, but strategy and creative judgment still matter."
    ]
  },
  {
    slug: "user-centered-design-intuitive-interfaces",
    title: "User-Centered Design: Principles for Creating Intuitive Interfaces",
    category: "UI/UX Design",
    author: "PYN Team",
    date: "May 7, 2026",
    readTime: "7 min read",
    excerpt: "Explore user-centered design principles and how they help teams create more intuitive, satisfying digital experiences.",
    image: `${finlecLogoBase}/lovable-uploads/user%20centered.png`,
    tags: ["UI/UX", "Product Design", "Usability"],
    content: [
      "User-centered design puts human needs at the center of the development process. It focuses on products that match users' mental models, capabilities, and expectations.",
      "User research is the foundation. Interviews, surveys, contextual inquiry, and analytics help teams understand what people need and where they struggle.",
      "Empathy maps and personas turn research into practical design references. They help teams evaluate solutions from the user's perspective instead of internal assumptions.",
      "Information architecture creates the structural foundation for intuitive interfaces. Content and features should be organized in ways that match how users think.",
      "Interaction design patterns reduce cognitive load by using familiar conventions. Innovation should be introduced carefully where it genuinely improves the experience.",
      "Accessibility is part of good user-centered design. Strong contrast, clear navigation, simple language, and screen-reader support make interfaces better for everyone.",
      "Usability testing identifies issues before they become expensive. Low-fidelity tests validate concepts, while higher-fidelity tests refine details and flows.",
      "The best products evolve through iteration. Feedback and behavioral data help teams refine experiences while preserving the consistency users rely on."
    ]
  },
  {
    slug: "conversational-ai-customer-service",
    title: "Implementing Conversational AI for Enhanced Customer Service",
    category: "AI Chatbots",
    author: "PYN Team",
    date: "May 5, 2026",
    readTime: "8 min read",
    excerpt: "Learn how businesses use conversational AI to improve customer service quality while reducing operational costs.",
    image: `${finlecLogoBase}/lovable-uploads/implementing%20ai.png`,
    tags: ["AI Chatbots", "Customer Service", "Automation"],
    content: [
      "Conversational AI combines natural language processing, machine learning, and automated messaging to create more helpful digital service interactions.",
      "The business case usually centers on efficiency and experience. Well-designed systems can handle many routine questions while support teams focus on complex issues.",
      "Natural language understanding helps systems interpret intent beyond keywords. This lets customers communicate naturally instead of guessing exact phrases.",
      "Personality design affects brand perception. Tone, vocabulary, and conversational style should match the brand while making the AI identity clear.",
      "Back-end integrations make chatbots truly useful. Connected systems can check orders, schedule appointments, process requests, and complete service workflows.",
      "Escalation protocols protect the experience. When an AI cannot handle an issue, it should transfer smoothly to a human with useful conversation context.",
      "Continuous improvement comes from reviewing logs, resolution rates, feedback, and unanswered questions. This data helps teams expand and refine the assistant.",
      "Ethical considerations are important. Clear data policies, transparency, user consent, and realistic limits help conversational AI remain trustworthy."
    ]
  },
  {
    slug: "ai-data-analytics-business-intelligence",
    title: "Data Analytics: Transforming Business Intelligence with AI",
    category: "Data Analytics",
    author: "PYN Team",
    date: "May 3, 2026",
    readTime: "8 min read",
    excerpt: "Discover how AI-powered analytics tools are changing how businesses extract insights from their data assets.",
    image: `${finlecLogoBase}/lovable-uploads/data%20analytics.png`,
    tags: ["Data Analytics", "Business Intelligence", "AI"],
    content: [
      "Artificial intelligence has changed business intelligence by helping organizations find insights faster in growing data sets.",
      "Automated insight discovery changes the analytics process. Instead of requiring analysts to know every question in advance, AI systems can surface patterns and anomalies.",
      "Natural language interfaces make data access easier for more teams. Business users can ask plain-language questions instead of learning query languages.",
      "Predictive analytics has evolved into dynamic systems that learn from new data. Forecasts and recommendations can improve as conditions change.",
      "Augmented analytics combines machine processing with human expertise. AI can handle data preparation and pattern detection while people provide context and judgment.",
      "Decision intelligence turns insights into recommended actions. Systems can combine predictions, business rules, cost-benefit analysis, and risk scoring.",
      "Explainable AI helps address trust concerns. Users need to understand which factors influenced a prediction or recommendation.",
      "The organizational impact is cultural as well as technical. Teams need data literacy, governance, and processes that can act on insights quickly."
    ]
  },
  {
    slug: "ai-integration-enterprise-software",
    title: "AI Integration: Connecting Artificial Intelligence Systems with Existing Enterprise Software",
    category: "AI Integration",
    author: "PYN Team",
    date: "May 1, 2026",
    readTime: "8 min read",
    excerpt: "Explore strategies and best practices for integrating AI capabilities into existing technology infrastructure.",
    image: `${finlecLogoBase}/lovable-uploads/ai%20design.png`,
    tags: ["AI Integration", "Enterprise Software", "APIs"],
    content: [
      "AI integration is one of the biggest challenges organizations face when implementing artificial intelligence. Standalone tools are useful, but the biggest value appears when AI becomes part of core workflows.",
      "API-based integration is often the most flexible approach. Modern AI platforms expose capabilities through stable interfaces that existing systems can call when needed.",
      "Data pipeline engineering is usually the most complex part. Existing systems may store data in formats that need cleaning, transformation, or real-time delivery before AI can use it.",
      "User experience matters when adding AI to established software. The best integrations enhance familiar workflows instead of forcing users into completely new interfaces.",
      "Hybrid processing architectures balance performance and data security. Some work may run in the cloud, while sensitive processing remains on controlled infrastructure.",
      "Versioning and change management are critical because models evolve over time. Testing, gradual rollouts, and rollback paths help avoid unexpected behavior in connected systems.",
      "Security reviews must cover both traditional integration risks and AI-specific risks such as data poisoning, prompt injection, and inappropriate data access.",
      "Governance frameworks should define data access, accuracy thresholds, bias monitoring, and explanation requirements so AI integration stays responsible and aligned with business values."
    ]
  },
  {
    slug: "ai-agents-small-business-automation-2026",
    title: "AI Agents for Small Business Automation in 2026",
    category: "AI Integration",
    author: "PYN Team",
    date: "May 22, 2026",
    readTime: "7 min read",
    excerpt: "See how practical AI agents are moving from demos into daily business workflows like support, reporting, lead follow-up, and approvals.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI Agents", "Automation", "Workflows"],
    content: [
      "AI agents are becoming more useful for small businesses because they can combine reasoning, tool use, and workflow memory instead of only answering one-off questions.",
      "The strongest use cases usually start with repeated work. Support triage, lead qualification, appointment reminders, sales summaries, and internal reporting are good places to begin because success is easy to measure.",
      "A good agent workflow still needs clear boundaries. The system should know when it can act automatically, when it should draft for review, and when it must hand the decision to a person.",
      "Integrations matter more than model choice for many real deployments. An agent that can read a CRM, update a spreadsheet, create a task, and notify the right person is more valuable than a chatbot that stays disconnected.",
      "State and recovery are important for longer tasks. If a workflow has several steps, the business needs traceable progress, retries, logs, and a way to continue when something fails.",
      "Security should be designed from the start. Limit the tools an agent can access, use approval checkpoints for sensitive actions, and keep audit trails for important business changes.",
      "Small teams should avoid trying to automate everything at once. One focused workflow, tested with real users, usually creates more value than a large agent project with unclear ownership."
    ]
  },
  {
    slug: "generative-engine-optimization-ai-search-2026",
    title: "Generative Engine Optimization: Getting Found in AI Search",
    category: "Digital Marketing",
    author: "PYN Team",
    date: "May 20, 2026",
    readTime: "7 min read",
    excerpt: "Traditional SEO is changing as AI answer engines summarize, compare, and recommend brands before users click a search result.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
    tags: ["GEO", "AI Search", "SEO"],
    content: [
      "Generative Engine Optimization, often called GEO, focuses on making content useful for AI systems that produce direct answers instead of only ranking links.",
      "The basics still matter. Clear pages, strong technical SEO, fast performance, original information, and trustworthy signals help both traditional search engines and AI search tools understand a site.",
      "AI search rewards content that answers complete questions. Helpful comparisons, definitions, examples, pricing context, use cases, and frequently asked questions can make a page easier to summarize accurately.",
      "Brand mentions outside your own site also matter. Case studies, reviews, partner pages, directories, and media references can help AI systems understand how a business is described across the web.",
      "Structured content is becoming more important. Proper headings, schema markup, author details, updated dates, and clean internal links give retrieval systems more reliable context.",
      "GEO is not a replacement for SEO. It adds a new layer where marketers track visibility inside AI responses, not just rankings and organic clicks.",
      "The practical move is to build content that is specific, verifiable, and useful enough to be cited. Thin pages written only for keywords are becoming easier to ignore."
    ]
  },
  {
    slug: "privacy-first-analytics-first-party-data",
    title: "Privacy-First Analytics with First-Party Data",
    category: "Data Analytics",
    author: "PYN Team",
    date: "May 18, 2026",
    readTime: "6 min read",
    excerpt: "Learn how growing websites can measure performance with consent-aware tracking, cleaner events, and first-party customer data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Analytics", "Privacy", "First-Party Data"],
    content: [
      "Privacy-first analytics is now a practical requirement, not only a compliance conversation. Businesses need measurement that respects consent while still explaining what is working.",
      "First-party data is information collected directly through your own website, app, CRM, forms, purchases, and support interactions. It is usually more reliable than rented or third-party data because it reflects real customer behavior.",
      "The first step is a clean event plan. Teams should define which actions matter, such as form starts, quote requests, cart steps, bookings, downloads, and repeat visits.",
      "Consent-aware tracking helps users stay in control. Cookie banners, preference centers, and server-side configuration should match the actual tools used on the site.",
      "Dashboards should focus on decisions rather than vanity metrics. Conversion rate, qualified leads, content-assisted enquiries, customer value, and funnel drop-off are more useful than raw traffic alone.",
      "Data quality matters more as teams add automation and AI. Bad naming, duplicate events, and missing campaign tags make reports harder to trust.",
      "A privacy-first setup can still be powerful. With better first-party data, businesses can improve personalization, retargeting, lifecycle emails, and sales follow-up without treating users carelessly."
    ]
  },
  {
    slug: "edge-ready-web-apps-performance-caching",
    title: "Edge-Ready Web Apps: Faster Pages with Smarter Caching",
    category: "Website Development",
    author: "PYN Team",
    date: "May 16, 2026",
    readTime: "7 min read",
    excerpt: "Modern websites can feel faster by serving pages closer to users, caching carefully, and keeping dynamic data under control.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Edge", "Performance", "Caching"],
    content: [
      "Edge-ready web development means designing pages so more work can happen closer to the visitor instead of forcing every request back to one central server.",
      "The performance benefit is simple: shorter network distance can reduce waiting time. For public pages, cached HTML, images, scripts, and API responses can make the first visit feel much faster.",
      "Caching needs a strategy. Static pages, marketing content, product listings, user dashboards, and checkout flows should not all use the same cache rules.",
      "Incremental regeneration and partial caching help teams keep content fresh without rebuilding the whole site for every update. This works especially well for blogs, service pages, landing pages, and catalog pages.",
      "Dynamic personalization should be handled carefully. User-specific content, pricing, permissions, and private data should avoid shared cache leaks.",
      "Image delivery is still one of the biggest wins. Responsive sizes, modern formats, lazy loading, and good content delivery networks reduce payload across mobile and desktop.",
      "The best edge strategy is invisible to users. They simply feel that the website opens quickly, responds cleanly, and stays reliable during traffic spikes."
    ]
  },
  {
    slug: "ai-assisted-design-systems-product-teams",
    title: "AI-Assisted Design Systems for Product Teams",
    category: "UI/UX Design",
    author: "PYN Team",
    date: "May 14, 2026",
    readTime: "6 min read",
    excerpt: "AI design tools are becoming more useful when teams already have strong tokens, components, rules, and review habits.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Design Systems", "AI Design", "UI/UX"],
    content: [
      "AI-assisted design is most useful when it works inside a clear design system. Without tokens, components, layout rules, and product principles, generated screens can become inconsistent quickly.",
      "A mature design system gives AI tools better constraints. Colors, spacing, typography, component states, and accessibility requirements create a safer starting point for drafts and variations.",
      "Designers can use AI for early exploration, copy alternatives, empty states, flow summaries, research synthesis, and quick prototype directions. The final judgment still belongs to the product team.",
      "Governance becomes more important as generation gets faster. Teams need review rules for accessibility, brand tone, responsive behavior, and interaction consistency.",
      "Traceability helps keep quality high. When a screen is generated or heavily AI-assisted, teams should know which prompt, component set, and design patterns influenced it.",
      "AI can also help maintain systems by finding duplicate components, naming inconsistencies, missing states, and outdated documentation.",
      "The goal is not to remove craft. The goal is to reduce repetitive setup work so designers and developers can spend more time on product thinking and user outcomes."
    ]
  }
];

const blogPostOrder = [
  "website-speed-user-experience-seo",
  "conversational-ai-customer-service",
  "responsive-design-principles-modern-websites",
  "ai-agents-small-business-automation-2026",
  "content-marketing-organic-traffic-growth",
  "native-vs-cross-platform-mobile-app-development",
  "generative-engine-optimization-ai-search-2026",
  "user-centered-design-intuitive-interfaces",
  "privacy-first-analytics-first-party-data",
  "essential-ecommerce-website-features",
  "edge-ready-web-apps-performance-caching",
  "social-media-advertising-roi",
  "ai-assisted-design-systems-product-teams",
  "ai-data-analytics-business-intelligence",
  "offline-first-mobile-applications",
  "ai-integration-enterprise-software"
];

const orderedBlogSlugs = new Set<string>(blogPostOrder);
const orderedBlogPosts = blogPostOrder
  .map((slug) => blogPostLibrary.find((post) => post.slug === slug))
  .filter((post): post is BlogPost => Boolean(post));

export const blogPosts: BlogPost[] = [
  ...orderedBlogPosts,
  ...blogPostLibrary.filter((post) => !orderedBlogSlugs.has(post.slug))
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
          "PYN Technologies collects contact details submitted through forms, including name, email, phone number, selected interest, and message content."
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
        body: ["The content on this website is provided for general information about PYN Technologies services."]
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
