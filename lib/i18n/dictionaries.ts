import { ar } from "./ar";
import { en } from "./en";
import type { Locale } from "./locales";

const dictionaries = { ar, en } as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
