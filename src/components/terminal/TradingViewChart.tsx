"use client";

interface TradingViewChartProps {
  chain: string;
  address: string;
}

export default function TradingViewChart({
  chain,
  address,
}: TradingViewChartProps) {
  return (
    <section className="h-80 border-b border-chad-border bg-chad-surface/20 flex items-center justify-center">
      <span className="text-slate-500 font-mono">TradingView Chart</span>
    </section>
  );
}
