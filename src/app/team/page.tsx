import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TEAM_MEMBERS } from "@/lib/team";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Team — FJMCAANA",
  description: "Meet the council and executive team of FJMCAANA.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <PageHeader
  eyebrow="FJMCAANA"
  title="Our Team"
  description="The council and executive members who lead FJMCAANA's mission, projects, and community."
/>

      <main className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
        {TEAM_MEMBERS.map((member, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <section
              key={member.slug}
              id={member.slug}
              className={`scroll-mt-24 flex flex-col gap-6 items-start sm:gap-12 ${
                imageFirst ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Image — fixed width on sm+, capped and centered on mobile */}
              <div className="relative w-full max-w-[220px] mx-auto sm:mx-0 sm:w-[280px] sm:flex-none aspect-[4/5] rounded-2xl overflow-hidden bg-sage border border-pine/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-cover"
                />
              </div>

              {/* Message — flexes to fill remaining space, min-w-0 stops overflow */}
              <div className="flex-1 min-w-0 w-full">
                <span className="font-mono text-[11px] tracking-widest uppercase text-gold">
                  {member.role}
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-pine-dark mt-2">
                  {member.name}
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-[15px] text-ink-soft leading-relaxed max-w-2xl">
                  {member.message.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </>
  );
}