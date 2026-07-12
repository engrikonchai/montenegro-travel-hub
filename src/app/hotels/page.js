import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";
import PageHero from "@/components/PageHero";
import HotelExplorer from "@/components/HotelExplorer";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Hotels in Montenegro",
  description: "Curated hotels and apartments along Montenegro's coast and inland, filterable by price, rating, and features.",
};

// Hotel cards link out to a plain (non-affiliate) Booking.com search pre-filled
// with each property's name, via buildHotelBookingUrl() in @/lib/booking. Once a
// Booking.com affiliate account is approved, that helper is the only place that
// needs to change — every card link updates automatically.
export default function Hotels() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.svetiStefan}
        kicker="Hotels & Apartments"
        title="Where to stay"
        subtitle="Coastal towns for beach time and Old Towns, mountain towns for hiking and quiet — pick a base, then filter by price, rating, and what matters to you."
      />
      <section className="max-w-3xl mx-auto px-6 pt-20 md:pt-28">
        <p className="text-stone-dim leading-relaxed">
          Pick a town below to see a handful of places across every budget, from
          homestays and guesthouses to beachfront resorts. Filter by price, star
          rating, or features, then tap through to Booking.com to check live
          prices and availability for your dates.
        </p>
        {/* PLACEHOLDER DATA — hotel names are real, but prices and ratings are
            unverified starting points. See the notes in src/data/hotels.js. */}
        <p className="text-sm text-stone-dim/70 leading-relaxed mt-4">
          Prices and ratings shown are rough starting points to compare tiers at a
          glance — always confirm the current rate on Booking.com before booking.
        </p>
      </section>

      <HotelExplorer />

      <section className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
        <AffiliatePlaceholder>
          TODO: once a Booking.com affiliate account is approved, add the
          affiliate ID inside <code>buildHotelBookingUrl()</code> (and{" "}
          <code>buildBookingUrl()</code>) in <code>src/lib/booking.js</code> —
          every &ldquo;Check availability&rdquo; link on this page updates
          automatically. Also plan to verify and refresh hotel names, prices, and
          ratings in <code>src/data/hotels.js</code> before relying on them.
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
