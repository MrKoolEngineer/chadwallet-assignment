"use client";

import { memo } from "react";

import { TradeSide } from "./types";

interface SubmitOrderButtonProps {
  side: TradeSide;
  symbol?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

function SubmitOrderButton({
  side,
  symbol = "CHAD",
  disabled = false,
  loading = false,
  onClick,
}: SubmitOrderButtonProps) {
  const isBuy = side === "buy";

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className={`group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border text-base font-bold transition-all duration-200 ${isBuy ? "border-chad-green/20 bg-chad-green text-chad-bg hover:brightness-105" : "border-chad-red/20 bg-chad-red text-white hover:brightness-105"} disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-chad-surface disabled:text-slate-500`}
    >
      <span
        className={`inline-block transition-all duration-200 ${loading ? "opacity-0 -translate-y-2" : "opacity-100"}`}
      >
        {isBuy ? `Buy ${symbol}` : `Sell ${symbol}`}
      </span>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </span>
      )}
    </button>
  );
}

export default memo(SubmitOrderButton);
