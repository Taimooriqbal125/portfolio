"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Presentation,
  Users,
  Code2,
  ArrowUpRight,
} from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Trophy,
    text: "4+ International Hackathons",
  },
  {
    icon: Presentation,
    text: "Workshops & Tech Talks",
  },
  {
    icon: Users,
    text: "Global Collaboration",
  },
  {
    icon: Code2,
    text: "Full-Stack Development",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut", delay },
})

export default function About() {
  return (
    <section id="about" className="w-full min-h-full py-10 px-16 bg-[#0b0c0c] overflow-hidden max-lg:px-10 max-md:px-6 max-md:py-8">
      <div className="w-full max-w-[1320px] mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div className="flex items-end justify-between mb-8 max-md:mb-7" {...fadeUp()}>
          <div className="flex items-start gap-4">
            <span className="mt-[0.55rem] text-[#3b82f6] text-[0.7rem] tracking-[0.08em] font-[family-name:var(--font-jetbrains)]">
              02
            </span>
            <h2 className="m-0 text-[#eae4dd] text-[clamp(2.6rem,4vw,3.7rem)] italic font-medium leading-[0.95] font-[family-name:var(--font-playfair)]">
              About me.
            </h2>
          </div>
          <span className="mb-[0.35rem] text-[#505754] text-[0.6rem] tracking-[0.1em] font-[family-name:var(--font-jetbrains)] max-md:hidden">
            GET TO KNOW ME
          </span>
        </motion.div>

        {/* ================= MAIN ================= */}
        <div className="grid gap-16 items-center max-lg:gap-10 max-lg:grid-cols-[minmax(350px,0.9fr)_1.1fr] max-md:grid-cols-1 max-md:gap-8">

          {/* ================= IMAGE ================= */}
          <motion.div className="w-full max-md:max-w-[600px]" {...fadeUp(0.08)}>
            <div className="relative w-full aspect-[16/9]">
              <div className="absolute top-[-10px] left-[-10px] z-[3] w-12 h-12 pointer-events-none border-t border-l border-[#3b82f6]" />
              <div className="absolute bottom-[-10px] right-[-10px] z-[3] w-12 h-12 pointer-events-none border-b border-r border-[rgba(59,130,246,0.45)]" />
              <img
                src="/images/me.jpeg"
                alt="Temoor Iqbal"
                width="640"
                height="360"
                className="relative z-[2] block w-full h-full object-cover border border-white/10"
              />
            </div>

            <div className="flex items-center gap-[0.55rem] mt-[0.8rem] text-[#737b78] text-[0.62rem] tracking-[0.06em] font-[family-name:var(--font-jetbrains)]">
              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.08)]" />
              AVAILABLE FOR WORK
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="max-w-[650px] max-md:max-w-full">

            <motion.p className="m-0 mb-2 text-[#3b82f6] text-[0.65rem] tracking-[0.08em] font-[family-name:var(--font-jetbrains)]" {...fadeUp(0.12)}>
              / ABOUT ME
            </motion.p>

            <motion.h3 className="m-0 mb-4 text-[#f8fafc] text-[clamp(1.9rem,3vw,2.65rem)] font-bold leading-[1.08] tracking-[-0.035em]" {...fadeUp(0.16)}>
              The developer behind
              <span className="text-[#737b78] font-medium"> the products.</span>
            </motion.h3>

            <motion.p className="m-0 mb-[0.7rem] text-[#d0d6d3] text-[0.88rem] leading-[1.65]" {...fadeUp(0.2)}>
              I&apos;m a Full-Stack Developer with a strong focus on
              React Native, building polished mobile experiences and
              reliable backend systems that bring digital products to life.
            </motion.p>

            <motion.p className="m-0 text-[#858d89] text-[0.8rem] leading-[1.65]" {...fadeUp(0.24)}>
              I work across the stack with React, React Native, Node.js,
              FastAPI, Firebase, and Supabase, focusing on clean
              architecture, performance, and maintainable code.
            </motion.p>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="grid grid-cols-2 gap-[0.6rem] mt-[1.35rem] max-md:grid-cols-1">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-[0.65rem] min-h-[42px] py-[0.55rem] px-[0.7rem] bg-[#111313] border border-white/[0.06] text-[#b9c0bd] text-[0.7rem] transition-all duration-[0.25s] hover:bg-[#151817] hover:border-[rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                  {...fadeUp(0.28 + index * 0.05)}
                >
                  <div className="grid place-items-center w-[26px] h-[26px] shrink-0 text-[#3b82f6] bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.12)]">
                    <item.icon size={15} />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* ================= CTA ================= */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-[0.7rem] mt-5 text-[#e7ebe9] text-[0.78rem] font-semibold no-underline transition-colors duration-[0.25s] hover:text-[#3b82f6]"
              {...fadeUp(0.5)}
            >
              <span>Let&apos;s build something together</span>
              <span className="grid place-items-center w-[27px] h-[27px] border border-white/[0.12] transition-all duration-[0.25s] hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-[rgba(59,130,246,0.5)]">
                <ArrowUpRight size={16} />
              </span>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  )
}
