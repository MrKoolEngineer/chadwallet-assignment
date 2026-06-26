"use client";

import { useState } from "react";

import TokenHeader from "./TokenHeader";
import TimeframeTabs from "./TimeframeTabs";
import TradingViewChart from "./TradingViewChart";
import TopHoldersPanel from "./TopHoldersPanel";
import LiveTradesPanel from "./LiveTradesPanel";

import { useGetTokenStats } from "@/hooks/useGetTokenStats";
import { ChartInterval } from "@/types/chart";

interface ChartPanelProps {
  chain: string;
  address: string;
}

export default function ChartPanel({ chain, address }: ChartPanelProps) {
  const [interval, setInterval] = useState<ChartInterval>("15m");

  const {
    data: token,
    isLoading,
    isError,
  } = useGetTokenStats({
    chain,
    address,
  });

  if (isLoading) {
    return (
      <section className="flex-1 flex items-center justify-center bg-chad-bg">
        Loading token...
      </section>
    );
  }

  if (isError || !token) {
    return (
      <section className="flex-1 flex items-center justify-center bg-chad-bg">
        Failed to load token.
      </section>
    );
  }

  return (
    <section className="flex-1 flex flex-col bg-chad-bg overflow-hidden">
      <TokenHeader token={token} chain={chain} address={address} />

      <TimeframeTabs interval={interval} onChange={setInterval} />
      <TradingViewChart chain={chain} address={address} interval={interval} />

      <div className="flex-1 grid grid-cols-2 divide-x divide-chad-border">
        <TopHoldersPanel chain={chain} address={address} />

        <LiveTradesPanel chain={chain} address={address} />
      </div>
    </section>
  );
}
