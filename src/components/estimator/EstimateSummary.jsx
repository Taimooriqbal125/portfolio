import { PLATFORMS } from "@/data/estimatorData";
import { formatMoney } from "@/lib/estimator";

export default function EstimateSummary({ platform, onPlatform, selectedItems, total, timeline, mailtoHref }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0137a2]/20 text-[#7fb0ff]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M8 6h8" />
            <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
          </svg>
        </span>
        <div>
          <p className="text-xs text-zinc-400">Project-based</p>
          <p className="text-[13px] font-bold text-white">Fixed Price</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-400">Platform</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => onPlatform(p.id)}
            className={`rounded-lg py-2 text-[13px] font-semibold transition-colors ${
              platform === p.id
                ? "bg-[#0137a2] text-white"
                : "border border-zinc-800 bg-[#101012] text-zinc-300 hover:border-zinc-600"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-3 max-h-[200px] flex-1 overflow-y-auto [scrollbar-width:thin]">
        {selectedItems.length === 0 ? (
          <p className="py-6 text-center text-xs text-zinc-500">
            Select features to see estimate
          </p>
        ) : (
          <>
            <p className="mb-2 text-xs text-zinc-400">
              {selectedItems.length} feature{selectedItems.length !== 1 ? "s" : ""} selected
            </p>
            <div className="space-y-1.5">
              {selectedItems.map((item) => (
                <div key={item.id} className="truncate rounded-lg border border-zinc-800 bg-[#101012] px-2.5 py-1.5 text-[11px] text-zinc-300">
                  {item.label}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-4 border-t border-zinc-800 pt-4">
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-zinc-400">Timeline</span>
          <span className="font-bold text-white">{timeline ?? "Select features"}</span>
        </div>
        <p className="mt-3 text-xs text-zinc-400">Total estimate</p>
        <p className="mt-1 text-2xl font-extrabold text-[#7fb0ff]">{formatMoney(total)}</p>

        <a href="/contact" className="mt-4 block rounded-xl bg-[#0137a2] py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#0246c9]">
          Book a Call
        </a>
        <a href={mailtoHref} className="mt-2 block rounded-xl border border-zinc-800 bg-[#1b1b1e] py-2 text-center text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-600">
          Send brief via email
        </a>
      </div>
    </div>
  );
}