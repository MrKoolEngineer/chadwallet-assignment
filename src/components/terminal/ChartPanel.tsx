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

      <div className="flex flex-1 min-h-0 gap-2">
        <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl">
          <TopHoldersPanel chain={chain} address={address} />
        </section>

        <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl">
          <LiveTradesPanel chain={chain} address={address} />
        </section>
      </div>
    </section>
  );
}
