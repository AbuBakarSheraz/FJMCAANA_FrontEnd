import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/team";

export default function LeadersSection() {
  const leaders = TEAM_MEMBERS.filter(
    (member) =>
      member.role.toLowerCase().includes("president") ||
      member.role.toLowerCase().includes("treasurer") ||
      member.role.toLowerCase().includes("secretary") ||
      member.role.toLowerCase().includes("executive")
  );

  return (
    <section id="leaders" className="bg-gradient-to-b from-cream to-sage/30">
      <div className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Leadership</span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
          The Executive Committee
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Distinguished physicians guiding our mission of service, education, and healthcare
          transformation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.slug}
              className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-sage">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
                  {leader.role}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold text-pine-dark">{leader.name}</h4>
                <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{leader.highlight}</p>
                <Link
                  href={`/team#${leader.slug}`}
                  className="mt-4 inline-block border-b border-pine/40 text-sm font-semibold text-pine transition-colors hover:border-pine"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-block rounded-full border-2 border-pine px-8 py-3 font-semibold text-pine transition-all hover:bg-pine hover:text-white"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}