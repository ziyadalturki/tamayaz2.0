import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

type PricingPackProps = {
  name: string;
  credits: number;
  price: number;
  currency?: string;
  featured?: boolean;
  badge?: string;
  locale: Locale;
};

export function PricingPack({
  name,
  credits,
  price,
  currency = "SAR",
  featured = false,
  badge,
  locale,
}: PricingPackProps) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  return (
    <div
      className={`relative rounded-2xl px-6 pt-8 pb-6 text-center ${
        featured
          ? "bg-navy text-ivory"
          : "text-ink border border-stone-300 bg-white"
      }`}
    >
      {badge && (
        <div
          className={`bg-gold text-navy absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap uppercase ${
            isAr ? "font-arabic tracking-normal normal-case" : ""
          }`}
        >
          {badge}
        </div>
      )}
      <div
        className={`mb-5 text-[12px] font-semibold tracking-[0.18em] uppercase ${
          featured ? "text-gold" : "text-stone-600"
        }`}
      >
        {name}
      </div>
      <div
        className={`font-serif text-[64px] leading-none font-normal tracking-[-0.015em] ${
          featured ? "text-ivory" : "text-navy"
        }`}
      >
        {credits}
      </div>
      <div
        className={`mt-1.5 mb-[22px] text-[11px] tracking-[0.12em] uppercase ${
          featured ? "text-stone-300" : "text-stone-600"
        } ${isAr ? "font-arabic tracking-normal normal-case" : ""}`}
      >
        {dict.price_credits}
      </div>
      <div
        className={`mb-[22px] text-[24px] font-semibold tracking-[-0.015em] ${
          featured ? "text-ivory" : "text-navy"
        }`}
      >
        <span
          className={`font-serif text-[28px] ${
            featured ? "text-ivory" : "text-navy"
          }`}
        >
          {price}
        </span>
        <span
          className={`ms-1.5 text-[13px] font-medium ${
            featured ? "text-gold" : "text-stone-600"
          }`}
        >
          {currency}
        </span>
      </div>
      <button
        type="button"
        // TODO: wire to checkout once route exists
        className={`w-full rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
          featured
            ? "bg-gold text-navy hover:bg-gold-light"
            : "bg-navy text-ivory hover:bg-navy-700"
        } ${isAr ? "font-arabic" : ""}`}
      >
        {dict.price_buy}
      </button>
      <p
        className={`mt-3.5 text-[11px] ${
          featured ? "text-stone-300" : "text-stone-600"
        } ${isAr ? "font-arabic" : ""}`}
      >
        {dict.price_never}
      </p>
    </div>
  );
}
