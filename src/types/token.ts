export interface LoginRedirectToken {
  address: string;
  symbol: string;
  name: string;
  chain: string;
}

export interface TrendingToken {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  price: number;
  rank: number;
  liquidity: number;
  logoURI?: string;
  volume24hUSD: number;
  volume24hChangePercent: number;
  price24hChangePercent: number;
  fdv: number;
  marketcap: number;
}

export interface TokenStats {
  address: string;
  symbol: string;
  name: string;
  logoURI?: string;

  price: number;
  marketCap: number;
  liquidity: number;
  v24hUSD: number;
  price24hChangePercent: number;
}
