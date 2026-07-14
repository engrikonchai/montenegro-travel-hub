"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const links = [
  { href: "/hotels", label: "Hotels" },
  { href: "/car-rentals", label: "Car Rentals" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu never needs to survive past the mobile breakpoint, so a resize back
  // up to desktop width should close it rather than leaving it stuck open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 ${
          solid ? "bg-stone/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className={`font-display italic text-xl tracking-tight transition-colors ${
              solid ? "text-ink" : "text-stone"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden sm:flex gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-bronze after:transition-[width] hover:after:w-full ${
                  scrolled ? "text-stone-dim hover:text-bronze" : "text-stone/85 hover:text-stone"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`sm:hidden -mr-2.5 flex h-11 w-11 items-center justify-center transition-colors ${
              solid ? "text-ink" : "text-stone"
            }`}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav-panel"
            className="sm:hidden animate-fade-up border-t border-border bg-stone"
          >
            <div className="max-w-6xl mx-auto px-6 py-2 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-base text-ink border-b border-border last:border-0 hover:text-bronze transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 z-20 bg-ink/30"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
