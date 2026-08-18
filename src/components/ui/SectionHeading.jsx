import { cn } from "@/lib/utils"

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#f8fafc] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
