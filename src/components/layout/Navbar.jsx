"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/#resume" },
  { label: "1:1", href: "https://calendly.com/taimooriqbal308/30min", isButton: true, isExternal: true },
]

const SCROLL_RANGE = [0, 280]
const WIDTH_RANGE = ["74rem", "48rem"]

export default function Navbar() {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const maxWidth = useTransform(scrollY, SCROLL_RANGE, WIDTH_RANGE)

  return (
    <header className="sticky top-0 z-[100] w-full px-3 pt-2 pb-0 bg-[rgba(5,2,8,0.8)] backdrop-blur-[12px]">
      <motion.nav
        className="mx-auto flex w-full max-w-[74rem] items-center justify-between gap-[0.15rem] overflow-x-auto rounded-full bg-[#fbfbfa] px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] max-md:justify-start max-md:scrollbar-none"
        style={{ maxWidth }}
        aria-label="Main"
      >
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#171717] p-[0.35rem_0.5rem] text-white no-underline transition-colors hover:bg-black" aria-label="Go to homepage">
          <Home size={16} strokeWidth={2.5} />
        </Link>

        {NAV_LINKS.map((link) => {
          const isActive = link.href.startsWith("/#")
            ? pathname === "/"
            : pathname === link.href
          return link.isButton ? (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-white no-underline text-[0.8rem] font-semibold px-4 py-[0.4rem] rounded-full bg-[#171717] whitespace-nowrap transition-all duration-200 hover:bg-black hover:-translate-y-px max-md:text-[0.75rem] max-md:px-[0.85rem] max-md:py-[0.35rem]"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className={`text-[#17171a] no-underline text-[0.8rem] font-medium px-3 py-[0.35rem] rounded-full whitespace-nowrap transition-colors duration-200 hover:bg-black/[0.06] ${isActive ? "bg-[rgba(59,130,246,0.1)] text-[#3b82f6]" : ""} max-md:text-[0.75rem] max-md:px-[0.65rem] max-md:py-[0.3rem]`}
            >
              {link.label}
            </a>
          )
        })}
      </motion.nav>
    </header>
  )
}
