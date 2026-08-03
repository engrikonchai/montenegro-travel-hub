"use client";

import { motion } from "motion/react";
import PhotoCredit from "@/components/PhotoCredit";
import FadeImage from "@/components/FadeImage";
import { unsplashUrl } from "@/lib/images";
import { TAG_LABELS } from "@/lib/tours";

// Region badges no longer carry per-region colors — the palette uses a single
// teal accent — but the keys are kept so existing region `color` data resolves.
const BADGE_COLORS = {
  sage: "bg-bronze/10 text-bronze-text border-bronze/30",
  clay: "bg-bronze/10 text-bronze-text border-bronze/30",
  bronze: "bg-bronze/10 text-bronze-text border-bronze/30",
};

export default function TourCard({ tour, regionLabel, regionColor }) {
  return (
    <motion.div
      id={tour.id}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card-elevate group bg-ink-light border border-border rounded-sm overflow-hidden flex flex-col scroll-mt-28"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <FadeImage
          src={unsplashUrl(tour.image.id, { w: 800 })}
          alt={tour.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-[transform,opacity] duration-700 ease-graceful group-hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-5">
        <PhotoCredit name={tour.image.credit} className="-mt-1" />

        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-display text-xl md:text-2xl leading-tight">{tour.name}</h3>
          <span
            className={`shrink-0 text-xs uppercase tracking-wide px-3 py-1 rounded-full border ${
              BADGE_COLORS[regionColor] || BADGE_COLORS.sage
            }`}
          >
            {regionLabel}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-bronze-text">{tour.priceFrom}</span>
          <span className="text-ink/20">&bull;</span>
          <span className="text-stone-dim">{tour.duration}</span>
        </div>

        {tour.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-bronze/10 border border-bronze/20 rounded-full text-bronze-text"
              >
                {TAG_LABELS[tag] || tag}
              </span>
            ))}
          </div>
        )}

        {(tour.startingPoints.length > 0 || tour.endingPoints.length > 0) && (
          <p className="text-sm text-stone-dim">
            <span className="text-ink">{tour.startingPoints.join(", ") || "—"}</span>
            {" → "}
            <span className="text-ink">{tour.endingPoints.join(", ") || "—"}</span>
          </p>
        )}

        {tour.route.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wide text-stone-dim mb-2">Route</p>
            <ol className="space-y-1.5 text-sm text-ink">
              {tour.route.map((stop, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-bronze-text font-medium shrink-0">{i + 1}.</span>
                  {stop.type === "choice" ? (
                    <span>Choose one: {stop.options.join(", ")}</span>
                  ) : (
                    <span>{stop.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        {tour.activities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tour.activities.map((activity) => (
              <span
                key={activity.id}
                className="text-xs px-2.5 py-1 bg-stone border border-border rounded-full text-stone-dim"
              >
                {activity.label}
              </span>
            ))}
          </div>
        )}

        {/* PLACEHOLDER testimonial — replace with a real Wonder Montenegro client quote. */}
        {tour.testimonial && (
          <blockquote className="border-l-2 border-bronze/40 pl-4 py-0.5">
            <p className="text-sm text-stone-dim italic leading-relaxed">&ldquo;{tour.testimonial.quote}&rdquo;</p>
            <p className="text-xs text-stone-dim/70 mt-1.5 not-italic">&mdash; {tour.testimonial.name}</p>
          </blockquote>
        )}

        <a
          href="https://wondermontenegro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta mt-auto inline-flex items-center justify-center text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-snap px-5 py-2.5 rounded-sm w-fit"
        >
          Book via Wonder Montenegro
          <span className="inline-block ml-1.5 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/cta:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}
