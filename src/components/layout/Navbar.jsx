"use client"

import { Plus_Jakarta_Sans } from "next/font/google"
import Link from "next/link"
import { Home } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/#resume" },
  { label: "1:1", href: "https://calendly.com/taimooriqbal308/30min", isButton: true, isExternal: true },
]

/* ---- Tune the shrink animation here ---- */
const SCROLL_RANGE = [0, 280]          // px of scroll over which it shrinks
const WIDTH_RANGE = ["74rem", "48rem"] // start width → stop width
/* ---------------------------------------- */

export default function Navbar() {
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // Shrinks with scroll, then clamps (stops) at the smaller width
  const maxWidth = useTransform(scrollY, SCROLL_RANGE, WIDTH_RANGE)

  return (
    <header className={`navbar-wrapper ${plusJakarta.className}`}>
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
              className="nav-link-btn"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
            >
              {link.label}
            </a>
          )
        })}
      </motion.nav>

      <style jsx>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          padding: 0.5rem 0.75rem 0;
          background: rgba(5, 2, 8, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .nav-link {
          color: #17171a;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          white-space: nowrap;
          transition: background-color 0.2s ease;
        }

        .nav-link:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        .nav-link-active {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .nav-link-btn {
          color: #fff;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          background: #171717;
          white-space: nowrap;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .nav-link-btn:hover {
          background: #000;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .nav-link {
            padding: 0.3rem 0.65rem;
            font-size: 0.75rem;
          }
          .nav-link-btn {
            padding: 0.35rem 0.85rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </header>
  )
}