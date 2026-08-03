"use client";

import { motion } from "motion/react";
import { PRICE_TIERS } from "@/data/hotels";
import { buildHotelBookingUrl } from "@/lib/booking";
import { unsplashUrl } from "@/lib/images";
import FadeImage from "@/components/FadeImage";

const TIER_BADGE_COLORS = {
  budget: "bg-bronze/10 text-bronze-text border-bronze/30",
  mid: "bg-bronze/10 text-bronze-text border-bronze/30",
  upperMid: "bg-bronze/10 text-bronze-text border-bronze/30",
  luxury: "bg-bronze/15 text-bronze-text border-bronze/40",
};

function Stars({ rating }) {
  return (
    <span className="text-bronze-text text-sm" aria-label={`${rating} star${rating === 1 ? "" : "s"}`}>
      {"★".repeat(rating)}
      <span className="text-ink/20">{"★".repeat(Math.max(0, 5 - rating))}</span>
    </span>
  );
}

export default function HotelCard({ hotel, cityName, image }) {
  const tier = PRICE_TIERS[hotel.priceTier];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card-elevate group bg-ink-light border border-border rounded-sm overflow-hidden flex flex-col"
    >
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <FadeImage
            src={unsplashUrl(image.id, { w: 700 })}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-[transform,opacity] duration-700 ease-graceful group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
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
          <span className="font-medium text-bronze-text">{hotel.priceRange}</span>
        </div>

        {hotel.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {hotel.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-bronze/10 border border-bronze/20 rounded-full text-bronze-text"
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
          className="group/cta mt-auto inline-flex items-center justify-center text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-snap px-5 py-2.5 rounded-sm w-fit"
        >
          Check availability
          <span className="inline-block ml-1.5 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/cta:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}
