"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Presentation,
  Users,
  Code2,
  ArrowUpRight,
} from "lucide-react"
import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  display: "swap",
})

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
  initial: {
    opacity: 0,
    y: 15,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
    delay,
  },
})

export default function About() {
  return (
    <section id="about" className={`about-section ${jakarta.className}`}>
      <div className="about-container">

        {/* ================= TOP ================= */}

        <motion.div className="about-header" {...fadeUp()}>
          <div className="about-title-wrap">
            <span className={`section-number ${jetbrainsMono.className}`}>
              02
            </span>

            <h2 className={`about-title ${playfair.className}`}>
              About me.
            </h2>
          </div>

          <span className={`section-label ${jetbrainsMono.className}`}>
            GET TO KNOW ME
          </span>
        </motion.div>

        {/* ================= MAIN ================= */}

        <div className="about-layout">

          {/* ================= IMAGE ================= */}

          <motion.div
            className="about-visual"
            {...fadeUp(0.08)}
          >
            <div className="photo-frame">

              <div className="photo-corner top-left" />
              <div className="photo-corner bottom-right" />

              <img
                src="/images/me.jpeg"
                alt="Temoor Iqbal"
                className="about-image"
              />
            </div>

            <div
              className={`availability ${jetbrainsMono.className}`}
            >
              <span className="status-dot" />
              AVAILABLE FOR WORK
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <div className="about-content">

            <motion.p
              className={`about-label ${jetbrainsMono.className}`}
              {...fadeUp(0.12)}
            >
              / ABOUT ME
            </motion.p>

            <motion.h3
              className="about-heading"
              {...fadeUp(0.16)}
            >
              The developer behind
              <span> the products.</span>
            </motion.h3>

            <motion.p
              className="about-lead"
              {...fadeUp(0.2)}
            >
              I&apos;m a Full-Stack Developer with a strong focus on
              React Native, building polished mobile experiences and
              reliable backend systems that bring digital products to life.
            </motion.p>

            <motion.p
              className="about-description"
              {...fadeUp(0.24)}
            >
              I work across the stack with React, React Native, Node.js,
              FastAPI, Firebase, and Supabase, focusing on clean
              architecture, performance, and maintainable code.
            </motion.p>

            {/* ================= HIGHLIGHTS ================= */}

            <div className="highlights">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="highlight"
                  {...fadeUp(0.28 + index * 0.05)}
                >
                  <div className="highlight-icon">
                    <item.icon size={15} />
                  </div>

                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* ================= CTA ================= */}

            <motion.a
              href="#contact"
              className="about-cta"
              {...fadeUp(0.5)}
            >
              <span>Let&apos;s build something together</span>

              <span className="cta-arrow">
                <ArrowUpRight size={16} />
              </span>
            </motion.a>

          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          width: 100%;
          min-height: 100%;
          padding: 2.5rem 4rem;
          background: #0b0c0c;
          overflow: hidden;
        }

        .about-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        /* ================= HEADER ================= */

        .about-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .about-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .section-number {
          margin-top: 0.55rem;
          color: #3b82f6;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
        }

        .about-title {
          margin: 0;
          color: #eae4dd;
          font-size: clamp(2.6rem, 4vw, 3.7rem);
          font-style: italic;
          font-weight: 500;
          line-height: 0.95;
        }

        .section-label {
          margin-bottom: 0.35rem;
          color: #505754;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
        }

        /* ================= MAIN LAYOUT ================= */

        .about-layout {
          display: grid;
          grid-template-columns: minmax(390px, 0.95fr) minmax(420px, 1.05fr);
          gap: 4rem;
          align-items: center;
        }

        /* ================= IMAGE ================= */

        .about-visual {
          width: 100%;
        }

        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .about-image {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .photo-corner {
          position: absolute;
          z-index: 3;
          width: 48px;
          height: 48px;
          pointer-events: none;
        }

        .photo-corner.top-left {
          top: -10px;
          left: -10px;
          border-top: 1px solid #3b82f6;
          border-left: 1px solid #3b82f6;
        }

        .photo-corner.bottom-right {
          right: -10px;
          bottom: -10px;
          border-right: 1px solid rgba(59, 130, 246, 0.45);
          border-bottom: 1px solid rgba(59, 130, 246, 0.45);
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: 0.8rem;
          color: #737b78;
          font-size: 0.62rem;
          letter-spacing: 0.06em;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.08);
        }

        /* ================= CONTENT ================= */

        .about-content {
          max-width: 650px;
        }

        .about-label {
          margin: 0 0 0.5rem;
          color: #3b82f6;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
        }

        .about-heading {
          margin: 0 0 1rem;
          color: #f8fafc;
          font-size: clamp(1.9rem, 3vw, 2.65rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .about-heading span {
          color: #737b78;
          font-weight: 500;
        }

        .about-lead {
          margin: 0 0 0.7rem;
          color: #d0d6d3;
          font-size: 0.88rem;
          line-height: 1.65;
        }

        .about-description {
          margin: 0;
          color: #858d89;
          font-size: 0.8rem;
          line-height: 1.65;
        }

        /* ================= HIGHLIGHTS ================= */

        .highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-top: 1.35rem;
        }

        .highlight {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          min-height: 42px;
          padding: 0.55rem 0.7rem;
          background: #111313;
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #b9c0bd;
          font-size: 0.7rem;
          transition: all 0.25s ease;
        }

        .highlight:hover {
          background: #151817;
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .highlight-icon {
          display: grid;
          place-items: center;
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.12);
        }

        /* ================= CTA ================= */

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          margin-top: 1.25rem;
          color: #e7ebe9;
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .about-cta:hover {
          color: #3b82f6;
        }

        .cta-arrow {
          display: grid;
          place-items: center;
          width: 27px;
          height: 27px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.25s ease;
        }

        .about-cta:hover .cta-arrow {
          transform: translate(2px, -2px);
          border-color: rgba(59, 130, 246, 0.5);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1050px) {
          .about-section {
            padding: 2.25rem 2.5rem;
          }

          .about-layout {
            gap: 2.5rem;
            grid-template-columns: minmax(350px, 0.9fr) 1.1fr;
          }
        }

        @media (max-width: 800px) {
          .about-section {
            padding: 2rem 1.5rem;
          }

          .about-header {
            margin-bottom: 1.75rem;
          }

          .section-label {
            display: none;
          }

          .about-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-visual {
            max-width: 600px;
          }

          .about-content {
            max-width: 100%;
          }
        }

        @media (max-width: 520px) {
          .about-title {
            font-size: 2.5rem;
          }

          .about-title-wrap {
            gap: 0.7rem;
          }

          .about-heading {
            font-size: 1.9rem;
          }

          .highlights {
            grid-template-columns: 1fr;
          }

          .about-lead {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  )
}