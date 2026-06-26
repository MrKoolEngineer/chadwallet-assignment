export interface TokenTrade {
  tx_type: string;
  tx_hash: string;
  block_unix_time: number;

  volume: number;
  volume_usd: number;

  owner: string;
  source: string;
  side: "buy" | "sell";

  price_pair: number;

  from: {
    symbol: string;
    address: string;
    ui_amount: number;
    price: number;
  };

  to: {
    symbol: string;
    address: string;
    ui_amount: number;
    price: number;
  };
}

export interface TokenTradesResponse {
  items: TokenTrade[];
  has_next: boolean;
}
