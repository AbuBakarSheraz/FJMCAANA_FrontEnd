import type { Cause, NewsItem } from "@/lib/types";

export type ContentSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: { title: string; detail?: string; href?: string; image?: string; }[];
};

export type ContentPage = {
  path: string[];
  eyebrow: string;
  title: string;
  description: string;
  sections: ContentSection[];
};

export const FEATURED_CAUSES: Cause[] = [
  {
    slug: "cornea-transplant-project-2026",
    title: "Cornea Transplant Project 2026",
    amountRaised: "$0",
    percentFunded: 0,
    description:
      "A collaboration with the Zafar & Mir Foundation and the Ophthalmology Department of Sir Ganga Ram Hospital. More than 60 transplants have been completed since 2022.",
  },
  {
    slug: "help-flood-affected-families-2025",
    title: "Help Flood-Affected Families 2025",
    amountRaised: "$0",
    percentFunded: 0,
    description:
      "Support for families affected by devastating floods in Pakistan, including emergency shelter, food, and clean water.",
  },
  {
    slug: "meethi-zindagi",
    title: "Meethi Zindagi",
    amountRaised: "$0",
    percentFunded: 0,
    description: "Insulin and diabetic care for children in need.",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  { slug: "annual-projects-activities-video-highlights-2022", title: "Annual Projects/Activities Video Highlights 2022", date: "December 31, 2022" },
  { slug: "annual-president-report-2022", title: "Annual President Report 2022", date: "December 31, 2022" },
  { slug: "fjmcaana-annual-report-2022", title: "FJMCAANA Annual Report 2022", date: "December 31, 2022" },
];

export const CONTENT_PAGES: ContentPage[] = [
  {
    path: ["about"], eyebrow: "About FJMCAANA", title: "A network built by women in medicine", description: "FJMCAANA brings together Fatima Jinnah Medical College and University alumnae in North America and beyond.",
    sections: [
      { title: "Our purpose", paragraphs: ["FJMCAANA is a not-for-profit component society of the Association of Physicians of Pakistani Descent of North America. It supports educational, scientific, social, and charitable work for FJMC/FJMU alumnae and their alma mater." ] },
      { items: [
        { title: "Mission", detail: "The association's goals and commitments.", href: "/about/mission" },
        { title: "President's Message", detail: "A note from Dr. Umbreen Chaudhary.", href: "/about/presidents-message" },
        { title: "Executive Committee", detail: "Meet the current council and executive leadership.", href: "/about/executive-committee" },
        { title: "Constitution and Bylaws", detail: "Constitution, bylaws, and annual reporting.", href: "/about/constitution-bylaws" },
        { title: "Reports", detail: "Constitution, bylaws, and annual reporting.", href: "/about/constitution-bylaws" },
        // { title: "Lifetime Members", detail: "Constitution, bylaws, and annual reporting.", href: "/about/constitution-bylaws" },
        { title: "Alumni Presidents", detail: "Meet with our previous leaders", href: "/about/alumni-presidents" },
      ] },
    ],
  },
  {
    path: ["about", "mission"], eyebrow: "About", title: "Mission Statement", description: "Educational, scientific, social, and humanitarian work for FJMC/FJMU alumnae and communities.",
    sections: [{ paragraphs: ["FJMCAANA welcomes students and graduates of Fatima Jinnah Medical College in practice or training in the United States, Canada, or Pakistan. The association is organized for educational, scientific, and social purposes."], bullets: ["Advance the interests of medicine at our alma mater.", "Promote educational and research activities in Pakistan and North America.", "Participate in social-welfare activities and strengthen relationships among Pakistani physicians and North American communities.", "Help newly arriving FJMC graduates with mentorship and orientation.", "Cooperate with other medical organizations in North America.", "Participate in medical relief and charitable activities in Pakistan and North America."] }],
  },
  {
    path: ["about", "presidents-message"], eyebrow: "Leadership", title: "President's Message", description: "Dr. Umbreen Chaudhary, President FJMCAANA 2025 & 2026, Class of '97.",
    sections: [{ paragraphs: ["Ladies of FJMCAANA,", "It is an honor to serve as the president of this remarkable organization, which is dedicated to celebrating women in medicine and supporting the next generation of female physicians.", "Our association was founded with a vision to connect, inspire, and empower women who have dedicated their lives to medicine. Through our collective experiences, we continue to shape the future of healthcare while addressing the unique challenges that women face in the profession.", "As we move forward, our focus remains on creating opportunities for mentorship, professional growth, and supporting our alma mater. Whether you are a seasoned physician or just beginning your medical journey, we are here to provide a supportive community.", "I invite you to join me in supporting our many philanthropic projects for 2025 and look forward to connecting with each of you.", "Umbreen Chaudhary MD"] }],
  },
  // {
  //   path: ["about", "alumni-presidents"], eyebrow: "Leadership", title: "Alumni Presidents", description: "The leaders who have carried FJMCAANA forward.",
  //   sections: [{ items: [
  //     { title: "Anjum Sadiq, MD", detail: "President 2000" }, { title: "Rubina Inayat, MD", detail: "President 2006" }, { title: "Naheed Chaudry, MD", detail: "President 2007" }, { title: "Shaheen Mian, MD", detail: "President 2008" }, { title: "Sarwat Uzma Iqbal, MD", detail: "President 2009" }, { title: "Manzar Shafi, MD", detail: "President 2010" }, { title: "Nosheen Mazhar, MD", detail: "President 2011" }, { title: "Farhat Osman, MD", detail: "President 2012" }, { title: "Tabassum Saeed, MD", detail: "President 2013-2014" }, { title: "Samina Hijab", detail: "President 2015-2016" }, { title: "Shagufta Jabeen, MD", detail: "President 2017-2018" }, { title: "Nighat Mehdi, MD", detail: "President 2017-2018" }, { title: "Fizza Rafiq", detail: "President 2021-2022" },
  //   ] }],
  // },
  {
    path: ["about", "constitution-bylaws"], eyebrow: "Governance", title: "Constitution & Bylaws", description: "Established in 1983; amended in 1999 and July 2006.",
    sections: [{ title: "Constitution", paragraphs: ["FJMCAANA is a non-profit, non-political, professional, educational, and humanitarian organization. Its constitution establishes the Association's name, aims, membership, structure, officers, finances, bylaws, amendment process, and dissolution provisions."], bullets: ["Advance medical science, education, and healthcare in Pakistan, particularly at Fatima Jinnah Medical College.", "Support postgraduate training, orientation, and adjustment for Pakistani physicians, especially FJMC graduates.", "Participate in medical relief and charitable activities in North America, Pakistan, and other countries.", "Protect and advance the interests of member physicians and the medical profession."] }, { title: "Membership & governance", paragraphs: ["The bylaws describe active, student, honorary, emeritus, and affiliate membership; annual and lifetime dues; general meetings; the Board of Trustees; and the Executive Council. The site also publishes Ethics & Grievance Committee guidance."] }],
  },
  {
    path: ["about", "annual-reports"], eyebrow: "Governance", title: "Annual Reports", description: "Published updates on FJMCAANA work and stewardship.",
    sections: [{ items: NEWS_ITEMS.map((item) => ({ title: item.title, detail: item.date, href: "/news" })) }],
  },
  {
    path: ["get-involved"], eyebrow: "Get Involved", title: "Build the future with us", description: "Join a professional community that supports its members, alma mater, and communities in Pakistan.",
    sections: [{ items: [{ title: "Membership", detail: "Annual and lifetime membership for FJMC alumni in the United States and Canada.", href: "/get-involved/membership" }, { title: "Lifetime Members", detail: "Acknowledge the alumnae who have made an enduring commitment.", href: "/get-involved/lifetime-members" }, { title: "Health Channel", detail: "Public health education with physician experts.", href: "/get-involved/health-channel" }, { title: "Volunteer", detail: "Connect with the association to offer your time, skills, or professional network.", href: "/get-involved/volunteer" }] }],
  },
  {
    path: ["get-involved", "membership"], eyebrow: "Get Involved", title: "Membership", description: "Membership of FJMCAANA is open to FJMC alumni residing in the United States and Canada.",
    sections: [{ title: "Membership dues", items: [{ title: "Annual Membership", detail: "US$50. Membership year: January 1 to December 31." }, { title: "Lifetime Membership", detail: "US$500. Lifetime dues are invested in an endowment fund." }] }, { paragraphs: ["Annual membership supports meeting and office expenses; remaining funds support charitable projects undertaken by FJMCAANA."] }],
  },

  {
  path: ["get-involved", "health-channel"],
  eyebrow: "Community Health",
  title: "FJMCAANA Health Channel",
  description:
    "Free online medical education and health awareness for the public in Pakistan, in collaboration with FJMU and Dr. Samina Toufeeq.",

  sections: [
    {
      title: "Prevention is Our Passion",
      paragraphs: [
        "FJMCAANA, in collaboration with Fatima Jinnah Medical University and the Health Channel, launched an initiative to provide free online medical education and awareness on various topics to the general public in Pakistan.",
        "The sessions featured physician experts discussing important health topics and were presented online through the Health Channel."
      ],

      items: [
        {
          title: "Type 2 Diabetes. Is it reversible?",
          detail: "Dr. Fauzia Moyeen",
          image: "/channel/fauzia-Moyeen.webp",
        },
        {
          title: "Childhood Asthma",
          detail: "Dr. Nighat Mehdi",
          image: "/channel/nighat-Mehdi.webp",
        },
        {
          title: "Healthy Living & Diet",
          detail: "Dr. Jasmine Zain",
          image: "/channel/jasmine-Zain.webp",
        },
        {
          title: "Sexually Transmitted Diseases",
          detail: "Dr. Shamsa Hamayun",
          image: "/channel/shamsa-humayon.webp",
        },
        {
          title: "Hypertension",
          detail: "Dr. Zaurez Khan",
          image: "/channel/zaurez.webp",
        },
      ],
    },
  ],
},
  {
    path: ["get-involved", "volunteer"], eyebrow: "Get Involved", title: "Volunteer", description: "FJMCAANA welcomes people who want to support its projects, events, and community.",
    sections: [{ paragraphs: ["The previous site did not publish a standalone volunteer program or application. To explore ways to help, contact the FJMCAANA team directly."] }],
  },
  {
    path: ["impact"], eyebrow: "Our Impact", title: "Care that reaches further", description: "Healthcare, education, emergency relief, and support for the next generation.",
    sections: [{ items: [{ title: "Projects", detail: "Long-standing work with FJMU and community partners.", href: "/impact/projects" }, { title: "Success Stories", detail: "Cornea transplant stories and project results.", href: "/impact/success-stories" }, { title: "Gallery", detail: "A record of events, partnerships, and service.", href: "/impact/gallery" }, { title: "Events", detail: "Past meetings, conferences, and fundraisers.", href: "/impact/events" }] }],
  },
  {
    path: ["impact", "projects"], eyebrow: "Our Impact", title: "Projects", description: "Programs that connect FJMCAANA's resources with local expertise and need.",
    sections: [{ items: [{ title: "Cornea Transplants", detail: "US$15,000 raised in Ramadan 2022 to support 60 transplants at Sir Ganga Ram Hospital." }, { title: "Kashani Basti Flood Relief", detail: "FJMCAANA and FJMU supported construction and inauguration of 29 houses in Fazal Pur, South Punjab." }, { title: "Student Scholarship", detail: "15 scholarships per year for deserving FJMC students." }, { title: "FJMU E-Library", detail: "21 laptops and a connected library established in 2009." }, { title: "FJMCAANA & TAKMIL", detail: "Education support for children in rural and under-resourced communities." }, { title: "Mother and Child Hospital", detail: "Compassionate, holistic care for women at every stage of life." }, { title: "AFJOG Projects", detail: "Past support for the Hepatitis Initiative." }] }],
  },
  {
    path: ["impact", "success-stories"], eyebrow: "Our Impact", title: "Success Stories", description: "The Cornea Transplant Project has helped people regain their vision.",
    sections: [{ paragraphs: ["In 2022, FJMCAANA, the Zafar & Mir Foundation, and the Ophthalmology Department of Sir Ganga Ram Hospital launched the Cornea Transplants Project. The site reports that over 60 transplants have been completed."], items: [{ title: "Sajid Mehmood", detail: "Cornea transplant success story" }, { title: "Rana Muhammad", detail: "Cornea transplant success story" }, { title: "Misbah Shaukat", detail: "Cornea transplant success story" }, { title: "Mehmood Afzal", detail: "Cornea transplant success story" }, { title: "Hasnain Mirja", detail: "Cornea transplant success story" }, { title: "Salamat Ali", detail: "Cornea transplant success story" }] }],
  },
  {
    path: ["impact", "gallery"], eyebrow: "Our Impact", title: "Gallery", description: "A visual record of FJMCAANA's community, service, and gatherings.",
    sections: [{ items: [{ title: "FJMCAANA Winter Meeting", detail: "December 22-24, 2021" }, { title: "Annual Scientific Conference", detail: "2019" }, { title: "Helping Babies Breathe" }, { title: "Mother and Child Hospital Fundraiser", detail: "2019" }, { title: "SGRH ICU Fund" }, { title: "FJMCAA at Summer Convention", detail: "2017" }, { title: "APPNA Health Care Day", detail: "2016" }, { title: "Visit to Fatima Jinnah Medical University", detail: "2015" }, { title: "FJMCAA at Summer Convention", detail: "2016" }] }],
  },
  {
    path: ["impact", "events"], eyebrow: "Community", title: "Past Events", description: "Conferences, meetings, and fundraisers that bring the association together.",
    sections: [{ items: [{ title: "4th Annual Scientific Conference", detail: "December 16, 2022" }, { title: "FJMCAANA Annual Spring Meeting", detail: "March 24, 2022 · Omni Hotel & Resort" }, { title: "FJMU Winter Meeting", detail: "December 21, 2021 · Lahore" }, { title: "FJMU Alumni North America Annual Online Zoom Fundraiser", detail: "April 24, 2021" }, { title: "AOA Dear FJ Family", detail: "May 31, 2020 · Montreal" }] }],
  },
  {
    path: ["news"], eyebrow: "News", title: "Reports & updates", description: "The latest published FJMCAANA annual updates.",
    sections: [{ items: NEWS_ITEMS.map((item) => ({ title: item.title, detail: item.date })) }],
  },

];


export const LIFETIME_MEMBERS = [
  {"name": "Dr. Raffia Qutab", "year": "1991", image: "/Lifetime members/raffia.png"}, 
  {"name": "Dr. Aneela Aziz", "year": "1990" , image: "/Lifetime members/aneela.png"}, 
  {"name": "Dr. Azra Khan", "year": "1984" , image: "/Lifetime members/azra.png"}, 
  {"name": "Dr. Bushra Ahmad", "year": "1988", image: "/Lifetime members/bushra.png"},
   {"name": "Dr. Fauzia Rana", "year": "1982" , image: "/Lifetime members/fauzia.png"}, 
   {"name": "Dr. Fizza Zahid Rafiq", "year": "1996", image: "/Lifetime members/fizza.png"},
    {"name": "Dr. Ghazala Kazi", "year": "1984", image: "/Lifetime members/Ghazala.png"},
     {"name": "Dr. Hibba Haider", "year": "1997", image: "/Lifetime members/hibba.png"}, 
     {"name": "Dr. Madiha Khan", "year": "2004", image: "/Lifetime members/madiha.png"}, 
     {"name": "Dr. Naheed Chaudhry", "year": "1975", image: "/Lifetime members/naheed.png"},
      {"name": "Dr. Nighat Mehdi", "year": "1986", image: "/Lifetime members/nighat.png"},
       {"name": "Dr. Noreen Shahbaz", "year": "1987", image: "/Lifetime members/noreen.png"}, 
      {"name": "Dr. Nosheen Mazhar", "year": "1989", image: "/Lifetime members/nosheen.png"},
        {"name": "Dr. Sadaf Ali", "year": "1996", image: "/Lifetime members/sadaf.png"}, 
        {"name": "Dr. Saima Abbas", "year": "1996", image: "/Lifetime members/saima.png"}, 
        {"name": "Dr. Samina Hijab", "year":("1986"), image: "/Lifetime members/samina.png"}, 
        {"name": "Dr. Shagufta Jabeen", "year":("1986"), image: "/Lifetime members/shagufta.png"}, 
        {"name":("Dr. Shaheen Mian"), "year":("1977"), image:("/Lifetime members/shaheen.png")},
        {"name":("Dr. Shaista Hamid Ashai"),"year":"1986","image":"/Lifetime members/shaista.png"},
        {"name":("Dr. Sumayya Amin"),"year":"1990","image":"/Lifetime members/sumayya.png"},
        {"name":"Dr. Shamim Malik","year":"1974","image":"/Lifetime members/shamim.png"},
        //  {"name":"Dr. Sumayya Amin","year":"1990","image":"/Lifetime members/sumayya.png"},
         {"name":"Dr. Zaurez Khan","year":"","image":"/Lifetime members/zaurez.png"},
         {"name":"Dr. Fauzia Anwar","year":"1986","image":"/Lifetime members/Fauzia_Anwar.png"},
         {"name":"Dr. Sadia Khizer","year":"1995","image":"/Lifetime members/sadia.png"},
         {"name":"Dr. Tabassum Saeed","year":"1974","image":"/Lifetime members/tabassum.png"}
] as const;

export const HEALTH_CHANNEL_VIDEOS = [
  {
    title: "Type 2 Diabetes. Is it reversible?",
    videoId: "z7NKkh2UK3c",
  },
  {
    title: "Childhood Asthma",
    videoId: "Ckr1zepwSf0",
  },
  {
    title: "Healthy Living & Diet",
    videoId: "CO-XiOBheCA",
  },
  {
    title: "Sexually Transmitted Diseases",
    videoId: "rVsAeo2lEZA",
  },
  {
    title: "Hypertension",
    videoId: "8WnaV0TgKoA",
  },
  {
    title: "Health Channel Session",
    videoId: "vgWmvG8BvAY",
  },
] as const;


export const ALUMNI_PRESIDENTS = [
  {"name": "Anjum Sadiq, MD", "year": "President 2000", image: "/past presidents/anjum.png"}, 
  {"name": "Rubina Inayat, MD", "year": "President 2006" , image: "/past presidents/rubina.png"}, 
  {"name": "Shaheen Mian, MD", "year": "President 2008" , image: "/past presidents/shaheen.png"}, 
  {"name": "Sarwat Uzma Iqbal, MD", "year": "President 2009", image: "/past presidents/sarwat.png"},
   {"name": "Nosheen Mazhar, MD", "year": "President 2011" , image: "/past presidents/nausheen.png"}, 
   {"name": "Farhat Osman, MD", "year": "President 2012", image: "/past presidents/farhat.png"},
    {"name": "Samina Hijab", "year": "President 2015-2016", image: "/past presidents/samina.png"},
     {"name": "Shagufta Jabeen, MD", "year": "President 2017-2018", image: "/past presidents/shagufta.png"}, 
     {"name": "Fizza Rafiq", "year": "President 2021-2022", image: "/past presidents/fizza.png"}, 
     {"name": "Nighat Mehdi, MD", "year": "President 2017-2018", image: "/past presidents/nighat.png"},
      {"name": "Tabassum Saeed, MD", "year": "President 2013-2014", image: "/past presidents/tabassum.png"},
       {"name": "Manzar Shafi, MD", "year": "President 2010", image: "/past presidents/manzar.png"}, 
      {"name": "Naheed Chaudry, MD", "year": "President 2007", image: "/past presidents/naheed.png"},
      ] as const;

export function getContentPage(path: string[]) {
  return CONTENT_PAGES.find((page) => page.path.join("/") === path.join("/"));
}
