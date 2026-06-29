"use client";

import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

import { shortenAddress } from "@/utils/address";
import { formatCompactNumber } from "@/utils/token";
import { useGetTokenHolders } from "@/hooks/useGetTokenHolders";
import TopHoldersPanelHeader from "./TopHoldersPanelHeader";

interface Props {
  chain: string;
  address: string;
}

export default function TopHoldersPanel({ chain, address }: Props) {
  const { data, isLoading, isError } = useGetTokenHolders({
    chain,
    address,
  });

  // Only show loading on initial load (no data)
  if (isLoading && !data) {
    return (
      <div className="flex-1 rounded-2xl border border-white/10">
        <LoadingState label="Loading holders..." />
      </div>
    );
  }

  // Only show error if there is no cached data
  if (isError || !data) {
    return (
      <div className="flex-1 rounded-2xl border border-white/10">
        <ErrorState label="Failed to load holders." />
      </div>
    );
  }

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10">
      <div className="relative">
        <TopHoldersPanelHeader />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {data?.items.map((holder, index) => (
          <div
            key={holder.owner}
            className="
              flex
              items-center
              justify-between

              px-4
              py-2

              transition-colors
              hover:bg-chad-surface/40
            "
          >
            <div>
              <div className="text-[10px] text-chad-text-tertiary">
                #{index + 1}
              </div>

              <div className="text-[15px] font-medium text-chad-text">
                {shortenAddress(holder.owner)}
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-semibold leading-none">
                {formatCompactNumber(holder.ui_amount)}
              </div>

              <div className="text-[11px] text-chad-text-tertiary">tokens</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
