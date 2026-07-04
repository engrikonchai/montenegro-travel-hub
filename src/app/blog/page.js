import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPostsMeta } from "@/lib/posts";
import { unsplashUrl } from "@/lib/images";

export const metadata = {
  title: "Blog",
  description: "Guides and honest advice for planning a trip to Montenegro.",
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-2">The Blog</h1>
        <p className="text-stone-dim mb-12">Practical guides for planning a trip to Montenegro.</p>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row gap-6 border-b border-ink-light pb-8 group"
            >
              {post.image && (
                <div className="relative w-full sm:w-56 aspect-[16/9] shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={unsplashUrl(post.image, { w: 500 })}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div>
                <p className="text-xs text-stone-dim mb-2">{post.date}</p>
                <h2 className="font-display text-2xl group-hover:text-bronze transition-colors">{post.title}</h2>
                <p className="text-stone-dim mt-2 max-w-2xl">{post.excerpt}</p>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-stone-dim">No posts yet — add markdown files to content/posts/.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
