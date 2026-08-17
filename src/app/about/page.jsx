"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Presentation,
  Users,
  Smartphone,
  ArrowRight,
} from "lucide-react"
import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  { icon: Trophy, text: "4+ International Hackathons" },
  { icon: Presentation, text: "Workshops & Tech Talks" },
  { icon: Users, text: "Mentoring & Collaboration" },
  { icon: Smartphone, text: "React Native / Expo Specialist" },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

export default function About() {
  return (
    <section id="about" className={`about-section ${jakarta.className}`}>
      {/* ============ Serif display heading ============ */}
      <motion.h2 className={`about-serif ${playfair.className}`} {...fadeUp()}>
        Past & Present
      </motion.h2>

      <div className="about-grid">
        {/* ============ Left: photo ============ */}
        <motion.div className="about-photo-wrap" {...fadeUp()}>
          <div className="about-photo">
            {/* 👇 Replace this placeholder with your real photo:
                <Image src="/profile.jpg" alt="Portrait" fill className="about-img" />
                (drop profile.jpg into /public) */}
            <Smartphone size={64} strokeWidth={1.5} className="photo-icon" />
          </div>
          <div className={`about-caption ${jetbrainsMono.className}`}>
            <span className="status-dot" />
            React Native Developer
          </div>
        </motion.div>

        {/* ============ Right: story ============ */}
        <div className="about-copy">
          <motion.p className="about-label" {...fadeUp(0.05)}>
            / About Me
          </motion.p>

          <motion.h3 className="about-heading" {...fadeUp(0.1)}>
            The developer behind the apps.
          </motion.h3>

          <motion.p className="about-text lead" {...fadeUp(0.15)}>
            I&apos;m a React Native mobile application developer who turns
            ideas into fast, polished apps for iOS and Android. I care about
            the details — pixel-perfect interfaces, smooth 60fps interactions,
            and architecture that stays maintainable as products grow.
          </motion.p>

          <motion.p className="about-text" {...fadeUp(0.2)}>
            Beyond building products, I&apos;ve taken my craft to the global
            stage — participating in 4+ international hackathons, leading
            workshops, and collaborating with developers worldwide.
            High-pressure teams, tight deadlines, and new problems are where I
            do my best work.
          </motion.p>

          <div className="about-highlights">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.text}
                className="highlight-item"
                {...fadeUp(0.25 + i * 0.08)}
              >
                <item.icon size={18} className="highlight-icon" />
                {item.text}
              </motion.div>
            ))}
          </div>

          <motion.a href="#contact" className="about-cta" {...fadeUp(0.5)}>
            Let&apos;s build something together
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 3.5rem 4rem;
        }

        /* ---- serif display heading ---- */
        .about-serif {
          margin: 0 0 3rem;
          color: #eae4dd;
          font-size: clamp(2.6rem, 5.5vw, 4rem);
          font-style: italic;
          font-weight: 500;
          letter-spacing: 0.01em;
          line-height: 1.1;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }

        /* ---- photo frame ---- */
        .about-photo-wrap {
          position: relative;
          max-width: 26rem;
        }

        .about-photo-wrap::before {
          content: "";
          position: absolute;
          inset: 1.25rem -1.25rem -1.25rem 1.25rem;
          border: 1px solid rgba(34, 197, 94, 0.4);
          z-index: 0;
        }

        .about-photo {
          position: relative;
          z-index: 1;
          aspect-ratio: 4 / 5;
          background: linear-gradient(160deg, #1b1f1d, #121514);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .photo-icon {
          color: rgba(34, 197, 94, 0.35);
        }

        .about-caption {
          position: relative;
          z-index: 1;
          margin-top: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #9aa39f;
          font-size: 0.85rem;
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
          }
        }

        /* ---- copy ---- */
        .about-label {
          color: #22c55e;
          font-size: 0.8rem;
          margin: 0 0 0.4rem;
        }

        .about-heading {
          color: #f8fafc;
          font-size: 2.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 1.25rem;
        }

        .about-text {
          color: #9aa39f;
          font-size: 1rem;
          line-height: 1.75;
          margin: 0 0 1rem;
        }

        .about-text.lead {
          color: #d6dbd8;
        }

        /* ---- highlight chips ---- */
        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
          margin-top: 1.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          background: #161817;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 0.85rem 1rem;
          color: #d3dad7;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .highlight-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .about-cta {
          margin-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #22c55e;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .about-cta:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* ---- responsive ---- */
        @media (max-width: 900px) {
          .about-section {
            padding: 2.5rem 1.5rem;
          }
          .about-serif {
            margin-bottom: 2.25rem;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-photo-wrap {
            margin: 0 auto;
          }
          .about-heading {
            font-size: 1.9rem;
          }
          .about-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}