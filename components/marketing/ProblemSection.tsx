import { Icon } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export function ProblemSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  const items = [
    { icon: "doc" as const, title: dict.prob_1_t, body: dict.prob_1_b },
    { icon: "eye" as const, title: dict.prob_2_t, body: dict.prob_2_b },
    { icon: "globe" as const, title: dict.prob_3_t, body: dict.prob_3_b },
  ];

  return (
    <section id="sec-problem" className="bg-ivory px-8 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className={`text-navy mb-16 max-w-[760px] ${
            isAr
              ? "font-arabic text-[40px] leading-[1.3] font-bold"
              : "font-serif text-[48px] leading-[1.1] font-normal tracking-[-0.02em]"
          }`}
        >
          {dict.prob_head}
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title}>
              <div className="text-navy mb-[22px] flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100">
                <Icon name={it.icon} size={22} />
              </div>
              <h3
                className={`text-navy mb-2.5 text-[19px] font-semibold tracking-[-0.01em] ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {it.title}
              </h3>
              <p
                className={`text-[15px] leading-[1.6] text-stone-600 ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
