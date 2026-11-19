export type CountryCode = "US" | "GB" | "AE" | "AU" | "CA";

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  emergency: string;
}

export const countries: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", emergency: "911" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", emergency: "999" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", emergency: "998" },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", emergency: "000" },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD", emergency: "911" },
];

export const countryOf = (code: CountryCode) => countries.find((c) => c.code === code)!;

export interface ClinicLocation {
  id: string;
  name: string;
  city: string;
  country: CountryCode;
  address: string;
  phone: string;
  weekdayHours: string;
  weekendHours: string;
  timezone: string;
  specialities: string[];
  facilities: string[];
  insurance: string[];
  insuranceNote?: string;
}

export const locations: ClinicLocation[] = [
  {
    id: "new-york",
    name: "Meridian Family Clinic — New York",
    city: "New York",
    country: "US",
    address: "2nd Floor, 245 W 52nd Street, Manhattan, NY 10019, USA",
    phone: "+1 (212) 555-0147",
    weekdayHours: "Mon–Fri: 7:00 AM – 9:00 PM",
    weekendHours: "Sat–Sun: 9:00 AM – 5:00 PM",
    timezone: "Eastern Time (ET)",
    specialities: ["Primary Care", "Paediatrics", "Dermatology", "Laboratory"],
    facilities: ["Subway: 50 St (2 min walk)", "Wheelchair access", "Same-day lab results"],
    insurance: ["Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", "Medicare"],
    insuranceNote: "Bring your insurance card and photo ID. Co-pays are collected at check-in.",
  },
  {
    id: "london",
    name: "Meridian Family Clinic — London",
    city: "London",
    country: "GB",
    address: "38 Marylebone High Street, London W1U 4QE, UK",
    phone: "+44 20 7946 0158",
    weekdayHours: "Mon–Fri: 8:00 AM – 8:00 PM",
    weekendHours: "Sat: 9:00 AM – 4:00 PM · Sun: Closed",
    timezone: "UK time (GMT/BST)",
    specialities: ["Private GP", "Women's Health", "Physiotherapy", "Health Checks"],
    facilities: ["Tube: Baker Street (6 min walk)", "Step-free access", "Female GPs available"],
    insurance: ["Bupa", "AXA Health", "Aviva", "Vitality"],
    insuranceNote: "We are a private clinic and don't provide NHS services. Ask your insurer for a pre-authorisation code for specialist visits.",
  },
  {
    id: "dubai",
    name: "Meridian Family Clinic — Dubai",
    city: "Dubai",
    country: "AE",
    address: "Ground Floor, Al Barsha Tower 3, Al Barsha 1, Dubai, UAE",
    phone: "+971 4 555 0141",
    weekdayHours: "Sat–Thu: 8:00 AM – 10:00 PM",
    weekendHours: "Fri: 2:00 PM – 10:00 PM",
    timezone: "Gulf Standard Time (GST)",
    specialities: ["General Practice", "Paediatrics", "Gynaecology", "Dental"],
    facilities: ["Free basement parking", "Wheelchair access", "Female doctors available"],
    insurance: ["Daman", "AXA", "NAS", "NextCare", "Bupa Global"],
    insuranceNote: "Bring your insurance card and Emirates ID. We bill your insurer directly.",
  },
  {
    id: "sydney",
    name: "Meridian Family Clinic — Sydney",
    city: "Sydney",
    country: "AU",
    address: "Level 3, 120 Pitt Street, Sydney NSW 2000, Australia",
    phone: "+61 2 5550 1432",
    weekdayHours: "Mon–Fri: 7:30 AM – 7:00 PM",
    weekendHours: "Sat: 8:30 AM – 1:00 PM · Sun: Closed",
    timezone: "Australian Eastern Time (AET)",
    specialities: ["General Practice", "Skin Checks", "Physiotherapy", "Travel Vaccines"],
    facilities: ["Train: Martin Place (3 min walk)", "Lift access", "Telehealth available"],
    insurance: ["Medicare (bulk billing for under-16s and concession card holders)", "Bupa", "Medibank", "HCF", "nib"],
    insuranceNote: "Bring your Medicare card. Private health insurance covers physiotherapy only, depending on your extras cover.",
  },
  {
    id: "toronto",
    name: "Meridian Family Clinic — Toronto",
    city: "Toronto",
    country: "CA",
    address: "Suite 410, 55 Bloor Street West, Toronto, ON M4W 1A5, Canada",
    phone: "+1 (416) 555-0193",
    weekdayHours: "Mon–Fri: 8:00 AM – 8:00 PM",
    weekendHours: "Sat: 9:00 AM – 3:00 PM · Sun: Closed",
    timezone: "Eastern Time (ET)",
    specialities: ["Family Medicine", "Walk-in Clinic", "Paediatrics", "Physiotherapy"],
    facilities: ["Subway: Bloor-Yonge (4 min walk)", "Wheelchair access", "Walk-ins welcome"],
    insurance: ["OHIP", "Sun Life", "Manulife", "Canada Life"],
    insuranceNote: "Bring your OHIP card. Physiotherapy is billed to your extended-health plan, not OHIP.",
  },
];

/** Every insurer accepted at one or more branches, A–Z. */
export const allInsurers = Array.from(new Set(locations.flatMap((l) => l.insurance))).sort();
