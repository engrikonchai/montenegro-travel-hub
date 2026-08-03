"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import Chip from "@/components/Chip";
import Reveal from "@/components/Reveal";
import { TAG_LABELS } from "@/lib/tours";

export default function TourExplorer({ regions }) {
  const [activeTag, setActiveTag] = useState(null);

  const tags = Object.keys(TAG_LABELS).filter((tag) =>
    regions.some((region) => region.tours.some((tour) => tour.tags.includes(tag)))
  );

  const filteredRegions = regions
    .map((region) => ({
      ...region,
      tours: activeTag ? region.tours.filter((tour) => tour.tags.includes(activeTag)) : region.tours,
    }))
    .filter((region) => region.tours.length > 0);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-3 mb-4" role="group" aria-label="Filter tours by type">
        <Chip active={activeTag === null} onClick={() => setActiveTag(null)}>
          All tours
        </Chip>
        {tags.map((tag) => (
          <Chip key={tag} active={activeTag === tag} onClick={() => setActiveTag(tag === activeTag ? null : tag)}>
            {TAG_LABELS[tag]}
          </Chip>
        ))}
      </div>

      {filteredRegions.length === 0 && (
        <p className="max-w-6xl mx-auto px-6 py-14 text-stone-dim">No tours match that filter yet — try another one.</p>
      )}

      {filteredRegions.map((region) => (
        <section key={region.id} id={region.id} className="max-w-6xl mx-auto px-6 py-14 md:py-16 scroll-mt-28">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-8">{region.label}</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {region.tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} regionLabel={region.label} regionColor={region.color} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
