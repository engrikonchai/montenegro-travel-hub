import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Hotels in Montenegro — Montenegro Travel Hub" };

export default function Hotels() {
  return (
    <div>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-4">Hotels & Apartments</h1>
        <p className="text-stone-dim max-w-2xl mb-10">
          Curated stays along the coast and inland — replace this section with your
          Booking.com affiliate widget or a hand-picked comparison list once your
          affiliate account is approved.
        </p>

        <div className="p-8 bg-ink-light rounded-sm border border-dashed border-stone-dim/30">
          <p className="text-stone-dim text-sm">
            TODO: embed Booking.com affiliate search widget here, or list your top
            picks with affiliate links (e.g. <code>https://www.booking.com/searchresults.html?aid=YOUR_AFFILIATE_ID&amp;city=Kotor</code>).
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
