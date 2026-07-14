import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Coastline from "@/components/Coastline";
import PageHero from "@/components/PageHero";
import { getAllPostsMeta } from "@/lib/posts";
import { IMAGES, unsplashUrl } from "@/lib/images";

const verticals = [
  {
    href: "/hotels",
    kicker: "01 — Stay",
    label: "Hotels & Apartments",
    copy: "Coastal boutique stays, Old Town apartments, and budget picks compared honestly.",
    image: IMAGES.budvaOldTown,
  },
  {
    href: "/car-rentals",
    kicker: "02 — Move",
    label: "Car Rentals",
    copy: "Whether you actually need a car, and the agencies worth booking with.",
    image: IMAGES.mountainRoad,
  },
  {
    href: "/tours",
    kicker: "03 — Explore",
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

      <PageHero
        image={IMAGES.skadarLakeHero}
        kicker="Crna Gora · The Adriatic"
        title="Where the mountains drop straight into the sea."
        subtitle="Honest, practical guides to visiting Montenegro — plus the hotels, cars, and tours worth actually booking."
        tall
        priority
      >
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/blog"
            className="px-6 py-3 border border-stone/50 text-stone rounded-full backdrop-blur-sm hover:bg-stone hover:text-ink transition-colors"
          >
            Read the guides
          </Link>
          <Link
            href="/hotels"
            className="px-6 py-3 text-stone/85 hover:text-stone underline-offset-4 hover:underline transition-colors"
          >
            Find a hotel →
          </Link>
        </div>
      </PageHero>

      <Coastline />

      {/* Verticals */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-dim mb-16">Plan your trip</p>
        <div className="space-y-20 md:space-y-28">
          {verticals.map((v, i) => {
            const reversed = i % 2 === 1;
            return (
              <Link key={v.href} href={v.href} className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className={`relative aspect-[4/3] overflow-hidden ${reversed ? "md:order-2" : ""}`}>
                  <Image
                    src={unsplashUrl(v.image.id, { w: 900 })}
                    alt={v.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={reversed ? "md:order-1" : ""}>
                  <p className="text-xs tracking-[0.25em] uppercase text-bronze mb-4">{v.kicker}</p>
                  <h3 className="font-display text-3xl md:text-4xl mb-4">{v.label}</h3>
                  <p className="text-stone-dim leading-relaxed max-w-md mb-6">{v.copy}</p>
                  <span className="text-sm tracking-wide border-b border-border group-hover:border-bronze group-hover:text-bronze transition-colors pb-0.5">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest posts */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-border">
        <div className="flex items-baseline justify-between mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-dim">Latest from the blog</p>
          <Link href="/blog" className="text-sm text-bronze hover:underline">View all →</Link>
        </div>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row gap-6 border-b border-border pb-8 group"
            >
              {post.image && (
                <div className="relative w-full sm:w-64 aspect-[16/9] shrink-0 overflow-hidden">
                  <Image
                    src={unsplashUrl(post.image, { w: 600 })}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(min-width: 640px) 256px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div>
                <p className="text-xs text-stone-dim mb-2">{post.date}</p>
                <h3 className="font-display text-2xl leading-snug group-hover:text-bronze transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-dim mt-2 max-w-2xl">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
