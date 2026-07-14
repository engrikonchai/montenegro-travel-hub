"use client";

import { useRef } from "react";
import Image from "next/image";
import PhotoCredit from "@/components/PhotoCredit";
import { unsplashUrl } from "@/lib/images";

export default function TierCard({ tier, image }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4; // max ~4deg
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  const imageSrc = image.local ? image.src : unsplashUrl(image.id, { w: 800 });
  const popular = tier.popular;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative bg-ink-light/60 rounded-2xl overflow-hidden flex flex-col shadow-md transition-transform duration-200 ease-out will-change-transform ${
        popular ? "border-2 border-bronze" : "border border-border"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-full h-32">
        <Image
          src={imageSrc}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        {popular && (
          <span className="absolute top-3 left-3 z-10 text-[11px] font-medium uppercase tracking-wide text-ink bg-bronze px-2.5 py-1 rounded-full shadow-sm">
            Most popular
          </span>
        )}
      </div>

      <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
        {image.credit && <PhotoCredit name={image.credit} className="-mt-1" />}

        <h3 className="font-display text-xl md:text-2xl leading-tight">{tier.title}</h3>

        <p className="font-medium text-bronze">{tier.priceRange}</p>

        <p className="text-sm text-stone-dim leading-relaxed">{tier.blurb}</p>

        <div>
          <p className="text-xs uppercase tracking-wide text-stone-dim mb-2">Car classes</p>
          <ul className="text-sm text-ink space-y-1">
            {tier.carClasses.map((carClass) => (
              <li key={carClass}>{carClass}</li>
            ))}
          </ul>
        </div>

        {tier.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tier.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-bronze/10 border border-bronze/20 rounded-full text-bronze"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {tier.agencies.length > 0 && (
          <p className="text-sm text-stone-dim">
            <span className="text-xs uppercase tracking-wide text-stone-dim">Agencies: </span>
            {tier.agencies.join(", ")}
          </p>
        )}

        {/* Inert placeholder CTA — no rental partnership is wired up yet, so this
            has no destination. Give it a real href/onClick once a deal lands. */}
        <div
          role="button"
          aria-disabled="true"
          title="Comparison coming soon"
          className={`mt-auto inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-sm w-full cursor-default select-none ${
            popular
              ? "text-ink bg-bronze"
              : "text-bronze bg-bronze/10 border border-bronze/20"
          }`}
        >
          Compare {tier.title}
        </div>
      </div>
    </div>
  );
}
