import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function ProblemCard({
  icon,
  title,
  description,
  accent = "#e0876e",
}) {
  return (
    <article
      className={`problem-card ${jakarta.className}`}
      style={{ "--accent": accent }}
    >
      <div className="problem-icon">{icon}</div>
      <h3 className="problem-title">{title}</h3>
      <p className={`problem-text ${jetbrainsMono.className}`}>{description}</p>

      <style jsx>{`
        .problem-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #1a1d1c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 1.75rem;
          transition: border-color 0.3s ease;
        }

        .problem-card:hover {
          border-color: var(--accent);
        }

        .problem-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .problem-title {
          margin: 0 0 0.75rem;
          color: #f5f6f6;
          font-size: 1.15rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .problem-text {
          margin: 0;
          color: #8d9592;
          font-size: 0.85rem;
          line-height: 1.7;
        }
      `}</style>
    </article>
  )
}