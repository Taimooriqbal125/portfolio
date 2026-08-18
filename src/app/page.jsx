import Hero from "@/components/sections/Hero"
import Contact from "@/components/sections/Contact"
import Expertise from "@/components/sections/Expertise"
import CtaBanner from "@/components/sections/CtaBanner"
import { CheckCheck, Gauge, Pointer, Network } from "lucide-react"
import ProblemCard from "@/components/ui/ProblemCard"
import Architecture from "@/components/ui/Architecture"
import CostEstimator from "@/components/estimator/CostEstimator"

const HIGHLIGHTS = [
  "IOS / Android",
  "60fps Performance",
  "Pixel-Perfect UI",
]

const PROBLEMS = [
  {
    icon: <Gauge size={24} />,
    title: "Slow Performance",
    description:
      "Bloated dependencies and unoptimized rendering cycles lead to jittery animations and immediate uninstalls.",
  },
  {
    icon: <Pointer size={24} />,
    title: "Bad UX Patterns",
    description:
      "Ignoring platform-specific paradigms creates frustrating, unintuitive interfaces that users abandon.",
  },
  {
    icon: <Network size={24} />,
    title: "No Scalability",
    description:
      "Monolithic state management and coupled logic means adding new features becomes exponentially expensive.",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ================= Trust Bar ================= */}
      <section className="bg-[#0a0a0a] border-t border-b border-white/[0.05] py-4 px-16 flex items-center justify-between gap-6 flex-wrap max-md:px-6 max-md:flex-col max-md:items-start">
        <div className="flex items-center gap-3">
          <div className="w-[2.2rem] h-[2.2rem] rounded-[0.4rem] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.35)] text-[#3b82f6] grid place-items-center shrink-0">
            <CheckCheck size={22} strokeWidth={2.2} />
          </div>
          <div>
            <h2 className="m-0 mb-[0.15rem] text-[#f8fafc] text-base font-bold tracking-[-0.01em]">
              Your vision, delivered.
            </h2>
            <p className="m-0 text-[#8b9491] text-[0.8rem] font-[family-name:var(--font-jetbrains)]">
              Flawless execution from concept to App Store.
            </p>
          </div>
        </div>

        <ul className="list-none flex items-center gap-8 m-0 p-0 flex-wrap max-md:gap-3 max-md:gap-x-6">
          {HIGHLIGHTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[#d3dad7] text-[0.8rem] whitespace-nowrap font-[family-name:var(--font-jetbrains)]">
              <span className="w-[0.4rem] h-[0.4rem] bg-[#3b82f6] shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Problems Section ================= */}
      <section className="py-14 px-16 max-md:px-6 max-md:py-10">
        <p className="text-[#3b82f6] text-[0.8rem] m-0 mb-[0.4rem]">/ The Pitfalls</p>
        <h2 className="text-[#f8fafc] text-[2.8rem] font-bold m-0 mb-4 tracking-[-0.02em] max-md:text-[2rem]">
          Why apps fail.
        </h2>
        <p className="text-[#8d9592] text-[0.95rem] leading-[1.6] max-w-[50rem] m-0 mb-10 font-[family-name:var(--font-jetbrains)]">
          The gap between a great idea and a successful app is execution. Most
          projects bleed capital due to fundamental architectural flaws.
        </p>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>
      </section>

      <Architecture />

      <CostEstimator />

      <Expertise />

      <CtaBanner />

      <Contact />
    </>
  )
}
