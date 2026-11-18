import Link from "next/link";
import {
  Stethoscope,
  CalendarCheck,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Star,
  Clock,
  Languages,
  HeartPulse,
  Baby,
  Microscope,
} from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { locations, cities, allInsurers } from "@/data/locations";

const FEATURED = ["gp", "paeds", "derm", "physio"].map((id) => services.find((s) => s.id === id)!);
const FEATURED_IMG: Record<string, string> = {
  gp: "photo-1576091160550-2173dba999ef",
  paeds: "photo-1581056771107-24ca5f033842",
  derm: "photo-1570172619644-dfd03ed5d881",
  physio: "photo-1576091160399-112ba8d25d1d",
};
const img = (id: string, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const FEATURES = [
  { icon: Clock, title: "Seen on time", desc: "Same-day GP appointments at every branch, and an average wait under 15 minutes." },
  { icon: ShieldCheck, title: "Direct insurance billing", desc: `${allInsurers.length}+ insurance networks accepted — we bill your insurer directly at the desk.` },
  { icon: Languages, title: "Doctors who speak your language", desc: "English, Arabic, Hindi, Urdu, French, Malayalam and Tamil across our team." },
  { icon: HeartPulse, title: "One file, every branch", desc: "Your records follow you — visit Jumeirah today and Al Barsha next week." },
];

const TESTIMONIALS = [
  { quote: "Booked a paediatrician at 9 PM and we were seen the next morning. Dr. Omar was wonderful with my son.", name: "Fatima A.", place: "Jumeirah branch" },
  { quote: "They billed my AXA card directly and the blood results were on my phone the next day. Easiest clinic visit I've had in Dubai.", name: "Mark T.", place: "Al Barsha branch" },
  { quote: "Finally a clinic in Sharjah with female doctors in the evening. The reception team is so kind.", name: "Huda S.", place: "Al Majaz branch" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <SafeImg
          src={img("photo-1631217868264-e5b90bb7e133", 1800)}
          alt="Doctor talking with a patient in a bright clinic room"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-soft/30 bg-navy/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-soft">
              <Stethoscope className="size-3.5" /> Family Medicine · Specialists · Dental
            </span>
            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Care for every age,
              <br />
              <span className="text-teal-soft">close to home.</span>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base text-white/75 sm:text-lg">
              GPs, paediatricians, women&apos;s health, dermatology, dentistry and
              physiotherapy at {locations.length} branches across {cities.join(", ")} —
              with same-day appointments and direct insurance billing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="animate-pulse-ring rounded-full bg-teal px-8 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-colors hover:bg-teal-dark"
              >
                Book an Appointment
              </Link>
              <Link
                href="/insurance"
                className="rounded-full border border-white/30 px-8 py-3.5 text-center text-sm font-bold text-white transition-colors hover:border-teal-soft hover:text-teal-soft"
              >
                Check Your Insurance
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-soft">Today at Noor</p>
            <ul className="mt-5 space-y-4">
              <HeroRow icon={CalendarCheck} title="Same-day GP slots" sub="All branches · walk-ins welcome" />
              <HeroRow icon={Baby} title="Paediatrics until 10 PM" sub="Jumeirah & Al Reem Island" />
              <HeroRow icon={Microscope} title="Lab results in 24 hours" sub="Sent straight to your phone" />
              <HeroRow icon={ShieldCheck} title={`${allInsurers.length}+ insurers accepted`} sub="Daman, AXA, NAS, Bupa and more" />
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
            <Stat value={`${locations.length}`} label="Branches" />
            <Stat value={`${doctors.length}`} label="Doctors & therapists" />
            <Stat value={`${services.length}+`} label="Services" />
            <Stat value="40,000+" label="Patients a year" />
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Our Services</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Everything your family needs, under one roof
            </h2>
          </div>
          <Link href="/services" className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-navy hover:text-teal-dark">
            Services &amp; prices <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((s) => (
            <div key={s.id} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="h-44 overflow-hidden">
                <SafeImg
                  src={img(FEATURED_IMG[s.id])}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-wide text-teal-dark">{s.category}</p>
                <h3 className="font-display mt-1 text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-1.5 text-sm text-foreground/60">{s.description}</p>
                <p className="mt-3 text-sm font-bold text-navy">
                  {s.price} <span className="font-medium text-foreground/45">· {s.duration}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Why Noor</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              A clinic that respects your time
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-teal-soft text-teal-dark">
                  <f.icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Meet Our Doctors</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Experienced, licensed and unhurried
            </h2>
          </div>
          <Link href="/doctors" className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-navy hover:text-teal-dark">
            All doctors <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d) => (
            <div key={d.id} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="h-56 overflow-hidden">
                <SafeImg src={d.img} alt={d.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy">{d.name}</h3>
                <p className="text-sm font-semibold text-teal-dark">{d.speciality}</p>
                <p className="mt-1 text-xs text-foreground/50">{d.languages.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance strip */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-soft">Insurance</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
              We bill your insurer directly
            </h2>
            <p className="mt-4 text-white/65">
              Accepted networks differ slightly by branch — check your card against
              each branch before you visit.
            </p>
            <Link
              href="/insurance"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white hover:bg-teal-dark"
            >
              See insurance by branch <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {allInsurers.map((i) => (
              <span key={i} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Branches teaser */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Find Us</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              {locations.length} branches across the UAE
            </h2>
            <p className="mt-4 text-foreground/65">
              From Jumeirah to Al Reem Island, there&apos;s a Noor clinic near you — with
              evening hours and Friday clinics at most branches.
            </p>
            <Link
              href="/locations"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-soft"
            >
              View all branches <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.id} className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white px-4 py-3.5 shadow-sm">
                <MapPin className="size-4 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {loc.area}, {loc.city}
                  </p>
                  <p className="text-xs text-foreground/50">{loc.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Patient Stories</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              What our patients say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/75">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-foreground/50">{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-teal px-6 py-14 text-center text-white sm:px-16">
          <CalendarCheck className="size-10" />
          <h2 className="font-display text-balance text-3xl font-extrabold sm:text-4xl">
            Need to see a doctor this week?
          </h2>
          <p className="max-w-xl text-white/85">
            Request an appointment online and our reception team will confirm your time
            by phone — or ask our chat assistant anything, day or night.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-teal-dark hover:bg-teal-soft">
              Book Appointment
            </Link>
            <Link href="/services" className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10">
              View Services &amp; Prices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroRow({ icon: Icon, title, sub }: { icon: typeof Clock; title: string; sub: string }) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/20 text-teal-soft">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-white/55">{sub}</p>
      </div>
    </li>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-3xl font-extrabold text-teal-soft">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/55">{label}</p>
    </div>
  );
}
