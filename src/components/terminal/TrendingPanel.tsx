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
    <aside className="w-72 border-r border-zinc-800/80 bg-[#050507] flex flex-col shrink-0">
      <div className="p-3 border-b border-zinc-800/60 bg-[#09090b]">
        <h2 className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
          🔥 Trending Momentum
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto divide-y divide-zinc-900">
        {tokens.map((token) => {
          // Mock address mapping matching pattern requirements
          const mockAddress =
            token.symbol === "$SOL"
              ? "solana-native"
              : `${token.symbol.toLowerCase()}-pump-addr`;
          const isActive = activeAddress === mockAddress;

          return (
            <div
              key={token.symbol}
              onClick={() => router.push(`/tokens/solana/${mockAddress}`)}
              className={`p-3 flex items-center justify-between text-xs transition-all cursor-pointer ${isActive ? "bg-zinc-900 border-l-2 border-emerald-500" : "hover:bg-zinc-900/40"}`}
            >
              <div>
                <div className="font-bold text-zinc-200">{token.symbol}</div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  {token.name}
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-zinc-300 font-semibold">{token.price}</div>
                <span
                  className={`text-[10px] ${token.isPositive ? "text-emerald-500" : "text-rose-500"}`}
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
