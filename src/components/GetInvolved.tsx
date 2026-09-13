import MembershipForm from "./MembershipForm";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const CARDS = [
  {
    title: "Membership",
    body: "Join fellow FJMU Alumni — mentorship, events, and a lifelong professional network.",
    cta: "Join now",
    href: "/get-involved/membership",
    icon: (
      <path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20c0-3 2.5-5 5-5s5 2 5 5M13 20c0-2.5 1.8-4.2 4-4.6" />
    ),
  },
  {
    title: "Health Channel",
    body: "Educational health content from our physician members, for the community.",
    cta: "Watch now",
    href: "/get-involved/health-channel",
    icon: <path d="M4 5h16v11H4zM10 8.5v4l3.5-2Z" />,
  },

];

export default function GetInvolved() {
  return (
    <section id="involved" className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
      <Reveal>
        <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">Get Involved</span>
        <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">Join a lifelong community</h2>
      </Reveal>

      <Stagger className="grid gap-5 sm:grid-cols-3">
        {CARDS.map((card) => (
          <StaggerItem
            key={card.title}
            interactive
            className="rounded-xl border border-pine/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-gold"
            >
              {card.icon}
            </svg>
            <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">{card.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{card.body}</p>
            <a href={card.href} className="mt-4 inline-block font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine">
              {card.cta} →
            </a>
          </StaggerItem>
        ))}
      </Stagger>

      <MembershipForm />
    </section>
  );
}
