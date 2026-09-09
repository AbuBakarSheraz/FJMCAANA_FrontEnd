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
    name: "Umbreen Chaudhary, MD",
    role: "President",
    image: "/images/president.png",
    highlight:
      "Founder of Rejuvenation MD and Vein Center, with a passion for philanthropy, mentorship, and empowering young women to pursue meaningful careers.",
    message: `Graduated from Fatima Jinnah Medical University Lahore, Pakistan- 1997 Internal Medicine and Aesthetics

I am originally from the USA and moved to Pakistan for my medical education at FJMC. I graduated from FJMC in 1997 and went on to do an Internal Medicine residency at Overlook Hospital in NJ followed by a geriatric fellowship at Winthrop University Hospital in NY. My husband and I moved to NC in 2003 with two children. I established my private practice, Rejuvenation MD and Vein Center in 2004. I became involved with FJMCAANA because of their philanthropic efforts. I could see the momentum that the alumni were garnishing and I wanted to support their many projects. My personal passion is mentoring young women and encouraging them to pursue careers.`,
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
    message: `Dr. Sahrish Mahmood, a proud graduate of Fatima Jinnah Medical University (FJMU), Lahore, is a healthcare professional and dedicated community leader with a strong commitment to quality healthcare, public health, health equity, and service.
In the United States, she has built expertise in Utilization and Peer Review, supporting high-quality, appropriate, and patient-centered care. Her passion for service extends beyond medicine through her work with nonprofits, free clinics, public health programs, and South Asian community initiatives across the DMV.

Her dedication to community service, volunteerism, and leadership has earned her multiple awards and honors. She continues to advocate for culturally responsive healthcare and empower underserved communities through education, outreach, and meaningful engagement.

Inspired by the values of FJMU, Dr. Mahmood believes that true leadership is about serving others, creating connections, and making a lasting difference.`  },
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
 
];
