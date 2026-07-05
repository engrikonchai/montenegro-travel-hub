import locations from "@/data/locations.json";

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
 * @typedef {Object} Tour
 * @property {string} id
 * @property {string} name
 * @property {number} lat
 * @property {number} lng
 * @property {string[]} startingPoints
 * @property {string[]} endingPoints
 * @property {TourActivity[]} activities
 * @property {(TourRouteStop|TourRouteChoice)[]} route
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
  }));
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
