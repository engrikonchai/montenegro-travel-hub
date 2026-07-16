import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TierCard from "@/components/TierCard";
import Disclosure from "@/components/Disclosure";
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
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carRentalTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} image={IMAGES[tier.imageKey]} />
          ))}
        </div>

        <p className="mt-8 text-xs text-muted text-center">
          Photos represent the vehicle class, not a specific rental car.
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          <Disclosure trigger="Not sure if you need a car?">
            <p>
              Whether you need a car depends on your itinerary — read{" "}
              <Link href="/blog/do-you-need-a-car-in-montenegro" className="text-bronze hover:underline">
                Do You Need a Car in Montenegro?
              </Link>{" "}
              first, then pick the tier above that matches your trip.
            </p>
          </Disclosure>
        </div>
      </section>
      <Footer />
    </div>
  );
}
