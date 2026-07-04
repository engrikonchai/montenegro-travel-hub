import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AffiliatePlaceholder from "@/components/AffiliatePlaceholder";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Tours & Activities in Montenegro",
  description: "Boat trips, hikes, and guided tours for exploring Montenegro.",
};

export default function Tours() {
  return (
    <div>
      <Nav />
      <PageHero image={IMAGES.durmitorBlackLake} />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-4">Tours & Activities</h1>
        <p className="text-stone-dim max-w-2xl mb-10">
          Boat trips round Kotor Bay, Durmitor hikes, Blue Cave visits — group by
          region once you have enough content.
        </p>

        <AffiliatePlaceholder>
          TODO: add GetYourGuide / Viator affiliate widgets, or link directly to
          local operators once you&apos;ve negotiated a lead-based deal.
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
