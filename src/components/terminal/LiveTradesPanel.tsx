"use client";

interface LiveTradesPanelProps {
  chain: string;
  address: string;
}

export default function LiveTradesPanel({
  chain,
  address,
}: LiveTradesPanelProps) {
  return (
    <section className="flex flex-col">
      <div className="px-4 py-3 border-b border-chad-border bg-chad-surface/30 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
        Live Trades
      </div>

      <div className="flex-1 flex items-center justify-center text-slate-500 font-mono">
        Transactions API
      </div>
    </section>
  );
}
