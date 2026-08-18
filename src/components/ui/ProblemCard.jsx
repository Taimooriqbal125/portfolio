export default function ProblemCard({
  icon,
  title,
  description,
  accent = "#3b82f6",
}) {
  return (
    <article
      className="h-full flex flex-col items-start bg-[#111111] border border-white/[0.08] rounded p-7 transition-colors duration-300 hover:border-[var(--accent)]"
      style={{ "--accent": accent }}
    >
      <div className="text-[var(--accent)] mb-6">{icon}</div>
      <h3 className="m-0 mb-3 text-[#f5f6f6] text-[1.15rem] font-medium tracking-[-0.01em]">
        {title}
      </h3>
      <p className="m-0 text-[#8d9592] text-[0.85rem] leading-[1.7] font-normal">
        {description}
      </p>
    </article>
  )
}
