// components/MembershipTiers.tsx
"use client";

import { MEMBERSHIP_TIERS } from "@/lib/membership";

export default function MembershipTiers() {
  const scrollToForm = () => {
    document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.slug}
              className={`flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
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
              <button
                onClick={scrollToForm}
                className={`mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-gold text-pine-dark hover:bg-gold-light"
                    : "bg-pine text-white hover:bg-pine-dark"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Zeffy Membership Form */}
      <section id="membership-form" className="bg-sage/20 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Complete Your Membership
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Fill out the form below to join FJMCAANA and become part of our mission.
            </p>
          </div>
          
          <div className="rounded-2xl border-2 border-pine/10 bg-white p-4 shadow-xl">
            <iframe
              src="https://www.zeffy.com/en-US/embed/ticketing/fjmcaana-membership"
              style={{ border: 0 }}
              width="100%"
              height="900px"
              title="FJMCAANA Membership Form"
              className="rounded-lg"
            />
          </div>

          <div className="mt-8 text-center text-sm text-ink-soft">
            <p>Having trouble with the form? <a href="mailto:team@fjmcaana.org" className="text-pine font-semibold hover:underline">Contact us</a> for assistance.</p>
          </div>
        </div>
      </section>
    </>
  );
}