"use client";

interface ChartPanelProps {
  token: Token;
  address: string;
}

export default function ChartPanel({ token, address }: ChartPanelProps) {
  return (
    <section className="flex-1 flex flex-col bg-chad-bg overflow-y-auto">
      <div className="p-4 border-b border-chad-border bg-chad-surface/30 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-black tracking-tight text-slate-100">
            {token.name}
            <span className="text-xs text-slate-500 font-mono font-normal">
              solana / {address.slice(0, 6)}...
            </span>
          </h1>
          <div className="flex gap-4 font-mono text-[10px] text-slate-400 border-l border-chad-border pl-4">
            <div>
              24H VOL:
              <span className="text-slate-200 font-bold">
                {token.volume24h}
              </span>
            </div>
            <div>
              MKT CAP:
              <span className="text-slate-200 font-bold">
                {token.marketCap}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`font-mono text-base font-black ${token.isPositive ? "text-chad-green" : "text-chad-red"}`}
        >
          {token.price}
        </div>
      </div>

      <div className="p-4 h-72 shrink-0">
        <div className="w-full h-full border border-chad-border bg-chad-surface/40 rounded-2xl flex flex-col items-center justify-center p-4 text-center font-mono relative overflow-hidden">
          <div className="text-xs text-slate-400 font-bold tracking-tight">
            Dynamic Live Candle Stream
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-24 flex items-end gap-1 opacity-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-chad-green rounded-t"
                style={{
                  height: `${(Math.sin(i * 0.4) * 35 + 55).toFixed(2)}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 border-t border-chad-border divide-x divide-chad-border font-mono text-xs">
        <div className="flex flex-col h-full bg-chad-surface/10">
          <div className="p-2.5 bg-chad-surface/60 border-b border-chad-border text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Top Supply Holders
          </div>
          <div className="flex-1 p-3 space-y-1.5 overflow-y-auto text-slate-300">
            <div className="flex justify-between p-1.5 bg-chad-surface/40 rounded border border-chad-border/60 text-[11px]">
              <span className="text-indigo-400 font-bold">Raydium LP Pool</span>
              <span>5.20%</span>
            </div>
            <div className="flex justify-between p-1.5 bg-chad-surface/40 rounded border border-chad-border/60 text-[11px]">
              <span>0xChAd...8a21</span>
              <span>2.41%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full bg-chad-surface/10">
          <div className="p-2.5 bg-chad-surface/60 border-b border-chad-border text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Order Book Stream
          </div>
          <div className="flex-1 p-3 space-y-1.5 overflow-y-auto text-slate-300">
            <div className="flex justify-between p-1.5 bg-chad-surface/40 rounded border border-chad-border/60 text-[11px]">
              <span className="text-chad-green font-bold">BUY 22.4 SOL</span>
              <span className="text-slate-500">Just now</span>
            </div>
            <div className="flex justify-between p-1.5 bg-chad-surface/40 rounded border border-chad-border/60 text-[11px]">
              <span className="text-chad-red font-bold">SELL 8.1 SOL</span>
              <span className="text-slate-500">3s ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
