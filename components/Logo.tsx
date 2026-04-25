type LogoProps = {
  height?: number;
  variant?: "on-light" | "on-navy";
  showWordmark?: boolean;
};

export function Logo({
  height = 32,
  variant = "on-light",
  showWordmark = true,
}: LogoProps) {
  const onDark = variant === "on-navy";
  const tileBg = onDark ? "#FAF8F3" : "#0D203B";
  const letterFg = "#B68D3B";
  const radius = Math.round(height * 0.22);
  const gap = Math.round(height * 0.3);

  return (
    <div className="inline-flex items-center" style={{ gap }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        className="block flex-shrink-0"
        aria-label="Tamayaz mark"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={radius * (100 / height)}
          ry={radius * (100 / height)}
          fill={tileBg}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Segoe UI', Arial, sans-serif"
          fontSize="72"
          fontWeight="700"
          fill={letterFg}
        >
          ت
        </text>
      </svg>
      {showWordmark && (
        <span
          className={`font-sans text-[17px] leading-none font-semibold tracking-[-0.015em] whitespace-nowrap ${
            onDark ? "text-ivory" : "text-navy"
          }`}
        >
          Tamayaz
        </span>
      )}
    </div>
  );
}
