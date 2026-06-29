"use client";

import { useState } from "react";
import { ChevronDown, Settings2 } from "lucide-react";

import BuySellTabs from "./BuySellTabs";

export default function TradeCard() {
  const [side, setSide] = useState<"buy" | "sell">("buy");

  return (
    <div className="flex flex-col gap-4 w-75  shrink-0 pr-4">
      {/* Buy / Sell */}

      <BuySellTabs side={side} onChange={setSide} />

      {/* Amount */}

      <div className="mt-4 rounded-2xl border border-white/6 bg-chad-bg px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            You Pay
          </span>

          <span className="text-xs font-medium text-slate-500">$0.00</span>
        </div>

        <input
          type="number"
          placeholder="0"
          className="w-full bg-transparent text-5xl font-black text-white outline-none placeholder:text-slate-700"
        />
      </div>

      {/* Quick Amounts */}

      <div className="mt-3 flex items-center gap-2">
        {["$10", "$100", "$500", "MAX"].map((value) => (
          <button
            key={value}
            className="rounded-lg bg-chad-bg px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/5"
          >
            {value}
          </button>
        ))}

        <button
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg bg-chad-bg transition-colors hover:bg-white/5"
        >
          <Settings2 size={18} />
        </button>
      </div>

      {/* Balance */}

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">Available</span>

        <span className="font-semibold text-white">$0.00</span>
      </div>

      {/* CTA */}

      <button
        className="mt-5 h-13 w-full rounded-xl bg-chad-green font-bold text-chad-bg transition-all hover:opacity-95 active:scale-[0.98]"
      >
        {side === "buy" ? "Buy ChadWallet" : "Sell ChadWallet"}
      </button>

      {/* Network */}

      <button
        className="mt-3 flex h-12 w-full items-center justify-between rounded-xl bg-chad-bg px-4 transition-colors hover:bg-white/5"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs text-slate-500">Network</span>

          <span className="font-semibold text-white">Ethereum</span>
        </div>

        <ChevronDown size={18} className="text-slate-400" />
      </button>
    </div>
  );
}
