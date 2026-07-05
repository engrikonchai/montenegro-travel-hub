const BADGE_COLORS = {
  sage: "bg-sage/10 text-sage border-sage/30",
  clay: "bg-clay/10 text-clay border-clay/30",
  bronze: "bg-bronze/10 text-bronze border-bronze/30",
};

export default function TourCard({ tour, regionLabel, regionColor }) {
  return (
    <div className="bg-ink-light/60 border border-ink/10 rounded-sm p-6 md:p-8 flex flex-col gap-5">
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

      <a
        href="https://wondermontenegro.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center text-sm font-medium text-stone bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm w-fit"
      >
        Book via Wonder Montenegro &rarr;
      </a>
    </div>
  );
}
