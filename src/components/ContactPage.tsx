"use client";

import { FormEvent, useState } from "react";

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
      <section className="border-b border-pine/10 bg-sage">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Contact
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold text-pine-dark sm:text-5xl">
            Stay connected
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Reach the FJMCAANA team with questions about membership,
            projects, events, or support.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Contact information */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-pine-dark">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-ink-soft">
              Have a question about FJMCAANA, membership, upcoming
              events, or one of our projects? Send us a message and
              our team will get back to you.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Email
              </p>

              <a
                href="mailto:team@fjmcaana.org"
                className="mt-2 inline-block text-base font-medium text-pine underline-offset-4 hover:underline"
              >
                team@fjmcaana.org
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-pine/10 bg-white p-6 shadow-sm sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-pine-dark"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-pine/15 bg-sage/10 px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-pine-dark"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-pine/15 bg-sage/10 px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                    placeholder="you@example.com"
                  />
                </div>

              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-pine-dark"
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
                    className="mt-2 w-full rounded-lg border border-pine/15 bg-sage/10 px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                    placeholder="Phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-pine-dark"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-pine/15 bg-sage/10 px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                    placeholder="How can we help?"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-pine-dark"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  className="mt-2 w-full resize-y rounded-lg border border-pine/15 bg-sage/10 px-4 py-3 text-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/10"
                  placeholder="Write your message..."
                />
              </div>

              {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
