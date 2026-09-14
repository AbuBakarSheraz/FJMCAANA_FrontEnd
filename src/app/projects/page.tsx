import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";


const YEARS = [
  {
   year: 2026,
   link: "projects/annual_projects/2026"
  },
  {
   year: 2025,
   link: "projects/annual_projects/2025"
  },
  {
   year: 2024,
   link: "projects/annual_projects/2024"
  },
  {
   year: 2023,
   link: "projects/annual_projects/2023"
  },
];

const REGULAR_PROJECTS = [
  {
    slug: "flood-relief",
    title: "Flood Relief & Housing",
    description: "FJMCAANA and FJMU supported construction and inauguration of 29 houses in Fazal Pur, South Punjab for flood-affected families.",
    image: "/projects/project-4.jpg",
    status: "Completed 2022",
    impact: "29 houses constructed"
  },
  {
    slug: "meethi-zindagi",
    title: "Meethi Zindagi - Diabetic Care",
    description: "Providing insulin and comprehensive diabetic care to children in need across Pakistan.",
    image: "/projects/project-5.jpg",
    status: "Ongoing",
    impact: "Ongoing support"
  },
  {
    slug: "mindful-wellness",
    title: "Mindful Wellness Project",
    description: "Mental health awareness and support initiative for students and young professionals.",
    image: "/projects/project-1.jpg",
    status: "Active",
    impact: "Community education"
  },
  {
    slug: "autism-center",
    title: "Developmental Pediatrics & Autism Center",
    description: "Fundraising initiative to support comprehensive developmental pediatrics and autism services.",
    image: "/projects/project-2.jpg",
    status: "Fundraising",
    impact: "Specialized care facility"
  },
  {
    slug: "e-library",
    title: "FJMU E-Library",
    description: "Established in 2009 with 21 laptops, providing digital resources and connected learning for medical students.",
    image: "/projects/project-3.jpg",
    status: "Completed",
    impact: "21 laptops donated"
  },
  {
    slug: "mother-child-hospital",
    title: "Mother and Child Hospital",
    description: "Supporting compassionate, holistic care for women at every stage of life.",
    image: "/projects/project-4.jpg",
    status: "Ongoing Partnership",
    impact: "Comprehensive women's care"
  },
  {
    slug: "takmil-education",
    title: "FJMCAANA & TAKMIL",
    description: "Education support for children in rural and under-resourced communities across Pakistan.",
    image: "/projects/project-5.jpg",
    status: "Active",
    impact: "Rural education support"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Our Work"
        title="Projects That Transform Lives"
        description="From annual healthcare initiatives to targeted relief efforts, FJMCAANA channels resources where they matter most."
      />

      <div className="bg-cream">
        {/* Annual Projects Section */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-8">
          <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-extrabold text-pine">
              Annual Projects
            </h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            These cornerstone initiatives run year after year, providing consistent support and measurable impact to communities in Pakistan.
          </p>
          </Reveal>

         <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {YEARS.map((year) => (
    <StaggerItem
      key={year.year}
      interactive
      className="group"
    >
      <Link
        href={year.link}
        className="relative block overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="p-6 bg-sage">
          <h1 className="text-lg font-semibold text-pine-dark">
            {year.year}
          </h1>
        </div>
      </Link>
    </StaggerItem>
  ))}
</Stagger>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
          <Reveal className="rounded-2xl bg-gradient-to-br from-pine-dark to-pine p-12 text-center shadow-xl">
            <h2 className="font-display text-3xl font-semibold text-white">
              Support Our Mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/90">
              Every donation directly impacts healthcare, education, and community welfare in Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.paypal.com/us/fundraiser/charity/1554217"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
              >
                Donate Now
              </a>
              <Link
                href="/get-involved/membership"
                className="rounded-lg border-2 border-white px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                Become a Member
              </Link>
            </div>
          </Reveal>
        </section>
      </div>

      <Footer />
    </>
  );
}
