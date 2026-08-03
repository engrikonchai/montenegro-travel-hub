"use client";

import { MotionConfig } from "motion/react";

// Deliberately not using reducedMotion="user" here: it would force every
// Motion transition to duration:0 for OS-level "reduce motion" users, but
// the small opacity/8-16px-translate fades this site uses (scroll reveals,
// card mounts, tap/hover feedback) aren't the kind of large-scale, vestibular
// motion that preference is meant to suppress — most production sites leave
// exactly this class of animation running and only kill the intense stuff.
// The two effects here that actually qualify (the hero's Ken Burns zoom and
// its scroll parallax) are disabled independently via a CSS media query and
// a matchMedia check, so they're covered without a blanket override.
export default function MotionProvider({ children }) {
  return <MotionConfig>{children}</MotionConfig>;
}
