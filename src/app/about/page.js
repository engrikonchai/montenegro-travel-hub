import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "About — Montenegro Travel Hub" };

export default function About() {
  return (
    <div>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl mb-6">About this site</h1>
        <p className="text-stone-dim leading-relaxed mb-4">
          Replace this with your own story — why you know Montenegro, what makes your
          recommendations trustworthy, and who you&apos;re writing for. This page does a
          lot of quiet work for building trust with readers before they click an
          affiliate link.
        </p>
        <p className="text-stone-dim leading-relaxed">
          Disclosure: some links on this site are affiliate links. If you book
          through them, we may earn a small commission at no extra cost to you.
        </p>
      </section>
      <Footer />
    </div>
  );
}
