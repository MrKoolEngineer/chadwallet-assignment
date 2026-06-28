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

  const bannerContainerStyle = `w-full h-12 bg-slate-900/60 backdrop-blur-md border-y border-white/5 overflow-hidden whitespace-nowrap flex items-center z-20 select-none ${borderClass}`;

  if (isLoading) {
    return (
      <div className={bannerContainerStyle}>
        <div className="flex w-full items-center px-5 animate-pulse">
          <span className="font-mono text-sm font-semibold tracking-wider text-slate-400">
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
          className="justify-start px-5"
        />
      </div>
    );
  }

  const duplicatedTokens = [...tokens, ...tokens, ...tokens];

  return (
    <div className={bannerContainerStyle}>
      <div className={`${animationClass} flex shrink-0 items-center gap-10`}>
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
              className="group inline-flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-1 transition-all hover:bg-white/10"
            >
              <span className="text-sm font-black uppercase tracking-wider text-white transition-colors group-hover:text-chad-green">
                {token.symbol}
              </span>

              <span className="font-mono text-sm font-semibold text-slate-200">
                {formatPrice(token.price)}
              </span>

              <span
                className={`font-mono text-sm font-black tracking-tight ${
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
