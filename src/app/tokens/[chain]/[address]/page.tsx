import TerminalHeader from "@/components/terminal/TerminalHeader";
import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import OrderFormPanel from "@/components/terminal/OrderFormPanel";

interface PageProps {
  params: Promise<{
    chain: string;
    address: string;
  }>;
}

export default async function TradingTerminalPage({ params }: PageProps) {
  const { chain, address } = await params;

  return (
    <main>
      <TerminalHeader chain={chain} />
      <div className="flex flex-1 h-[calc(100vh-56px)]">
        <TrendingPanel chain={chain} activeAddress={address} />
        <ChartPanel chain={chain} address={address} />
        <OrderFormPanel chain={chain} address={address} />
      </div>
    </main>
  );
}
