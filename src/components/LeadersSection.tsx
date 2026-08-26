import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/team";

export default function LeadersSection() {
  // Filter to get President and Executive members (excluding Councilors)
  const leaders = TEAM_MEMBERS.filter(
    (member) => 
      member.role.toLowerCase().includes("president") || 
      member.role.toLowerCase().includes("treasurer") ||
      member.role.toLowerCase().includes("secretary") ||
      member.role.toLowerCase().includes("executive")
  );

  // Find the current president
  const president = leaders.find(member => 
    member.role.toLowerCase().includes("president") && 
    !member.role.toLowerCase().includes("past")
  );

  // Get other executive leaders
  const executiveLeaders = leaders.filter(member => member !== president);

  return (
    <section id="leaders" className="bg-gradient-to-b from-cream to-sage/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">Leadership</span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
          Guiding FJMCAANA Forward
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Distinguished physicians leading our mission of service, education, and healthcare transformation.
        </p>

        {/* President Spotlight */}
        {president && (
          <div className="mt-12 rounded-2xl border-2 border-gold/30 bg-white p-8 shadow-lg">
            <div className="flex flex-col items-start gap-8 sm:flex-row">
              <div className="relative h-56 w-44 flex-none overflow-hidden rounded-xl border-2 border-gold-light bg-card shadow-md">
                <Image 
                  src={president.image} 
                  alt={president.name} 
                  fill 
                  sizes="176px" 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-gold/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-gold">
                  {president.role}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-pine-dark">
                  {president.name}
                </h3>
                <p className="mt-4 font-display text-xl italic leading-snug text-pine-dark sm:text-2xl">
                  &ldquo;Our focus remains on creating opportunities for mentorship, professional growth, and supporting our alma mater.&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {president.highlight}
                </p>
                <Link 
                  href={`/team#${president.slug}`} 
                  className="mt-4 inline-block border-b border-pine/40 text-sm font-semibold text-pine hover:border-pine"
                >
                  Read full message <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Executive Leadership Team */}
        {executiveLeaders.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-pine-dark">
              Executive Leadership Team
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {executiveLeaders.map((leader) => (
                <div 
                  key={leader.slug}
                  className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden bg-sage">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-gold">
                      {leader.role}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-semibold text-pine-dark">
                      {leader.name}
                    </h4>
                    <p className="mt-3 line-clamp-3 text-sm text-ink-soft">
                      {leader.highlight}
                    </p>
                    <Link
                      href={`/team#${leader.slug}`}
                      className="mt-4 inline-block text-sm font-semibold text-pine border-b border-pine/40 hover:border-pine transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Link to Full Team */}
        <div className="mt-12 text-center">
          <Link 
            href="/team" 
            className="inline-block rounded-lg border-2 border-pine px-8 py-3 font-semibold text-pine transition-all hover:bg-pine hover:text-white"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
