"use client";

import { useRouter } from "next/navigation";
import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

import { useGetTrendingTokens } from "@/hooks/useGetTrendingTokens";
import { formatPercentage, formatPrice } from "@/utils/token";
import { DEFAULT_CHAIN } from "@/constants/chain";

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
      <aside className="card w-72">
        <LoadingState label="Loading trending tokens..." />
      </aside>
    );
  }

  if (isError || !trendingTokens || trendingTokens.length === 0) {
    return (
      <aside className="card w-72">
        <ErrorState label="Unable to load trending tokens." />
      </aside>
    );
  }

  return (
    <aside className="card w-72 flex flex-col shrink-0">
      <div className="p-3   bg-chad-surface/50 flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
          🔥 Trending Momentum
        </h2>

        <span className="text-[9px] text-chad-green font-mono bg-chad-green/10 px-1.5 py-0.5 rounded">
          Live
        </span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-chad-border">
        {trendingTokens.map((token) => {
          const isActive = activeAddress === token.address;

          return (
            <div
              key={token.address}
              onClick={() =>
                router.push(`/tokens/${chain}/${token.address}?timeFrame=1D`)
              }
              className={`p-3 flex items-center justify-between text-xs transition-all cursor-pointer ${
                isActive
                  ? "bg-chad-surface border-l-2 border-chad-green"
                  : "hover:bg-chad-surface/40"
              }`}
            >
              <div>
                <div className="font-extrabold text-slate-200">
                  {token.symbol}
                </div>

                <div className="text-[10px] text-slate-500 font-mono">
                  {token.name}
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-slate-300 font-bold">
                  {formatPrice(token.price)}
                </div>

                <span
                  className={`text-[10px] ${
                    token.price24hChangePercent >= 0
                      ? "text-chad-green"
                      : "text-chad-red"
                  }`}
                >
                  {formatPercentage(token.price24hChangePercent)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
