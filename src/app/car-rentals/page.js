import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Car Rentals in Montenegro — Montenegro Travel Hub" };

export default function CarRentals() {
  return (
    <div>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-4">Car Rentals</h1>
        <p className="text-stone-dim max-w-2xl mb-10">
          Whether you need a car depends on your itinerary — link to your
          &ldquo;Do You Need a Car in Montenegro&rdquo; post here, then compare agencies below.
        </p>

        <div className="p-8 bg-ink-light rounded-sm border border-dashed border-stone-dim/30">
          <p className="text-stone-dim text-sm">
            TODO: add your Discover Cars / RentalCars affiliate widget or comparison
            table here.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
