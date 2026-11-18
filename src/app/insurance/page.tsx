"use client";

import { useMemo, useState } from "react";
import { ShieldCheck, Search, CheckCircle2, XCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { locations, allInsurers } from "@/data/locations";

export default function InsurancePage() {
  const [query, setQuery] = useState("");
  const matches = useMemo(
    () => allInsurers.filter((i) => i.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  return (
    <div>
      <PageHero
        icon={ShieldCheck}
        eyebrow="Direct Billing"
        title="Insurance we accept"
        subtitle="We bill your insurer directly — you only pay your co-pay at the desk. Accepted networks differ by branch, so check yours below."
      />

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your insurance provider (e.g. Daman, AXA)…"
            className="input !rounded-full !py-3 !pl-11"
          />
        </div>

        <div className="mt-8 space-y-4">
          {matches.length === 0 && (
            <div className="rounded-2xl border border-black/5 bg-white p-6 text-center text-sm text-foreground/60 shadow-sm">
              We couldn&apos;t find &ldquo;{query}&rdquo;. You can still visit as a self-pay
              patient and claim back from your insurer — ask our reception for an itemised invoice.
            </div>
          )}
          {matches.map((ins) => (
            <div key={ins} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-display text-lg font-bold text-navy">{ins}</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {locations.map((l) => {
                  const ok = l.insurance.includes(ins);
                  return (
                    <p key={l.id} className={`flex items-center gap-2 text-sm ${ok ? "text-navy" : "text-foreground/35"}`}>
                      {ok ? <CheckCircle2 className="size-4 text-teal" /> : <XCircle className="size-4" />}
                      {l.area}, {l.city}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Bring your card", "Bring your insurance card and Emirates ID to every visit."],
            ["Pre-approval", "Some specialist visits, scans and physiotherapy need insurer approval — we request it for you."],
            ["Not covered?", "Self-pay prices are on our Services page. We give an itemised invoice for reimbursement claims."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-mist p-5">
              <h4 className="font-display font-bold text-navy">{t}</h4>
              <p className="mt-1.5 text-sm text-foreground/65">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
