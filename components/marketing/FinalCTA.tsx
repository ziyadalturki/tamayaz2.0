import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export function FinalCTA({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  return (
    <section className="bg-navy text-ivory relative overflow-hidden px-8 py-18">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[120px] h-[440px] w-[440px] rounded-full opacity-[0.06]"
        style={{
          insetInlineStart: "-100px",
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <h2
          className={`text-ivory mb-[18px] ${
            isAr
              ? "font-arabic text-[44px] leading-[1.3] font-bold"
              : "font-serif text-[56px] leading-[1.05] font-normal tracking-[-0.025em]"
          }`}
        >
          {dict.final_head}
        </h2>
        <p
          className={`mx-auto mb-9 max-w-[520px] text-[18px] leading-[1.55] text-stone-300 ${
            isAr ? "font-arabic" : ""
          }`}
        >
          {dict.final_sub}
        </p>
        <button
          type="button"
          // TODO: wire to onboarding flow
          className={`border-gold text-ivory hover:bg-gold hover:text-navy rounded-lg border bg-transparent px-6 py-3.5 text-[15px] font-medium transition-colors ${
            isAr ? "font-arabic" : ""
          }`}
        >
          {dict.final_cta}
        </button>
      </div>
    </section>
  );
}
