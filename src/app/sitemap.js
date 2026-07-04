import { getAllPostsMeta } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/hotels", changeFrequency: "monthly", priority: 0.8 },
  { path: "/car-rentals", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tours", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  const postEntries = getAllPostsMeta().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
