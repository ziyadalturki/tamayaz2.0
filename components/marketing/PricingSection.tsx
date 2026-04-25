import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { PricingPack } from "./PricingPack";

export function PricingSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  return (
    <section
      id="sec-pricing"
      className="border-y border-stone-300 bg-white px-8 py-24"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="text-gold mb-3.5 text-[11px] font-medium tracking-[0.2em] uppercase">
            {dict.price_landing_eye}
          </div>
          <h2
            className={`text-navy mb-3.5 ${
              isAr
                ? "font-arabic text-[40px] leading-[1.3] font-bold"
                : "font-serif text-[48px] leading-[1.1] font-normal tracking-[-0.02em]"
            }`}
          >
            {dict.price_landing_h}
          </h2>
          <p
            className={`text-[17px] text-stone-600 ${
              isAr ? "font-arabic" : ""
            }`}
          >
            {dict.price_landing_s}
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] gap-5 md:grid-cols-3">
          <PricingPack
            name={dict.price_pack_starter}
            credits={10}
            price={29}
            locale={locale}
          />
          <PricingPack
            name={dict.price_pack_value}
            credits={30}
            price={69}
            featured
            badge={dict.price_pack_badge}
            locale={locale}
          />
          <PricingPack
            name={dict.price_pack_power}
            credits={80}
            price={149}
            locale={locale}
          />
        </div>

        <p
          className={`mt-8 text-center text-[13px] text-stone-600 ${
            isAr ? "font-arabic" : ""
          }`}
        >
          {dict.price_bene}
        </p>
      </div>
    </section>
  );
}
