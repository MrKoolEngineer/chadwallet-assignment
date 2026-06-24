import React from "react";
import Link from "next/link";
import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import OrderFormPanel from "@/components/terminal/OrderFormPanel";
import { TOKEN_REGISTRY } from "@/data/mockTokens";

interface PageProps {
  params: Promise<{
    chain: string;
    address: string;
  }>;
}

export default async function TradingTerminalPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { chain, address } = resolvedParams;

  const activeToken =
    TOKEN_REGISTRY.find(
      (t) =>
        t.symbol.toLowerCase() ===
        address.replace("-pump-addr", "").replace("-native", ""),
    ) || TOKEN_REGISTRY[0];

  return (
    /* Removed TokenBanner completely from this layout viewport wrapper */
    <main className="h-screen w-screen bg-[#020204] text-zinc-100 flex flex-col overflow-hidden select-none animate-fade-in font-sans">
      {/* Control Navigation Dashboard Header (Now hugs the absolute top cleanly) */}
      <header className="h-14 border-b border-zinc-800/60 bg-[#070709] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-md font-black tracking-tighter text-emerald-500 hover:opacity-80 transition-opacity"
          >
            CHAD<span className="text-white">WORKSPACE</span>
          </Link>
          <div className="h-4 w-[1px] bg-zinc-800" />
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
            <div>
              CHAIN:{" "}
              <span className="text-emerald-400 font-bold uppercase">
                {chain}
              </span>
            </div>
            <div>
              STATUS: <span className="text-zinc-300 font-bold">CONNECTED</span>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300"
        >
          [ Disconnect ]
        </Link>
      </header>

      {/* 3-Pane Body Grid layout */}
      <div className="flex-1 flex overflow-hidden">
        <TrendingPanel tokens={TOKEN_REGISTRY} activeAddress={address} />
        <ChartPanel token={activeToken} address={address} />
        <OrderFormPanel token={activeToken} />
      </div>
    </main>
  );
}
