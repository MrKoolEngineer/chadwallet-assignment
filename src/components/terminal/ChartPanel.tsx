"use client";

interface ChartPanelProps {
  token: Token;
  address: string;
}

export default function ChartPanel({ token, address }: ChartPanelProps) {
  return (
    <section className="flex-1 flex flex-col bg-[#020204] overflow-y-auto">
      <div className="p-4 border-b border-zinc-800/60 bg-[#050507] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-extrabold tracking-tight text-zinc-100">
            {token.name}{" "}
            <span className="text-xs text-zinc-500 font-mono">
              {token.symbol}
            </span>
          </h1>
          <div className="flex gap-4 font-mono text-[10px] text-zinc-400 border-l border-zinc-800 pl-4">
            <div>
              24H VOL:{" "}
              <span className="text-zinc-200 font-bold">{token.volume24h}</span>
            </div>
            <div>
              MKT CAP:{" "}
              <span className="text-zinc-200 font-bold">{token.marketCap}</span>
            </div>
          </div>
        </div>
        <div
          className={`font-mono text-sm font-bold ${token.isPositive ? "text-emerald-400" : "text-rose-500"}`}
        >
          {token.price} ({token.change})
        </div>
      </div>

      <div className="p-4 h-64 shrink-0">
        <div className="w-full h-full border border-dashed border-zinc-800 bg-[#050507]/60 rounded-xl flex flex-col items-center justify-center p-4 text-center font-mono relative overflow-hidden">
          <div className="text-xs text-zinc-400 font-bold">
            Dynamic WebSocket Chart Hook Active
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 max-w-xs truncate">
            ADDR: {address}
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end gap-1 opacity-20">
            {Array.from({ length: 42 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-500 rounded-t"
                style={{
                  height: `${(Math.sin(i * 0.5) * 40 + 50).toFixed(2)}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 border-t border-zinc-800/60 divide-x divide-zinc-800/60 font-mono text-xs">
        <div className="flex flex-col h-full">
          <div className="p-2.5 bg-[#050507] border-b border-zinc-800/60 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            Top Supply Holders
          </div>
          <div className="flex-1 p-2 space-y-1.5 overflow-y-auto">
            <div className="flex justify-between p-1 bg-zinc-950 rounded border border-zinc-900/60 text-[11px]">
              <span className="text-indigo-400 font-bold">
                Raydium Authority Pool
              </span>
              <span>4.12%</span>
            </div>
            <div className="flex justify-between p-1 bg-zinc-950 rounded border border-zinc-900/60 text-[11px]">
              <span className="text-zinc-400">0x9fA2...3a81</span>
              <span>1.85%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="p-2.5 bg-[#050507] border-b border-zinc-800/60 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            Order Book Stream
          </div>
          <div className="flex-1 p-2 space-y-1.5 overflow-y-auto">
            <div className="flex justify-between p-1 bg-zinc-950 rounded border border-zinc-900/60 text-[11px]">
              <span className="text-emerald-400 font-bold">BUY 14.5 SOL</span>
              <span className="text-zinc-500">1s ago</span>
            </div>
            <div className="flex justify-between p-1 bg-zinc-950 rounded border border-zinc-900/60 text-[11px]">
              <span className="text-rose-400 font-bold">SELL 4.2 SOL</span>
              <span className="text-zinc-500">4s ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
