"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner({
  badge = "Booking design sprints · 2 slots open",
  line1 = "Stop guessing what users want.",
  line2 = "Start with",
  line2Accent = "a design that proves it.",
  description = "Tell us the product and where it's stuck. We'll come back inside two business days with a read on fit and the first thing worth designing — no slide decks, no proposal theater.",
  cta = { label: "Book a discovery call", href: "/contact" },
  primary = "#0137a2",
  primaryLight = "#5b8cff",
  badgeClass = "bg-[#15803d]",
}) {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#171310] px-5 py-8 sm:px-8 lg:px-10 lg:py-10"
      >
        {/* Dot grid — pure CSS */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Decorative outlines (compact) */}
        <div className="pointer-events-none absolute -top-8 right-[20%] h-28 w-24 rotate-12 rounded-2xl border border-white/10" />
        <div className="pointer-events-none absolute -bottom-12 left-[6%] h-40 w-40 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-6 left-[11%] h-24 w-24 rounded-full border border-white/10" />
        <svg
          className="pointer-events-none absolute left-[7%] top-6 h-4 w-4 text-white/20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <div className="pointer-events-none absolute bottom-6 right-[8%] h-1.5 w-1.5 rounded-full bg-white/25" />

        {/* Right-side glow */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: `radial-gradient(circle, ${primary}99 0%, transparent 65%)` }}
        />

        {/* Content */}
        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            {/* Badge */}
            <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white ${badgeClass}`}>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c1 5 4 8 9 10-5 2-8 5-9 10-1-5-4-8-9-10 5-2 8-5 9-10z" />
              </svg>
              {badge}
            </span>

            {/* Headline */}
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-[1.2]">
              {line1}
              <br />
              {line2}{" "}
              <span style={{ color: primaryLight }}>{line2Accent}</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              {description}
            </p>
          </div>

          {/* CTA button */}
          <div className="relative shrink-0">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm"
              style={{ backgroundColor: primary }}
            >
              {cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}