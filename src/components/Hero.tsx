"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header className="relative min-h-[480px] overflow-hidden bg-pine-dark text-cream sm:min-h-[420px] md:min-h-[580px]" initial={false}>
      <video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-pine-dark/80 via-pine/60 to-pine-dark/90" />
      <motion.div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-2xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -12, 0], y: [0, 8, 0], scale: [1, 1.035, 1] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-14 sm:pt-12 lg:px-10 lg:py-16">
       <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE_OUT_QUINT }} className="font-mono text-xs font-bold uppercase tracking-widest text-gold-light">
  Welcome to FJMCAANA
</motion.span>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.12, ease: EASE_OUT_QUINT }} className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cream/60">
          Fatima Jinnah Medical College Alumni Association of North America
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.22, ease: EASE_OUT_QUINT }} className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Connect.
          <br />
          Empower.
          <br />
          Elevate.
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.42, ease: EASE_OUT_QUINT }} className="mt-6 h-px w-24 bg-gold/50" />
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.48, ease: EASE_OUT_QUINT }} className="mt-6 max-w-xl text-lg text-cream/85">A community of FJMU physicians united by a shared legacy. Empowering one another to lead, serve, and create lasting impact across generations in the US & Canada.</motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.62, ease: EASE_OUT_QUINT }} className="mt-8 flex flex-wrap gap-3">
          <Link href="/get-involved/membership" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light">
            Join Membership
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/loan" className="rounded-lg border-2 border-gold bg-gold/10 px-6 py-3 text-sm font-semibold text-gold-light transition hover:bg-gold hover:text-pine-dark">Postgraduate Loans</Link>
          <Link href="/donate" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Support a Cause</Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
