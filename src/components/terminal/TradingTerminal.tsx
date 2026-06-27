"use client";

import { useIsDesktop } from "@/hooks/useIsDesktop";

import DesktopOnly from "@/components/responsive/DesktopOnly";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import OrderFormPanel from "@/components/terminal/OrderFormPanel";

interface TradingTerminalProps {
  chain: string;
  address: string;
}

export default function TradingTerminal({
  chain,
  address,
}: TradingTerminalProps) {
  const isDesktop = useIsDesktop();

  if (isDesktop === null) {
    return null;
  }

  if (!isDesktop) {
    return <DesktopOnly />;
  }

  return (
    <main>
      <TerminalHeader chain={chain} />

      <div className="flex h-[calc(100vh-86px)] gap-2 mx-2">
        <TrendingPanel chain={chain} activeAddress={address} />

        <ChartPanel chain={chain} address={address} />

        <OrderFormPanel chain={chain} address={address} />
      </div>
    </main>
  );
}
