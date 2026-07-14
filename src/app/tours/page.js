import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TourExplorer from "@/components/TourExplorer";
import { IMAGES } from "@/lib/images";
import { getToursGroupedByRegion } from "@/lib/tours";

export const metadata = {
  title: "Tours & Activities in Montenegro",
  description: "Boat trips, rafting, hikes and day tours across Montenegro, run by Wonder Montenegro.",
};

export default function Tours() {
  const regions = getToursGroupedByRegion();

  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.durmitorBlackLake}
        kicker="Tours & Activities"
        title="On the water, on the trails"
        subtitle="Real routes and starting points, straight from the operator's own trip sheets."
      >
        <a
          href="https://wondermontenegro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-bronze hover:bg-bronze/90 transition-colors px-5 py-3 rounded-sm w-fit"
        >
          Book with Wonder Montenegro &rarr;
        </a>
      </PageHero>

      <section className="max-w-3xl mx-auto px-6 pt-20 md:pt-28">
        <p className="text-stone-dim leading-relaxed">
          Every tour below is run by{" "}
          <a
            href="https://wondermontenegro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bronze hover:underline"
          >
            Wonder Montenegro
          </a>
          , the small operator my parents started a couple of years after they
          moved here. I&apos;ve watched most of these routes get built stop by
          stop — the boat launch on Skadar Lake, the put-in for the Tara rafting
          run, the viewpoints along Durmitor Ring. The starting points, stop
          order, and activity options listed here come straight from their
          current trip sheets, so what you see below is what actually runs.
        </p>
      </section>

      <TourExplorer regions={regions} />

      <Footer />
    </div>
  );
}
