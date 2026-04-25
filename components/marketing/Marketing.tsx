import type { Locale } from "@/lib/i18n/locales";
import { MarketingNav } from "./MarketingNav";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { HowItWorks } from "./HowItWorks";
import { DifferentiatorSection } from "./DifferentiatorSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { MarketingFooter } from "./MarketingFooter";

export function Marketing({ locale }: { locale: Locale }) {
  return (
    <div id="top" className="bg-ivory text-ink">
      <MarketingNav locale={locale} />
      <Hero locale={locale} />
      <ProblemSection locale={locale} />
      <HowItWorks locale={locale} />
      <DifferentiatorSection locale={locale} />
      <PricingSection locale={locale} />
      <FAQSection locale={locale} />
      <FinalCTA locale={locale} />
      <MarketingFooter locale={locale} />
    </div>
  );
}
