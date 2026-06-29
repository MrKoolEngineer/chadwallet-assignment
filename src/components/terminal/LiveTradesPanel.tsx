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

  if (isLoading) {
    return (
      <div className="flex-1 border border-white/10 rounded-2xl">
        <LoadingState label="Loading live trades..." />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex-1 border border-white/10 rounded-2xl">
        <ErrorState label="Failed to load trades." />
      </div>
    );
  }

  return (
    <section className="flex flex-col h-full border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex h-10 shrink-0 items-center justify-between rounded-t-lg bg-chad-surface px-3">
        {/* Left */}

        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="capitalize font-medium text-chad-text transition-colors hover:text-white"
            >
              Live Trades
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {data.items.map((trade, idx) => (
          <div
            key={trade.tx_hash + idx}
            className="flex items-center justify-between px-4 py-3 border-b border-chad-border hover:bg-chad-surface/30 transition-colors"
          >
            <div>
              <div
                className={`font-bold uppercase ${
                  trade.side === "buy" ? "text-chad-green" : "text-chad-red"
                }`}
              >
                {trade.side}
              </div>

              <div className="text-xs text-slate-500">
                {timeAgo(trade.block_unix_time)}
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold text-slate-100">
                {formatCompactNumber(trade.volume)}
              </div>

              <div className="text-xs text-slate-500">
                ${formatCompactNumber(trade.volume_usd)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
