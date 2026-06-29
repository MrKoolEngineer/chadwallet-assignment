"use client";

import { useState } from "react";

import TokenHeader from "./TokenHeader";
import TradingViewChart from "./TradingViewChart";
import TopHoldersPanel from "./TopHoldersPanel";
import LiveTradesPanel from "./LiveTradesPanel";

import { ChartInterval } from "@/types/chart";

interface ChartPanelProps {
  chain: string;
  address: string;
}

export default function ChartPanel({ chain, address }: ChartPanelProps) {
  const [interval, setInterval] = useState<ChartInterval>("15m");

  return (
    <section className="flex-1 flex flex-col overflow-hidden">
      <div className="mb-2 overflow-hidden">
        <TokenHeader chain={chain} address={address} />
        <TradingViewChart
          chain={chain}
          address={address}
          interval={interval}
          onIntervalChange={setInterval}
        />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-2 gap-2">
        <TopHoldersPanel chain={chain} address={address} />
        <LiveTradesPanel chain={chain} address={address} />
      </div>
    </section>
  );
}
