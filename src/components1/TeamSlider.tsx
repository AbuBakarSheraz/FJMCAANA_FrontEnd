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
    <section id="team" className="max-w-7xl mx-auto px-8 sm:px-2  py-20">
      <span className="font-mono text-xs tracking-widest uppercase text-gold">Our Team</span>
      <h2 className="font-display font-semibold text-3xl text-pine-dark mt-2 mb-10">
        The people behind FJMCAANA
      </h2>

      <div
        className="relative bg-white border border-pine/10 rounded-2xl overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid sm:grid-cols-[280px_1fr]">
          {/* Image */}
          <div className="relative h-72 sm:h-full bg-sage">
            <Image
              key={member.slug}
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Message */}
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <span className="font-mono text-[11px] tracking-widest uppercase text-gold">
              {member.role}
            </span>
            <h3 className="font-display font-semibold text-2xl text-pine-dark mt-2">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-ink-soft mt-4 leading-relaxed max-w-xl">
              {member.highlight}
            </p>
            <Link
              href={`/team#${member.slug}`}
              className="inline-block mt-6 w-fit text-sm font-semibold text-pine border-b border-pine/40 hover:border-pine"
            >
              See more →
            </Link>
          </div>
        </div>

        {/* Prev / Next */}
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous team member"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-pine/15 flex items-center justify-center text-pine-dark hover:bg-white shadow-sm"
        >
          ‹
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next team member"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-pine/15 flex items-center justify-center text-pine-dark hover:bg-white shadow-sm"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TEAM_MEMBERS.map((m, i) => (
          <button
            key={m.slug}
            onClick={() => goTo(i)}
            aria-label={`Show ${m.name}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-pine" : "w-2 bg-pine/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
