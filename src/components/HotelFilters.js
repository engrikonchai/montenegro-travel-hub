import { PRICE_TIERS } from "@/data/hotels";

// Toggle-chip filter bar for the hotel grid. Purely presentational — all state
// lives in HotelExplorer, which passes the selected sets and toggle handlers.

const TIER_ORDER = Object.entries(PRICE_TIERS)
  .sort((a, b) => a[1].order - b[1].order)
  .map(([key, val]) => ({ key, label: val.label }));

const RATINGS = [3, 4, 5];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`text-sm px-4 py-2 rounded-full border transition-colors ${
        active
          ? "bg-bronze text-stone border-bronze"
          : "border-ink/15 text-stone-dim hover:border-bronze hover:text-bronze"
      }`}
    >
      {children}
    </button>
  );
}

export default function HotelFilters({
  availableTags,
  selectedTiers,
  selectedRatings,
  selectedTags,
  onToggleTier,
  onToggleRating,
  onToggleTag,
  onClear,
}) {
  const hasActiveFilters =
    selectedTiers.length > 0 || selectedRatings.length > 0 || selectedTags.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-dim mb-2.5">Price</p>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by price tier">
          {TIER_ORDER.map((tier) => (
            <Chip
              key={tier.key}
              active={selectedTiers.includes(tier.key)}
              onClick={() => onToggleTier(tier.key)}
            >
              {tier.label}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-stone-dim mb-2.5">Star rating</p>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by star rating">
          {RATINGS.map((rating) => (
            <Chip
              key={rating}
              active={selectedRatings.includes(rating)}
              onClick={() => onToggleRating(rating)}
            >
              {rating}★
            </Chip>
          ))}
        </div>
      </div>

      {availableTags.length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-wide text-stone-dim mb-2.5">Features</p>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by feature">
            {availableTags.map((tag) => (
              <Chip
                key={tag}
                active={selectedTags.includes(tag)}
                onClick={() => onToggleTag(tag)}
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClear}
          className="text-sm text-bronze hover:underline w-fit"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
