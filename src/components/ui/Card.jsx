import { cn } from "@/lib/utils"

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]",
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
        "px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  )
}
