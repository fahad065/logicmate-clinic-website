import Link from "next/link";
import { HeartHandshake, Clock, Users, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { locations } from "@/data/locations";
import { doctors } from "@/data/doctors";

const VALUES = [
  { icon: Clock, title: "Your time matters", desc: "Appointments run on time, results come to your phone, and follow-ups within 7 days are free." },
  { icon: Users, title: "Family medicine first", desc: "One doctor who knows your family, with specialists down the corridor when you need them." },
  { icon: ShieldCheck, title: "Clear prices", desc: "Every self-pay price is published. No surprises at the desk." },
  { icon: Sparkles, title: "Comfortable, modern clinics", desc: "Bright rooms, female doctors available and kids' corners at our family branches." },
];

const TIMELINE = [
  { year: "2014", text: "Dr. Sara Haddad opens the first Noor clinic in a Jumeirah villa — two doctors and a nurse." },
  { year: "2017", text: "Al Barsha branch opens with an in-house lab and women's health clinic." },
  { year: "2020", text: "Video consultations launch, so patients can see a GP from home." },
  { year: "2022", text: "Expansion to Abu Dhabi (Al Reem Island) and Sharjah (Al Majaz)." },
  { year: "2024", text: "Dubai Marina branch opens for dermatology, aesthetics and dental." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        icon={HeartHandshake}
        eyebrow="Our Story"
        title="A family clinic, grown with its families"
        subtitle={`From one villa in Jumeirah to ${locations.length} branches and ${doctors.length} doctors and therapists across the UAE.`}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <SafeImg
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=70"
          alt="Bright clinic reception"
          className="h-80 w-full rounded-3xl object-cover shadow-sm"
        />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">Our mission</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-navy">
            Good care should be easy to get
          </h2>
          <p className="mt-4 text-foreground/65">
            Noor started because getting a doctor&apos;s appointment in the evening, with a
            doctor who spoke your language and took your insurance, was harder than it
            should be. Ten years later that is still the whole idea: same-day appointments,
            published prices, direct insurance billing and doctors who take the time to explain.
          </p>
          <Link href="/doctors" className="mt-6 inline-block rounded-full bg-teal px-6 py-3 text-sm font-bold text-white hover:bg-teal-dark">
            Meet our doctors
          </Link>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display mb-10 text-center text-3xl font-extrabold text-navy">What we stand for</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-teal-soft text-teal-dark">
                  <v.icon className="size-5" />
                </span>
                <h3 className="font-display font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <h2 className="font-display mb-10 text-center text-3xl font-extrabold text-navy">Our journey</h2>
        <ol className="relative space-y-8 border-l-2 border-teal-soft pl-8">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[41px] top-0.5 size-4 rounded-full border-4 border-background bg-teal" />
              <p className="font-display text-lg font-extrabold text-teal-dark">{t.year}</p>
              <p className="mt-1 text-foreground/70">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
