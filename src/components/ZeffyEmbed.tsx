"use client";

import { useState } from "react";

const ZEFFY_URL = "https://www.zeffy.com/en-US/embed/ticketing/fjmcaana-membership";

export default function ZeffyEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="join" className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
      <div className="rounded-2xl border border-pine/10 bg-card/60 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-pine-dark">
          Join or renew
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Payments are processed securely by Zeffy — 100% of your payment goes
          to FJMCAANA, with no platform fee. You can add a tax-receipt-eligible
          donation during checkout.
        </p>

        {!loaded ? (
          <button
            onClick={() => setLoaded(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark"
          >
            Continue to secure membership form
          </button>
        ) : (
          <>
            <div className="mt-6 overflow-hidden rounded-xl border border-pine/10 bg-white">
              <iframe
                title="FJMCAANA Membership — powered by Zeffy"
                src={ZEFFY_URL}
                style={{ width: "100%", border: "none" }}
                height={1200}
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-ink-soft">
              Form looking cut off or not loading right?{" "}
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pine underline underline-offset-2 hover:text-pine-dark"
              >
                Open the membership form in a new tab
              </a>
              .
            </p>
          </>
        )}
      </div>
    </section>
  );
}