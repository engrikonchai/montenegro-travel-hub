"use client";

import { useState } from "react";
import Image from "next/image";

// Below-fold content images (not the LCP hero) pop in hard the instant they
// finish downloading otherwise — a graceful fade reads as considered, not
// slow, since it's the same duration/curve the rest of the content uses to
// enter. Not used for priority/hero images: those should paint as soon as
// they're ready, not be held behind a fade.
//
// Only toggles the opacity classes — it doesn't set its own transition
// utility. Tailwind's transition-{property} utilities each set the whole
// `transition-property` declaration, so they don't compose by both being
// present in a className; the caller's own hover-zoom transition (e.g.
// `transition-[transform,opacity] duration-700 ease-graceful`) must include
// `opacity` in its property list for this fade to actually animate.
export default function FadeImage({ className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by callers via ...props, just not statically visible here
    <Image
      {...props}
      onLoad={() => setLoaded(true)}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
