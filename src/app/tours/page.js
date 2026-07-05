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
      <PageHero
        image={IMAGES.durmitorBlackLake}
        kicker="Tours & Activities"
        title="On the water, on the trails"
        subtitle="Boat trips round Kotor Bay, Durmitor hikes, and day trips from the coast."
      />
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-stone-dim leading-relaxed">
          For boat trips and day tours, start with{" "}
          <a
            href="https://wondermontenegro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bronze hover:underline"
          >
            Wonder Montenegro
          </a>{" "}
          — a small operator based here, run by my own family. I&apos;m not recommending
          it because it&apos;s convenient; I recommend it because I&apos;ve watched the trips
          get built and would send my own friends on them.
        </p>

        <AffiliatePlaceholder>
          TODO: add GetYourGuide / Viator widgets here for regions or trip types
          Wonder Montenegro doesn&apos;t cover.
        </AffiliatePlaceholder>
      </section>
      <Footer />
    </div>
  );
}
