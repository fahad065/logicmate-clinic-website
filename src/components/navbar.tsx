"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Stethoscope, Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/insurance", label: "Insurance" },
  { href: "/locations", label: "Branches" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-teal text-white">
            <Stethoscope className="size-5" />
          </span>
          <span className="leading-none">
            <span className="font-display block text-lg font-extrabold text-navy">Noor</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-dark">
              Family Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-teal-dark" : "text-navy/70 hover:text-teal-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+97145550141" className="flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-teal-dark">
            <Phone className="size-3.5" /> 800 NOOR
          </a>
          <Link
            href="/book"
            className="rounded-full bg-teal px-5 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-teal-dark"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="text-navy lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-semibold ${
                  pathname === link.href ? "text-teal-dark" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-teal px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
