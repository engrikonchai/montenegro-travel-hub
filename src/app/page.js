import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Coastline from "@/components/Coastline";
import PhotoCredit from "@/components/PhotoCredit";
import { getAllPostsMeta } from "@/lib/posts";
import { IMAGES, unsplashUrl } from "@/lib/images";

const verticals = [
  {
    href: "/hotels",
    label: "Hotels & Apartments",
    copy: "Coastal boutique stays, Old Town apartments, and budget picks compared honestly.",
    image: IMAGES.budvaOldTown,
  },
  {
    href: "/car-rentals",
    label: "Car Rentals",
    copy: "Whether you actually need a car, and the agencies worth booking with.",
    image: IMAGES.mountainRoad,
  },
  {
    href: "/tours",
    label: "Tours & Activities",
    copy: "Boat trips round Kotor Bay, Durmitor hikes, and day trips from the coast.",
    image: IMAGES.durmitorBlackLake,
  },
];

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="animate-fade-up inline-block px-3 py-1 rounded-full bg-clay/10 text-clay text-sm tracking-[0.2em] uppercase mb-5">
          Crna Gora · The Adriatic
        </p>
        <h1 className="animate-fade-up [animation-delay:100ms] font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
          Where the mountains drop straight into the sea.
        </h1>
        <p className="animate-fade-up [animation-delay:200ms] mt-6 max-w-xl text-stone-dim text-lg">
          Honest, practical guides to visiting Montenegro — plus the hotels, cars,
          and tours worth actually booking.
        </p>
        <div className="animate-fade-up [animation-delay:300ms] mt-8 flex gap-4 flex-wrap">
          <Link
            href="/blog"
            className="px-6 py-3 bg-bronze text-stone font-medium rounded-full shadow-lg shadow-bronze/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-bronze/30 transition-all"
          >
            Read the guides
          </Link>
          <Link
            href="/hotels"
            className="px-6 py-3 border border-ink/15 rounded-full hover:border-bronze hover:text-bronze hover:-translate-y-0.5 transition-all"
          >
            Find a hotel
          </Link>
        </div>
      </section>

      <section className="animate-fade-up [animation-delay:150ms] max-w-6xl mx-auto px-6 pb-16">
        <div className="group relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl shadow-ink/10">
          <Image
            src={unsplashUrl(IMAGES.kotorBay.id, { w: 1600 })}
            alt={IMAGES.kotorBay.alt}
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <PhotoCredit name={IMAGES.kotorBay.credit} className="mt-2" />
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
              className="group block bg-ink-light rounded-sm overflow-hidden shadow-md shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={unsplashUrl(v.image.id, { w: 800 })}
                  alt={v.image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 group-hover:text-bronze transition-colors">{v.label}</h3>
                <p className="text-stone-dim text-sm">{v.copy}</p>
              </div>
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
              {post.image && (
                <div className="relative aspect-[3/2] rounded-sm overflow-hidden mb-4">
                  <Image
                    src={unsplashUrl(post.image, { w: 600 })}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
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
