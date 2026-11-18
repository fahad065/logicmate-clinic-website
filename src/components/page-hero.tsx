import type { LucideIcon } from "lucide-react";

export function PageHero({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute -bottom-32 right-0 size-80 rounded-full bg-coral/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-soft/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-soft">
          <Icon className="size-3.5" /> {eyebrow}
        </span>
        <h1 className="font-display text-balance text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{subtitle}</p>
      </div>
    </section>
  );
}
