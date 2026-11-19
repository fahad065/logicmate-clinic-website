import type { CountryCode } from "./locations";

export type ServiceCategory = "Primary Care" | "Women & Children" | "Skin & Smile" | "Diagnostics & Rehab";

export interface ClinicService {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  /** Self-pay price per country; a missing country = not offered there. */
  price: Partial<Record<CountryCode, string>>;
  duration: string;
  prep?: string;
  badge?: string;
}

export const serviceCategories: ServiceCategory[] = ["Primary Care", "Women & Children", "Skin & Smile", "Diagnostics & Rehab"];

export const services: ClinicService[] = [
  {
    id: "gp",
    name: "GP / Family Doctor Visit",
    category: "Primary Care",
    description: "Check-ups, colds and fevers, chronic-condition follow-ups, prescriptions and referrals.",
    price: { US: "$165", GB: "£95", AE: "AED 250", AU: "A$95", CA: "Covered by OHIP" },
    duration: "20 min",
    badge: "Same-day",
  },
  {
    id: "specialist",
    name: "Specialist Consultation",
    category: "Primary Care",
    description: "First visit with a specialist — dermatology, gynaecology, paediatrics and more.",
    price: { US: "$290", GB: "£195", AE: "AED 450", AU: "A$220", CA: "C$240" },
    duration: "30 min",
  },
  {
    id: "health-check",
    name: "Annual Health Check",
    category: "Primary Care",
    description: "Doctor review, blood pressure, BMI, full blood count, sugar, cholesterol, liver and kidney panel.",
    price: { US: "$349", GB: "£249", AE: "AED 699", AU: "A$299", CA: "C$329" },
    duration: "60 min",
    prep: "Fast for 10–12 hours before (water is fine).",
    badge: "Most booked",
  },
  {
    id: "telehealth",
    name: "Video Consultation",
    category: "Primary Care",
    description: "See a doctor from home for minor illnesses, repeat prescriptions and test-result reviews.",
    price: { US: "$89", GB: "£55", AE: "AED 199", AU: "A$65", CA: "Covered by OHIP" },
    duration: "15 min",
  },
  {
    id: "paeds",
    name: "Children's Doctor Visit",
    category: "Women & Children",
    description: "Newborn to 16 years — growth checks, illnesses and developmental reviews.",
    price: { US: "$185", GB: "£120", AE: "AED 350", AU: "Bulk billed", CA: "Covered by OHIP" },
    duration: "30 min",
  },
  {
    id: "vaccines",
    name: "Vaccinations",
    category: "Women & Children",
    description: "Childhood schedule, flu shots and travel vaccines. Bring your vaccination record.",
    price: { US: "From $45", GB: "From £35", AE: "From AED 150", AU: "From A$40", CA: "From C$40" },
    duration: "15 min",
    prep: "Bring your (or your child's) vaccination record.",
  },
  {
    id: "womens-health",
    name: "Women's Health & Antenatal Care",
    category: "Women & Children",
    description: "Well-woman checks, contraception, pregnancy follow-ups — female doctors available.",
    price: { US: "$260", GB: "£180", AE: "AED 450", CA: "C$220" },
    duration: "30 min",
  },
  {
    id: "derm",
    name: "Skin Check / Dermatology",
    category: "Skin & Smile",
    description: "Mole and skin-cancer checks, acne, eczema and hair loss.",
    price: { US: "$240", GB: "£175", AE: "AED 450", AU: "A$150" },
    duration: "30 min",
  },
  {
    id: "dental",
    name: "Dental Check-up & Cleaning",
    category: "Skin & Smile",
    description: "Exam, scale and polish, and X-rays if needed.",
    price: { AE: "AED 350" },
    duration: "45 min",
    badge: "Dubai only",
  },
  {
    id: "lab",
    name: "Blood Tests",
    category: "Diagnostics & Rehab",
    description: "Most results within 24 hours, sent to your phone. Vitamin D, thyroid, HbA1c and more.",
    price: { US: "From $49", GB: "From £39", AE: "From AED 90", AU: "Bulk billed with referral", CA: "Covered by OHIP with requisition" },
    duration: "10 min",
    prep: "Some tests need fasting — we tell you when you book.",
  },
  {
    id: "physio",
    name: "Physiotherapy Session",
    category: "Diagnostics & Rehab",
    description: "Back and neck pain, sports injuries and post-surgery rehab.",
    price: { GB: "£70", AU: "A$110", CA: "C$120" },
    duration: "45 min",
    prep: "Wear comfortable clothes and bring any scans or reports.",
  },
];
