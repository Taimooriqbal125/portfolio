import { HOURLY_CARD } from "@/data/estimatorData";

export default function HourlyRateCard({ data = HOURLY_CARD }) {
  return (
    <aside className="flex flex-col rounded-3xl border border-[#3b82f6]/30 bg-[#3b82f6]/5 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]/15 text-[#60a5fa]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <div>
          <p className="text-xs text-[#60a5fa]">{data.tagline}</p>
          <p className="text-sm font-bold text-white">{data.title}</p>
        </div>
      </div>

      <p className="mt-6 text-center text-4xl font-extrabold text-white">
        ${data.rate}
        <span className="text-base font-medium text-zinc-400">/hr</span>
      </p>
      <p className="mt-3 text-center text-sm text-zinc-400">{data.note}</p>

      <ul className="mt-5 space-y-2">
        {data.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2.5 text-[13px] text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            {perk}
          </li>
        ))}
      </ul>

      <a href={data.href} className="mt-auto block pt-5">
        <span className="block rounded-xl bg-[#3b82f6] py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#2563eb]">
          {data.cta}
        </span>
      </a>
    </aside>
  );
}