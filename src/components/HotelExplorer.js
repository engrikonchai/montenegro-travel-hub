"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import HotelCard from "@/components/HotelCard";
import HotelFilters from "@/components/HotelFilters";
import Listbox from "@/components/Listbox";
import { CITIES, CITY_IMAGE_KEYS, PRICE_TIERS, hotels } from "@/data/hotels";
import { IMAGES } from "@/lib/images";

const SORTS = {
  price: { label: "Price: low to high" },
  rating: { label: "Rating: high to low" },
};

const CITY_OPTIONS = CITIES.map((c) => ({ value: c.slug, label: c.name }));
const SORT_OPTIONS = Object.entries(SORTS).map(([key, val]) => ({ value: key, label: val.label }));

export default function HotelExplorer() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0].slug);
  const [selectedTiers, setSelectedTiers] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sort, setSort] = useState("price");

  const cityName = CITIES.find((c) => c.slug === selectedCity)?.name || "";
  const cityImage = IMAGES[CITY_IMAGE_KEYS[selectedCity]];

  // Hotels in the selected city — the base set filters and tag chips derive from.
  const cityHotels = useMemo(
    () => hotels.filter((h) => h.city === selectedCity),
    [selectedCity]
  );

  // Tag chips are derived from whatever tags exist in this city, so cities with
  // fewer tag varieties (Kolašin, Virpazar) don't show an empty feature filter.
  const availableTags = useMemo(() => {
    const seen = new Set();
    cityHotels.forEach((h) => h.tags.forEach((t) => seen.add(t)));
    return [...seen].sort((a, b) => a.localeCompare(b));
  }, [cityHotels]);

  const filteredHotels = useMemo(() => {
    const result = cityHotels.filter((h) => {
      if (selectedTiers.length && !selectedTiers.includes(h.priceTier)) return false;
      if (selectedRatings.length && !selectedRatings.includes(h.rating)) return false;
      if (selectedTags.length && !selectedTags.every((t) => h.tags.includes(t))) return false;
      return true;
    });

    result.sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      return PRICE_TIERS[a.priceTier].order - PRICE_TIERS[b.priceTier].order;
    });

    return result;
  }, [cityHotels, selectedTiers, selectedRatings, selectedTags, sort]);

  function toggle(value, list, setList) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  function clearFilters() {
    setSelectedTiers([]);
    setSelectedRatings([]);
    setSelectedTags([]);
  }

  function changeCity(slug) {
    setSelectedCity(slug);
    clearFilters(); // tag chips differ per city, so stale filters would confuse
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <Listbox label="Choose a base" value={selectedCity} options={CITY_OPTIONS} onChange={changeCity} />
        <Listbox
          label="Sort by"
          value={sort}
          options={SORT_OPTIONS}
          onChange={setSort}
          className="min-w-0"
        />
      </div>

      <div className="mb-10">
        <HotelFilters
          availableTags={availableTags}
          selectedTiers={selectedTiers}
          selectedRatings={selectedRatings}
          selectedTags={selectedTags}
          onToggleTier={(v) => toggle(v, selectedTiers, setSelectedTiers)}
          onToggleRating={(v) => toggle(v, selectedRatings, setSelectedRatings)}
          onToggleTag={(v) => toggle(v, selectedTags, setSelectedTags)}
          onClear={clearFilters}
        />
      </div>

      {filteredHotels.length === 0 ? (
        <div className="border border-border rounded-sm py-16 px-6 text-center">
          <p className="text-stone-dim mb-5">
            No hotels in {cityName} match those filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 active:scale-[0.97] transition-[background-color,transform] duration-200 px-5 py-2.5 rounded-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} cityName={cityName} image={cityImage} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
