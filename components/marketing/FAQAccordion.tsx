"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type FAQItem = { q: string; a: string };

export function FAQAccordion({
  items,
  isAr,
}: {
  items: FAQItem[];
  isAr: boolean;
}) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className="border-b border-stone-300 py-[22px] first:border-t"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`text-navy hover:text-navy-700 flex w-full items-center justify-between gap-4 text-start text-[17px] font-medium tracking-[-0.01em] transition-colors ${
                isAr ? "font-arabic" : ""
              }`}
            >
              <span>{it.q}</span>
              <Icon
                name={isOpen ? "chevu" : "chevd"}
                size={20}
                className="flex-shrink-0 text-stone-600"
              />
            </button>
            {isOpen && (
              <div
                className={`mt-3.5 max-w-[620px] text-[15px] leading-[1.6] text-stone-600 ${
                  isAr ? "font-arabic" : ""
                }`}
              >
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
