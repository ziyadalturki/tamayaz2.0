export function HeroCVVisual() {
  const r = 17;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - 0.94);

  return (
    <div className="relative aspect-[3/4] w-full max-w-[380px] -rotate-2 rtl:rotate-2">
      {/* CV card — content stays English regardless of locale */}
      <div
        dir="ltr"
        className="text-ink absolute inset-0 overflow-hidden rounded border border-stone-300 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
      >
        <div className="border-navy mb-3.5 border-b-2 pb-2.5">
          <div className="text-navy text-[18px] font-semibold tracking-[-0.01em]">
            Ahmed K.
          </div>
          <div className="mt-[3px] text-[9px] text-stone-600">
            Senior Product Manager · Riyadh, Saudi Arabia
          </div>
        </div>
        <div className="text-gold-dark mb-1.5 text-[8px] font-bold tracking-[0.18em] uppercase">
          Summary
        </div>
        <div className="mb-3.5 flex flex-col gap-1">
          <div className="h-[5px] w-[94%] rounded-sm bg-stone-300" />
          <div className="h-[5px] w-[88%] rounded-sm bg-stone-300" />
          <div className="h-[5px] w-[72%] rounded-sm bg-stone-300" />
        </div>
        <div className="text-gold-dark mb-1.5 text-[8px] font-bold tracking-[0.18em] uppercase">
          Experience
        </div>
        <div className="text-navy mb-[3px] text-[10px] font-semibold">
          Senior Product Manager · STC Pay
        </div>
        <div className="mb-2 text-[8px] text-stone-600">
          2022 — Present · Riyadh
        </div>
        <div className="mb-3.5 flex flex-col gap-1">
          <div className="h-1 w-[92%] rounded-sm bg-stone-300" />
          <div className="h-1 w-[86%] rounded-sm bg-stone-300" />
          <div className="h-1 w-[90%] rounded-sm bg-stone-300" />
          <div className="h-1 w-[70%] rounded-sm bg-stone-300" />
        </div>
        <div className="text-navy mb-[3px] text-[10px] font-semibold">
          Product Manager · Careem
        </div>
        <div className="mb-2 text-[8px] text-stone-600">
          2019 — 2022 · Riyadh
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-1 w-[88%] rounded-sm bg-stone-300" />
          <div className="h-1 w-[75%] rounded-sm bg-stone-300" />
        </div>
      </div>

      {/* Floating match badge — sticks to inline-end edge (right in LTR, left in RTL) */}
      <div
        dir="ltr"
        className="border-gold bg-ivory absolute top-[50px] flex rotate-6 items-center gap-3 rounded-2xl border px-[18px] py-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.3)] rtl:-rotate-6"
        style={{ insetInlineEnd: "-30px" }}
      >
        <div className="relative h-[42px] w-[42px]">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            className="-rotate-90"
          >
            <circle
              cx="21"
              cy="21"
              r={r}
              stroke="var(--color-stone-100)"
              strokeWidth="3.5"
              fill="none"
            />
            <circle
              cx="21"
              cy="21"
              r={r}
              stroke="var(--color-gold)"
              strokeWidth="3.5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-semibold tracking-[0.15em] text-stone-600 uppercase">
            Match
          </div>
          <div className="text-navy font-serif text-[24px] leading-none tracking-[-0.015em]">
            94<span className="text-[14px] text-stone-600">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
