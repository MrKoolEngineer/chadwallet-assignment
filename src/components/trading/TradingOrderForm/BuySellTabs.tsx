"use client";

import { memo } from "react";

import type { TradeSide } from "./types";

interface BuySellTabsProps {
  value: TradeSide;
  onChange: (value: TradeSide) => void;
  disabled?: boolean;
}

function BuySellTabs({ value, onChange, disabled = false }: BuySellTabsProps) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange("buy")}
        className={`flex-1 h-10 rounded-lg bg-chad-surface text-base font-bold transition-all duration-200 ${value === "buy" ? `bg-chad-green/15 text-chad-green` : `text-chad-text-secondary hover:bg-white/5 hover:text-chad-text`} disabled:cursor-not-allowed disabled:opacity-50`}
      >
        Buy
      </button>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange("sell")}
        className={`flex-1 h-10 rounded-lg bg-chad-surface text-base font-bold transition-all duration-200 ${value === "sell" ? `bg-chad-red/15 text-chad-red` : `text-chad-text-secondary hover:bg-white/5 hover:text-chad-text`} disabled:cursor-not-allowed disabled:opacity-50`}
      >
        Sell
      </button>
    </div>
  );
}

export default memo(BuySellTabs);
