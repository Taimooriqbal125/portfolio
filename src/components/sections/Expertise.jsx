"use client"

import { motion } from "framer-motion"
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaDatabase,
} from "react-icons/fa"
import { SiExpo, SiFirebase, SiTypescript, SiPostgresql, SiRedux ,SiNextdotjs ,SiFastapi ,SiSupabase ,SiRedis} from "react-icons/si"

const TECH_STACK = [
  { icon: FaReact, label: "React Native", color: "#61DAFB" },
  { icon: SiExpo, label: "Expo", color: "#000020" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: FaNodeJs, label: "Node.js", color: "#339933" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: FaGithub, label: "GitHub", color: "#ffffff" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
  { icon: SiRedux, label: "Redux", color: "#764ABC" },
  { icon: FaDocker, label: "Docker", color: "#2496ED" },
  { icon: FaFigma, label: "Figma", color: "#F24E1E" },
  { icon: FaDatabase, label: "MongoDB", color: "#47A248" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiFastapi, label: "FastAPI", color: "#009688" },
  { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
  { icon: SiRedis, label: "Redis", color: "#DC382D" },
]

export default function Expertise() {
  const items = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK]

  return (
    <section
      id="expertise"
      style={{
        padding: "100px 20px 80px",
        background: "#0b0d0c",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            margin: "0 auto 16px",
            background: "#161817",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#22c55e",
          }}
        >
          <FaReact size={20} />
        </div>
        <h2
          style={{
            color: "#f8fafc",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Built with the tools I know best.
        </h2>
      </div>

      {/* Marquee - with top padding so cards don't touch */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
          }}
          animate={{ x: [0, -2000] }}
          initial={false}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                width: "120px",
                height: "140px",
                background: "#161817",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                flexShrink: 0,
                transition: "border-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
              }}
            >
              <item.icon
                size={36}
                style={{ color: item.color }}
              />
              <span
                style={{
                  color: "#9aa39f",
                  fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  textAlign: "center",
                  padding: "0 8px",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}