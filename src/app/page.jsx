"use client"

import Hero from "@/components/sections/Hero"
import Contact from "@/components/sections/Contact"
import Expertise from "@/components/sections/Expertise"
import CtaBanner from "@/components/sections/CtaBanner"
import { CheckCheck, Gauge, Pointer, Network } from "lucide-react"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import ProblemCard from "@/components/ui/ProblemCard"
import Architecture from "@/components/ui/Architecture"
import CostEstimator from "@/components/estimator/CostEstimator"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

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
      <section className={`trust-bar ${jakarta.className}`}>
        <div className="trust-left">
          <div className="trust-icon">
            <CheckCheck size={22} strokeWidth={2.2} />
          </div>
          <div>
            <h2 className="trust-title">Your vision, delivered.</h2>
            <p className={`trust-subtitle ${jetbrainsMono.className}`}>
              Flawless execution from concept to App Store.
            </p>
          </div>
        </div>

        <ul className="trust-points">
          {HIGHLIGHTS.map((point) => (
            <li key={point} className={`trust-point ${jetbrainsMono.className}`}>
              <span className="dot" />
              {point}
            </li>
          ))}
        </ul>

        <style jsx>{`
          .trust-bar {
            background: #0a0a0a;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 1rem 4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          .trust-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .trust-icon {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 0.4rem;
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.35);
            color: #3b82f6;
            display: grid;
            place-items: center;
            flex-shrink: 0;
          }

          .trust-title {
            margin: 0 0 0.15rem;
            color: #f8fafc;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: -0.01em;
          }

          .trust-subtitle {
            margin: 0;
            color: #8b9491;
            font-size: 0.8rem;
          }

          .trust-points {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 2rem;
            margin: 0;
            padding: 0;
            flex-wrap: wrap;
          }

          .trust-point {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #d3dad7;
            font-size: 0.8rem;
            white-space: nowrap;
          }

          .dot {
            width: 0.4rem;
            height: 0.4rem;
            background: #3b82f6;
            flex-shrink: 0;
          }

          @media (max-width: 900px) {
            .trust-bar {
              padding: 1rem 1.5rem;
              flex-direction: column;
              align-items: flex-start;
            }
            .trust-points {
              gap: 0.75rem 1.5rem;
            }
          }
        `}</style>
      </section>

      {/* ================= Problems Section ================= */}
      <section className={`problems-section ${jakarta.className}`}>
        <p className="problems-label">/ The Pitfalls</p>
        <h2 className="problems-heading">Why apps fail.</h2>
        <p className={`problems-subtitle ${jetbrainsMono.className}`}>
          The gap between a great idea and a successful app is execution. Most
          projects bleed capital due to fundamental architectural flaws.
        </p>

        <div className="problems-grid">
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>

        <style jsx>{`
          .problems-section {
            padding: 3.5rem 4rem;
          }

          .problems-label {
            color: #3b82f6;
            font-size: 0.8rem;
            margin: 0 0 0.4rem;
          }

          .problems-heading {
            color: #f8fafc;
            font-size: 2.8rem;
            font-weight: 700;
            margin: 0 0 1rem;
            letter-spacing: -0.02em;
          }

          .problems-subtitle {
            color: #8d9592;
            font-size: 0.95rem;
            line-height: 1.6;
            max-width: 50rem;
            margin: 0 0 2.5rem;
          }

          .problems-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }

          @media (max-width: 900px) {
            .problems-section {
              padding: 2.5rem 1.5rem;
            }
            .problems-heading {
              font-size: 2rem;
            }
            .problems-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      <Architecture />

      <CostEstimator />

      <Expertise />

      <CtaBanner />

      <Contact />
    </>
  )
}