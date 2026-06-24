import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import OrderFormPanel from "@/components/terminal/OrderFormPanel";
import TerminalHeader from "@/components/terminal/TerminalHeader"; // 👈 Import new header

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
      <TerminalHeader chain={chain} />

      <div className="flex-1 flex overflow-hidden">
        <TrendingPanel tokens={TOKEN_REGISTRY} activeAddress={address} />
        <ChartPanel token={activeToken} address={address} />
        <OrderFormPanel token={activeToken} />
      </div>
    </main>
  );
}
