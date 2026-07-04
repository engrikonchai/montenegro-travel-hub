import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Tours & Activities in Montenegro — Montenegro Travel Hub" };

export default function Tours() {
  return (
    <div>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-4">Tours & Activities</h1>
        <p className="text-stone-dim max-w-2xl mb-10">
          Boat trips round Kotor Bay, Durmitor hikes, Blue Cave visits — group by
          region once you have enough content.
        </p>

        <div className="p-8 bg-ink-light rounded-sm border border-dashed border-stone-dim/30">
          <p className="text-stone-dim text-sm">
            TODO: add GetYourGuide / Viator affiliate widgets, or link directly to
            local operators once you&apos;ve negotiated a lead-based deal.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
