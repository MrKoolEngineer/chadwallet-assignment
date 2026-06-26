"use client";

import { useState } from "react";

import { useAuthTrigger } from "@/hooks/useAuthTrigger";

interface OrderFormPanelProps {
  chain: string;
  address: string;
}

export default function OrderFormPanel({
  chain,
  address,
}: OrderFormPanelProps) {
  const [tradeAmount, setTradeAmount] = useState("");
  const [side, setSide] = useState<"buy" | "sell">("buy");

  const { login, isAuthenticated } = useAuthTrigger();

  const handleSubmit = () => {
    if (!isAuthenticated) {
      login();
      return;
    }

    alert(
      `Submitted ${tradeAmount} SOL ${side.toUpperCase()} order for ${address} on ${chain}.`,
    );
  };

  const isButtonDisabled = isAuthenticated && !tradeAmount;

  return (
    <aside className="w-80 card flex flex-col shrink-0 p-4 justify-between">
      <div className="space-y-4">
        <div className="p-3 bg-chad-surface border border-chad-border rounded-xl flex justify-between items-center text-xs">
          <span className="text-sm text-slate-400 font-medium">
            Wallet Balance
          </span>

          <span className="text-sm font-mono font-black text-slate-100">
            14.85 SOL
          </span>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black py-2.5">Execution Action</label>

          <div className="grid grid-cols-2 gap-2 p-1 bg-chad-surface rounded-xl border border-chad-border">
            <button
              onClick={() => setSide("buy")}
              className={`text-sm font-black py-2 rounded-lg font-mono transition-all cursor-pointer ${
                side === "buy"
                  ? "bg-chad-green text-chad-bg"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              BUY
            </button>

            <button
              onClick={() => setSide("sell")}
              className={`text-sm font-black py-2 rounded-lg font-mono transition-all cursor-pointer ${
                side === "sell"
                  ? "bg-chad-red text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              SELL
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black py-2.5">Amount (SOL)</label>

          <div className="relative">
            <input
              type="number"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-chad-surface border border-chad-border focus:border-chad-green outline-none text-slate-100 p-3 rounded-xl font-mono text-sm transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isButtonDisabled}
        className={`w-full font-black text-sm py-4 rounded-xl transition-all active:scale-98 ${
          isButtonDisabled
            ? "bg-chad-surface text-slate-600 border border-chad-border/40 opacity-50 cursor-not-allowed"
            : side === "buy"
              ? "bg-chad-green text-chad-bg hover:opacity-90 cursor-pointer"
              : "bg-chad-red text-white hover:opacity-90 cursor-pointer"
        }`}
      >
        {!isAuthenticated
          ? "Start Trading"
          : tradeAmount
            ? `Execute ${side.toUpperCase()}`
            : "Enter Amount"}
      </button>
    </aside>
  );
}
