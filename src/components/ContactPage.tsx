"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
    </svg>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setSuccess(
        "Thank you! Your message has been sent. We will get back to you soon."
      );

      form.reset();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ─────────────────────────────────────────
          PAGE HEADER
      ───────────────────────────────────────── */}
      <section className="border-b border-pine/10 bg-sage">
        <Reveal className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-pine-dark">
            Contact
          </p>

          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-pine-dark sm:text-5xl">
            Stay connected
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
            Reach the FJMCAANA team with questions about membership,
            projects, events, or support.
          </p>
        </Reveal>
      </section>

      {/* ─────────────────────────────────────────
          CONTACT CONTENT
      ───────────────────────────────────────── */}
      <main className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

            {/* ───────── Contact Information ───────── */}
            <Reveal>
              <div className="rounded-xl border border-pine/10 bg-white p-5 shadow-sm sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                  Get in touch
                </p>

                <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-pine-dark">
                  We&apos;d love to hear from you
                </h2>

                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Have a question about FJMCAANA, membership, upcoming
                  events, or one of our projects? Send us a message and
                  our team will get back to you.
                </p>

                {/* Email */}
                <div className="mt-6 border-t border-pine/10 pt-5">
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    Email
                  </p>

                  <a
                    href="mailto:team@fjmcaana.org"
                    className="mt-2 inline-block text-sm font-semibold tracking-wide text-pine underline-offset-4 transition hover:text-gold hover:underline"
                  >
                    team@fjmcaana.org
                  </a>
                </div>

                {/* Social Media */}
                <div className="mt-6 border-t border-pine/10 pt-5">
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    Stay connected
                  </p>

                  <p className="mt-2 text-sm leading-6 text-ink-soft">
                    Follow FJMCAANA on social media for updates, events,
                    community news, and announcements.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/fj.alumni.usa.canada/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="FJMCAANA on Instagram"
                      className="group inline-flex items-center gap-2 rounded-md border border-pine/15 bg-sage/50 px-3 py-2 text-pine transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <InstagramIcon />

                      <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.12em]">
                        Instagram
                      </span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/share/1CVN8TzqE8/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="FJMCAANA on Facebook"
                      className="group inline-flex items-center gap-2 rounded-md border border-pine/15 bg-sage/50 px-3 py-2 text-pine transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <FacebookIcon />

                      <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.12em]">
                        Facebook
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ───────── Contact Form ───────── */}
            <Reveal>
              <div className="rounded-xl border border-pine/10 bg-white shadow-sm">
                <div className="h-1 bg-gold" />

                <div className="p-5 sm:p-6">
                  <div className="mb-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                      Send a message
                    </p>

                    <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-pine-dark">
                      How can we help?
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-xs font-medium text-pine-dark"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="mt-1.5 w-full rounded-md border border-pine/15 bg-sage/10 px-3.5 py-2.5 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-pine-dark"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="mt-1.5 w-full rounded-md border border-pine/15 bg-sage/10 px-3.5 py-2.5 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-xs font-medium text-pine-dark"
                        >
                          Phone
                          <span className="ml-1 text-ink-soft">
                            (optional)
                          </span>
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="mt-1.5 w-full rounded-md border border-pine/15 bg-sage/10 px-3.5 py-2.5 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                          placeholder="Phone number"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="text-xs font-medium text-pine-dark"
                        >
                          Subject
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          className="mt-1.5 w-full rounded-md border border-pine/15 bg-sage/10 px-3.5 py-2.5 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs font-medium text-pine-dark"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="mt-1.5 w-full resize-y rounded-md border border-pine/15 bg-sage/10 px-3.5 py-2.5 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                        placeholder="Write your message..."
                      />
                    </div>

                    {/* Success */}
                    {success && (
                      <div className="rounded-md border border-green-200 bg-green-50 px-3.5 py-3 text-sm leading-5 text-green-700">
                        {success}
                      </div>
                    )}

                    {/* Error */}
                    {error && (
                      <div className="rounded-md border border-red-200 bg-red-50 px-3.5 py-3 text-sm leading-5 text-red-700">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center rounded-md bg-pine px-5 py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? "Sending..." : "Send message"}
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}