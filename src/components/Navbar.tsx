"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/impact", label: "Our Impact" },
  { href: "/reports", label: "Reports" },
  { href: "/financial-reports", label: "Financial Reports" },
  { href: "/help", label: "Help & Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-pine/10">
      <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-display font-semibold text-lg text-pine-dark">
          <Image src="/images/Logo.png" alt="FJMCAANA logo" width={64} height={64} priority className="h-14 w-14 flex-none object-contain sm:h-16 sm:w-16" />
          <span className="hidden leading-tight md:block">FJMCAANA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-pine-dark transition">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.paypal.com/us/fundraiser/charity/1554217"
            className="hidden sm:inline-block bg-gold text-pine-dark text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gold-light transition"
            target="_blank"
            rel="noopener noreferrer"
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
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.paypal.com/us/fundraiser/charity/1554217"
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
