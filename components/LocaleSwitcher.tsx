"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function LocaleSwitcher({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale: Locale = isLocale(segments[0])
    ? segments[0]
    : defaultLocale;
  const targetLocale: Locale = currentLocale === "ar" ? "en" : "ar";

  const restOfPath = segments.slice(1).join("/");
  const targetPath = restOfPath
    ? `/${targetLocale}/${restOfPath}`
    : `/${targetLocale}`;

  const label = getDictionary(currentLocale).switchTo;
  const colorClass =
    tone === "dark"
      ? "text-stone-300 hover:text-ivory"
      : "text-stone-600 hover:text-navy";

  // Plain <a>, NOT next/link Link. Locale change must trigger a full document
  // reload so the root layout re-runs server-side and refreshes <html lang dir>
  // from the x-locale header. Client-side nav would leave html attrs stuck on
  // the previous locale.
  return (
    <a
      href={targetPath}
      className={`text-xs font-semibold tracking-[0.08em] transition-colors ${colorClass}`}
    >
      {label}
    </a>
  );
}
