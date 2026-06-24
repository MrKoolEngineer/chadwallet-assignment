export {};

declare global {
  interface Token {
    symbol: string;
    name: string;
    price: string;
    change: string;
    isPositive: boolean;
    volume24h: string;
    marketCap: string;
  }

  interface TradeStreamItem {
    id: string;
    type: "BUY" | "SELL";
    amountSol: string;
    timestamp: string;
  }

  interface SupplyHolder {
    id: string;
    name: string;
    address: string;
    percentage: string;
  }
}
