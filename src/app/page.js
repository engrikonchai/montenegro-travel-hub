import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Coastline from "@/components/Coastline";
import { getAllPostsMeta } from "@/lib/posts";

const verticals = [
  {
    href: "/hotels",
    label: "Hotels & Apartments",
    copy: "Coastal boutique stays, Old Town apartments, and budget picks compared honestly.",
  },
  {
    href: "/car-rentals",
    label: "Car Rentals",
    copy: "Whether you actually need a car, and the agencies worth booking with.",
  },
  {
    href: "/tours",
    label: "Tours & Activities",
    copy: "Boat trips round Kotor Bay, Durmitor hikes, and day trips from the coast.",
  },
];

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">Crna Gora · The Adriatic</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
          Where the mountains drop straight into the sea.
        </h1>
        <p className="mt-6 max-w-xl text-stone-dim text-lg">
          Honest, practical guides to visiting Montenegro — plus the hotels, cars,
          and tours worth actually booking.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link href="/blog" className="px-6 py-3 bg-bronze text-ink font-medium rounded-sm hover:opacity-90 transition-opacity">
            Read the guides
          </Link>
          <Link href="/hotels" className="px-6 py-3 border border-stone-dim/40 rounded-sm hover:border-bronze transition-colors">
            Find a hotel
          </Link>
        </div>
      </section>

      <Coastline />

      {/* Verticals */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl mb-8">Plan your trip</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {verticals.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="block p-6 bg-ink-light rounded-sm hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="font-display text-xl mb-2">{v.label}</h3>
              <p className="text-stone-dim text-sm">{v.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest posts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl">Latest from the blog</h2>
          <Link href="/blog" className="text-sm text-bronze hover:underline">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <p className="text-xs text-stone-dim mb-2">{post.date}</p>
              <h3 className="font-display text-lg leading-snug group-hover:text-bronze transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-stone-dim mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
