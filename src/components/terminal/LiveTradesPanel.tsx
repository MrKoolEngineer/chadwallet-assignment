"use client";

import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

import { useGetTokenTrades } from "@/hooks/useGetTokenTrades";
import { timeAgo } from "@/utils/time";
import { formatCompactNumber } from "@/utils/token";

interface Props {
  chain: string;
  address: string;
}

export default function LiveTradesPanel({ chain, address }: Props) {
  const { data, isLoading, isError } = useGetTokenTrades({
    chain,
    address,
  });

  if (isLoading && !data) {
    return (
      <div className="flex-1 rounded-2xl border border-white/10">
        <LoadingState label="Loading live trades..." />
      </div>
    );
  }

  // Only show error if there is no cached data
  if (isError) {
    return (
      <div className="flex-1 rounded-2xl border border-white/10">
        <ErrorState label="Failed to load trades." />
      </div>
    );
  }

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10">
      <div className="relative flex h-10 shrink-0 items-center justify-between rounded-t-lg bg-chad-surface px-3">
        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            className="font-medium capitalize text-chad-text transition-colors hover:text-white"
          >
            Live Trades
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {data?.items.map((trade, idx) => (
          <div
            key={`${trade.tx_hash}-${idx}`}
            className="flex items-center justify-between px-4 py-2 transition-colors hover:bg-chad-surface/30"
          >
            <div>
              <div
                className={`text-lg font-semibold leading-none text-[15px] uppercase ${
                  trade.side === "buy" ? "text-chad-green" : "text-chad-red"
                }`}
              >
                {trade.side}
              </div>

              <div className="text-[11px] text-chad-text-tertiary">
                {timeAgo(trade.block_unix_time)}
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-semibold leading-none text-chad-text">
                {formatCompactNumber(trade.volume)}
              </div>

              <div className="text-[11px] text-chad-text-tertiary">
                ${formatCompactNumber(trade.volume_usd)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
