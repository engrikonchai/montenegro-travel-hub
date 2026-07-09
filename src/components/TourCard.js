import Image from "next/image";
import PhotoCredit from "@/components/PhotoCredit";
import { unsplashUrl } from "@/lib/images";
import { TAG_LABELS } from "@/lib/tours";

const BADGE_COLORS = {
  sage: "bg-sage/10 text-sage border-sage/30",
  clay: "bg-clay/10 text-clay border-clay/30",
  bronze: "bg-bronze/10 text-bronze border-bronze/30",
};

export default function TourCard({ tour, regionLabel, regionColor }) {
  return (
    <div id={tour.id} className="bg-ink-light/60 border border-ink/10 rounded-sm overflow-hidden flex flex-col scroll-mt-28">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={unsplashUrl(tour.image.id, { w: 800 })}
          alt={tour.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
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
          <span className="font-medium text-bronze">{tour.priceFrom}</span>
          <span className="text-ink/20">&bull;</span>
          <span className="text-stone-dim">{tour.duration}</span>
        </div>

        {tour.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-bronze/10 border border-bronze/20 rounded-full text-bronze"
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
                  <span className="text-bronze font-medium shrink-0">{i + 1}.</span>
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
                className="text-xs px-2.5 py-1 bg-stone border border-ink/10 rounded-full text-stone-dim"
              >
                {activity.label}
              </span>
            ))}
          </div>
        )}

        {/* PLACEHOLDER testimonial — replace with a real Wonder Montenegro client quote. */}
        {tour.testimonial && (
          <blockquote className="border-l-2 border-clay/40 pl-4 py-0.5">
            <p className="text-sm text-stone-dim italic leading-relaxed">&ldquo;{tour.testimonial.quote}&rdquo;</p>
            <p className="text-xs text-stone-dim/70 mt-1.5 not-italic">&mdash; {tour.testimonial.name}</p>
          </blockquote>
        )}

        <a
          href="https://wondermontenegro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center text-sm font-medium text-stone bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm w-fit"
        >
          Book via Wonder Montenegro &rarr;
        </a>
      </div>
    </div>
  );
}
