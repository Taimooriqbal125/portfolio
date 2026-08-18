const CODE_SNIPPET = `const architecture = {
  performance: '60fps',
  state: 'predictable',
  scale: 'infinite'
};`

export default function Architecture() {
  return (
    <section className="px-[4rem] pb-10 max-md:px-6 max-lg:px-6">
      <div className="bg-[#111111] border border-white/[0.06] border-l-2 border-l-[#3b82f6] p-9 flex items-center justify-between gap-8 max-lg:flex-col max-lg:items-start max-lg:p-7">
        <div className="max-w-[40rem]">
          <h2 className="m-0 mb-3.5 text-[#3b82f6] text-[1.35rem] font-bold tracking-[-0.01em]">
            The Architecture of Success
          </h2>
          <p className="m-0 text-[#d6dbd8] text-base leading-[1.65]">
            I build apps on rock-solid architectural patterns (Clean
            Architecture, MVVM) ensuring they are fast day one, and
            maintainable year five.
          </p>
        </div>

        <div className="shrink-0 w-[26rem] max-w-full bg-[#0d0d0d] border border-white/[0.05] p-[1.1rem_1.4rem] max-lg:w-full">
          <div className="flex gap-[0.4rem] mb-3.5">
            <span className="w-[0.45rem] h-[0.45rem] rounded-full bg-[#5b605e]" />
            <span className="w-[0.45rem] h-[0.45rem] rounded-full bg-[#5b605e]" />
            <span className="w-[0.45rem] h-[0.45rem] rounded-full bg-[#5b605e]" />
          </div>
          <pre className="m-0 text-[#3b82f6] text-[0.8rem] leading-[1.7] overflow-x-auto font-normal">
            {CODE_SNIPPET}
          </pre>
        </div>
      </div>
    </section>
  )
}
