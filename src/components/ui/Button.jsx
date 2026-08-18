import { cn } from "@/lib/utils"

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-[#3b82f6]",
    secondary:
      "bg-[#222222] text-[#f8fafc] hover:bg-[#333333] focus:ring-[#555555]",
    outline:
      "border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[rgba(59,130,246,0.1)] focus:ring-[#3b82f6]",
    ghost:
      "text-[#94a3b8] hover:bg-white/[0.06] focus:ring-[#3b82f6]",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
