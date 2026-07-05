import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Hotels in Montenegro",
  description: "Curated hotels and apartments along Montenegro's coast and inland.",
};

export default function Hotels() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.budvaOldTown}
        kicker="Hotels & Apartments"
        title="Where to stay"
      />
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-stone-dim leading-relaxed">
          Curated stays along the coast and inland — replace this section with your
          Booking.com affiliate widget or a hand-picked comparison list once your
          affiliate account is approved.
        </p>

        <AffiliatePlaceholder>
          TODO: embed Booking.com affiliate search widget here, or list your top
          picks with affiliate links (e.g. <code>https://www.booking.com/searchresults.html?aid=YOUR_AFFILIATE_ID&amp;city=Kotor</code>).
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
