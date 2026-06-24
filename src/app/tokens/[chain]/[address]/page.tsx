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
      (t) => t.symbol.toLowerCase() === address.replace("-pump-addr", ""),
    ) || TOKEN_REGISTRY[0];

  return (
    <main className="h-screen w-screen bg-chad-bg text-slate-50 flex flex-col overflow-hidden select-none animate-fade-in antialiased">
      <header className="h-14 border-b border-chad-border bg-chad-bg px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-md font-black tracking-tighter text-chad-green hover:opacity-80 transition-opacity"
          >
            Chad<span className="text-white">Wallet</span>
          </Link>
          <div className="h-4 w-px bg-chad-border" />
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
            <div>
              NETWORK:
              <span className="text-chad-green font-bold uppercase">
                {chain}
              </span>
            </div>
            <div>
              STATUS:
              <span className="text-slate-300 font-bold">CONNECTED</span>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
        >
          [ Disconnect ]
        </Link>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <TrendingPanel tokens={TOKEN_REGISTRY} activeAddress={address} />
        <ChartPanel token={activeToken} address={address} />
        <OrderFormPanel token={activeToken} />
      </div>
    </main>
  );
}
