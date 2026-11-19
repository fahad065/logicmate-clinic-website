"use client";

import { useState } from "react";
import Link from "next/link";
import { UserRound, MapPin, Languages } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { doctors } from "@/data/doctors";
import { locations, countryOf } from "@/data/locations";

const branchLabel = (id: string) => {
  const l = locations.find((x) => x.id === id)!;
  return `${countryOf(l.country).flag} ${l.city}`;
};

export default function DoctorsPage() {
  const [femaleOnly, setFemaleOnly] = useState(false);
  const list = femaleOnly ? doctors.filter((d) => d.female) : doctors;

  return (
    <div>
      <PageHero
        icon={UserRound}
        eyebrow="Our Team"
        title="Meet our doctors"
        subtitle="Every doctor is licensed in the country they practise in — GMC, AHPRA, CPSO, DHA and US state boards — and between them they speak ten languages."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground/60">{list.length} doctors &amp; therapists</p>
          <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-navy">
            <input type="checkbox" checked={femaleOnly} onChange={(e) => setFemaleOnly(e.target.checked)} className="size-4 accent-teal" />
            Female doctors only
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d) => (
            <div key={d.id} className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="h-60 overflow-hidden">
                <SafeImg src={d.img} alt={d.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-navy">{d.name}</h3>
                <p className="text-sm font-semibold text-teal-dark">{d.speciality}</p>
                <p className="mt-0.5 text-xs text-foreground/45">{d.experience} experience</p>
                <p className="mt-3 flex-1 text-sm text-foreground/65">{d.bio}</p>
                <div className="mt-4 space-y-1.5 border-t border-black/5 pt-4 text-xs text-foreground/60">
                  <p className="flex items-start gap-1.5">
                    <Languages className="mt-0.5 size-3.5 shrink-0 text-teal" /> {d.languages.join(", ")}
                  </p>
                  <p className="flex items-start gap-1.5">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-teal" /> {d.branches.map(branchLabel).join(", ")}
                  </p>
                </div>
                <Link
                  href={`/book?doctor=${d.id}`}
                  className="mt-4 rounded-full border border-teal/40 py-2 text-center text-sm font-bold text-teal-dark hover:bg-teal hover:text-white"
                >
                  Book with {d.name.split(" ").slice(0, 2).join(" ")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
