"use client";

import { useRouter } from "next/navigation";

import ErrorState from "./common/ErrorState";
import { TrendingToken } from "@/types/token";
import { formatPercentage, formatPrice } from "@/utils/token";
import { DEFAULT_CHAIN } from "@/constants/chain";

interface TokenBannerProps {
  tokens: TrendingToken[];
  isLoading: boolean;
  isError: boolean;
  chain?: string;
  direction?: "forward" | "reverse";
  position?: "top" | "bottom";
  disableNavigation?: boolean;
}

export default function TokenBanner({
  tokens,
  isLoading = false,
  isError = false,
  disableNavigation = false,
  chain = DEFAULT_CHAIN,
  direction = "forward",
  position = "top",
}: TokenBannerProps) {
  const router = useRouter();

  const animationClass =
    direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee";

  const borderClass =
    position === "bottom"
      ? "border-t border-white/10 mt-auto"
      : "border-b border-white/10";

  const bannerContainerStyle = `w-full bg-slate-900/60 border-y border-white/5 backdrop-blur-md h-[54px] py-0 overflow-hidden whitespace-nowrap flex items-center gap-8 z-20 select-none ${borderClass}`;

  if (isLoading) {
    return (
      <div className={bannerContainerStyle}>
        <div className="px-6 w-full animate-pulse flex items-center">
          <span className="text-sm font-semibold text-slate-400 font-mono tracking-wider animate-pulse">
            [ LOADING NETWORK MARQUEE FEED... ]
          </span>
        </div>
      </div>
    );
  }

  if (isError || tokens.length === 0) {
    return (
      <div className={bannerContainerStyle}>
        <ErrorState
          label="[ DATA FEED OFFLINE ]"
          className="px-6 justify-start"
        />
      </div>
    );
  }

  const duplicatedTokens = [...tokens, ...tokens, ...tokens];

  return (
    <div className={bannerContainerStyle}>
      <div className={`${animationClass} flex items-center gap-12 shrink-0`}>
        {duplicatedTokens.map((token, idx) => {
          const changePercent = token.price24hChangePercent ?? 0;
          const isPositive = changePercent >= 0;

          const handleNavigation = () => {
            if (disableNavigation) return;
            router.push(`/tokens/${chain}/${token.address}?timeFrame=1D`);
          };

          return (
            <div
              key={`${token.address}-${idx}`}
              onClick={handleNavigation}
              className="inline-flex items-center gap-3 cursor-pointer hover:bg-white/10 px-3 py-1.5 rounded-md transition-all group"
            >
              <span className="text-sm font-black text-white group-hover:text-chad-green transition-colors uppercase tracking-wider">
                {token.symbol}
              </span>

              <span className="text-sm font-semibold font-mono text-slate-200">
                {formatPrice(token.price)}
              </span>

              <span
                className={`text-sm font-black font-mono tracking-tight ${
                  token.price24hChangePercent == null
                    ? "text-amber-400"
                    : isPositive
                      ? "text-chad-green"
                      : "text-chad-red"
                }`}
              >
                {formatPercentage(token.price24hChangePercent)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
