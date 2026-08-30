"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TEAM_MEMBERS } from "@/lib/team";

const AUTOPLAY_MS = 5500;

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TEAM_MEMBERS.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const goTo = (i: number) => setIndex((i + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  const member = TEAM_MEMBERS[index];

  return (
    <section id="team" className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Our Team</span>
      <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">
        The people behind FJMCAANA
      </h2>

      <div
        className="relative overflow-hidden rounded-2xl border border-pine/10 bg-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid sm:grid-cols-[280px_1fr]">
          <div className="relative h-72 overflow-hidden bg-sage sm:h-full">
            <Image
              key={member.slug}
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-contain sm:object-cover"
              priority={index === 0}
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="font-display text-4xl italic leading-none text-pine/15" aria-hidden="true">
              &ldquo;
            </span>
            <span className="-mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
              {member.role}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-pine-dark">{member.name}</h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {member.highlight}
            </p>
            <Link
              href={`/team#${member.slug}`}
              className="mt-6 inline-block w-fit border-b border-pine/40 text-sm font-semibold text-pine hover:border-pine"
            >
              See more →
            </Link>
          </div>
        </div>

        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous team member"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-pine/15 bg-white/90 text-pine-dark shadow-sm hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next team member"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-pine/15 bg-white/90 text-pine-dark shadow-sm hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {TEAM_MEMBERS.map((m, i) => (
          <button
            key={m.slug}
            onClick={() => goTo(i)}
            aria-label={`Show ${m.name}`}
            className={`relative h-11 w-11 overflow-hidden rounded-full border-2 transition-all ${
              i === index ? "border-gold" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image src={m.image} alt="" fill sizes="44px" className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}