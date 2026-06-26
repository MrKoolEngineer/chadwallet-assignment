"use client";

import { shortenAddress } from "@/utils/address";
import { formatCompactNumber } from "@/utils/token";
import { useGetTokenHolders } from "@/hooks/useGetTokenHolders";

interface Props {
  chain: string;
  address: string;
}

export default function TopHoldersPanel({ chain, address }: Props) {
  const { data, isLoading, isError } = useGetTokenHolders({
    chain,
    address,
  });

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500 font-mono">
        Loading holders...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex-1 flex items-center justify-center text-chad-red font-mono">
        Failed to load holders.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {data.items.map((holder, index) => (
        <div
          key={holder.owner}
          className="flex items-center justify-between px-4 py-3 border-b border-chad-border hover:bg-chad-surface/30 transition-colors"
        >
          <div>
            <div className="text-xs text-slate-500">#{index + 1}</div>

            <div className="font-mono text-slate-100">
              {shortenAddress(holder.owner)}
            </div>
          </div>

          <div className="text-right">
            <div className="font-semibold text-slate-100">
              {formatCompactNumber(holder.ui_amount)}
            </div>

            <div className="text-xs text-slate-500">tokens</div>
          </div>
        </div>
      ))}
    </div>
  );
}
