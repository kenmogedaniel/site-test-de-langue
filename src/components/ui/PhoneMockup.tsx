export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div
        className="absolute -inset-10 rounded-full bg-gradient-to-tr from-sakura/50 via-transparent to-ai/30 blur-2xl"
        aria-hidden
      />

      <div
        className="absolute -left-16 top-20 z-10 animate-float rounded-full bg-white px-4 py-2 text-xs font-medium text-bamboo shadow-lg ring-1 ring-sumi/5 dark:bg-washi-dark"
        style={{ animationDelay: "0.8s" }}
      >
        正解 ! ✓
      </div>
      <div
        className="absolute -right-14 bottom-32 z-10 animate-float rounded-full bg-hanko px-4 py-2 text-xs font-semibold text-washi shadow-lg"
        style={{ animationDelay: "2.2s" }}
      >
        +10 XP · 連続 7日
      </div>

      <div className="relative rounded-[2.75rem] bg-sumi p-2.5 shadow-2xl ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[2.25rem] bg-washi dark:bg-washi-dark">
          <div className="flex items-center justify-between px-6 pt-3 font-mono text-[10px] text-sumi/50 dark:text-washi/50">
            <span>9:41</span>
            <span className="h-1.5 w-14 rounded-full bg-sumi/15" />
            <span className="tracking-tighter">●●●</span>
          </div>

          <div className="mt-3 flex items-center justify-between border-b border-sumi/10 px-5 pb-3 dark:border-washi/10">
            <span className="font-display text-sm">面接日本語</span>
            <span className="rounded-full bg-sakura/25 px-2 py-0.5 text-[10px] font-medium text-sakura-deep dark:text-sakura">
              連続 7日
            </span>
          </div>

          <div className="mx-5 mt-4 h-1.5 overflow-hidden rounded-full bg-sumi/10 dark:bg-washi/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sakura-deep to-hanko" />
          </div>

          <div className="card-washi mx-4 mt-4 p-6 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              Quel est ce son ?
            </p>
            <p className="mt-2 font-display text-6xl">あ</p>
            <button
              type="button"
              tabIndex={-1}
              className="mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-ai text-washi"
              aria-label="Écouter"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.5 8.5a5 5 0 010 7" />
              </svg>
            </button>
          </div>

          <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
            <span className="flex items-center justify-center gap-1.5 rounded-xl border border-bamboo bg-bamboo/15 py-2.5 text-sm font-semibold text-bamboo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              a
            </span>
            <span className="rounded-xl border border-sumi/15 py-2.5 text-center text-sm dark:border-washi/15">i</span>
            <span className="rounded-xl border border-sumi/15 py-2.5 text-center text-sm dark:border-washi/15">u</span>
            <span className="rounded-xl border border-sumi/15 py-2.5 text-center text-sm dark:border-washi/15">e</span>
          </div>

          <div className="mt-4 flex items-center justify-around border-t border-sumi/10 px-6 py-3 dark:border-washi/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-ai">
              <path d="M3 12l9-9 9 9M5 10v10h14V10" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-sumi/35 dark:text-washi/35">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-sumi/35 dark:text-washi/35">
              <path d="M4 20V10M10 20V4M16 20v-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
