import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const CODE_SNIPPET = `const architecture = {
  performance: '60fps',
  state: 'predictable',
  scale: 'infinite'
};`

export default function Architecture() {
  return (
    <section className={`arch-section ${jakarta.className}`}>
      <div className="arch-panel">
        <div className="arch-copy">
          <h2 className="arch-title">The Architecture of Success</h2>
          <p className="arch-text">
            I build apps on rock-solid architectural patterns (Clean
            Architecture, MVVM) ensuring they are fast day one, and
            maintainable year five.
          </p>
        </div>

        <div className="arch-code-window">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <pre className={`arch-code ${jetbrainsMono.className}`}>
            {CODE_SNIPPET}
          </pre>
        </div>
      </div>

      <style jsx>{`
        .arch-section {
          padding: 0.75rem 4rem 2.5rem;
        }

        .arch-panel {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-left: 2px solid #3b82f6;
          padding: 2.25rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .arch-copy {
          max-width: 40rem;
        }

        .arch-title {
          margin: 0 0 0.9rem;
          color: #3b82f6;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .arch-text {
          margin: 0;
          color: #d6dbd8;
          font-size: 1rem;
          line-height: 1.65;
        }

        .arch-code-window {
          flex-shrink: 0;
          width: 26rem;
          max-width: 100%;
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.1rem 1.4rem;
        }

        .window-dots {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 0.9rem;
        }

        .window-dots span {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 50%;
          background: #5b605e;
        }

        .arch-code {
          margin: 0;
          color: #3b82f6;
          font-size: 0.8rem;
          line-height: 1.7;
          overflow-x: auto;
        }

        @media (max-width: 1100px) {
          .arch-panel {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.75rem;
          }
          .arch-code-window {
            width: 100%;
          }
        }

        @media (max-width: 900px) {
          .arch-section {
            padding: 0.75rem 1.5rem 2rem;
          }
        }
      `}</style>
    </section>
  )
}