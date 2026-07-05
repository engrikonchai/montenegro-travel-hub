import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "About",
  description:
    "Who's behind Montenegro Travel Hub and how recommendations on this site are made.",
};

export default function About() {
  return (
    <div>
      <Nav />
      <PageHero
        image={IMAGES.budvaStatue}
        kicker="About"
        title="Why I'm the one writing this"
      />
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <h2 className="font-display text-xl mb-3">Five years, no plans to leave</h2>
        <p className="text-stone-dim leading-relaxed mb-10">
          I moved to Montenegro five years ago and simply never left. What was meant
          to be a temporary stop turned into an actual life here — an apartment, a
          routine, a favourite bakery, the whole thing. This site started because I
          kept getting the same questions from friends planning their first trip,
          and I got tired of repeating myself in DMs.
        </p>

        <h2 className="font-display text-xl mb-3">A family thing, it turns out</h2>
        <p className="text-stone-dim leading-relaxed mb-10">
          My parents visited, fell for the place the way I had, and a couple of
          years later opened{" "}
          <a
            href="https://wondermontenegro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bronze hover:underline"
          >
            Wonder Montenegro
          </a>
          , a small tour operator based here. It&apos;s part of why the recommendations
          on this site lean personal rather than generic — some of these trips, I&apos;ve
          watched get built from nothing.
        </p>

        <h2 className="font-display text-xl mb-3">How recommendations are made</h2>
        <p className="text-stone-dim leading-relaxed mb-10">
          Everything here is filtered through actually having been there — a hotel
          I&apos;ve stayed in, a hike I&apos;ve done, a road I&apos;ve driven. Where a
          recommendation comes from someone I know personally, like Wonder
          Montenegro on the Tours page, I say so directly instead of pretending
          it&apos;s an anonymous pick.
        </p>

        <h2 className="font-display text-xl mb-3">Get in touch</h2>
        <p className="text-stone-dim leading-relaxed mb-10">
          Questions, corrections, or just want to compare notes on Montenegro?
          Reach out anytime — contact details go here once you&apos;ve settled on an
          inbox you actually check.
        </p>

        <p className="text-stone-dim leading-relaxed text-sm border-t border-ink/10 pt-6">
          Disclosure: some links on this site are affiliate links. If you book
          through them, we may earn a small commission at no extra cost to you.
        </p>
      </section>
      <Footer />
    </div>
  );
}
