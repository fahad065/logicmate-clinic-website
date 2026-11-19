export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  languages: string[];
  /** Branch ids from locations.ts */
  branches: string[];
  experience: string;
  bio: string;
  img: string;
  female?: boolean;
}

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

export const doctors: Doctor[] = [
  { id: "emily-carter", name: "Dr. Emily Carter", speciality: "Family Medicine", languages: ["English", "Spanish"], branches: ["new-york"], experience: "14 years", bio: "Leads our New York team. Special interest in diabetes and preventive health checks.", img: u("photo-1559839734-2b71ea197ec2"), female: true },
  { id: "marcus-reid", name: "Dr. Marcus Reid", speciality: "Paediatrics", languages: ["English"], branches: ["new-york", "toronto"], experience: "11 years", bio: "Calm with nervous little ones. Newborn care, asthma and allergies in children.", img: u("photo-1612349317150-e413f6a5b16d") },
  { id: "priya-shah", name: "Dr. Priya Shah", speciality: "Private GP", languages: ["English", "Hindi", "Gujarati"], branches: ["london"], experience: "12 years", bio: "Unhurried 20-minute GP appointments, women's health and travel medicine.", img: u("photo-1594824476967-48c8b964273f"), female: true },
  { id: "layla-al-mansoori", name: "Dr. Layla Al Mansoori", speciality: "Obstetrics & Gynaecology", languages: ["English", "Arabic"], branches: ["dubai"], experience: "16 years", bio: "Antenatal care and women's health, with a focus on making every visit unhurried.", img: u("photo-1651008376811-b90baee60c1f"), female: true },
  { id: "omar-farouk", name: "Dr. Omar Farouk", speciality: "Paediatrics", languages: ["English", "Arabic", "French"], branches: ["dubai"], experience: "10 years", bio: "Children's doctor in Dubai; evening and Friday clinics.", img: u("photo-1582750433449-648ed127bb54") },
  { id: "james-whitfield", name: "Dr. James Whitfield", speciality: "General Practice & Skin Checks", languages: ["English"], branches: ["sydney"], experience: "18 years", bio: "Skin-cancer checks and sports injuries. Works closely with our physiotherapists.", img: u("photo-1622253692010-333f2da6031d") },
  { id: "mei-lin-chen", name: "Dr. Mei-Lin Chen", speciality: "Family Medicine", languages: ["English", "Mandarin", "Cantonese"], branches: ["toronto", "sydney"], experience: "9 years", bio: "Family medicine for all ages, plus telehealth for patients who can't come in.", img: u("photo-1584467735871-8e85353a8413"), female: true },
  { id: "daniel-okafor", name: "Daniel Okafor", speciality: "Physiotherapy", languages: ["English", "Yoruba"], branches: ["london", "toronto"], experience: "12 years", bio: "Back pain, posture and post-surgery rehab. Former professional-football physio.", img: u("photo-1537368910025-700350fe46c7") },
];
