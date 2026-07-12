// Starter hotel dataset — real property names, placeholder prices/ratings.
//
// TODO: These hotel names come from current travel-site listings, but the
// priceTier, priceRange, and rating fields are UNVERIFIED placeholders. Before
// relying on this for real bookings: spot-check each hotel still exists, confirm
// its price band and star rating, and refresh every few months since prices and
// ratings drift. Kolašin and Skadar Lake (Virpazar) have thinner listing data
// online, so those two arrays are shorter/rougher — verify them first.
//
// TODO: When a Booking.com affiliate ID is approved, it flows in automatically
// via buildHotelBookingUrl() in src/lib/booking.js — no change needed here.

export const PRICE_TIERS = {
  budget: { label: "Budget", order: 1 },
  mid: { label: "Mid-range", order: 2 },
  upperMid: { label: "Upper mid-range", order: 3 },
  luxury: { label: "Luxury", order: 4 },
};

export const CITIES = [
  { slug: "kotor", name: "Kotor" },
  { slug: "budva", name: "Budva" },
  { slug: "tivat", name: "Tivat" },
  { slug: "zabljak", name: "Žabljak" },
  { slug: "kolasin", name: "Kolašin" },
  { slug: "skadar-lake", name: "Skadar Lake (Virpazar)" },
];

export const hotels = [
  // ---------------- KOTOR ----------------
  {
    id: "kotor-hotel-marija",
    city: "kotor",
    name: "Hotel Marija",
    priceTier: "budget",
    priceRange: "€55–70/night",
    rating: 4,
    tags: ["Old Town", "Budget pick"],
  },
  {
    id: "kotor-monte-cristo",
    city: "kotor",
    name: "Hotel Monte Cristo",
    priceTier: "mid",
    priceRange: "€90–120/night",
    rating: 4,
    tags: ["Near Old Town", "Free parking", "Restaurant"],
  },
  {
    id: "kotor-villa-duomo",
    city: "kotor",
    name: "Hotel Villa Duomo",
    priceTier: "mid",
    priceRange: "€100–140/night",
    rating: 4,
    tags: ["Inside Old Town", "Antique furnishings"],
  },
  {
    id: "kotor-boutique-hippocampus",
    city: "kotor",
    name: "Boutique Hotel Hippocampus",
    priceTier: "upperMid",
    priceRange: "€150–200/night",
    rating: 4,
    tags: ["Boutique", "Rooftop terrace", "17th-century building"],
  },
  {
    id: "kotor-hyatt-regency-bay",
    city: "kotor",
    name: "Hyatt Regency Kotor Bay Resort",
    priceTier: "luxury",
    priceRange: "€300+/night",
    rating: 5,
    tags: ["Beachfront", "Spa", "Pool"],
  },

  // ---------------- BUDVA ----------------
  {
    id: "budva-hotel-bono",
    city: "budva",
    name: "Hotel Bono",
    priceTier: "budget",
    priceRange: "€45–65/night",
    rating: 3,
    tags: ["Near Bečići Beach", "Budget pick"],
  },
  {
    id: "budva-fontana",
    city: "budva",
    name: "Fontana Hotel & Gastronomy",
    priceTier: "budget",
    priceRange: "€55–80/night",
    rating: 3,
    tags: ["Near Mogren Beach", "Garden", "Restaurant"],
  },
  {
    id: "budva-infinity",
    city: "budva",
    name: "Infinity Hotel & More",
    priceTier: "mid",
    priceRange: "€90–120/night",
    rating: 4,
    tags: ["Near Slovenska Beach", "Pool", "Fitness center"],
  },
  {
    id: "budva-avanti-spa",
    city: "budva",
    name: "Avanti Hotel & Spa",
    priceTier: "upperMid",
    priceRange: "€130–170/night",
    rating: 4,
    tags: ["Spa", "Pool", "Free bikes"],
  },
  {
    id: "budva-splendid-resort",
    city: "budva",
    name: "Hotel Splendid Conference & Spa Resort",
    priceTier: "luxury",
    priceRange: "€250+/night",
    rating: 5,
    tags: ["Beachfront", "Spa", "Bečići"],
  },

  // ---------------- TIVAT ----------------
  {
    id: "tivat-dd-apartments",
    city: "tivat",
    name: "D&D Apartments Tivat",
    priceTier: "budget",
    priceRange: "€50–70/night",
    rating: 3,
    tags: ["Budget pick", "Self-catering"],
  },
  {
    id: "tivat-hotel-palma",
    city: "tivat",
    name: "Hotel Palma",
    priceTier: "mid",
    priceRange: "€120–150/night",
    rating: 4,
    tags: ["Central Tivat", "Popular"],
  },
  {
    id: "tivat-zebra-hotel",
    city: "tivat",
    name: "Zebra Hotel",
    priceTier: "mid",
    priceRange: "€110–140/night",
    rating: 4,
    tags: ["Popular"],
  },
  {
    id: "tivat-la-fleur",
    city: "tivat",
    name: "La Fleur Boutique Hotel",
    priceTier: "upperMid",
    priceRange: "€180–230/night",
    rating: 5,
    tags: ["Boutique", "Spa", "Free breakfast"],
  },
  {
    id: "tivat-regent-porto-montenegro",
    city: "tivat",
    name: "Regent Porto Montenegro",
    priceTier: "luxury",
    priceRange: "€300+/night",
    rating: 5,
    tags: ["Marina", "Beachfront", "Family-friendly"],
  },

  // ---------------- ŽABLJAK ----------------
  {
    id: "zabljak-gorska-vila",
    city: "zabljak",
    name: "Gorska Vila Apartments",
    priceTier: "budget",
    priceRange: "€35–45/night",
    rating: 3,
    tags: ["Pet-friendly", "Budget pick"],
  },
  {
    id: "zabljak-durmitor-paradise",
    city: "zabljak",
    name: "Guest House Durmitor Paradise",
    priceTier: "budget",
    priceRange: "€40–55/night",
    rating: 3,
    tags: ["Homestay", "Homemade dinner"],
  },
  {
    id: "zabljak-hotel-pavlovic",
    city: "zabljak",
    name: "Hotel Pavlović",
    priceTier: "mid",
    priceRange: "€60–80/night",
    rating: 3,
    tags: ["Family-friendly", "Free parking"],
  },
  {
    id: "zabljak-hotel-soa",
    city: "zabljak",
    name: "Hotel SOA",
    priceTier: "upperMid",
    priceRange: "€100–130/night",
    rating: 4,
    tags: ["Near Black Lake", "Sauna", "Quiet"],
  },
  {
    id: "zabljak-polar-star",
    city: "zabljak",
    name: "Hotel Polar Star",
    priceTier: "luxury",
    priceRange: "€150–190/night",
    rating: 4,
    tags: ["Mountain resort", "Private ski lift", "Wellness center"],
  },

  // ---------------- KOLAŠIN ---------------- (thinner listing data — verify before launch)
  {
    id: "kolasin-chalet",
    city: "kolasin",
    name: "Chalet Kolašin Montenegro",
    priceTier: "budget",
    priceRange: "€45–65/night",
    rating: 3,
    tags: ["Self-catering", "Near ski resort", "Groups/families"],
  },
  {
    id: "kolasin-berane-hotel",
    city: "kolasin",
    name: "Hotel Berane",
    priceTier: "mid",
    priceRange: "€60–90/night",
    rating: 3,
    tags: ["Central Kolašin"],
  },
  {
    id: "kolasin-bianca-resort",
    city: "kolasin",
    name: "Bianca Resort & Spa",
    priceTier: "luxury",
    priceRange: "€150+/night",
    rating: 4,
    tags: ["Spa", "Ski shuttle", "Family-friendly"],
  },

  // ---------------- SKADAR LAKE / VIRPAZAR ---------------- (thinner listing data — verify before launch)
  {
    id: "virpazar-guesthouse-skadar-raicevic",
    city: "skadar-lake",
    name: "Guesthouse Skadar Lake - Raičević",
    priceTier: "budget",
    priceRange: "€30–45/night",
    rating: 4,
    tags: ["Lake view", "Homestay", "Boat tours"],
  },
  {
    id: "virpazar-guest-house-bato",
    city: "skadar-lake",
    name: "Guest House Bato",
    priceTier: "budget",
    priceRange: "€30–45/night",
    rating: 3,
    tags: ["Godinje village", "Homestay"],
  },
  {
    id: "virpazar-hotel-pelikan",
    city: "skadar-lake",
    name: "Hotel Pelikan",
    priceTier: "mid",
    priceRange: "€55–75/night",
    rating: 3,
    tags: ["Central Virpazar", "Garden"],
  },
  {
    id: "virpazar-hotel-deandros",
    city: "skadar-lake",
    name: "Hotel De'Andros Virpazar",
    priceTier: "upperMid",
    priceRange: "€80–110/night",
    rating: 3,
    tags: ["Near lake", "Fitness center"],
  },
];

export const CITY_NAME_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c.name]));

export function getHotelsByCity(citySlug) {
  return hotels.filter((h) => h.city === citySlug);
}
