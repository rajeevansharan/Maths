import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Facebook, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "./about";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apex Mathematics Institute" },
      { name: "description", content: "Contact Apex Mathematics — phone, WhatsApp, email and enrollment inquiry form for classroom and Zoom programs." },
      { property: "og:title", content: "Contact Apex Mathematics" },
      { property: "og:description", content: "Get in touch — phone, WhatsApp, email and inquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  studentName: z.string().trim().min(2, "Please enter the student's name").max(80),
  parentName: z.string().trim().max(80).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(5, "Please share a brief message").max(1000),
});

function ContactPage() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        subtitle="Whether you're exploring classes or ready to enrol — our team is here to help."
      />
      <ContactGrid />
      <MapSection />
    </>
  );
}

function ContactGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-3xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">Reach out by phone, WhatsApp, email — or use the form to start an enrollment inquiry.</p>
          </div>
          <ul className="space-y-5">
            {[
              { Icon: Phone, label: "Phone", value: "+94 77 123 4567", href: "tel:+94771234567" },
              { Icon: MessageCircle, label: "WhatsApp", value: "+94 77 765 4321", href: "https://wa.me/94777654321" },
              { Icon: Mail, label: "Email", value: "hello@apexmath.lk", href: "mailto:hello@apexmath.lk" },
              { Icon: MapPin, label: "Visit Us", value: "24 Galle Road, Colombo 03, Sri Lanka" },
            ].map(({ Icon, label, value, href }) => (
              <li key={label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block font-medium text-foreground hover:text-primary truncate">{value}</a>
                  ) : (
                    <div className="mt-1 font-medium text-foreground">{value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
            <div className="mt-3 flex gap-3">
              {[Facebook, Instagram, Youtube].map((I, k) => (
                <a key={k} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}

function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        const result = inquirySchema.safeParse(data);
        if (!result.success) {
          toast.error(result.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          setDone(true);
          toast.success("Thanks — we'll be in touch within one business day.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold">Enrollment Inquiry</h2>
      <p className="mt-2 text-sm text-muted-foreground">Fill in the details and we'll get back to you within one business day.</p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <Field name="fullName" label="Full Name" placeholder="Your name" />
        <Field name="studentName" label="Student Name" placeholder="Student's name" />
        <Field name="parentName" label="Parent Name (optional)" placeholder="Parent / guardian" />
        <Field name="phone" label="Phone Number" placeholder="07X XXX XXXX" type="tel" />
        <Field name="email" label="Email Address" placeholder="you@example.com" type="email" className="md:col-span-2" />
        <div className="md:col-span-2">
          <Label>Subject Interested In</Label>
          <select name="subject" defaultValue="" required className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="" disabled>Select a subject</option>
            <option>O/L Mathematics</option>
            <option>A/L Combined Mathematics</option>
            <option>A/L Pure Mathematics</option>
            <option>A/L Applied Mathematics</option>
            <option>Foundation Mathematics</option>
            <option>Revision / Exam Prep</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <Label>Message</Label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about the student's grade, goals, or any questions."
            maxLength={1000}
            className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep disabled:opacity-60"
      >
        {done ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        {submitting ? "Sending..." : done ? "Sent — thank you" : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  className,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{children}</label>;
}

function MapSection() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
          <iframe
            title="Apex Mathematics location"
            src="https://www.google.com/maps?q=Colombo+03,+Sri+Lanka&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="block"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}