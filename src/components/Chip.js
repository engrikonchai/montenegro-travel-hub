"use client";

import { motion } from "motion/react";

// Shared toggle-chip used by both HotelFilters and TourExplorer's tag filter
// bar — one filter-chip interaction pattern across the whole site instead of
// two near-identical implementations drifting apart over time.
export default function Chip({ active, onClick, children }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
      className={`text-sm px-4 py-2 rounded-full border transition-colors duration-200 ease-snap ${
        active
          ? "bg-bronze text-ink border-bronze"
          : "border-border text-stone-dim hover:border-bronze hover:text-bronze-text"
      }`}
    >
      {children}
    </motion.button>
  );
}
