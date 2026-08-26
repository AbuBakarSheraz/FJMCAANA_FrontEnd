import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

const ANNUAL_PROJECTS = [
  {
    slug: "cornea-transplant-project",
    title: "Cornea Transplant Project",
    description: "Annual collaboration with the Zafar & Mir Foundation and the Ophthalmology Department of Sir Ganga Ram Hospital. More than 60 transplants have been completed since 2022.",
    image: "/projects/project-1.jpg",
    status: "Ongoing",
    impact: "60+ transplants completed"
  },
  {
    slug: "scholarship-fund",
    title: "FJMCAANA Scholarship Fund",
    description: "15 scholarships awarded annually to deserving FJMU students, supporting the next generation of women physicians.",
    image: "/projects/project-2.jpg",
    status: "Annual",
    impact: "15 students per year"
  },
  {
    slug: "qurbani-project",
    title: "FJMCAANA Qurbani Project",
    description: "Annual distribution of meat to families in need during Eid-ul-Adha, providing nutritious food to underserved communities.",
    image: "/projects/project-3.jpg",
    status: "Annual",
    impact: "Hundreds of families served"
  }
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
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Annual Projects
            </h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            These cornerstone initiatives run year after year, providing consistent support and measurable impact to communities in Pakistan.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ANNUAL_PROJECTS.map((project) => (
              <div
                key={project.slug}
                className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-sage">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-pine-dark shadow-lg">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-pine-dark">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regular Projects Section */}
        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                Regular Projects
              </h2>
            </div>
            <p className="mb-12 max-w-3xl text-lg text-ink-soft">
              Ongoing and completed initiatives addressing specific healthcare, education, and community needs across Pakistan.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REGULAR_PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden bg-sage">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-pine-dark shadow">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-pine-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-3 text-xs font-semibold text-gold">
                      {project.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl bg-gradient-to-br from-pine-dark to-pine p-12 text-center shadow-xl">
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
                className="rounded-lg bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
              >
                Donate Now
              </a>
              <Link
                href="/get-involved/membership"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
