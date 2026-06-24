"use client";

import { useRouter } from "next/navigation";

interface TrendingPanelProps {
  tokens: Token[];
  activeAddress: string;
}

export default function TrendingPanel({
  tokens,
  activeAddress,
}: TrendingPanelProps) {
  const router = useRouter();

  return (
    <aside className="w-72 border-r border-chad-border bg-chad-bg flex flex-col shrink-0">
      <div className="p-3 border-b border-chad-border bg-chad-surface/50 flex items-center justify-between">
        <h2 className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
          🔥 Trending Momentum
        </h2>
        <span className="text-[9px] text-chad-green font-mono bg-chad-green/10 px-1.5 py-0.5 rounded">
          Live
        </span>
      </div>
      <div className="flex-1 overflow-y-auto divide-y divide-chad-border">
        {tokens.map((token) => {
          const mockAddress = `${token.symbol.toLowerCase()}-pump-addr`;
          const isActive = activeAddress === mockAddress;

          return (
            <div
              key={token.symbol}
              onClick={() => router.push(`/tokens/solana/${mockAddress}`)}
              className={`p-3 flex items-center justify-between text-xs transition-all cursor-pointer ${isActive ? "bg-chad-surface border-l-2 border-chad-green" : "hover:bg-chad-surface/40"}`}
            >
              <div>
                <div className="font-extrabold text-slate-200">
                  {token.symbol}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {token.name}
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-slate-300 font-bold">{token.price}</div>
                <span
                  className={`text-[10px] ${token.isPositive ? "text-chad-green" : "text-chad-red"}`}
                >
                  {token.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
