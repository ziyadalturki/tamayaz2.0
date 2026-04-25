import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { FAQAccordion } from "./FAQAccordion";

export function FAQSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  const items = [
    { q: dict.faq_q1, a: dict.faq_a1 },
    { q: dict.faq_q2, a: dict.faq_a2 },
    { q: dict.faq_q3, a: dict.faq_a3 },
    { q: dict.faq_q4, a: dict.faq_a4 },
    { q: dict.faq_q5, a: dict.faq_a5 },
  ];

  return (
    <section id="sec-faq" className="bg-ivory px-8 py-24">
      <div className="mx-auto max-w-[820px]">
        <div className="text-gold mb-3.5 text-[11px] font-medium tracking-[0.2em] uppercase">
          {dict.faq_eye}
        </div>
        <h2
          className={`text-navy mb-10 ${
            isAr
              ? "font-arabic text-[40px] leading-[1.3] font-bold"
              : "font-serif text-[48px] leading-[1.1] font-normal tracking-[-0.02em]"
          }`}
        >
          {dict.faq_head}
        </h2>
        <FAQAccordion items={items} isAr={isAr} />
      </div>
    </section>
  );
}
