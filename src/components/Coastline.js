// Signature motif: a single continuous line tracing a mountain skyline
// dropping to sea level — Montenegro's whole geography (Crna Gora's peaks
// meeting the Adriatic) in one recurring graphic used as a section divider.
export default function Coastline({ flat = false }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full h-10 md:h-14"
      aria-hidden="true"
    >
      <path
        d={
          flat
            ? "M0,60 L1200,60"
            : "M0,55 L120,55 L180,20 L230,55 L330,55 L420,10 L480,55 L620,55 L700,30 L760,55 L900,55 L980,15 L1040,55 L1200,55"
        }
        fill="none"
        stroke="var(--bronze)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="0" y1="60" x2="1200" y2="60" stroke="var(--ink-light)" strokeWidth="1" />
    </svg>
  );
}
