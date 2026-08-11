// components/MembershipTiers.tsx
import { MEMBERSHIP_TIERS } from "@/lib/membership";

export default function MembershipTiers() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div
            key={tier.slug}
            className={`flex flex-col rounded-2xl border p-6 ${
              tier.highlight
                ? "border-gold bg-pine-dark text-cream"
                : "border-pine/10 bg-white"
            }`}
          >
            {tier.highlight && (
              <span className="mb-3 w-fit rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-pine-dark">
                Best value
              </span>
            )}
            <h3
              className={`font-display text-lg font-semibold ${
                tier.highlight ? "text-white" : "text-pine-dark"
              }`}
            >
              {tier.name}
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold">{tier.price}</span>
            </div>
            <p
              className={`mt-1 text-xs font-mono uppercase tracking-wide ${
                tier.highlight ? "text-gold-light" : "text-ink-soft"
              }`}
            >
              {tier.priceNote}
            </p>
            <ul
              className={`mt-5 flex-1 space-y-2 text-sm leading-relaxed ${
                tier.highlight ? "text-cream/90" : "text-ink-soft"
              }`}
            >
              {tier.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className={tier.highlight ? "text-gold-light" : "text-pine"}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className={`mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                tier.highlight
                  ? "bg-gold text-pine-dark hover:bg-gold-light"
                  : "bg-pine text-white hover:bg-pine-dark"
              }`}
            >
              Select {tier.name.split(" ")[0]}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}