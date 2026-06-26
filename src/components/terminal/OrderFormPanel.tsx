"use client";

import { useState } from "react";

interface OrderFormPanelProps {
  chain: string;
  address: string;
}

export default function OrderFormPanel({
  chain,
  address,
}: OrderFormPanelProps) {
  const [tradeAmount, setTradeAmount] = useState<string>("");
  const [side, setSide] = useState<"buy" | "sell">("buy");

  return (
    <aside className="w-80 border-l border-chad-border bg-chad-bg flex flex-col shrink-0 p-4 justify-between">
      <div className="space-y-4">
        <div className="p-3 bg-chad-surface border border-chad-border rounded-xl flex justify-between items-center text-xs">
          <span className="text-slate-400 font-medium">Wallet Balance</span>
          <span className="font-mono font-black text-slate-100">14.85 SOL</span>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">
            Execution Action
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-chad-surface rounded-xl border border-chad-border">
            <button
              onClick={() => setSide("buy")}
              className={`text-xs font-black py-2 rounded-lg font-mono transition-all cursor-pointer ${side === "buy" ? "bg-chad-green text-chad-bg" : "text-slate-400 hover:text-slate-200"}`}
            >
              BUY
            </button>
            <button
              onClick={() => setSide("sell")}
              className={`text-xs font-black py-2 rounded-lg font-mono transition-all cursor-pointer ${side === "sell" ? "bg-chad-red text-white" : "text-slate-400 hover:text-slate-200"}`}
            >
              SELL
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">
            Amount (SOL)
          </label>
          <div className="relative">
            <input
              type="number"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-chad-surface border border-chad-border focus:border-chad-green outline-none text-slate-100 p-3 rounded-xl font-mono text-sm transition-colors"
            />
            <span className="absolute right-3 top-3.5 text-xs text-slate-500 font-mono">
              SOL
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          alert(
            `Submitted ${tradeAmount} SOL ${side.toUpperCase()} order for ${address} on ${chain}.`,
          )
        }
        disabled={!tradeAmount}
        className={`w-full font-black text-sm py-4 rounded-xl transition-all active:scale-98 ${
          tradeAmount
            ? side === "buy"
              ? "bg-chad-green text-chad-bg hover:opacity-90 cursor-pointer"
              : "bg-chad-red text-white hover:opacity-90 cursor-pointer"
            : "bg-chad-surface text-slate-600 border border-chad-border/40 opacity-50 cursor-not-allowed"
        }`}
      >
        {tradeAmount ? `Execute ${side.toUpperCase()}` : "Enter Amount"}
      </button>
    </aside>
  );
}
