import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About",
  description:
    "Who's behind Montenegro Travel Hub and how recommendations on this site are made.",
};

export default function About() {
  return (
    <div>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-6">About this site</h1>

        <h2 className="font-display text-xl mb-3">Who&apos;s writing this</h2>
        <p className="text-stone-dim leading-relaxed mb-8">
          Replace this with your own story — where in Montenegro you&apos;ve spent time,
          how long you&apos;ve been going back, and what first drew you there. A specific
          detail (a town, a season, a first trip) does more work here than a general
          claim of expertise.
        </p>

        <h2 className="font-display text-xl mb-3">Why this site exists</h2>
        <p className="text-stone-dim leading-relaxed mb-8">
          Replace this with the gap you&apos;re filling — outdated guides, generic listicles,
          advice that doesn&apos;t match what&apos;s actually on the ground. Explain who you&apos;re
          writing for (first-time visitors? people planning a longer trip?) and what
          they can expect from your recommendations that they won&apos;t get elsewhere.
        </p>

        <h2 className="font-display text-xl mb-3">How recommendations are made</h2>
        <p className="text-stone-dim leading-relaxed mb-8">
          Replace this with your actual criteria — personal visits, reader feedback,
          local contacts. This section does the quiet work of building trust before
          a reader clicks an affiliate link, so be concrete rather than vague.
        </p>

        <h2 className="font-display text-xl mb-3">Get in touch</h2>
        <p className="text-stone-dim leading-relaxed mb-8">
          Replace this with a contact email or form link for reader questions,
          corrections, or partnership inquiries.
        </p>

        <p className="text-stone-dim leading-relaxed text-sm border-t border-ink-light/60 pt-6">
          Disclosure: some links on this site are affiliate links. If you book
          through them, we may earn a small commission at no extra cost to you.
        </p>
      </section>
      <Footer />
    </div>
  );
}
