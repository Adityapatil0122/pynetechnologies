import { NextResponse } from "next/server";
import { buildPyneAiSystemPrompt, getFallbackPyneAiReply, type PyneAiMessage } from "@/lib/pyne-ai";

type PyneAiRequest = {
  messages?: PyneAiMessage[];
};

function pickExternalReply(payload: unknown) {
  if (!payload || typeof payload !== "object") return "";

  const data = payload as {
    reply?: unknown;
    message?: unknown;
    content?: unknown;
    choices?: { message?: { content?: unknown }; text?: unknown }[];
  };

  if (typeof data.reply === "string") return data.reply;
  if (typeof data.message === "string") return data.message;
  if (typeof data.content === "string") return data.content;
  if (Array.isArray(data.choices)) {
    const first = data.choices[0];
    if (typeof first?.message?.content === "string") return first.message.content;
    if (typeof first?.text === "string") return first.text;
  }

  return "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as PyneAiRequest;
  const messages = body.messages?.filter((message) => message.content.trim()) ?? [];
  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";

  if (!lastUserMessage) {
    return NextResponse.json({ reply: "Ask me about Pyne services, AI solutions, apps, websites, pricing, or contact details." });
  }

  const apiUrl = process.env.PYNE_AI_API_URL;
  const apiKey = process.env.PYNE_AI_API_KEY;

  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
        },
        body: JSON.stringify({
          system: buildPyneAiSystemPrompt(),
          messages
        })
      });

      if (response.ok) {
        const payload = await response.json().catch(() => null);
        const reply = pickExternalReply(payload);
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    } catch {
      // Fall through to the local assistant so the widget never feels broken.
    }
  }

  return NextResponse.json({ reply: getFallbackPyneAiReply(lastUserMessage) });
}
