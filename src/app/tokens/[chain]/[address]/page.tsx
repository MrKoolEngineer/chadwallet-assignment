import TradingTerminal from "@/components/terminal/TradingTerminal";

interface PageProps {
  params: Promise<{
    chain: string;
    address: string;
  }>;
}

export default async function TradingTerminalPage({ params }: PageProps) {
  const { chain, address } = await params;

  return <TradingTerminal chain={chain} address={address} />;
}
