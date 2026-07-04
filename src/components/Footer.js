import Coastline from "./Coastline";

export default function Footer() {
  return (
    <footer className="mt-24">
      <Coastline />
      <div className="bg-ink text-stone">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-stone/70">© {new Date().getFullYear()} Montenegro Travel Hub. Independent travel guide.</p>
          <p className="text-stone/70">Some links on this site are affiliate links — we may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
