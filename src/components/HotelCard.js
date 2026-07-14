import { PRICE_TIERS } from "@/data/hotels";
import { buildHotelBookingUrl } from "@/lib/booking";

const TIER_BADGE_COLORS = {
  budget: "bg-bronze/10 text-bronze border-bronze/30",
  mid: "bg-bronze/10 text-bronze border-bronze/30",
  upperMid: "bg-bronze/10 text-bronze border-bronze/30",
  luxury: "bg-bronze/15 text-bronze border-bronze/40",
};

function Stars({ rating }) {
  return (
    <span className="text-bronze text-sm" aria-label={`${rating} star${rating === 1 ? "" : "s"}`}>
      {"★".repeat(rating)}
      <span className="text-ink/20">{"★".repeat(Math.max(0, 5 - rating))}</span>
    </span>
  );
}

export default function HotelCard({ hotel, cityName }) {
  const tier = PRICE_TIERS[hotel.priceTier];

  return (
    <div className="bg-ink-light/60 border border-border rounded-sm p-6 md:p-7 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="font-display text-xl leading-tight">{hotel.name}</h3>
        <span
          className={`shrink-0 text-xs uppercase tracking-wide px-3 py-1 rounded-full border ${
            TIER_BADGE_COLORS[hotel.priceTier] || TIER_BADGE_COLORS.mid
          }`}
        >
          {tier?.label || hotel.priceTier}
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <Stars rating={hotel.rating} />
        <span className="text-ink/20">&bull;</span>
        <span className="font-medium text-bronze">{hotel.priceRange}</span>
      </div>

      {hotel.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {hotel.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-bronze/10 border border-bronze/20 rounded-full text-bronze"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={buildHotelBookingUrl(hotel.name, cityName)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm w-fit"
      >
        Check availability &rarr;
      </a>
    </div>
  );
}
