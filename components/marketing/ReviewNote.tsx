type ReviewFlag = "warning" | "info" | "success";

const FLAG_STYLES: Record<ReviewFlag, { bg: string; dot: string }> = {
  warning: { bg: "bg-warning-bg", dot: "bg-warning" },
  info: { bg: "bg-info-bg", dot: "bg-info" },
  success: { bg: "bg-success-bg", dot: "bg-success" },
};

export function ReviewNote({
  flag,
  title,
  body,
  isAr,
}: {
  flag: ReviewFlag;
  title: string;
  body: string;
  isAr: boolean;
}) {
  const s = FLAG_STYLES[flag];
  return (
    <div
      className={`flex items-start gap-2.5 rounded-[10px] px-4 py-3.5 ${s.bg}`}
    >
      <span
        className={`mt-[7px] h-[7px] w-[7px] flex-shrink-0 rounded-full ${s.dot}`}
      />
      <div className="min-w-0 flex-1">
        <div
          className={`text-navy mb-1 text-[13px] leading-[1.4] font-semibold ${
            isAr ? "font-arabic" : ""
          }`}
        >
          {title}
        </div>
        <div
          className={`text-ink text-[13px] leading-[1.55] ${
            isAr ? "font-arabic" : ""
          }`}
        >
          {body}
        </div>
      </div>
    </div>
  );
}
