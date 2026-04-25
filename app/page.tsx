export default function Home() {
  return (
    <main className="bg-ivory flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <span className="text-gold text-xs font-medium tracking-[0.15em] uppercase">
          Brand foundations · verified
        </span>
        <h1 className="text-navy font-serif text-5xl leading-tight font-normal tracking-tight md:text-6xl">
          Stand out with confidence.
        </h1>
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-navy text-2xl leading-relaxed"
        >
          تميّز في مسيرتك المهنية
        </p>
        <p className="max-w-md font-sans text-base leading-relaxed text-stone-600">
          Inter, IBM Plex Sans Arabic, and Fraunces are loading. Brand colors
          flow through Tailwind via{" "}
          <code className="font-mono text-sm">/brand/tokens.css</code>.
        </p>
      </div>
    </main>
  );
}
