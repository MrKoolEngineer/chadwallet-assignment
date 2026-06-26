"use client";

import { useGetTokenTrades } from "@/hooks/useGetTokenTrades";
import { formatCompactNumber } from "@/utils/token";
import { timeAgo } from "@/utils/time";

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
      <div className="flex-1 flex items-center justify-center text-slate-500 font-mono">
        Loading trades...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex-1 flex items-center justify-center text-chad-red font-mono">
        Failed to load trades.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {data.items.map((trade) => (
        <div
          key={trade.tx_hash}
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
            <div className="text-slate-100 font-semibold">
              {formatCompactNumber(trade.volume)}
            </div>

            <div className="text-xs text-slate-500">
              ${formatCompactNumber(trade.volume_usd)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
