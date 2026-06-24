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
  const animationClass =
    direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee";
  const borderClass =
    position === "bottom"
      ? "border-t border-chad-border mt-auto"
      : "border-b border-chad-border";

  return (
    <div
      className={`w-full bg-chad-bg/90 backdrop-blur-sm py-3 overflow-hidden whitespace-nowrap flex gap-8 font-mono text-xs z-20 select-none ${borderClass}`}
    >
      <div className={`${animationClass} flex items-center gap-12 shrink-0`}>
        {[...tokens, ...tokens, ...tokens].map((token, idx) => (
          <div
            key={`${token.symbol}-${idx}`}
            onClick={() => onTokenClick(token)}
            className="inline-flex items-center gap-2 cursor-pointer hover:bg-chad-surface/40 px-2 py-1 rounded-md transition-all group"
          >
            <span className="font-extrabold text-slate-300 group-hover:text-white transition-colors">
              {token.symbol}
            </span>
            <span className="text-slate-500 font-medium">{token.price}</span>
            <span
              className={`font-bold ${token.isPositive ? "text-chad-green" : "text-chad-red"}`}
            >
              {token.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
