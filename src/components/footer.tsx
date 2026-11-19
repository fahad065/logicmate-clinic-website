import Link from "next/link";
import { Stethoscope, MapPin, Mail, Siren } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { locations, countries, countryOf } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-teal text-white">
              <Stethoscope className="size-4" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">Meridian Family Clinic</span>
          </div>
          <p className="text-sm leading-relaxed text-white/55">
            {locations.length} clinics in {countries.length} countries. Family doctors, specialists,
            skin checks and physiotherapy — care for every age, wherever you are.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white/55 hover:text-teal-soft"><FaInstagram className="size-5" /></a>
            <a href="#" aria-label="Facebook" className="text-white/55 hover:text-teal-soft"><FaFacebook className="size-5" /></a>
            <a href="#" aria-label="WhatsApp" className="text-white/55 hover:text-teal-soft"><FaWhatsapp className="size-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-soft">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-teal-soft">Services &amp; Prices</Link></li>
            <li><Link href="/doctors" className="hover:text-teal-soft">Our Doctors</Link></li>
            <li><Link href="/insurance" className="hover:text-teal-soft">Insurance</Link></li>
            <li><Link href="/locations" className="hover:text-teal-soft">All Clinics</Link></li>
            <li><Link href="/book" className="hover:text-teal-soft">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-soft">Our clinics</h4>
          <ul className="space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.id} className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-teal-soft" />
                <span>{l.city}, {countryOf(l.country).name}</span>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-1">
              <Mail className="size-4 shrink-0 text-teal-soft" />
              <span>care@meridianclinic.example</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-soft">Emergency</h4>
          <p className="flex items-start gap-2 text-sm text-white/65">
            <Siren className="mt-0.5 size-4 shrink-0 text-coral" />
            <span>
              We are outpatient clinics, not emergency departments. In an emergency call your
              local emergency number:{" "}
              {countries.map((c, i) => (
                <span key={c.code}>
                  <strong className="text-white">{c.emergency}</strong> {c.name === "United Arab Emirates" ? "UAE" : c.name === "United Kingdom" ? "UK" : c.name === "United States" ? "USA" : c.name}
                  {i < countries.length - 1 ? " · " : "."}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Meridian Family Clinic. Demo site for illustrative purposes — not a real clinic.
      </div>
    </footer>
  );
}
