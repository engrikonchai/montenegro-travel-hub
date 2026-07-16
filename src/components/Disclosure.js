"use client";

import { useState } from "react";

// Shared collapsed-by-default disclosure toggle used on the car-rentals and
// tours pages. Closed on mount; height animates via the grid-template-rows
// 0fr/1fr trick so it works for variable-length content without measuring.
export default function Disclosure({ trigger, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border pt-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center gap-2 text-sm font-medium text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 shrink-0 text-bronze transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.02-1.1l4.5 4.25a.75.75 0 010 1.1l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
        {trigger}
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pt-4 text-stone-dim leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
