import { cn } from "@/lib/utils"

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-[#111111] rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return (
    <div className={cn("p-6", className)}>{children}</div>
  )
}

export function CardContent({ children, className }) {
  return (
    <div className={cn("px-6 pb-6", className)}>{children}</div>
  )
}

export function CardFooter({ children, className }) {
  return (
    <div
      className={cn(
        "px-6 py-4 bg-[#0d0d0d] border-t border-[rgba(255,255,255,0.08)]",
        className
      )}
    >
      {children}
    </div>
  )
}
