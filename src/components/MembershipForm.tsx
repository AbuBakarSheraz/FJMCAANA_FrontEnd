"use client";

import { FormEvent, useState } from "react";

// Point this at your deployed NestJS API, e.g. via NEXT_PUBLIC_API_BASE_URL in .env.local
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api";

export default function MembershipForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thanks — we'll be in touch.");
      form.reset();
    } catch {
      setStatus("Something went wrong, please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id="membership-form"
      onSubmit={handleSubmit}
      className="mt-14 bg-card/60 border border-burgundy/10 rounded-xl p-6 sm:p-8 max-w-xl"
    >
      <h3 className="font-display font-semibold text-lg text-burgundy-dark mb-1">Get on the list</h3>
      <p className="text-sm text-ink-soft mb-5">Leave your details and we&apos;ll follow up about membership.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          required
          className="w-full rounded-lg border border-burgundy/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy/30"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full rounded-lg border border-burgundy/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy/30"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 bg-burgundy text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-burgundy-dark transition disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit"}
      </button>

      {status && <p className="text-xs text-ink-soft mt-3">{status}</p>}
    </form>
  );
}
