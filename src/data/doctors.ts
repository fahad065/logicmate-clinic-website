export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  languages: string[];
  branches: string[];
  experience: string;
  bio: string;
  img: string;
  female?: boolean;
}

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

export const doctors: Doctor[] = [
  {
    id: "sara-haddad",
    name: "Dr. Sara Haddad",
    speciality: "Family Medicine (GP)",
    languages: ["English", "Arabic", "French"],
    branches: ["Jumeirah", "Al Barsha"],
    experience: "14 years",
    bio: "Leads our family-medicine team. Special interest in diabetes and preventive health checks.",
    img: u("photo-1559839734-2b71ea197ec2"),
    female: true,
  },
  {
    id: "omar-farouk",
    name: "Dr. Omar Farouk",
    speciality: "Paediatrics",
    languages: ["English", "Arabic"],
    branches: ["Jumeirah", "Al Reem Island"],
    experience: "11 years",
    bio: "Calm with nervous little ones. Newborn care, asthma and allergies in children.",
    img: u("photo-1612349317150-e413f6a5b16d"),
  },
  {
    id: "anjali-menon",
    name: "Dr. Anjali Menon",
    speciality: "Dermatology",
    languages: ["English", "Hindi", "Malayalam"],
    branches: ["Jumeirah", "Dubai Marina"],
    experience: "9 years",
    bio: "Acne, eczema and pigmentation. Also performs our medical aesthetic treatments.",
    img: u("photo-1594824476967-48c8b964273f"),
    female: true,
  },
  {
    id: "layla-al-mansoori",
    name: "Dr. Layla Al Mansoori",
    speciality: "Obstetrics & Gynaecology",
    languages: ["English", "Arabic"],
    branches: ["Al Barsha", "Al Majaz"],
    experience: "16 years",
    bio: "Antenatal care and women's health, with a focus on making every visit unhurried.",
    img: u("photo-1651008376811-b90baee60c1f"),
    female: true,
  },
  {
    id: "james-whitfield",
    name: "Dr. James Whitfield",
    speciality: "Orthopaedics",
    languages: ["English"],
    branches: ["Al Reem Island"],
    experience: "18 years",
    bio: "Knee, shoulder and sports injuries. Works hand-in-hand with our physiotherapists.",
    img: u("photo-1622253692010-333f2da6031d"),
  },
  {
    id: "rania-khoury",
    name: "Dr. Rania Khoury",
    speciality: "Dentistry",
    languages: ["English", "Arabic"],
    branches: ["Jumeirah", "Dubai Marina", "Al Majaz"],
    experience: "10 years",
    bio: "Family dentistry, cleanings and gentle care for anxious patients.",
    img: u("photo-1584467735871-8e85353a8413"),
    female: true,
  },
  {
    id: "vikram-rao",
    name: "Mr. Vikram Rao",
    speciality: "Physiotherapy",
    languages: ["English", "Hindi", "Tamil"],
    branches: ["Al Barsha", "Al Reem Island"],
    experience: "12 years",
    bio: "Back pain, posture and post-surgery rehab. Former national-team physio.",
    img: u("photo-1537368910025-700350fe46c7"),
  },
  {
    id: "hassan-qureshi",
    name: "Dr. Hassan Qureshi",
    speciality: "Family Medicine (GP)",
    languages: ["English", "Arabic", "Urdu"],
    branches: ["Al Majaz", "Al Reem Island"],
    experience: "8 years",
    bio: "Evening and Friday GP clinics. Also runs our video consultations.",
    img: u("photo-1582750433449-648ed127bb54"),
  },
];
