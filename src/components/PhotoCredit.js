export default function PhotoCredit({ name, className = "", light = false }) {
  const color = light ? "text-stone/60" : "text-stone-dim/60";
  return <p className={`text-[11px] ${color} ${className}`}>Photo: {name} / Unsplash</p>;
}
