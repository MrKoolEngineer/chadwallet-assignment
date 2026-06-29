/* eslint-disable @next/next/no-img-element */

"use client";

import ErrorState from "../common/ErrorState";

import { useGetTokenStats } from "@/hooks/useGetTokenStats";

import { formatCompactNumber } from "@/utils/token";

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
      <div className="flex h-20 items-center justify-center">
        <span className="text-sm text-chad-text-secondary">
          Loading token...
        </span>
      </div>
    );
  }

  if (isError || !token) {
    return (
      <div className="h-20">
        <ErrorState label="Failed to load token." height="100%" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 px-4 py-3">
      {/* Logo */}

      {token.logoURI ? (
        <img
          src={token.logoURI}
          alt={token.symbol}
          className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover"
        />
      ) : (
        <div className="h-10 w-10 shrink-0 rounded-full bg-chad-surface" />
      )}

      {/* Token */}

      <div className="flex w-56 shrink-0 flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="truncate text-[28px] leading-none font-semibold text-chad-text">
            {token.name}
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs text-chad-text-secondary">
          <span>{token.symbol}</span>

          <div className="h-3 w-px bg-white/10" />

          <span className="capitalize">{chain}</span>

          <div className="h-3 w-px bg-white/10" />

          <span>{address.slice(0, 6)}...</span>
        </div>
      </div>

      {/* Stats */}

      <div className="ml-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
        <MetricCard
          label="Market Cap"
          value={formatCompactNumber(token.marketCap)}
        />

        <MetricCard label="Price" value={`$${token.price.toPrecision(4)}`} />

        <MetricCard
          label="24H Vol."
          value={formatCompactNumber(token.v24hUSD)}
        />

        <MetricCard
          label="Liquidity"
          value={formatCompactNumber(token.liquidity)}
        />
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex min-w-[96px] flex-col items-center rounded-lg bg-chad-surface px-3 py-2">
      <div className="text-[11px] text-chad-text-secondary whitespace-nowrap">
        {label}
      </div>

      <div className="mt-0.5 text-sm font-semibold text-chad-text tabular-nums">
        {value}
      </div>
    </div>
  );
}
