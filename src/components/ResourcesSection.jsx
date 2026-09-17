import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const RESOURCE_HIGHLIGHTS = [
 
  {
    icon: "💰",
    title: "Interest-Free Loans",
    description:
      "Shariah-compliant financial assistance for tuition, board exams, and educational expenses.",
    category: "Financial Aid",
    link: "/loan",
  },
   {
    icon: "🤝",
    title: "Support for US & Canada Residency",
    description:
      "Connect with experienced FJMU alumni practicing in North America about Resources and guidance for USMLE examinatios.",
    category: "Career Development",
    link: "/help"
  }, 
  {
    icon: "🌐",
    title: "Connect with FJMCAANA Community",
    description:
      "Connect with fellow FJMU alumni through conferences, meetings, and professional events.",
    category: "Professional Network",
    link: "/networking"
  },
 
];

function ResourceIcon({ icon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage text-2xl shadow-sm ring-1 ring-pine/10 transition-transform duration-300 group-hover:scale-105">
      <span aria-hidden="true">{icon}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function ResourceCard({ resource }) {
  return (
    <StaggerItem
      interactive
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-lg sm:p-6"
    >
      {/* Decorative corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex items-start justify-between gap-4">
        <ResourceIcon icon={resource.icon} />

        <span className="rounded-full bg-sage/70 px-3 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.12em] text-pine-dark">
          {resource.category}
        </span>
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold leading-tight text-pine-dark">
          {resource.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">
          {resource.description}
        </p>

        <Link
              href={resource.link}
              className="mt-5 inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine">
          Explore resource
          <ArrowIcon />
        </Link>
      </div>
    </StaggerItem>
  );
}

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-cream"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-pine/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
              Support &amp; Resources
            </span>

            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
              Helping Students &amp; Physicians
              <span className="block text-pine">Move Forward With Confidence</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
              From scholarships and interest-free loans to mentorship,
              board exam guidance, and professional networking, we provide
              resources to support the FJMU community at every stage of
              their journey.
            </p>
          </div>
        </Reveal>

        {/* Resource cards */}
        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_HIGHLIGHTS.map((resource) => (
            <ResourceCard
              key={resource.title}
              resource={resource}
            />
          ))}
        </Stagger>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}