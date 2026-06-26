import TerminalHeader from "@/components/terminal/TerminalHeader";
import TrendingPanel from "@/components/terminal/TrendingPanel";
import ChartPanel from "@/components/terminal/ChartPanel";
import OrderFormPanel from "@/components/terminal/OrderFormPanel";
import DesktopOnly from "@/components/responsive/DesktopOnly";

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
      <div className="lg:hidden">
        <DesktopOnly />
      </div>

      <div className="hidden lg:block">
        <TerminalHeader chain={chain} />

        <div className="flex flex-1 h-[calc(100vh-86px)] gap-2 mx-2">
          <TrendingPanel chain={chain} activeAddress={address} />
          <ChartPanel chain={chain} address={address} />
          <OrderFormPanel chain={chain} address={address} />
        </div>
      </div>
    </main>
  );
}
