export interface ClinicLocation {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  fridayHours: string;
  specialities: string[];
  facilities: string[];
  insurance: string[];
}

export const locations: ClinicLocation[] = [
  {
    id: "jumeirah",
    name: "Noor Family Clinic — Jumeirah",
    area: "Jumeirah",
    city: "Dubai",
    address: "Villa 214, Jumeirah Beach Road, Jumeirah 2, Dubai",
    phone: "+971 4 555 0141",
    hours: "Sat–Thu: 8:00 AM – 10:00 PM",
    fridayHours: "Fri: 2:00 PM – 10:00 PM",
    specialities: ["General Practice", "Paediatrics", "Dermatology", "Dental"],
    facilities: ["Free parking", "Wheelchair access", "In-house lab", "Pharmacy next door"],
    insurance: ["Daman", "AXA", "Bupa Global", "Cigna", "MetLife", "NextCare", "Neuron"],
  },
  {
    id: "al-barsha",
    name: "Noor Family Clinic — Al Barsha",
    area: "Al Barsha",
    city: "Dubai",
    address: "Ground Floor, Al Barsha Tower 3, Al Barsha 1, Dubai",
    phone: "+971 4 555 0187",
    hours: "Daily: 8:00 AM – 11:00 PM",
    fridayHours: "Fri: 8:00 AM – 11:00 PM",
    specialities: ["General Practice", "Gynaecology", "Physiotherapy", "Laboratory"],
    facilities: ["Basement parking", "Wheelchair access", "In-house lab", "Female doctors available"],
    insurance: ["Daman", "AXA", "NAS", "NextCare", "Oman Insurance (Sukoon)", "ADNIC"],
  },
  {
    id: "dubai-marina",
    name: "Noor Family Clinic — Dubai Marina",
    area: "Dubai Marina",
    city: "Dubai",
    address: "Unit 12, Marina Promenade, Dubai Marina, Dubai",
    phone: "+971 4 555 0163",
    hours: "Sat–Thu: 9:00 AM – 9:00 PM",
    fridayHours: "Fri: Closed",
    specialities: ["Dermatology", "Aesthetics", "Dental"],
    facilities: ["Valet parking", "Metro: DMCC (5 min walk)", "Wheelchair access"],
    insurance: ["AXA", "Bupa Global", "Cigna", "Allianz Care"],
  },
  {
    id: "abu-dhabi",
    name: "Noor Family Clinic — Al Reem Island",
    area: "Al Reem Island",
    city: "Abu Dhabi",
    address: "Level 1, Shams Boutik Mall, Al Reem Island, Abu Dhabi",
    phone: "+971 2 555 0119",
    hours: "Sat–Thu: 8:00 AM – 10:00 PM",
    fridayHours: "Fri: 4:00 PM – 10:00 PM",
    specialities: ["General Practice", "Paediatrics", "Orthopaedics", "Physiotherapy"],
    facilities: ["Mall parking (3 hours free)", "Wheelchair access", "Kids' play corner"],
    insurance: ["Daman (Thiqa & Enhanced)", "ADNIC", "NAS", "AXA", "Neuron"],
  },
  {
    id: "sharjah",
    name: "Noor Family Clinic — Al Majaz",
    area: "Al Majaz",
    city: "Sharjah",
    address: "Corniche Street, Al Majaz 3, Sharjah",
    phone: "+971 6 555 0172",
    hours: "Sat–Thu: 8:00 AM – 9:00 PM",
    fridayHours: "Fri: 4:00 PM – 9:00 PM",
    specialities: ["General Practice", "Paediatrics", "Gynaecology", "Dental"],
    facilities: ["Free parking", "Female doctors available", "In-house lab"],
    insurance: ["Daman", "NAS", "NextCare", "Oman Insurance (Sukoon)", "MetLife"],
  },
];

export const cities = Array.from(new Set(locations.map((l) => l.city)));

/** Every insurance provider accepted at one or more branches, A–Z. */
export const allInsurers = Array.from(new Set(locations.flatMap((l) => l.insurance))).sort();
