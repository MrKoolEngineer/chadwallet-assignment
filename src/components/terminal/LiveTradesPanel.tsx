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
      <div className="flex-1 flex-1 border border-white/10 rounded-2xl">
        <LoadingState label="Loading live trades..." />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex-1 flex-1 border border-white/10 rounded-2xl">
        <ErrorState label="Failed to load trades." />
      </div>
    );
  }

  return (
    <section className="flex flex-col h-full overflow-hidden">
      <div className="h-11 shrink-0 px-4 flex items-center justify-between border-b border-chad-border bg-chad-surface/30">
        <h3 className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
          Live Trades
        </h3>

        <span className="text-[10px] font-mono text-chad-green">LIVE</span>
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
