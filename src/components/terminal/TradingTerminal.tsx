"use client";

import { useState, useCallback, useEffect } from "react";

import { useIsDesktop } from "@/hooks/useIsDesktop";

import DesktopOnly from "@/components/responsive/DesktopOnly";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import TradingOrderFormPanel from "../trading/TradingOrderFormPanel";

interface TradingTerminalProps {
  chain: string;
  address: string;
}

export default function TradingTerminal({
  chain,
  address,
}: TradingTerminalProps) {
  const isDesktop = useIsDesktop();

  const [selectedAddress, setSelectedAddress] = useState(address);

  // Keep state in sync if the page is refreshed or entered directly via URL
  useEffect(() => {
    setSelectedAddress(address);
  }, [address]);

  const handleTokenSelect = useCallback(
    (newAddress: string) => {
      if (newAddress === selectedAddress) {
        return;
      }

      setSelectedAddress(newAddress);

      const url = new URL(window.location.href);

      url.pathname = `/tokens/${chain}/${newAddress}`;

      // Preserve existing query params (timeFrame, etc.)
      window.history.replaceState({}, "", url);
    },
    [chain, selectedAddress],
  );

  if (isDesktop === null) {
    return null;
  }

  if (!isDesktop) {
    return <DesktopOnly />;
  }

  return (
    <main className="flex h-svh max-h-svh min-h-svh w-dvw flex-col gap-3 overflow-hidden px-4 pt-2 pb-6">
      <TerminalHeader />

      <div className="flex min-h-0 flex-1 gap-3">
        <TrendingPanel
          chain={chain}
          activeAddress={selectedAddress}
          onTokenSelect={handleTokenSelect}
        />

        <ChartPanel chain={chain} address={selectedAddress} />

        <aside style={{ width: 354 }} className="flex-none pr-4">
          <TradingOrderFormPanel />
        </aside>
      </div>
    </main>
  );
}
