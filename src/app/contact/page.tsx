"use client";

import { useState, type FormEvent } from "react";
import { MessageSquare, CheckCircle2, Phone, Mail, Siren } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { locations } from "@/data/locations";

const TOPICS = ["General question", "Insurance & billing", "Medical reports", "Feedback", "Careers"];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: TOPICS[0], message: "" });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        icon={MessageSquare}
        eyebrow="Contact"
        title="We're here to help"
        subtitle="Questions about appointments, insurance or reports? Message us, call your branch, or ask the chat assistant any time."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <ContactCard icon={Phone} title="Call us" body="800 NOOR (800 6667)" sub="Sat–Thu 8 AM – 10 PM, Fri 2 – 10 PM" />
          <ContactCard icon={FaWhatsapp} title="WhatsApp" body="+971 50 555 0141" sub="Replies within the hour during opening times" />
          <ContactCard icon={Mail} title="Email" body="care@noorclinic.example" sub="For reports, invoices and feedback" />
          <div className="rounded-2xl border border-coral/30 bg-coral/5 p-5">
            <p className="flex items-center gap-2 font-display font-bold text-navy">
              <Siren className="size-4 text-coral" /> Medical emergency?
            </p>
            <p className="mt-1.5 text-sm text-foreground/65">
              Call 998 for an ambulance or go to the nearest hospital A&amp;E. Please don&apos;t use
              this form or the chat for urgent medical problems.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <p className="font-display font-bold text-navy">Branch phone numbers</p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/65">
              {locations.map((l) => (
                <li key={l.id} className="flex justify-between gap-4">
                  <span>{l.area}</span>
                  <a href={`tel:${l.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-navy hover:text-teal-dark">{l.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm">
            <CheckCircle2 className="mb-4 size-12 text-teal" />
            <h2 className="font-display text-2xl font-extrabold text-navy">Message sent</h2>
            <p className="mt-2 text-foreground/65">Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll reply within one working day.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-black/10 px-6 py-2.5 text-sm font-bold text-navy hover:border-navy">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" required>
                <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="input" />
              </Field>
              <Field label="Email" required>
                <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="input" />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone (optional)">
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+971 5x xxx xxxx" className="input" />
              </Field>
              <Field label="Topic">
                <select value={form.topic} onChange={(e) => update("topic", e.target.value)} className="input">
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Message" required>
              <textarea required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="How can we help?" className="input resize-none" />
            </Field>
            <button type="submit" disabled={submitting} className="w-full rounded-full bg-teal py-3 text-sm font-bold text-white hover:bg-teal-dark disabled:opacity-60">
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, title, body, sub }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string; sub: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal-dark">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-display font-bold text-navy">{title}</p>
        <p className="text-sm font-semibold text-foreground/80">{body}</p>
        <p className="text-xs text-foreground/50">{sub}</p>
      </div>
    </div>
  );
}
