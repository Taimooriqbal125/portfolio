"use client"

import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

export default function Hero() {
  return (
    <section className={`hero ${plusJakarta.className}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          From idea to
          <br />
          <span className="highlight">app store</span>
          <br />
          <span className="title-muted">in 2-8 weeks.</span>
        </h1>

        <p className="hero-subtitle">
          End-to-end mobile app development. Design, build, test, release,
          support. Vetted engineers led by a technical founder. Fixed scope,
          transparent pricing, 90% on-time delivery.
        </p>

        <div className="hero-actions">
          <a href="https://calendly.com/taimooriqbal308/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a Call
            <svg
              className="btn-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a href="#estimate" className="btn btn-secondary">
            Estimate my app
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 4rem 1.5rem;
          background-color: #0a0a0a;
          background-image: radial-gradient(
              55rem 38rem at 80% 15%,
              rgba(88, 28, 135, 0.16),
              transparent 65%
            ),
            radial-gradient(
              45rem 32rem at 12% 75%,
              rgba(88, 28, 135, 0.1),
              transparent 65%
            ),
            radial-gradient(
              70rem 48rem at 50% 45%,
              rgba(28, 10, 40, 0.5),
              transparent 75%
            );
        }

        .hero-content {
          max-width: 60rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          margin: 0;
          color: #f8fafc;
          font-weight: 800;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .title-muted {
          color: #64748b;
        }

        .highlight {
          position: relative;
          z-index: 0;
          display: inline-block;
        }

        .highlight::before {
          content: "";
          position: absolute;
          z-index: -1;
          left: -0.05em;
          right: -0.08em;
          bottom: 0.07em;
          height: 0.28em;
          background: #3b82f6;
          border-radius: 0.04em;
        }

        .hero-subtitle {
          margin: 1.8rem 0 0;
          max-width: 48rem;
          color: #94a3b8;
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          font-weight: 500;
        }

        .hero-actions {
          margin-top: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 1rem 2.2rem;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background-color 0.25s ease;
        }

        .btn-primary {
          background: #f8fafc;
          color: #0b0710;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(248, 250, 252, 0.18);
        }

        .btn-secondary {
          border: 1px solid rgba(248, 250, 252, 0.85);
          color: #f8fafc;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(248, 250, 252, 0.08);
          transform: translateY(-2px);
        }

        .btn-arrow {
          transition: transform 0.25s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .hero {
            padding: 3rem 1.25rem;
            min-height: 70vh;
          }
          .hero-title {
            font-size: clamp(2rem, 7vw, 3.2rem);
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn {
            width: 100%;
            max-width: 20rem;
          }
        }
      `}</style>
    </section>
  )
} 