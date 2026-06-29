/* eslint-disable @next/next/no-img-element */

"use client";

import ErrorState from "../common/ErrorState";
import LoadingState from "../common/LoadingState";

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
    return <LoadingState label="Loading token..." height={77} />;
  }

  if (isError || !token) {
    return <ErrorState label="Failed to load token." height={77} />;
  }

  return (
    <div className="flex items-center gap-4 px-4 py-3">
      {token?.logoURI ? (
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
        <div className="flex items-center gap-3">
          <h1 className="truncate text-[30px] font-semibold leading-none text-chad-text">
            {token?.name}
          </h1>
        </div>

        <div className="flex items-center gap-3 text-xs text-chad-text-secondary">
          <span>{token?.symbol}</span>

          <div className="h-3 w-px bg-white/10" />

          <span className="capitalize">{chain}</span>

          <div className="h-3 w-px bg-white/10" />

          <span>{address.slice(0, 6)}...</span>
        </div>
      </div>

      {/* Stats */}

      <div className="ml-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
        <MetricCard
          label="Market Cap"
          value={formatCompactNumber(token?.marketCap ?? 0)}
        />

        <MetricCard
          label="Price"
          value={`$${(token?.price ?? 0).toPrecision(4)}`}
        />

        <MetricCard
          label="24H Vol."
          value={formatCompactNumber(token?.v24hUSD ?? 0)}
        />

        <MetricCard
          label="Liquidity"
          value={formatCompactNumber(token?.liquidity ?? 0)}
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
    <div className="flex min-w-24 flex-col items-center rounded-lg bg-chad-surface px-3 py-2">
      <div className="whitespace-nowrap text-[11px] text-chad-text-secondary">
        {label}
      </div>

      <div className="mt-0.5 tabular-nums text-sm font-semibold text-chad-text">
        {value}
      </div>
    </div>
  );
}
