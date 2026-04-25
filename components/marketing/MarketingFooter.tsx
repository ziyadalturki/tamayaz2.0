import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export function MarketingFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const isAr = locale === "ar";

  const cols = [
    { heading: dict.foot_product, links: dict.foot_product_links },
    { heading: dict.foot_company, links: dict.foot_company_links },
    { heading: dict.foot_legal, links: dict.foot_legal_links },
  ];

  return (
    <footer className="bg-navy-900 px-8 pt-16 pb-10 text-stone-300">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo height={28} variant="on-navy" />
            <p
              className={`mt-[18px] max-w-[280px] text-[13px] leading-[1.6] text-stone-300 opacity-[0.85] ${
                isAr ? "font-arabic" : ""
              }`}
            >
              {dict.foot_tagline}
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <div
                className={`text-gold mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase ${
                  isAr ? "font-arabic tracking-normal normal-case" : ""
                }`}
              >
                {col.heading}
              </div>
              <ul className="flex flex-col gap-2.5 text-[13px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      // TODO: wire to actual route once it exists
                      className={`cursor-pointer text-stone-300 opacity-[0.85] transition-opacity hover:opacity-100 ${
                        isAr ? "font-arabic" : ""
                      }`}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-ivory/[0.12] flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs text-stone-300">
          <div className={`opacity-[0.7] ${isAr ? "font-arabic" : ""}`}>
            {dict.foot_loc}
          </div>
          <div className="flex gap-3.5 opacity-[0.85]">
            <a
              aria-label="X"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <Icon name="x_social" size={16} />
            </a>
            <a
              aria-label="LinkedIn"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <Icon name="linkedin" size={16} />
            </a>
            <a
              aria-label="Instagram"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <Icon name="instagram" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
