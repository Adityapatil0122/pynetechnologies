import type { Metadata } from "next";
import Link from "next/link";
import { Bell, CalendarCheck, CheckCircle2, GraduationCap, LockKeyhole, Users } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Study Room Management App",
  description: "Coming soon: a lively study room and Abhyasika management app by Pyne Technologies."
};

const features = [
  { title: "Seat planning", description: "Track seats, slots, and occupancy without spreadsheet gymnastics.", icon: Users },
  { title: "Admissions and renewals", description: "Keep student records, fees, renewals, and reminders in one tidy flow.", icon: CalendarCheck },
  { title: "Smart notifications", description: "Send updates and payment reminders through friendly automated channels.", icon: Bell },
  { title: "Secure admin", description: "Role-based access for owners, managers, and desk teams.", icon: LockKeyhole }
];

export default function StudyRoomPage() {
  return (
    <>
      <section className="section-y bg-[#e9fbff]">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <GraduationCap className="h-4 w-4" />
              Product coming soon
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">Study Room Management App</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              A dashboard for Abhyasika and study halls that want seat tracking, fee visibility, student records, and
              reminders without the daily admin circus.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pop">
                <Link href="/contact">Join waitlist</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services/app-development">Build a custom app</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
          <div className="rounded-[30px] border border-white bg-white p-3 shadow-[0_30px_80px_rgba(47,75,111,0.15)] sm:rounded-[36px] sm:p-4">
            <div className="rounded-[24px] bg-[#fff8ea] p-4 sm:rounded-[28px] sm:p-5">
              <div className="grid gap-4">
                {["Today occupancy", "Renewals this week", "Pending payments", "New inquiries"].map((label, index) => (
                  <div key={label} className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="font-black">{label}</span>
                    <span className="rounded-full bg-[var(--lime)] px-3 py-1 text-sm font-black">{[82, 14, 9, 23][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
      <section className="section-y">
        <div className="container-pyne">
          <SectionIntro
            eyebrow="Product modules"
            title="A study hall cockpit that feels calm, not clinical."
            description="The v1 product direction focuses on the daily tasks owners and staff repeat most often."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
              <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,75,111,0.14)]">
                <feature.icon className="h-9 w-9 text-[var(--primary-strong)]" />
                <h2 className="mt-5 text-xl font-black">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.description}</p>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-[#f2ffd0]">
        <div className="container-pyne grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="eyebrow">
              <CheckCircle2 className="h-4 w-4" />
              Early access
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Want this for your study hall?</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Share your workflow and Pyne will shape the launch list.</p>
          </Reveal>
          <Reveal delay={0.08}>
          <Card className="p-5 sm:p-6">
            <ContactForm />
          </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
