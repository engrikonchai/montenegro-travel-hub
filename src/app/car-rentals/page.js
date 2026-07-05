import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Car Rentals in Montenegro",
  description:
    "Whether you need a car in Montenegro and how to compare rental agencies for coastal and mountain trips.",
};

export default function CarRentals() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.mountainRoad}
        kicker="Car Rentals"
        title="On the road"
      />
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-stone-dim leading-relaxed">
          Whether you need a car depends on your itinerary — read{" "}
          <Link href="/blog/do-you-need-a-car-in-montenegro" className="text-bronze hover:underline">
            Do You Need a Car in Montenegro?
          </Link>{" "}
          first, then compare agencies below.
        </p>

        <AffiliatePlaceholder>
          TODO: add your Discover Cars / RentalCars affiliate widget or comparison
          table here.
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
