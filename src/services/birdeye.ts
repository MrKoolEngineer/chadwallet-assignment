import { birdeyeApi } from "./api";

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

export const getTrendingTokens = async (
  chain: string = "solana",
  limit: number = 20,
): Promise<TrendingToken[]> => {
  try {
    const response = await birdeyeApi.get<
      BirdeyeApiResponse<BirdeyeTrendingDataPayload>
    >("/defi/token_trending", {
      headers: { "x-chain": chain },
      params: {
        sort_by: "rank",
        interval: "24h",
        sort_type: "asc",
        offset: 0,
        limit,
      },
    });

    const envelope = response.data;

    return envelope?.data?.tokens || [];
  } catch (error) {
    console.error("Error in getTrendingTokens service:", error);
    throw error;
  }
};
