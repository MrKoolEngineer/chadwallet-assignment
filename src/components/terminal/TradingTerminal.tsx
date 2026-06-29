"use client";

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

  if (isDesktop === null) {
    return null;
  }

  if (!isDesktop) {
    return <DesktopOnly />;
  }

  return (
    <main className="pt-2 px-4 w-dvw min-h-svh h-svh flex flex-col gap-3 max-h-svh overflow-hidden pb-6">
      <TerminalHeader chain={chain} />

      <div className="flex flex-1 min-h-0 gap-3">
        <TrendingPanel chain={chain} activeAddress={address} />

        <ChartPanel chain={chain} address={address} />
        <aside style={{ width: 354 }} className="flex-none pr-4">
          <TradingOrderFormPanel />
        </aside>
      </div>
    </main>
  );
}
