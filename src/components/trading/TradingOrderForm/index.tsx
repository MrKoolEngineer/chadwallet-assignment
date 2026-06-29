"use client";

import { useState } from "react";

import AmountInput from "./AmountInput";
import BuySellTabs from "./BuySellTabs";
import NetworkSelector from "./NetworkSelector";
import QuickAmounts from "./QuickAmounts";
import SubmitOrderButton from "./SubmitOrderButton";
import WalletBalance from "./WalletBalance";

import type { TradeSide } from "./types";

export default function TradingOrderForm() {
  const [side, setSide] = useState<TradeSide>("buy");
  const [amount, setAmount] = useState("");

  return (
    <section
      style={{ padding: 8 }}
      className="rounded-2xl border border-white/10 bg-chad-card shadow-[0_0_0_1px_rgba(255,255,255,0.02)] flex flex-col gap-2"
    >
      <BuySellTabs value={side} onChange={setSide} />

      <AmountInput value={amount} onChange={setAmount} />

      <QuickAmounts onSelect={(value) => setAmount(String(value))} />

      <WalletBalance balance={0} />

      <SubmitOrderButton side={side} symbol="CHAD" />

      <NetworkSelector network="Solana" />
    </section>
  );
}
