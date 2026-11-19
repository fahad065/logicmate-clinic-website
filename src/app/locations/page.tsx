"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck, Stethoscope, Siren } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CountryTabs } from "@/components/country-tabs";
import { locations, countries, countryOf, type CountryCode } from "@/data/locations";

export default function LocationsPage() {
  const [country, setCountry] = useState<CountryCode | "all">("all");
  const filtered = country === "all" ? locations : locations.filter((l) => l.country === country);

  return (
    <div>
      <PageHero
        icon={MapPin}
        eyebrow={`${locations.length} Clinics · ${countries.length} Countries`}
        title="Find your nearest clinic"
        subtitle={`Meridian Family Clinic in ${locations.map((l) => l.city).join(", ")} — one patient record across every clinic.`}
      />

      <section className="border-b border-black/5 bg-background/95">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <CountryTabs value={country} onChange={setCountry} includeAll />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((loc) => {
            const c = countryOf(loc.country);
            return (
              <div key={loc.id} className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-teal-dark">{c.flag} {c.name}</p>
                <h3 className="font-display mt-1 text-xl font-bold text-navy">{loc.name}</h3>

                <div className="mt-4 space-y-2.5 text-sm text-foreground/70">
                  <p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-teal" /> {loc.address}</p>
                  <p className="flex items-center gap-2">
                    <Phone className="size-4 shrink-0 text-teal" />
                    <a href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`} className="hover:text-navy">{loc.phone}</a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-teal" />
                    <span>{loc.weekdayHours}<br />{loc.weekendHours}<br /><span className="text-xs text-foreground/45">{loc.timezone}</span></span>
                  </p>
                  <p className="flex items-center gap-2 text-xs">
                    <Siren className="size-4 shrink-0 text-coral" /> Emergency in {c.name}: call <strong className="text-navy">{c.emergency}</strong>
                  </p>
                </div>

                <div className="mt-4 border-t border-black/5 pt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-navy/60"><Stethoscope className="size-3.5" /> Specialities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.specialities.map((s) => (
                      <span key={s} className="rounded-full bg-teal-soft/60 px-2.5 py-1 text-[11px] font-semibold text-teal-dark">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-navy/60"><ShieldCheck className="size-3.5" /> Insurance accepted</p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.insurance.map((i) => (
                      <span key={i} className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] font-medium text-navy/75">{i}</span>
                    ))}
                  </div>
                  {loc.insuranceNote && <p className="mt-2 text-xs text-foreground/55">{loc.insuranceNote}</p>}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {loc.facilities.map((f) => (
                    <span key={f} className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/65">{f}</span>
                  ))}
                </div>

                <Link href={`/book?branch=${loc.id}`} className="mt-5 rounded-full bg-navy py-2.5 text-center text-sm font-bold text-white hover:bg-navy-soft">
                  Book in {loc.city}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
