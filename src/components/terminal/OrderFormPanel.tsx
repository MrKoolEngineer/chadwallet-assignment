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
      `Trading integration coming soon.\n\n${side.toUpperCase()} ${tradeAmount} SOL\n${address}\n${chain}`,
    );
  };

  const isButtonDisabled = isAuthenticated && !tradeAmount;

  return (
    <aside className="w-80 card flex flex-col shrink-0 p-4 justify-between">
      <div className="space-y-4">
        <div className="p-3 bg-chad-surface border border-chad-border rounded-xl flex justify-between items-center">
          <span className="text-sm text-slate-400 font-medium">
            Wallet Balance
          </span>

          <span className="text-sm font-mono font-black text-slate-100">
            {isAuthenticated ? "-- SOL" : "Not Connected"}
          </span>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black py-2.5">Execution Action</label>

          <div className="grid grid-cols-2 gap-2 p-1 bg-chad-surface rounded-xl border border-chad-border">
            <button
              disabled={!isAuthenticated}
              onClick={() => setSide("buy")}
              className={`text-sm font-black py-2 rounded-lg font-mono transition-all ${
                !isAuthenticated
                  ? "opacity-40 cursor-not-allowed text-slate-500"
                  : side === "buy"
                    ? "bg-chad-green text-chad-bg cursor-pointer"
                    : "text-slate-400 hover:text-slate-200 cursor-pointer"
              }`}
            >
              BUY
            </button>

            <button
              disabled={!isAuthenticated}
              onClick={() => setSide("sell")}
              className={`text-sm font-black py-2 rounded-lg font-mono transition-all ${
                !isAuthenticated
                  ? "opacity-40 cursor-not-allowed text-slate-500"
                  : side === "sell"
                    ? "bg-chad-red text-white cursor-pointer"
                    : "text-slate-400 hover:text-slate-200 cursor-pointer"
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
              disabled={!isAuthenticated}
              onChange={(e) => setTradeAmount(e.target.value)}
              placeholder={
                isAuthenticated ? "0.0" : "Connect wallet to start trading"
              }
              className={`w-full bg-chad-surface border border-chad-border outline-none text-slate-100 p-3 rounded-xl font-mono text-sm transition-colors ${
                isAuthenticated
                  ? "focus:border-chad-green"
                  : "opacity-50 cursor-not-allowed"
              }`}
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
            : !isAuthenticated
              ? "bg-chad-green text-chad-bg hover:opacity-90 cursor-pointer"
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
