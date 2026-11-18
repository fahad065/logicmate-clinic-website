export type ServiceCategory = "Primary Care" | "Women & Children" | "Skin & Smile" | "Diagnostics & Rehab";

export interface ClinicService {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: string;
  duration: string;
  prep?: string;
  badge?: string;
}

export const serviceCategories: ServiceCategory[] = [
  "Primary Care",
  "Women & Children",
  "Skin & Smile",
  "Diagnostics & Rehab",
];

export const services: ClinicService[] = [
  {
    id: "gp",
    name: "General Practitioner Consultation",
    category: "Primary Care",
    description: "Check-ups, colds and fevers, chronic-condition follow-ups and referrals.",
    price: "AED 250",
    duration: "20 min",
    badge: "Walk-ins welcome",
  },
  {
    id: "specialist",
    name: "Specialist Consultation",
    category: "Primary Care",
    description: "First visit with any of our specialists — orthopaedics, dermatology, gynaecology and more.",
    price: "AED 450",
    duration: "30 min",
  },
  {
    id: "health-check",
    name: "Annual Health Check",
    category: "Primary Care",
    description: "GP review, blood pressure, BMI, full blood count, sugar, cholesterol, liver and kidney panel.",
    price: "AED 699",
    duration: "60 min",
    prep: "Fast for 10–12 hours before (water is fine).",
    badge: "Most booked",
  },
  {
    id: "teleconsult",
    name: "Video Consultation",
    category: "Primary Care",
    description: "See a GP from home for minor illnesses, prescriptions refills and lab-result reviews.",
    price: "AED 199",
    duration: "15 min",
  },
  {
    id: "paeds",
    name: "Paediatric Consultation",
    category: "Women & Children",
    description: "Newborn to 16 years — growth checks, illnesses and developmental reviews.",
    price: "AED 350",
    duration: "30 min",
  },
  {
    id: "vaccines",
    name: "Child Vaccinations",
    category: "Women & Children",
    description: "The full UAE national schedule plus optional vaccines. Bring your child's vaccination card.",
    price: "From AED 150",
    duration: "15 min",
    prep: "Bring the vaccination card / Emirates ID of the child.",
  },
  {
    id: "gynae",
    name: "Gynaecology & Antenatal Care",
    category: "Women & Children",
    description: "Well-woman checks, pregnancy follow-ups and scans with female doctors.",
    price: "AED 450",
    duration: "30 min",
  },
  {
    id: "derm",
    name: "Dermatology Consultation",
    category: "Skin & Smile",
    description: "Acne, eczema, moles, hair loss and skin checks.",
    price: "AED 450",
    duration: "30 min",
  },
  {
    id: "aesthetics",
    name: "Aesthetic Treatments",
    category: "Skin & Smile",
    description: "Laser hair removal, chemical peels and skin-booster treatments by certified doctors.",
    price: "From AED 600",
    duration: "45 min",
    badge: "Marina branch",
  },
  {
    id: "dental",
    name: "Dental Check-up & Cleaning",
    category: "Skin & Smile",
    description: "Exam, scale and polish, and X-rays if needed.",
    price: "AED 350",
    duration: "45 min",
  },
  {
    id: "lab",
    name: "Blood Tests & Lab",
    category: "Diagnostics & Rehab",
    description: "Most results within 24 hours, sent to your phone. Vitamin D, thyroid, HbA1c and more.",
    price: "From AED 90",
    duration: "10 min",
    prep: "Some tests need fasting — we tell you when you book.",
  },
  {
    id: "physio",
    name: "Physiotherapy Session",
    category: "Diagnostics & Rehab",
    description: "Back and neck pain, sports injuries and post-surgery rehab.",
    price: "AED 380",
    duration: "45 min",
    prep: "Wear comfortable clothes and bring any scans or reports.",
  },
];
