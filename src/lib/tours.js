import locations from "@/data/locations.json";
import { IMAGES } from "@/lib/images";

/**
 * @typedef {Object} TourActivity
 * @property {string} id
 * @property {string} label
 *
 * @typedef {Object} TourRouteStop
 * @property {"fixed"} type
 * @property {string} label
 *
 * @typedef {Object} TourRouteChoice
 * @property {"choice"} type
 * @property {string[]} options
 *
 * @typedef {Object} TourTestimonial
 * @property {string} quote
 * @property {string} name
 *
 * @typedef {Object} Tour
 * @property {string} id
 * @property {string} name
 * @property {number} lat
 * @property {number} lng
 * @property {string[]} startingPoints
 * @property {string[]} endingPoints
 * @property {TourActivity[]} activities
 * @property {(TourRouteStop|TourRouteChoice)[]} route
 * @property {string} priceFrom
 * @property {string} duration
 * @property {string[]} tags
 * @property {{id: string, alt: string, credit: string}} image
 * @property {TourTestimonial|null} testimonial
 */

// TODO: fill in real display names (and eventually prices) for each activity id
// as Wonder Montenegro finalizes them. Anything missing here falls back to a
// humanized version of the raw id (e.g. "ziplineBudva" -> "Zipline Budva").
const ACTIVITY_LABELS = {};

export function humanizeActivityId(id) {
  return id
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export function getActivityLabel(id) {
  return ACTIVITY_LABELS[id] || humanizeActivityId(id);
}

export const TAG_LABELS = {
  "family-friendly": "Family-friendly",
  adventure: "Adventure",
  relaxed: "Relaxed",
  hiking: "Hiking",
  "boat-trip": "Boat trip",
};

// PLACEHOLDER PRICING — these are realistic-looking placeholders, not real
// Wonder Montenegro rates. Replace every `priceFrom` below once real pricing
// is confirmed. `duration` and `tags` are inferred from each tour's route and
// activity list and are worth a sanity check too, but aren't guesses about
// numbers the way price is.
//
// PLACEHOLDER TESTIMONIALS — every `testimonial` below is invented sample
// copy (not a real client quote) so the card layout has something to show.
// Swap in real Wonder Montenegro client quotes before this goes live.
const TOUR_DETAILS = {
  skadarLake: {
    priceFrom: "from €35pp", // placeholder
    duration: "Full day",
    tags: ["family-friendly", "boat-trip"],
    image: {
      id: "photo-1686689659804-21f45f01bd3b",
      alt: "Skadar Lake, Montenegro, its still water blanketed with water lilies",
      credit: "Chitra Laras",
    },
    testimonial: {
      quote: "The boat cruise across the lake was so peaceful — the kids loved the zipline stop after.",
      name: "Anna K.",
    },
  },
  raftingTara: {
    priceFrom: "from €65pp", // placeholder
    duration: "Full day",
    tags: ["adventure"],
    image: {
      id: "photo-1666008491587-803f34885df4",
      alt: "The Tara River winding through the forested Tara River Canyon, Montenegro, one of Europe's deepest canyons and a popular whitewater-rafting run",
      credit: "Christian Thöni",
    },
    testimonial: {
      quote: "Genuinely the best rafting I've done. Our guide made it feel safe even through the bigger rapids.",
      name: "Marco T.",
    },
  },
  blackLake: {
    priceFrom: "from €45pp", // placeholder
    duration: "Full day",
    tags: ["hiking", "relaxed"],
    image: IMAGES.durmitorBlackLake,
    testimonial: {
      quote: "An easy, gorgeous walk with real payoff views. Perfect half-day from Žabljak.",
      name: "Priya S.",
    },
  },
  durmitorActivities: {
    priceFrom: "from €75pp", // placeholder
    duration: "Full day",
    tags: ["adventure"],
    // No Montenegro-specific ATV/jeep-safari photo found on Unsplash — generic thematic match.
    image: {
      id: "photo-1675428604186-a165487f857c",
      alt: "A rider on an off-road ATV kicking up dust on a forest trail",
      credit: "Aleksandrs Karevs",
    },
    testimonial: {
      quote: "Packed so much into one day — ATVs, the jeep track, even a quick raft. Never a dull moment.",
      name: "Jonas W.",
    },
  },
  kolasinActivities: {
    priceFrom: "from €65pp", // placeholder
    duration: "Full day",
    tags: ["adventure"],
    image: {
      id: "photo-1729455262359-eaf83834808b",
      alt: "Aerial view of a dirt road winding through forested mountains near Kolašin, Montenegro",
      credit: "Michal Lauko",
    },
    testimonial: {
      quote: "Loved the horse riding through the forest. Kolašin is stunning and totally different from the coast.",
      name: "Elena R.",
    },
  },
  durmitorRing: {
    priceFrom: "from €55pp", // placeholder
    duration: "Full day",
    tags: ["relaxed", "hiking"],
    // No confirmed Durmitor hairpin-road photo found on Unsplash — generic mountain pass road match.
    image: {
      id: "photo-1735567430450-6873cedc8e1d",
      alt: "Aerial view of a serpentine mountain road with sweeping hairpin turns, Transfăgărășan Highway, Romania",
      credit: "Maarten van den Heuvel",
    },
    testimonial: {
      quote: "The Sedlo Pass views are unreal. Glad we added the short hike at the top.",
      name: "Tom H.",
    },
  },
  raftingPiva: {
    priceFrom: "from €50pp", // placeholder
    duration: "Half day",
    tags: ["adventure"],
    image: {
      id: "photo-1671881830460-1e12999cb22e",
      alt: "The turquoise water of Piva Canyon (Kanjon Pive), Montenegro, framed by steep mountain walls",
      credit: "Sporisevic Photography",
    },
    testimonial: {
      quote: "Calmer than Tara but the canyon colors are unbelievable. Great for first-timers.",
      name: "Sofia L.",
    },
  },
  biogradLake: {
    priceFrom: "from €40pp", // placeholder
    duration: "Full day",
    tags: ["hiking", "relaxed"],
    image: {
      id: "photo-1694306125101-67ebb619694d",
      alt: "A small boat resting on the still water of Biogradsko Lake in Biogradska Gora National Park, Montenegro, ringed by old-growth forest",
      credit: "Milos Lopusina",
    },
    testimonial: {
      quote: "So quiet and green — a proper break from the coast crowds. The lake is beautiful.",
      name: "David N.",
    },
  },
};

// Fallback for any tour id added to locations.json before TOUR_DETAILS has
// been filled in for it.
const DEFAULT_TOUR_DETAILS = {
  priceFrom: "Contact for pricing",
  duration: "Full day",
  tags: [],
  image: IMAGES.kotorBay,
  testimonial: null,
};

export function getTourDetails(id) {
  return TOUR_DETAILS[id] || DEFAULT_TOUR_DETAILS;
}

// Add a new tour's id to a region's `tourIds` to slot it into that group.
// Any tour not listed in any region below still shows up, under "More Tours".
export const REGIONS = [
  {
    id: "central-lakes",
    label: "Central Lakes & Day Trips",
    color: "sage",
    tourIds: ["skadarLake", "biogradLake"],
  },
  {
    id: "durmitor-tara",
    label: "Durmitor & Tara Adventure Hub",
    color: "clay",
    tourIds: ["raftingTara", "blackLake", "durmitorActivities", "durmitorRing", "raftingPiva"],
  },
  {
    id: "kolasin",
    label: "Kolašin Adventures",
    color: "bronze",
    tourIds: ["kolasinActivities"],
  },
];

function normalizeRouteStop(stop) {
  if (stop.type === "choice") {
    return {
      type: "choice",
      options: (stop.options || []).map((o) => o.name || getActivityLabel(o.id)),
    };
  }
  return {
    type: "fixed",
    label: stop.name || getActivityLabel(stop.id),
  };
}

/** @returns {Tour[]} */
export function getAllTours() {
  return locations.map((loc) => ({
    id: loc.id,
    name: loc.name,
    lat: loc.lat,
    lng: loc.lng,
    startingPoints: loc.startingPoint || [],
    endingPoints: loc.endingPoint || [],
    activities: (loc.availableActivities || []).map((id) => ({ id, label: getActivityLabel(id) })),
    route: (loc.route || []).map(normalizeRouteStop),
    ...getTourDetails(loc.id),
  }));
}

export function getAllTourTags() {
  const tours = getAllTours();
  const present = new Set(tours.flatMap((t) => t.tags));
  return Object.keys(TAG_LABELS).filter((tag) => present.has(tag));
}

export function getToursGroupedByRegion() {
  const tours = getAllTours();
  const byId = Object.fromEntries(tours.map((t) => [t.id, t]));
  const groupedIds = new Set(REGIONS.flatMap((r) => r.tourIds));

  const grouped = REGIONS.map((region) => ({
    ...region,
    tours: region.tourIds.map((id) => byId[id]).filter(Boolean),
  }));

  const rest = tours.filter((t) => !groupedIds.has(t.id));
  if (rest.length) {
    grouped.push({ id: "other", label: "More Tours", color: "sage", tours: rest });
  }

  return grouped;
}
