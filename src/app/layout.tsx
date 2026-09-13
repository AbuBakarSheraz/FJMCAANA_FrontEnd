import type { Metadata } from "next";
import { Cormorant, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import HeritageBadge from "@/components/HeritageBadge";
import MotionProvider from "@/components/MotionProvider";
import PageTransition from "@/components/motion/PageTransition";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "FJMCAANA — Fatima Jinnah Medical College Alumni Association of North America",
  description:
    "Connecting women physicians of Fatima Jinnah Medical University worldwide, and funding healthcare projects across Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body text-ink bg-cream">
        <MotionProvider>
          <PageTransition>{children}</PageTransition>
          <HeritageBadge />
          <BottomNav />
        </MotionProvider>
      </body>
    </html>
  );
}