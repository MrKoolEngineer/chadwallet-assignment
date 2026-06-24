"use client";

interface TokenBannerProps {
  tokens: Token[];
  onTokenClick: (token: Token) => void;
  direction?: "forward" | "reverse";
  position?: "top" | "bottom";
}

export default function TokenBanner({
  tokens,
  onTokenClick,
  direction = "forward",
  position = "top",
}: TokenBannerProps) {
  // Determine correct animation class based on direction prop
  const animationClass =
    direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee";

  // Dynamic positioning borders matching the fomo layout style
  const borderClass =
    position === "bottom"
      ? "border-t border-zinc-900/60 mt-auto"
      : "border-b border-zinc-900/60";

  return (
    <div
      className={`w-full bg-zinc-950/80 py-3 overflow-hidden whitespace-nowrap flex gap-8 font-mono text-xs z-20 select-none ${borderClass}`}
    >
      <div className={`${animationClass} flex items-center gap-12 shrink-0`}>
        {/* Tripled array list loop guarantees a seamless, unbroken marquee crawl on ultra-wide screens */}
        {[...tokens, ...tokens, ...tokens].map((token, idx) => (
          <div
            key={`${token.symbol}-${idx}`}
            onClick={() => onTokenClick(token)}
            className="inline-flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors group"
          >
            <span className="font-bold text-zinc-300 group-hover:text-white">
              {token.symbol}
            </span>
            <span className="text-zinc-500">{token.price}</span>
            <span
              className={
                token.isPositive ? "text-emerald-500" : "text-rose-500"
              }
            >
              {token.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
