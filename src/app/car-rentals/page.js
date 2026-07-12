import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
          first, then check back here for rental options.
        </p>

        {/* PLACEHOLDER copy — replace with real copy once the rental partnership below is confirmed. */}
        <p className="text-stone-dim leading-relaxed mt-5">
          We&apos;re working directly with a local Montenegro-based rental company on a
          proper partnership — real cars, prices, and pickup locations will land here
          once that&apos;s finalized, rather than a generic comparison widget.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mt-12">
          <div className="bg-ink-light/60 border border-ink/10 rounded-sm p-6 md:p-8 flex flex-col gap-4 items-start sm:col-span-2">
            <span className="shrink-0 text-xs uppercase tracking-wide px-3 py-1 rounded-full border bg-clay/10 text-clay border-clay/30">
              Coming soon
            </span>
            <p className="text-stone-dim leading-relaxed">
              Rental listings for coastal pickup (Kotor, Budva, Tivat Airport) and
              mountain-ready 4x4s for Durmitor and Kolašin trips are on the way.
              In the meantime, get in touch directly and we&apos;ll help you sort
              out a car for your dates.
            </p>
            <a
              href="/about#contact"
              className="mt-auto inline-flex items-center justify-center text-sm font-medium text-stone bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm w-fit"
            >
              Contact us for car rental options &rarr;
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
