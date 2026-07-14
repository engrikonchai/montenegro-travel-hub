import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TierCard from "@/components/TierCard";
import { IMAGES } from "@/lib/images";
import { carRentalTiers } from "@/data/carRentalTiers";

export const metadata = {
  title: "Car Rentals in Montenegro",
  description:
    "Compare budget, mid-range, and premium car rental options for Montenegro, with real price ranges and car classes for coastal and mountain trips.",
};

export default function CarRentals() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.mountainRoadLocal}
        kicker="Car Rentals"
        title="On the road"
      />
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-stone-dim leading-relaxed">
          Whether you need a car depends on your itinerary — read{" "}
          <Link href="/blog/do-you-need-a-car-in-montenegro" className="text-bronze hover:underline">
            Do You Need a Car in Montenegro?
          </Link>{" "}
          first, then pick the tier below that matches your trip.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carRentalTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} image={IMAGES[tier.imageKey]} />
          ))}
        </div>

        <p className="mt-8 text-xs text-muted text-center">
          Photos represent the vehicle class, not a specific rental car.
        </p>

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="text-stone-dim leading-relaxed max-w-xl mx-auto">
            Direct booking links are coming once a rental partner is confirmed. In the
            meantime, get in touch and we&apos;ll help you sort out a car for your dates.
          </p>
          <Link
            href="/about#contact"
            className="mt-6 inline-flex items-center justify-center text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm"
          >
            Contact us for car rental options &rarr;
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
