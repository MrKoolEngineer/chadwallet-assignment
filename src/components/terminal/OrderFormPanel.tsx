"use client";

import { useState } from "react";

interface OrderFormPanelProps {
  token: Token;
}

export default function OrderFormPanel({ token }: OrderFormPanelProps) {
  const [tradeAmount, setTradeAmount] = useState<string>("");

  return (
    <aside className="w-80 border-l border-zinc-800/80 bg-[#050507] flex flex-col shrink-0 p-4 justify-between">
      <div className="space-y-4">
        <div className="p-3 bg-[#09090b] border border-zinc-800/80 rounded-xl flex justify-between items-center text-xs">
          <span className="text-zinc-400 font-medium">Position Balance</span>
          <span className="font-mono font-bold text-zinc-100">
            0.00 {token.symbol}
          </span>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-400">
            Execution Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-zinc-900 text-emerald-400 border border-emerald-500/30 text-xs font-bold py-2 rounded-lg font-mono">
              BUY
            </button>
            <button
              className="bg-zinc-950 text-zinc-500 border border-zinc-900 text-xs font-bold py-2 rounded-lg font-mono opacity-50 cursor-not-allowed"
              disabled
            >
              SELL
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-400">
            Amount (SOL)
          </label>
          <div className="relative">
            <input
              type="number"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/60 outline-none text-zinc-100 p-3 rounded-xl font-mono text-sm transition-colors"
            />
            <span className="absolute right-3 top-3.5 text-xs text-zinc-500 font-mono">
              SOL
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => alert(`Swapped ${tradeAmount} SOL for ${token.symbol}!`)}
        disabled={!tradeAmount}
        className={`w-full text-zinc-950 font-black text-sm py-4 rounded-xl transition-all ${tradeAmount ? "bg-emerald-500 hover:bg-emerald-600 cursor-pointer" : "bg-zinc-800 text-zinc-500 opacity-40 cursor-not-allowed"}`}
      >
        Execute Swap
      </button>
    </aside>
  );
}
