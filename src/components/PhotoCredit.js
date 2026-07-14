export default function PhotoCredit({ name, className = "", light = false }) {
  const color = light ? "text-stone/60" : "text-muted";
  return <p className={`text-[11px] ${color} ${className}`}>Photo: {name} / Unsplash</p>;
}
