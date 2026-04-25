"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export function MarketingNav({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "how", label: dict.nav_link_how },
    { id: "features", label: dict.nav_link_features },
    { id: "pricing", label: dict.nav_link_pricing },
    { id: "faq", label: dict.nav_link_faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 px-8 py-3.5 transition-all duration-200 ${
        scrolled
          ? "bg-ivory/[0.92] border-b border-stone-300 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between">
        <a href="#top" className="flex cursor-pointer">
          <Logo height={28} variant={scrolled ? "on-light" : "on-navy"} />
        </a>
        <nav
          className={`hidden gap-7 text-sm font-medium md:flex ${
            scrolled ? "text-stone-600" : "text-stone-300"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#sec-${l.id}`}
              className="hover:text-navy cursor-pointer transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitcher tone={scrolled ? "light" : "dark"} />
          <a
            // TODO: wire to /sign-in once route exists
            className={`hidden cursor-pointer text-sm font-medium md:inline ${
              scrolled ? "text-navy" : "text-ivory"
            }`}
          >
            {dict.nav_signin}
          </a>
          <button
            type="button"
            // TODO: wire to /onboarding once route exists
            className={`border-gold rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? "text-navy hover:bg-gold"
                : "text-ivory hover:bg-gold hover:text-navy"
            }`}
          >
            {dict.nav_start}
          </button>
        </div>
      </div>
    </header>
  );
}
