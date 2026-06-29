/* eslint-disable @next/next/no-img-element */

"use client";

import { useRouter } from "next/navigation";

import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

import { useGetTrendingTokens } from "@/hooks/useGetTrendingTokens";
import { formatMarketCap, formatPercentage, formatPrice } from "@/utils/token";
import { DEFAULT_CHAIN } from "@/constants/chain";
import TrendingPanelHeader from "./TrendingPanelHeader";

interface TrendingPanelProps {
  chain?: string;
  activeAddress: string;
}

export default function TrendingPanel({
  chain = DEFAULT_CHAIN,
  activeAddress,
}: TrendingPanelProps) {
  const router = useRouter();

  const {
    data: trendingTokens,
    isLoading,
    isError,
  } = useGetTrendingTokens({ chain });

  if (isLoading) {
    return (
      <aside
        style={{ width: 340 }}
        className="border border-white/10 rounded-2xl"
      >
        <LoadingState label="Loading trending tokens..." />
      </aside>
    );
  }

  if (isError || !trendingTokens?.length) {
    return (
      <aside
        style={{ width: 340 }}
        className="border border-white/10 rounded-2xl"
      >
        <ErrorState label="Unable to load trending tokens." />
      </aside>
    );
  }

  return (
    <aside
      style={{ width: 340 }}
      className="shrink-0 flex flex-col overflow-hidden border border-white/10 rounded-2xl"
    >
      <TrendingPanelHeader />

      {/* List */}

      <div className="flex-1 overflow-y-auto no-scrollbar p-2">
        <div
          style={{ padding: "4px 8px 0 8px" }}
          className="flex flex-col gap-1"
        >
          {trendingTokens.map((token) => {
            const isActive = activeAddress === token.address;
            const positive = token.price24hChangePercent >= 0;

            return (
              <button
                key={token.address}
                type="button"
                onClick={() =>
                  router.push(`/tokens/${chain}/${token.address}?timeFrame=1D`)
                }
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left cursor-pointer transition-all duration-200 ease-out ${isActive ? "bg-chad-surface ring-1 ring-white/5" : "hover:bg-chad-surface/70 hover:ring-1 hover:ring-white/5 hover:scale-[1.01]"} active:scale-[0.99]`}
              >
                {/* Logo */}

                <img
                  src={token.logoURI}
                  alt={token.symbol}
                  className="h-10 w-10 shrink-0 rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/40x40/121824/94A3B8?text=?";
                  }}
                />

                {/* Token Info */}

                <div className="flex flex-1 justify-between">
                  <div className="flex flex-col items-start justify-start">
                    <div className="truncate text-sm leading-4 font-semibold transition-colors duration-200 group-hover:text-white">
                      {token.name}
                    </div>

                    <div className="mt-2 text-xs text-chad-text-secondary">
                      {formatMarketCap(token.marketcap)} MC
                    </div>
                  </div>

                  {/* Right */}

                  <div className="flex flex-col items-end">
                    <div className="truncate text-sm leading-4 font-semibold transition-colors duration-200 group-hover:text-white">
                      {formatPrice(token.price)}
                    </div>

                    <div
                      className={`mt-2 flex items-center gap-1 text-xs font-medium ${
                        positive ? "text-chad-green" : "text-chad-red"
                      }`}
                    >
                      <span>{positive ? "▲" : "▼"}</span>

                      <span>
                        {formatPercentage(token.price24hChangePercent)}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
