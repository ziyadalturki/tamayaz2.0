import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  const steps = [
    { n: "01", title: dict.how_1, body: dict.how_1_b },
    { n: "02", title: dict.how_2, body: dict.how_2_b },
    { n: "03", title: dict.how_3, body: dict.how_3_b },
  ];

  return (
    <section
      id="sec-how"
      className="border-y border-stone-300 bg-white px-8 py-24"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-gold mb-3.5 text-[11px] font-medium tracking-[0.2em] uppercase">
          {dict.how_eye}
        </div>
        <h2
          className={`text-navy mb-16 ${
            isAr
              ? "font-arabic text-[40px] leading-[1.3] font-bold"
              : "font-serif text-[48px] leading-[1.1] font-normal tracking-[-0.02em]"
          }`}
        >
          {dict.how_head}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-ivory rounded-2xl border border-stone-300 px-7 pt-8 pb-9"
            >
              <div className="text-gold mb-5 font-serif text-[48px] leading-none font-normal tracking-[-0.02em]">
                {s.n}
              </div>
              <h3
                className={`text-navy mb-2 text-[19px] font-semibold tracking-[-0.01em] ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-[13px] leading-[1.55] text-stone-600 ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
