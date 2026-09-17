import Link from "next/link";

export default function OrganizationNotice() {
  return (
    <section className="bg-pine-dark text-cream">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          
          {/* Text */}
          <div className="max-w-4xl">
            <p className="font-display text-xl font-semibold leading-relaxed sm:text-2xl lg:text-[26px]">
              FJMCAANA is a 501(c)(3) tax-exempt not-for-profit organization
              and a component society of APPNA. The Association operates in
              accordance with its governing documents and the applicable
              principles of its parent organization.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Link
              href="/constitution-bylaws"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-pine-dark transition-all duration-300 hover:bg-gold-light hover:shadow-lg"
            >
              Constitution &amp; Bylaws

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}