import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PhotoCredit from "@/components/PhotoCredit";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { unsplashUrl } from "@/lib/images";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
      images: post.image ? [unsplashUrl(post.image, { w: 1200 })] : undefined,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div>
      <Nav />
      <article className="max-w-3xl mx-auto px-6 py-16">
        {post.image && (
          <div className="mb-8">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
              <Image
                src={unsplashUrl(post.image, { w: 1200 })}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            {post.imageCredit && <PhotoCredit name={post.imageCredit} className="mt-2" />}
          </div>
        )}
        <p className="text-xs text-stone-dim mb-3">{post.date}</p>
        <h1 className="font-display text-4xl mb-8 leading-tight">{post.title}</h1>
        <div
          className="prose-custom text-stone-dim leading-relaxed [&>h2]:font-display [&>h2]:text-2xl [&>h2]:text-stone [&>h2]:mt-10 [&>h2]:mb-3 [&>p]:mb-5"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      <Footer />
    </div>
  );
}
