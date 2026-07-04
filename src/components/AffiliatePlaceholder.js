export default function AffiliatePlaceholder({ children }) {
  return (
    <div className="p-8 bg-ink-light rounded-sm border border-dashed border-stone-dim/30">
      <p className="text-stone-dim text-sm">{children}</p>
    </div>
  );
}
