import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";

export const metadata = { title: "Car Rentals in Montenegro — Montenegro Travel Hub" };

export default function CarRentals() {
  return (
    <div>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-4">Car Rentals</h1>
        <p className="text-stone-dim max-w-2xl mb-10">
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
