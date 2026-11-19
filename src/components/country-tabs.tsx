"use client";

import { countries, type CountryCode } from "@/data/locations";

export function CountryTabs({
  value,
  onChange,
  includeAll,
}: {
  value: CountryCode | "all";
  onChange: (v: CountryCode | "all") => void;
  includeAll?: boolean;
}) {
  const items: { key: CountryCode | "all"; label: string }[] = [
    ...(includeAll ? [{ key: "all" as const, label: "All Countries" }] : []),
    ...countries.map((c) => ({ key: c.code, label: `${c.flag} ${c.name}` })),
  ];
  return (
    <div className="flex gap-2 overflow-x-auto">
      {items.map((it) => (
        <button
          key={it.key}
          onClick={() => onChange(it.key)}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
            value === it.key ? "border-teal bg-teal text-white" : "border-black/10 bg-white text-foreground/70 hover:border-teal/50"
          }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
