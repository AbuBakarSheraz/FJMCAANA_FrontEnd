"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;
// Begin after a meaningful portion is visible. Using `amount` instead of a
// shrunken observer root keeps the trigger reliable for both short cards and
// long editorial sections.
const viewport = { once: true, amount: 0.25 } as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT_QUINT } },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.16 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE_OUT_QUINT } },
};

type MotionDivProps = Omit<
  ComponentProps<typeof motion.div>,
  "initial" | "whileInView" | "viewport" | "variants" | "transition" | "whileHover"
>;

export function Reveal({ children, className, ...props }: MotionDivProps) {
  return <motion.div {...props} className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={revealVariants}>{children}</motion.div>;
}

export function Stagger({ children, className, ...props }: MotionDivProps) {
  return <motion.div {...props} className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>{children}</motion.div>;
}

export function StaggerItem({ children, className, interactive = false, ...props }: MotionDivProps & { interactive?: boolean }) {
  return <motion.div {...props} className={className} variants={cardVariants} whileHover={interactive ? { y: -2, scale: 1.01 } : undefined} transition={{ duration: 0.22, ease: EASE_OUT_QUINT }}>{children}</motion.div>;
}
