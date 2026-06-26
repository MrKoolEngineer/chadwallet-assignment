import { TrendingToken } from "@/types/token";

export interface BirdeyeTrendingDataPayload {
  updateUnixTime: number;
  updateTime: string;
  tokens: TrendingToken[];
  total: number;
}

export interface BirdeyeApiResponse<T> {
  success: boolean;
  data: T;
}

export interface BirdeyeApiResponse<T> {
  success: boolean;
  data: T;
}

export interface BirdeyeTokenOverviewPayload {
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

export interface BirdeyeApiResponse<T> {
  success: boolean;
  data: T;
}

export interface GetTokenStatsOptions {
  chain?: string;
  address: string;
}
