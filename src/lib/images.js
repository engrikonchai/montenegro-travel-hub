export const IMAGES = {
  kotorBay: {
    id: "photo-1614122027743-50a9e6e8002f",
    alt: "Aerial view of Kotor Bay, Montenegro, with mountains rising around the water and the Old Town below",
    credit: "olga brajnovic",
  },
  skadarLakeHero: {
    src: "/images/homepage-hero-skadar-lake.jpg",
    alt: "Skadar Lake surrounded by pine forest, Montenegro",
    local: true,
  },
  budvaOldTown: {
    id: "photo-1599686253246-1d02244f2169",
    alt: "Budva Old Town's stone walls and bell tower seen from a pebble beach, Montenegro",
    credit: "Ender Vatan",
  },
  budvaStatue: {
    id: "photo-1693984161308-1158f9eae1c4",
    alt: "The Dancing Girl of Budva statue with the Old Town in the background",
    credit: "Minas Aslanyan",
  },
  durmitorBlackLake: {
    id: "photo-1715528598792-576ca7b3777b",
    alt: "A rowboat on Black Lake (Crno Jezero) in Durmitor National Park, Montenegro",
    credit: "Uliana Sova",
  },
  mountainRoadLocal: {
    src: "/images/car-rentals-road.jpg",
    alt: "A paved mountain road curving through dense green forest in Montenegro",
    local: true,
  },
  mountainRoad: {
    id: "photo-1659853478191-516cbccb518b",
    alt: "A car on a mountain road through a rocky gorge in Montenegro",
    credit: "Ilse",
  },
  carRentalBudget: {
    src: "/images/car-rental-budget-vw-polo.jpg",
    alt: "A white VW Polo-class hatchback parked on a cobblestone street between colorful buildings",
    local: true,
  },
  carRentalMidSuv: {
    src: "/images/car-rental-mid-corolla.jpg",
    alt: "A white Toyota Corolla-class sedan driving on a coastal mountain road",
    local: true,
  },
  carRentalPremium: {
    src: "/images/car-rental-premium-c-class.jpg",
    alt: "A black Mercedes C-Class-style sedan parked beside a seaside terrace",
    local: true,
  },
  svetiStefan: {
    id: "photo-1719305184350-ec6250040a74",
    alt: "Aerial view of the Sveti Stefan island resort on Montenegro's Adriatic coast",
    credit: "Gamze Teoman",
  },
};

export function unsplashUrl(id, { w = 1200, q = 80 } = {}) {
  return `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}
