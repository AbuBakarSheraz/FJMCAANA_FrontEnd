"use client";

import { MotionConfig } from "framer-motion";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.82, ease: EASE_OUT_QUINT }}>
      {children}
    </MotionConfig>
  );
}
