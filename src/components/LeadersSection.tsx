import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/team";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function LeadersSection() {
  const leaders = TEAM_MEMBERS.filter(
    (member) =>
      member.role.toLowerCase().includes("president") ||
      member.role.toLowerCase().includes("treasurer") ||
      member.role.toLowerCase().includes("secretary") 
  );

  return (
    <section id="leaders" className="bg-gradient-to-b from-cream to-sage/30">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <Reveal>
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">Leadership</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-pine-dark sm:text-4xl">The Executive Committee</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">The leadership team advancing FJMCAANA’s mission of service, education, and connection.</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <StaggerItem
              key={leader.slug}
              interactive
              className="group relative overflow-hidden rounded-2xl border border-pine/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
            >
             <div className="relative aspect-[4/3] overflow-hidden bg-sage/70 p-3 sm:aspect-square sm:p-4">
                       <Reveal className="relative mx-auto aspect-[4/5] w-[220px] overflow-hidden rounded-2xl border border-gold-light/70 bg-card shadow-lg sm:mx-0 sm:w-full">

  <Image
    src={leader.image}
    alt={leader.name}
     fill
  sizes="
    (max-width: 640px) 220px,
    (max-width: 1024px) 260px,
    (max-width: 1280px) 320px,
    360px
  "
  className="object-cover"/>
            </Reveal>

  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-pine-dark/10 to-transparent" />
</div>
              <div className="p-6">
                <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.14em] text-pine-dark">
                  {leader.role}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold text-pine-dark">{leader.name}</h4>
                <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{leader.highlight}</p>
                <Link
                  href={`/team#${leader.slug}`}
                  className="mt-4 inline-block border-b border-pine/40 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine transition-colors hover:border-pine"
                >
                  Learn more →
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
