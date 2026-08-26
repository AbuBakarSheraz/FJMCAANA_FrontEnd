export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string; // path relative to /public/team/
  highlight: string; // short pull for the homepage slider
  message: string; // full message shown on the team page
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "umbreen-chaudhary",
    name: "Dr. Umbreen Chaudhary",
    role: "President",
    image: "/images/president.png",
    highlight:
      "President of FJMCAANA 2025 & 2026, Class of '97. Dedicated to celebrating women in medicine and supporting the next generation of female physicians.",
    message: `Ladies of FJMCAANA,

It is an honor to serve as the president of this remarkable organization, which is dedicated to celebrating women in medicine and supporting the next generation of female physicians.

Our association was founded with a vision to connect, inspire, and empower women who have dedicated their lives to medicine. Through our collective experiences, we continue to shape the future of healthcare while addressing the unique challenges that women face in the profession.

As we move forward, our focus remains on creating opportunities for mentorship, professional growth, and supporting our alma mater. Whether you are a seasoned physician or just beginning your medical journey, we are here to provide a supportive community.

I invite you to join me in supporting our many philanthropic projects for 2025 and look forward to connecting with each of you.

Umbreen Chaudhary MD`,
  },
  {
    slug: "amnah-andrabi",
    name: "Dr. Amnah Andrabi",
    role: "Councilor",
    image: "/team/Amnah_Andrabi.png",
    highlight:
      "Assistant Professor of Internal Medicine at the University of North Texas Health Science Center, practicing inpatient medicine at Medical City Arlington.",
    message: `I am Dr. Amnah Andrabi and I am Assistant Professor of Internal Medicine at the University of North Texas Health Science Center and I practice inpatient medicine at Medical City Arlington. I serve as Core Faculty for the Internal Medicine Residency Program at Medical City Arlington and as Associate Medical Director of the Hospitalist Group with Envision Health at Medical City Arlington. My work centers on rigorous bedside medicine, clear clinical reasoning, and the careful alignment of evidence with the real-world complexity of hospitalized patients. I am committed to resident education and physician leadership, with a focus on building thoughtful clinicians who practice with precision, humility, and accountability. I value disciplined communication, ethical decision-making, and patient-centered care that remains calm, decisive, and intellectually honest under pressure.`,
  },
  {
    slug: "hina-iqbal",
    name: "Dr. Hina Iqbal",
    role: "Councilor",
    image: "/team/Hina_Iqbal.png",
    highlight:
      "Family physician in Calgary with a background in OBGYN, women's health, and clinical and qualitative research.",
    message: `I am a family physician in Calgary with a background in OBGYN, women's health, clinical and qualitative research. I have previously worked as a research coordinator in Respirology at the university of Calgary, with CDC's TBTC Consortium and a local NGO in Calgary. I have experience working with multicultural and underserved communities through my community practice and nonprofit organizations. I greatly value health equity, education and patient centred care. I look forward to working together and contributing to our community as a Council Member.`,
  },
  {
    slug: "sahrish-mahmood",
    name: "Dr. Sahrish Mahmood",
    role: "Councilor",
    image: "/team/Sehrish_Mehmood.png",
    highlight:
      "2011 graduate of FJMC, currently living in Virginia and working in peer review and utilization review.",
    message: `I am Dr. Sahrish Mahmood. I am a 2011 graduate of FJMC, currently living in Virginia and working in peer review and utilization review. I have extensive volunteer experience with nonprofit organizations across the DMV area, including a Korean organization and the Fairfax County Health Department, among others. I have been recognized with an award for community health services in Fairfax County.

During my first year of medical school, I also won a beauty contest in the FMJC hostel and was crowned for that achievement. Outside of work, I love traveling and am deeply in love with fashion.`,
  },
  {
    slug: "naghmna-bajwa",
    name: "Dr. Naghmana Bajwa",
    role: "Treasurer",
    image: "/team/Naghmna_Bajwa.png",
    highlight:
      "General Surgeon turned biopharma leader, currently Global Safety Head at AstraZeneca, with 25 years of service to APPNA.",
    message: `I am Dr. Naghmana Bajwa, General Surgeon turned biopharma leader, currently Global Safety Head at AstraZeneca. Work spans drugs, devices and biologics development with contributions to international regulatory and treatment guidelines. Led global teams across Medical/Clinical/Regulatory/Safety/PV/Medical Review, Risk, and Data Management. Played key role in multiple product approvals in diverse therapeutic areas at international organizations. Actively contributed to Bill Clinton's HIV Initiative, global consortia, published and invited international speaker; recognized by FJMU, APPNA MD chapter, multiple employers, as a global senior/international leader and a lifetime woman of excellence.

Civic work includes HR advocacy; member of AZ PAC and Bayer PAC- at Capitol Hill & the White House. Served APPNA off & on for 25 years including BOD and presidential campaigns, Liaison Committee, Fall Host Committee and WAPPNA Treasurer. I've provided transparent stewardship as an HDF DMV board member, Shaukat Khanum fundraiser organizer, founding member of American Muslim Voice after 9/11; and helped launch Mashal to showcase Pakistani culture in the SF Bay Area; delivered Symposia, Keynote addresses, CMEs and lectures at DOW and FJMU. Bring disciplined support to FJMCAANA in financial management, governance compliance and reporting with a strategic focus on long-term sustainability.

I stand for ONE global FJMCAANA Family serving with integrity, inclusion, and transparency.`,
  },
  {
    slug: "fauzia-anwar",
    name: "Dr. Fauzia Anwar",
    role: "Executive Council Member-at-Large",
    image: "/team/Fauzia_Anwar.png",
    highlight:
      "MD, FFPM — distinguished graduate of FJMU (Class of 1986), now Senior Director and Program Lead at a leading global pharmaceutical company.",
    message: `Dr. Fauzia Anwar-MD, FFPM, is a distinguished graduate of Fatima Jinnah Medical University (Class of 1986). She trained in General Surgery and later served as an Attending Physician at the National Guard Military Royal Forces Hospital.

Currently based in New Jersey, USA, Dr. Anwar completed a Research Fellowship in Infectious Diseases at the University of Medicine and Dentistry of New Jersey (UMDNJ) and subsequently transitioned into Pharmaceutical Medicine. She now serves as a Senior Director and Program Lead at a leading global pharmaceutical company.

Dr. Anwar is a Fellow of the Faculty of Pharmaceutical Medicine (FFPM), Royal College of Physicians (UK), and an active mentor for the Rutgers Fellowship in Pharmaceutical Medicine as well as within her organization. She also holds a leadership role with the APPNA New Jersey Chapter, contributing to education, mentorship, and professional development within the medical community.`,
  },
  {
    slug: "azra-khan",
    name: "Dr. Azra Khan",
    role: "Past President 2025",
    image: "/team/Azra_Khan.png",
    highlight:
      "MBBS, FJMU Lahore 1984 — anesthesiologist in South Florida and a longtime advocate for medical education across borders.",
    message: `Dr. Azra Khan MBBS graduated from FJMU Lahore in 1984.

She did her residency training in Internal Medicine and OB/GYN at SGRH Lahore.

Dr. Khan served as Medical Officer in Coronary Care Unit and Emergency Department at SGRH where she was responsible for education and training of medical and nursing students as well as mentoring of the interns and residents.

She later served as Resident Staff medical officer in OB/GYN Dept. at a tertiary care hospital in Rawalpindi where her duties were clinical as well as academic teaching and mentoring.

Dr. Khan emigrated to the United States in 1991 and did her residency training in Anesthesiology at Jackson Memorial Hospital, Miami, FL.

Her special interest is Ambulatory Anesthesia services. She is on staff in a very busy and thriving surgical center in south Florida.

Dr. Khan is a very proud member of local APPNA chapter and participates in all activities related to community health education, youth debate programs, Pakistani cultural activities, free clinic, health fairs, project downtown and food banks. She is a physician at PAKAM free clinic.

Dr. Khan is keenly aware of the responsibilities of the Expatriate Alumni towards their Alma-maters and mother countries. She has been a strong proponent for disseminating medical knowledge and skills to medical schools and physicians in Pakistan via Telemedicine, Tele-seminars and Telementoring.

She is representing her FJMCAANA as member of APPNA scholarship committee to financially help the deserving medical students at FJMU complete their medical education. She will be helping to raise funds for her Alumni projects.

Dr. Khan loves reading, hiking, globe trotting. She is very successfully cultivating a variety of mango trees in south FL.

Dr. Khan is a supporter of better maternal and family health through preventive health education, optimum nutrition and exercise.`,
  },
  {
    slug: "sumra-rathore",
    name: "Sumra Rathore, MD, MPH",
    role: "Secretary",
    image: "/team/Sumra_Rathore.jpeg",
    highlight:
      "Board-certified pathologist and Medical Director of Sonic Health Laboratory, the third largest commercial referral laboratory in the United States.",
    message: `Sumra Rathore, MD, MPH, class of 1987 is board-certified pathologist. She is the Medical Director of Sonic Health Laboratory, third largest commercial referral laboratory in the United States. She served as treasurer of FJ alumni a decade ago and is excited to serve in the same capacity with a much-renewed interest. She is an avid animal lover and loves nature and the outdoors. Her husband is a physician, her elder son and his wife work for the US government, and her younger son is a third-year resident.`,
  },
];
