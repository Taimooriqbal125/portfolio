"use client"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden px-6 py-16 bg-[#0a0a0a] max-sm:min-h-[70vh] max-sm:px-5 max-sm:py-12"
      style={{
        backgroundImage: "radial-gradient(55rem 38rem at 80% 15%, rgba(88,28,135,0.16), transparent 65%), radial-gradient(45rem 32rem at 12% 75%, rgba(88,28,135,0.1), transparent 65%), radial-gradient(70rem 48rem at 50% 45%, rgba(28,10,40,0.5), transparent 75%)",
      }}
    >
      <div className="max-w-[60rem] flex flex-col items-center">
        <h1 className="m-0 text-[#f8fafc] font-[800] text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.02em] max-sm:text-[clamp(2rem,7vw,3.2rem)]">
          From idea to
          <br />
          <span className="relative z-0 inline-block before:content-[''] before:absolute before:z-[-1] before:left-[-0.05em] before:right-[-0.08em] before:bottom-[0.07em] before:h-[0.28em] before:bg-[#3b82f6] before:rounded-[0.04em]">
            app store
          </span>
          <br />
          <span className="text-[#64748b]">in 2-8 weeks.</span>
        </h1>

        <p className="mt-7 max-w-[48rem] text-[#94a3b8] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] font-medium max-sm:mt-6">
          End-to-end mobile app development. Design, build, test, release,
          support. Vetted engineers led by a technical founder. Fixed scope,
          transparent pricing, 90% on-time delivery.
        </p>

        <div className="mt-[2.2rem] flex items-center justify-center gap-5 flex-wrap max-sm:mt-8 max-sm:flex-col max-sm:w-full">
          <a
            href="https://calendly.com/taimooriqbal308/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-[2.2rem] py-4 text-[0.95rem] font-bold no-underline cursor-pointer transition-all duration-[0.25s] bg-[#f8fafc] text-[#0b0710] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(248,250,252,0.18)] max-sm:w-full max-sm:max-w-[20rem]"
          >
            Book a Call
            <svg
              className="transition-transform duration-[0.25s] group-hover:translate-x-1"
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

          <a
            href="#estimate"
            className="inline-flex items-center justify-center gap-2 rounded-full px-[2.2rem] py-4 text-[0.95rem] font-bold no-underline cursor-pointer transition-all duration-[0.25s] border border-white/85 text-[#f8fafc] bg-transparent hover:bg-white/[0.08] hover:-translate-y-0.5 max-sm:w-full max-sm:max-w-[20rem]"
          >
            Estimate my app
          </a>
        </div>
      </div>
    </section>
  )
}
