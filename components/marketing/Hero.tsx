import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { HeroCVVisual } from "./HeroCVVisual";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  const stats = [
    { a: dict.hero_stat_1_a, b: dict.hero_stat_1_b },
    { a: dict.hero_stat_2_a, b: dict.hero_stat_2_b },
    { a: dict.hero_stat_3_a, b: dict.hero_stat_3_b },
  ];

  return (
    <section
      id="sec-hero"
      className="bg-navy text-ivory relative -mt-[60px] overflow-hidden px-8 pt-40 pb-30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] h-[560px] w-[560px] rounded-full opacity-[0.08]"
        style={{
          insetInlineEnd: "-120px",
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="text-gold mb-5 text-[11px] font-medium tracking-[0.2em] uppercase">
            {dict.land_eye}
          </div>
          <h1
            className={`text-ivory mb-[22px] ${
              isAr
                ? "font-arabic text-[clamp(42px,6vw,72px)] leading-[1.2] font-bold"
                : "font-serif text-[clamp(48px,7vw,84px)] leading-none font-normal tracking-[-0.03em]"
            }`}
          >
            {dict.land_hero}
          </h1>
          <p
            className={`mb-9 max-w-[540px] text-[19px] text-stone-300 ${
              isAr ? "font-arabic leading-[1.8]" : "leading-[1.55]"
            }`}
          >
            {dict.land_hero_sub}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              // TODO: wire to onboarding flow
              className="bg-gold text-navy hover:bg-gold-light rounded-lg px-6 py-3.5 text-[15px] font-medium transition-colors"
            >
              {dict.land_cta}
            </button>
            <span
              className={`text-[13px] text-stone-300 ${
                isAr ? "font-arabic" : ""
              }`}
            >
              {dict.land_preview_cta}
            </span>
          </div>

          <div className="border-ivory/[0.12] mt-20 grid grid-cols-3 gap-6 border-t pt-7 text-xs tracking-[0.1em] text-stone-300 uppercase">
            {stats.map((s) => (
              <div key={s.a}>
                <strong
                  className={`text-ivory mb-1 block text-[15px] leading-[1.3] font-medium tracking-normal normal-case ${
                    isAr ? "font-arabic" : ""
                  }`}
                >
                  {s.a}
                </strong>
                <span
                  className={`leading-[1.5] text-stone-300 ${
                    isAr
                      ? "font-arabic text-[13px] tracking-normal normal-case"
                      : "text-xs tracking-[0.1em] uppercase"
                  }`}
                >
                  {s.b}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <HeroCVVisual />
        </div>
      </div>
    </section>
  );
}
