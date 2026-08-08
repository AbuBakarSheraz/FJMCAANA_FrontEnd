import type { Metadata } from "next";
import { Fraunces, Public_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "500", "600"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "FJMCAANA — Fatima Jinnah Medical College Alumnae Association of North America",
  description:
    "Connecting women physicians of Fatima Jinnah Medical University worldwide, and funding healthcare projects across Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body text-ink bg-cream">{children}</body>
    </html>
  );
}
