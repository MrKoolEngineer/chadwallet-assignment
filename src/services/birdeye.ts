import { birdeyeApi } from "./api";

import { TrendingToken, TokenStats } from "@/types/token";
import {
  BirdeyeApiResponse,
  BirdeyeTokenOverviewPayload,
  BirdeyeTrendingDataPayload,
  GetTokenStatsOptions,
} from "@/types/birdeye";
import { DEFAULT_CHAIN } from "@/constants/chain";

export const getTrendingTokens = async (
  chain: string = DEFAULT_CHAIN,
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

export const getTokenStats = async ({
  chain = DEFAULT_CHAIN,
  address,
}: GetTokenStatsOptions): Promise<TokenStats> => {
  try {
    const response = await birdeyeApi.get<
      BirdeyeApiResponse<BirdeyeTokenOverviewPayload>
    >("/defi/token_overview", {
      headers: {
        "x-chain": chain,
      },
      params: {
        address,
      },
    });

    const token = response.data.data;

    return {
      address: token.address,
      symbol: token.symbol,
      name: token.name,
      logoURI: token.logoURI,

      price: token.price,
      marketCap: token.marketCap,
      liquidity: token.liquidity,
      v24hUSD: token.v24hUSD,
      price24hChangePercent: token.price24hChangePercent,
    };
  } catch (error) {
    console.error("Error fetching token stats:", error);
    throw error;
  }
};
