"use client";

import { motion } from "framer-motion";
import SealEmblem from "./SealEmblem";

export default function SealDivider() {
  return (
    <div className="seal-divider" aria-hidden="true">
      <motion.div
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold"
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <SealEmblem className="h-6 w-6" />
      </motion.div>
    </div>
  );
}
