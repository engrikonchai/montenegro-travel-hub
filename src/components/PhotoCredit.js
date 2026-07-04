export default function PhotoCredit({ name, className = "" }) {
  return <p className={`text-[11px] text-stone-dim/60 ${className}`}>Photo: {name} / Unsplash</p>;
}
