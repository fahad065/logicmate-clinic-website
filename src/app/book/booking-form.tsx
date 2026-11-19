"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { locations, countryOf } from "@/data/locations";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";

const TIMES = ["Morning", "Afternoon", "Evening", "Weekend"];

export function BookingForm() {
  const params = useSearchParams();
  const preDoctor = doctors.find((d) => d.id === params.get("doctor"));
  const preBranch = locations.find((l) => l.id === params.get("branch"));

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    branch: preBranch?.id ?? locations[0].id,
    service: services.find((s) => s.price[(preBranch ?? locations[0]).country])!.id,
    doctor: preDoctor?.id ?? "",
    date: "",
    time: TIMES[0],
    insurance: "",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const branch = locations.find((l) => l.id === form.branch)!;
  const branchDoctors = doctors.filter((d) => d.branches.includes(branch.id));
  const branchServices = services.filter((s) => s.price[branch.country]);
  const country = countryOf(branch.country);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center sm:px-8">
        <span className="mb-5 flex size-16 items-center justify-center rounded-full bg-teal-soft text-teal-dark">
          <CheckCircle2 className="size-8" />
        </span>
        <h1 className="font-display text-3xl font-extrabold text-navy">Request received</h1>
        <p className="mt-3 text-foreground/65">
          Thanks, {form.name.split(" ")[0] || "there"} — your appointment request for{" "}
          <strong>{branch.name}</strong> is with our reception team. We&apos;ll call{" "}
          {form.phone || "you"} to confirm the exact time.
        </p>
        <p className="mt-3 text-xs text-foreground/45">
          Your appointment isn&apos;t confirmed until we call you.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-sm font-bold text-navy hover:border-navy"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        icon={CalendarCheck}
        eyebrow="Appointments"
        title="Request an appointment"
        subtitle="Tell us what you need and when suits you — our reception team will call to confirm your time, usually within the hour during opening hours."
      />

      <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required>
              <input required type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Patient's name" className="input" />
            </Field>
            <Field label="Mobile number" required>
              <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Include your country code" className="input" />
            </Field>
          </div>

          <Field label="Email (optional)">
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="input" />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Branch" required>
              <select
                value={form.branch}
                onChange={(e) => {
                  const next = locations.find((l) => l.id === e.target.value)!;
                  setForm((f) => ({
                    ...f,
                    branch: next.id,
                    doctor: "",
                    insurance: "",
                    service: services.some((s) => s.id === f.service && s.price[next.country]) ? f.service : services.find((s) => s.price[next.country])!.id,
                  }));
                }}
                className="input"
              >
                {locations.map((l) => (
                  <option key={l.id} value={l.id}>{countryOf(l.country).flag} {l.city}, {countryOf(l.country).name}</option>
                ))}
              </select>
            </Field>
            <Field label="Service" required>
              <select value={form.service} onChange={(e) => update("service", e.target.value)} className="input">
                {branchServices.map((s) => (
                  <option key={s.id} value={s.id}>{s.name} — {s.price[branch.country]}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Preferred doctor (optional)">
            <select value={form.doctor} onChange={(e) => update("doctor", e.target.value)} className="input">
              <option value="">No preference — first available</option>
              {branchDoctors.map((d) => (
                <option key={d.id} value={d.id}>{d.name} — {d.speciality}</option>
              ))}
            </select>
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred date" required>
              <input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="input" />
            </Field>
            <Field label={`Preferred time (${branch.timezone})`} required>
              <select value={form.time} onChange={(e) => update("time", e.target.value)} className="input">
                {TIMES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Insurance provider (optional)">
            <select value={form.insurance} onChange={(e) => update("insurance", e.target.value)} className="input">
              <option value="">Self-pay / no insurance</option>
              {branch.insurance.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </Field>

          <Field label="Reason for visit (optional)">
            <textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Anything the doctor should know before your visit" className="input resize-none" />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-teal py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending request…" : "Request appointment"}
          </button>
          <p className="text-center text-xs text-foreground/45">
            In an emergency, don&apos;t wait — call {country.emergency} ({country.name}) or go to the nearest emergency department.
          </p>
        </form>
      </section>
    </div>
  );
}
