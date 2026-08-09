"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#involved", label: "Get Involved" },
  { href: "#impact", label: "Our Impact" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-pine/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-lg text-pine-dark">
          FJMCAANA
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-pine-dark transition">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#donate"
            className="hidden sm:inline-block bg-gold text-pine-dark text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gold-light transition"
          >
            Donate
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-pine-dark"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-pine/10 bg-cream px-6 py-4 flex flex-col gap-4 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="bg-gold text-pine-dark font-semibold px-4 py-2 rounded-lg text-center"
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
}
