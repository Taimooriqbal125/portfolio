function FeatureItem({ item, checked, onToggle }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${
        checked
          ? "border-[#0137a2] bg-[#0137a2]/10"
          : "border-zinc-800 bg-[#101012] hover:border-zinc-600"
      }`}
    >
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
          checked ? "border-[#0137a2] bg-[#0137a2]" : "border-zinc-600"
        }`}
      >
        {checked && (
          <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      <span className={`flex-1 text-[13px] ${checked ? "text-[#7fb0ff]" : "text-zinc-300"}`}>
        {item.label}
      </span>
      <span className={`text-[13px] font-semibold ${checked ? "text-[#7fb0ff]" : "text-zinc-300"}`}>
        ${item.price}
      </span>
    </label>
  );
}

export default function FeatureAccordion({ groups, selected, onToggle, openId, onOpen, count }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white">Select Features</h3>
        <span className="text-xs text-zinc-400">{count} selected</span>
      </div>

      <div className="mt-3 max-h-[340px] space-y-3 overflow-y-auto pr-2 [scrollbar-width:thin]">
        {groups.map((group) => (
          <div key={group.id}>
            <button
              onClick={() => onOpen(group.id)}
              className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-[#101012] px-3 py-2.5 transition-colors hover:border-zinc-600"
            >
              <span className="flex items-center gap-2 text-[13px] font-bold text-white">
                {group.label}
                <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400">
                  {group.items.length}
                </span>
              </span>
              <svg
                className={`h-4 w-4 text-zinc-400 transition-transform ${openId === group.id ? "rotate-180" : ""}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {openId === group.id && (
              <div className="mt-2 space-y-1.5">
                {group.items.map((item) => (
                  <FeatureItem
                    key={item.id}
                    item={item}
                    checked={selected.has(item.id)}
                    onToggle={() => onToggle(item.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}