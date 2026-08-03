"use client";

import { motion } from "motion/react";

// Scroll-triggered entrance, used to extend the site's existing fade-up
// language (see .animate-fade-up in globals.css) past the hero and into
// content that starts below the fold. Fires once, the first time each
// element enters the viewport. Reduced-motion handling comes from the
// MotionConfig in MotionProvider (app-wide), not from branching here, so
// server and client always render the same markup.
//
// Two variants, used deliberately sparingly:
// - "fade" (default): the sitewide entrance — small rise + opacity fade,
//   used everywhere content appears on scroll.
// - "wipe": a directional curtain-pull via clip-path, reserved for the
//   homepage's three destination cards only. Not meant to become a second
//   sitewide default — using it everywhere would make it as generic as a
//   plain fade; using it in exactly one place keeps it a moment.
export default function Reveal({ children, delay = 0, y = 16, className, as = "div", variant = "fade" }) {
  const MotionTag = motion[as] || motion.div;

  if (variant === "wipe") {
    return (
      <MotionTag
        initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 1, delay, ease: [0.65, 0, 0.35, 1] }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
