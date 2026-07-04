import Link from "next/link";

const links = [
  { href: "/hotels", label: "Hotels" },
  { href: "/car-rentals", label: "Car Rentals" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink-light/60">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display italic text-xl tracking-tight text-stone">
          Montenegro Travel Hub
        </Link>
        <nav className="hidden sm:flex gap-7 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-stone-dim hover:text-bronze transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
