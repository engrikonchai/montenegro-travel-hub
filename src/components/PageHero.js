"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import PhotoCredit from "@/components/PhotoCredit";
import { unsplashUrl } from "@/lib/images";

export default function PageHero({
  image,
  kicker,
  title,
  subtitle,
  tall = false,
  priority = false,
  shimmer = false,
  children,
}) {
  const imageSrc = image.local ? image.src : unsplashUrl(image.id, { w: 1800 });
  const containerRef = useRef(null);

  // Read at the top of the page scrollYProgress is ~0 regardless of range, so
  // setting this after mount (rather than branching the initial render) can't
  // cause a hydration mismatch — it only affects the transform once scrolled.
  const [parallaxRange, setParallaxRange] = useState(120);
  useEffect(() => {
    // Deliberately client-only: matchMedia isn't available during SSR, and
    // computing this in a lazy useState initializer instead would read the
    // real value during the client's first render, mismatching the server's.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParallaxRange(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 120);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxRange]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${tall ? "h-[78vh] min-h-[560px]" : "h-[52vh] min-h-[380px]"}`}
    >
      <motion.div className="absolute inset-x-0 -top-[8%] -bottom-[8%]" style={{ y }}>
        <div className="relative w-full h-full animate-hero-kenburns">
          <Image
            src={imageSrc}
            alt={image.alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
      {shimmer && (
        <div
          className="absolute inset-0 overflow-hidden mix-blend-soft-light pointer-events-none"
          aria-hidden="true"
        >
          <div className="hero-shimmer-a absolute -inset-x-1/4 -inset-y-1/4" />
          <div className="hero-shimmer-b absolute -inset-x-1/4 -inset-y-1/4" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
          {kicker && (
            <p className="animate-fade-up text-stone/85 text-xs md:text-sm tracking-[0.25em] uppercase mb-4">
              {kicker}
            </p>
          )}
          {title && (
            <h1 className="animate-fade-up [animation-delay:120ms] font-display text-stone text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="animate-fade-up [animation-delay:260ms] mt-6 max-w-xl text-stone/80 text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="animate-fade-up [animation-delay:400ms] mt-8">{children}</div>}
          {image.credit && <PhotoCredit name={image.credit} light className="mt-6" />}
        </div>
      </div>
    </div>
  );
}
