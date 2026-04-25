import { Icon } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { ReviewNote } from "./ReviewNote";

export function DifferentiatorSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  return (
    <section id="sec-features" className="bg-ivory px-8 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Mockup card */}
          <div className="rounded-2xl border border-stone-300 bg-white p-7 shadow-[0_12px_32px_rgba(13,32,59,0.12)]">
            <div className="mb-[18px] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="bg-navy text-gold flex h-9 w-9 items-center justify-center rounded-full">
                  <Icon name="user" size={16} />
                </div>
                <div>
                  <div
                    className={`text-navy text-[13px] font-semibold ${
                      isAr ? "font-arabic" : ""
                    }`}
                  >
                    {dict.diff_card_title}
                  </div>
                  <div
                    className={`text-[11px] text-stone-600 ${
                      isAr ? "font-arabic" : ""
                    }`}
                  >
                    {dict.diff_card_meta}
                  </div>
                </div>
              </div>
              <span
                className={`bg-success-bg text-success rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {dict.diff_card_status}
              </span>
            </div>
            <div className="flex flex-col gap-3.5">
              <ReviewNote
                flag="warning"
                title={dict.diff_note_1_t}
                body={dict.diff_note_1_b}
                isAr={isAr}
              />
              <ReviewNote
                flag="info"
                title={dict.diff_note_2_t}
                body={dict.diff_note_2_b}
                isAr={isAr}
              />
              <ReviewNote
                flag="success"
                title={dict.diff_note_3_t}
                body={dict.diff_note_3_b}
                isAr={isAr}
              />
            </div>
          </div>

          {/* Copy column */}
          <div>
            <div className="text-gold mb-3.5 text-[11px] font-medium tracking-[0.2em] uppercase">
              {dict.diff_eye}
            </div>
            <h2
              className={`text-navy mb-[22px] ${
                isAr
                  ? "font-arabic text-[36px] leading-[1.3] font-bold"
                  : "font-serif text-[44px] leading-[1.1] font-normal tracking-[-0.02em]"
              }`}
            >
              {dict.diff_head}
            </h2>
            <p
              className={`mb-7 max-w-[460px] text-[17px] leading-[1.65] text-stone-600 ${
                isAr ? "font-arabic" : ""
              }`}
            >
              {dict.diff_body}
            </p>
            <div className="border-gold flex flex-col gap-3.5 border-s-2 ps-5">
              <p
                className={`text-navy text-[15px] leading-[1.55] italic ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {dict.diff_quote_1}
              </p>
              <p
                className={`text-navy text-[15px] leading-[1.55] italic ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {dict.diff_quote_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
