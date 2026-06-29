"use client";

import { memo } from "react";

interface WalletBalanceProps {
  balance: number;
  symbol?: string;
  isLoading?: boolean;
}

function WalletBalance({
  balance,
  symbol = "$",
  isLoading = false,
}: WalletBalanceProps) {
  if (isLoading) {
    return (
      <div className="mt-1 flex items-center justify-between px-2 py-1 text-sm">
        <span className="text-slate-500">Available</span>

        <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-2 py-1 text-sm">
      <span className="text-slate-500">Available</span>

      <span className="font-semibold text-white">
        {symbol}
        {balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>
  );
}

export default memo(WalletBalance);
