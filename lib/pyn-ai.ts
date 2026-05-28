import { aiSolutions, brand, services } from "@/lib/site-data";

export type PynAiMessage = {
  role: "user" | "assistant";
  content: string;
};

const serviceSummary = services.map((service) => `${service.title}: ${service.description}`).join("\n");
const aiSummary = aiSolutions.map((solution) => `${solution.title}: ${solution.description}`).join("\n");

const fallbackContext = `
PYN Technologies is a digital product studio based in ${brand.city}.
Services:
${serviceSummary}
Automation:
${aiSummary}
Product:
Study Room Management App for study halls and Abhyasika operators.
Contact:
Phone or WhatsApp: ${brand.whatsappLabel}
Email: ${brand.email}
Business hours: Monday - Saturday, 10:00 AM - 6:00 PM.
`;

export const pynAiSuggestions = [
  "What services do you offer?",
  "What automation services do you build?",
  "How can I contact the PYN team?",
  "Can you build a website for my business?"
];

export function getFallbackPynAiReply(input: string) {
  const question = input.toLowerCase();

  if (question.includes("contact") || question.includes("phone") || question.includes("email") || question.includes("call") || question.includes("location")) {
    return `You can contact PYN at ${brand.whatsappLabel} or ${brand.email}. The team is based in ${brand.city}, and business hours are Monday to Saturday, 10:00 AM to 6:00 PM.`;
  }

  if (question.includes("ai") || question.includes("chatbot") || question.includes("automation") || question.includes("analytics")) {
    return `PYN builds chatbots, workflow automation, API integrations, and analytics dashboards. The focus is practical delivery: lead handling, support flows, reporting, workflow cleanup, and internal tools.`;
  }

  if (question.includes("website") || question.includes("web") || question.includes("app") || question.includes("design") || question.includes("marketing") || question.includes("service")) {
    return `PYN offers website development, app development, digital marketing, WhatsApp Business API setup, UI/UX design, and graphic design. You can start with one service or combine them into a complete digital system.`;
  }

  if (question.includes("price") || question.includes("pricing") || question.includes("cost") || question.includes("budget")) {
    return `Pricing depends on the scope, number of screens/pages, integrations, and timeline. Share a short brief through the contact form or WhatsApp, and PYN can suggest a practical starting estimate.`;
  }

  if (question.includes("study") || question.includes("abhyasika") || question.includes("product")) {
    return `PYN is also shaping a Study Room Management App for study halls and Abhyasika teams, with seat planning, renewals, reminders, student records, and secure admin access.`;
  }

  return `I can help with PYN services, automation, websites, apps, design, marketing, WhatsApp flows, the Study Room app, or contact details. Ask me what you want to build, and I will keep it short and useful.`;
}

export function buildPynAiSystemPrompt() {
  return `You are PYN Guide, the website assistant for PYN Technologies.
Answer in a short, helpful, friendly way.
Do not invent prices, timelines, or private details.
If the user asks for a quote, ask them to share requirements through the contact form or WhatsApp.
Use this site context:
${fallbackContext}`;
}
