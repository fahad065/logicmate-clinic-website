"use client";

import { useState } from "react";
import Link from "next/link";
import { Stethoscope, Clock, Info } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CountryTabs } from "@/components/country-tabs";
import { services, serviceCategories, type ServiceCategory } from "@/data/services";
import { countryOf, locations, type CountryCode } from "@/data/locations";

export default function ServicesPage() {
  const [country, setCountry] = useState<CountryCode>("US");
  const [cat, setCat] = useState<ServiceCategory | "all">("all");
  const offered = services.filter((s) => s.price[country]);
  const filtered = cat === "all" ? offered : offered.filter((s) => s.category === cat);
  const c = countryOf(country);
  const clinic = locations.find((l) => l.country === country)!;

  return (
    <div>
      <PageHero
        icon={Stethoscope}
        eyebrow={`${services.length} Services`}
        title="Services & prices"
        subtitle="Self-pay prices in your local currency. With insurance you usually pay only your co-pay — what's covered depends on your country and plan."
      />

      <section className="sticky top-[65px] z-10 border-b border-black/5 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-4 sm:px-8">
          <CountryTabs value={country} onChange={(v) => v !== "all" && setCountry(v)} />
          <div className="flex gap-2 overflow-x-auto">
            {(["all", ...serviceCategories] as const).map((k) => (
              <button
                key={k}
                onClick={() => setCat(k)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  cat === k ? "bg-navy text-white" : "bg-navy/5 text-navy/70 hover:bg-navy/10"
                }`}
              >
                {k === "all" ? "All services" : k}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <p className="mb-6 text-sm text-foreground/60">
          Showing prices for <strong className="text-navy">{c.flag} {clinic.city}</strong> in {c.currency}.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <div key={s.id} className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-teal-dark">{s.category}</p>
                {s.badge && (
                  <span className="shrink-0 rounded-full bg-coral/10 px-2.5 py-1 text-[10px] font-bold uppercase text-coral">{s.badge}</span>
                )}
              </div>
              <h3 className="font-display mt-1.5 text-lg font-bold text-navy">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-foreground/60">{s.description}</p>
              {s.prep && (
                <p className="mt-3 flex items-start gap-2 rounded-xl bg-mist px-3 py-2 text-xs text-navy/75">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-teal-dark" />
                  {s.prep}
                </p>
              )}
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                <span className="font-display text-xl font-extrabold text-navy">{s.price[country]}</span>
                <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-foreground/50">
                  <Clock className="size-3.5" /> {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-black/5 bg-white p-6 text-center text-sm text-foreground/60">
            This service isn&apos;t offered in {c.name} yet.
          </p>
        )}

        <div className="mt-12 rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-foreground/65">
            Self-pay prices include local taxes where they apply. A follow-up visit with the same doctor
            within 7 days is free. Medication, lab tests and imaging are charged separately.
          </p>
          <Link href="/book" className="mt-4 inline-block rounded-full bg-teal px-6 py-2.5 text-sm font-bold text-white hover:bg-teal-dark">
            Book an appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
