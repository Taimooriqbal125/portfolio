"use client"

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
      className="py-10 px-5 bg-[#0a0a0a] overflow-hidden w-full max-md:py-16 max-md:px-5"
    >
      {/* Header */}
      <div className="text-center mb-[60px]">
        <div className="w-12 h-12 mx-auto mb-4 bg-[#161817] border border-white/10 rounded-xl flex items-center justify-center text-[#3b82f6]">
          <FaReact size={20} />
        </div>
        <h2 className="text-[#f8fafc] text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold m-0">
          Built with the tools I know best.
        </h2>
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden py-10">
        <div className="flex gap-6 w-max animate-marquee">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[120px] h-[140px] bg-[#161817] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 shrink-0 transition-[border-color] duration-300 cursor-pointer hover:border-[var(--accent)]"
              style={{ "--accent": item.color }}
            >
              <item.icon size={36} style={{ color: item.color }} />
              <span className="text-[#9aa39f] text-[11px] font-[family-name:var(--font-jetbrains)] text-center px-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
