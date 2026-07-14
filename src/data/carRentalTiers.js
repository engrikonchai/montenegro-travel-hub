// Starter car rental tier dataset — real agency names, UNVERIFIED placeholder
// prices. Spot-check price ranges and agency availability before relying on
// this for real bookings, and refresh every few months since rates drift.
// The tier CTAs are inert placeholders (see TierCard.js) until a rental
// partnership is confirmed — at that point give each card a real destination.

export const carRentalTiers = [
  {
    id: "budget-economy",
    title: "Budget & Economy",
    priceRange: "€20–40/day",
    carClasses: ["VW Polo-class", "Fiat Panda-class", "Hyundai i10-class"],
    blurb:
      "Small, fuel-efficient cars that are easy to park in Old Town streets and cost the least to fill up. Good fit if you're mainly sticking to the coast and don't need extra ground clearance.",
    agencies: ["Driver Rent A Car", "Green Motion", "U-Save", "Localrent"],
    tags: ["Cheapest option", "Best for coastal towns", "Easy parking"],
    imageKey: "carRentalBudget",
  },
  {
    id: "mid-range-volume",
    title: "Mid-Range & Volume",
    priceRange: "€40–70/day",
    carClasses: ["VW Golf/Passat-class sedans", "Dacia Duster-class SUV", "Škoda Karoq-class SUV"],
    blurb:
      "The most-booked category in Montenegro, and for good reason — mountain roads to Durmitor, Kolašin, or Lovćen reward the extra ground clearance and power a compact SUV gives you over a small economy car.",
    agencies: ["MontenegroCar", "Final Rentals", "Localrent"],
    tags: ["Good for mountain roads", "Sedan or SUV"],
    imageKey: "carRentalMidSuv",
    popular: true,
  },
  {
    id: "premium-luxury",
    title: "Premium & Luxury",
    priceRange: "€60–150+/day",
    carClasses: ["Mercedes/BMW-class sedans", "Larger luxury SUVs"],
    blurb:
      "For a special-occasion trip along the coast, or if comfort matters more than budget on longer drives between Kotor, Budva, and the north.",
    agencies: ["SIXT", "RentLuxeCar"],
    tags: ["Comfort-focused", "Special occasions", "Longer drives"],
    imageKey: "carRentalPremium",
  },
];
