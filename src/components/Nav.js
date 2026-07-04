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
    <header className="sticky top-0 z-20 bg-stone/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display italic text-xl tracking-tight text-ink">
          Montenegro Travel Hub
        </Link>
        <nav className="hidden sm:flex gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-stone-dim hover:text-bronze transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-bronze after:transition-[width] hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
