"use client";

import { useGetTokenStats } from "@/hooks/useGetTokenStats";

import {
  formatCompactNumber,
  formatPercentage,
  formatPrice,
} from "@/utils/token";

interface TokenHeaderProps {
  chain: string;
  address: string;
}

export default function TokenHeader({ chain, address }: TokenHeaderProps) {
  const {
    data: token,
    isLoading,
    isError,
  } = useGetTokenStats({
    chain,
    address,
  });

  if (isLoading) {
    return (
      <div className="h-23 border-b border-chad-border bg-chad-surface/30 flex items-center justify-center shrink-0">
        <span className="text-slate-500 font-mono">Loading token...</span>
      </div>
    );
  }

  if (isError || !token) {
    return (
      <div className="h-23 border-b border-chad-border bg-chad-surface/30 flex items-center justify-center shrink-0">
        <span className="text-chad-red font-mono">Failed to load token.</span>
      </div>
    );
  }

  const isPositive = token.price24hChangePercent >= 0;

  return (
    <div className="p-4 border-b border-chad-border bg-chad-surface/30 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        {token.logoURI ? (
          <img
            src={token.logoURI}
            alt={token.symbol}
            width={44}
            height={44}
            className="rounded-full"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-chad-surface border border-chad-border" />
        )}

        <div>
          <h1 className="text-xl font-black text-slate-100">{token.name}</h1>

          <div className="text-xs text-slate-500 font-mono">
            {token.symbol} • {chain} • {address.slice(0, 6)}...
          </div>
        </div>

        <div className="flex gap-6 border-l border-chad-border pl-6">
          <div>
            <div className="text-[10px] uppercase text-slate-500">
              24H Volume
            </div>

            <div className="font-bold text-slate-100">
              {formatCompactNumber(token.v24hUSD)}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase text-slate-500">
              Market Cap
            </div>

            <div className="font-bold text-slate-100">
              {formatCompactNumber(token.marketCap)}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase text-slate-500">
              Liquidity
            </div>

            <div className="font-bold text-slate-100">
              {formatCompactNumber(token.liquidity)}
            </div>
          </div>
        </div>
      </div>

      <div className="text-right">
        <div
          className={`text-2xl font-black ${
            isPositive ? "text-chad-green" : "text-chad-red"
          }`}
        >
          {formatPrice(token.price)}
        </div>

        <div
          className={`text-sm font-mono ${
            isPositive ? "text-chad-green" : "text-chad-red"
          }`}
        >
          {formatPercentage(token.price24hChangePercent)}
        </div>
      </div>
    </div>
  );
}
