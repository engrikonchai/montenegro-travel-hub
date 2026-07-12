import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/images";
import { buildBookingUrl } from "@/lib/booking";

export const metadata = {
  title: "Hotels in Montenegro",
  description: "Curated hotels and apartments along Montenegro's coast and inland.",
};

// No Booking.com affiliate account yet, so each region links to a plain
// (non-affiliate) Booking.com search via buildBookingUrl() in @/lib/booking.
// Once the affiliate account is approved, that helper is the only place
// that needs to change.
const HOTEL_REGIONS = [
  {
    id: "kotor",
    label: "Kotor",
    city: "Kotor",
    blurb: "Walkable Old Town inside Venetian-era walls, with the fortress climb as the signature thing to do. The better base for history and day trips to Perast.",
  },
  {
    id: "budva",
    label: "Budva",
    city: "Budva",
    blurb: "Beaches, nightlife, and a smaller old town of its own. The better base if beach time and bars matter more than sightseeing.",
  },
  {
    id: "tivat",
    label: "Tivat",
    city: "Tivat",
    blurb: "Marina town built around Porto Montenegro, and the closest base to the airport. Quieter and a bit more upscale than Kotor or Budva.",
  },
  {
    id: "zabljak",
    label: "Žabljak & Durmitor",
    city: "Žabljak",
    blurb: "The highest town in the Balkans, and the obvious base for Black Lake, Bobotov Kuk, and the rest of Durmitor National Park.",
  },
  {
    id: "kolasin",
    label: "Kolašin",
    city: "Kolašin",
    blurb: "A small mountain town in the north with forest and hiking on its doorstep — a quieter alternative to Žabljak.",
  },
  {
    id: "skadar-lake",
    label: "Skadar Lake",
    city: "Virpazar",
    blurb: "Lakeside guesthouses in the small town of Virpazar, right on the water for an early-morning boat tour.",
  },
];

export default function Hotels() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.svetiStefan}
        kicker="Hotels & Apartments"
        title="Where to stay"
        subtitle="Coastal towns for beach time and Old Towns, mountain towns for hiking and quiet — pick a base and search from there."
      />
      <section className="max-w-3xl mx-auto px-6 pt-20 md:pt-28">
        <p className="text-stone-dim leading-relaxed">
          No curated pick list yet — each region below opens a live Booking.com
          search for that town so you can compare real availability and prices
          today. Once a proper affiliate partnership and hand-picked
          recommendations are in place, this section will show actual hotels
          instead of just search links.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOTEL_REGIONS.map((region) => (
            <div
              key={region.id}
              className="bg-ink-light/60 border border-ink/10 rounded-sm p-6 md:p-7 flex flex-col gap-4"
            >
              <h2 className="font-display text-xl leading-tight">{region.label}</h2>
              <p className="text-sm text-stone-dim leading-relaxed flex-1">{region.blurb}</p>
              <a
                href={buildBookingUrl(region.city)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center text-sm font-medium text-stone bg-bronze hover:bg-bronze/90 transition-colors px-5 py-2.5 rounded-sm w-fit"
              >
                Search hotels in {region.city} &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
        <AffiliatePlaceholder>
          TODO: once a Booking.com affiliate account is approved, add the
          affiliate ID inside <code>buildBookingUrl()</code> in{" "}
          <code>src/lib/booking.js</code> — every link on this page updates
          automatically. Consider swapping the search links for an embedded
          Booking.com affiliate widget or hand-picked hotel cards at that point.
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
