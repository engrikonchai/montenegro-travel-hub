import Script from "next/script";

// TODO: replace with your real GetYourGuide partner ID once the affiliate
// account is approved (https://partner.getyourguide.com). Every widget below
// reads from this one constant.
const GYG_PARTNER_ID = "REPLACE_ME";

const MORE_TOURS = [
  {
    id: "kotor-old-town",
    label: "Kotor Old Town tours",
    description: "Guided walks through the Old Town and the climb up the city walls.",
    query: "Kotor, Montenegro",
  },
  {
    id: "budva-nightlife",
    label: "Budva nightlife & boat parties",
    description: "Beach clubs, sunset cruises, and boat parties along the Budva Riviera.",
    query: "Budva, Montenegro",
  },
  {
    id: "skadar-wine",
    label: "Skadar Lake wine tours",
    description: "Vineyard visits and tastings in the wine villages around the lake.",
    query: "Skadar Lake, Montenegro",
  },
  {
    id: "blue-cave",
    label: "Blue Cave & Our Lady of the Rocks",
    description: "Boat trips to the Blue Cave and the man-made islet just off Perast.",
    query: "Perast, Montenegro",
  },
];

export default function MoreToursSection() {
  return (
    <section id="more-tours" className="max-w-6xl mx-auto px-6 py-14 md:py-16 scroll-mt-28">
      <Script src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" strategy="lazyOnload" />

      <h2 className="font-display text-2xl md:text-3xl mb-3">More things to do in Montenegro</h2>
      <p className="text-stone-dim leading-relaxed max-w-2xl mb-10">
        Wonder Montenegro doesn&apos;t run these, so here&apos;s what&apos;s bookable
        elsewhere for spots and trip types outside their usual routes.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {MORE_TOURS.map((theme) => (
          <div key={theme.id} className="bg-ink-light/60 border border-ink/10 rounded-sm p-6 md:p-8">
            <h3 className="font-display text-xl mb-2">{theme.label}</h3>
            <p className="text-sm text-stone-dim mb-4">{theme.description}</p>
            <div
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
              data-gyg-locale-code="en-US"
              data-gyg-widget="activities"
              data-gyg-number-of-items="3"
              data-gyg-partner-id={GYG_PARTNER_ID}
              data-gyg-q={theme.query}
            >
              <span className="text-xs text-stone-dim">
                Powered by{" "}
                <a
                  href="https://www.getyourguide.com"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="hover:underline"
                >
                  GetYourGuide
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
