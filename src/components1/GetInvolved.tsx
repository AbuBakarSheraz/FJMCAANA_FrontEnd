import MembershipForm from "./MembershipForm";

const CARDS = [
  {
    title: "Membership",
    body: "Join fellow FJMU alumnae — mentorship, events, and a lifelong professional network.",
    cta: "Join now",
    href: "#membership-form",
  },
  {
    title: "Health Channel",
    body: "Educational health content from our physician members, for the community.",
    cta: "Watch now",
    href: "#",
  },
  {
    title: "Volunteer",
    body: "Support ongoing projects with your time, skills, or professional network.",
    cta: "Get started",
    href: "#",
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="max-w-6xl mx-auto px-6 py-20">
      <span className="font-mono text-xs tracking-widest uppercase text-gold">Get Involved</span>
      <h2 className="font-display font-semibold text-3xl text-pine-dark mt-2 mb-10">
        Join a lifelong community
      </h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {CARDS.map((card) => (
          <div key={card.title} className="border border-pine/10 rounded-xl p-6 bg-white">
            <h3 className="font-display font-semibold text-lg text-pine-dark">{card.title}</h3>
            <p className="text-sm text-ink-soft mt-2">{card.body}</p>
            <a href={card.href} className="inline-block mt-4 text-sm font-semibold text-pine">
              {card.cta} →
            </a>
          </div>
        ))}
      </div>

      <MembershipForm />
    </section>
  );
}
