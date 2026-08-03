"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";

// Accessible custom listbox replacing a native <select> where its browser-chrome
// look didn't match the rest of the design system. Follows the WAI-ARIA listbox
// popup pattern: button opens the popup and moves focus into it; arrow keys
// navigate, Enter/Space commits, Escape/Tab closes and returns focus to the button.
export default function Listbox({ label, value, options, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);
  const listboxId = useId();

  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  );
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  useEffect(() => {
    // Resets the highlighted option and moves focus in only on the
    // closed->open transition, not on every selectedIndex change — an effect
    // keyed on `open` is the right tool here, not a render-time derivation.
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveIndex(selectedIndex);
      listRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open) listRef.current?.children[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  function commit(index) {
    const opt = options[index];
    if (opt) onChange(opt.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onButtonKeyDown(e) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onListKeyDown(e) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        commit(activeIndex);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  }

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={rootRef} className={`relative flex flex-col gap-2 ${className}`}>
      {label && <span className="text-xs uppercase tracking-wide text-stone-dim">{label}</span>}
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onButtonKeyDown}
        className="flex items-center justify-between gap-3 bg-ink-light border border-border rounded-sm px-4 py-2.5 text-ink hover:border-bronze/60 focus:outline-none focus:border-bronze transition-colors duration-200 ease-snap min-w-[16rem]"
      >
        <span className="font-display text-lg">{selected?.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 shrink-0 text-bronze-text transition-transform duration-200 ease-snap ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <motion.ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          onKeyDown={onListKeyDown}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="absolute top-full left-0 z-20 mt-1.5 w-full max-h-72 overflow-auto bg-stone border border-border rounded-sm shadow-[0_24px_48px_-20px_rgba(27,36,56,0.35)] py-1.5 focus:outline-none"
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => commit(i)}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ease-snap ${
                i === activeIndex ? "bg-bronze/15 text-bronze-text" : "text-stone-dim"
              } ${opt.value === value ? "font-medium" : ""}`}
            >
              {opt.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
