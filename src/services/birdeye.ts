import { birdeyeApi } from "./api";

import { TrendingToken, TokenStats } from "@/types/token";
import {
  BirdeyeApiResponse,
  BirdeyeTokenOverviewPayload,
  BirdeyeTrendingDataPayload,
  GetTokenStatsOptions,
} from "@/types/birdeye";

import { OHLCVResponse, ChartInterval } from "@/types/chart";
import { TokenHolderResponse } from "@/types/holder";
import { TokenTradesResponse } from "@/types/trade";

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

export interface GetTokenOHLCVParams {
  chain: string;
  address: string;
  type?: ChartInterval;
  currency?: "usd" | "native";
  countLimit?: number;
}

export const getTokenOHLCV = async ({
  chain,
  address,
  type = "15m",
  currency = "usd",
  countLimit = 200,
}: GetTokenOHLCVParams): Promise<OHLCVResponse> => {
  try {
    const response = await birdeyeApi.get<{
      success: boolean;
      data: OHLCVResponse;
    }>("/defi/v3/ohlcv", {
      headers: {
        "x-chain": chain,
      },
      params: {
        address,
        type,
        currency,
        mode: "count",
        count_limit: countLimit,
        time_to: Math.floor(Date.now() / 1000),
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error in getTokenOHLCV:", error);
    throw error;
  }
};

interface GetTokenHoldersParams {
  chain: string;
  address: string;
}

export async function getTokenHolders({
  chain,
  address,
}: GetTokenHoldersParams): Promise<TokenHolderResponse> {
  const response = await birdeyeApi.get("/defi/v3/token/holder", {
    params: {
      address,
      offset: 0,
      limit: 10,
      ui_amount_mode: "scaled",
    },
    headers: {
      "x-chain": chain,
    },
  });

  return response.data.data;
}

interface GetTokenTradesParams {
  chain: string;
  address: string;
}

export async function getTokenTrades({
  chain,
  address,
}: GetTokenTradesParams): Promise<TokenTradesResponse> {
  const response = await birdeyeApi.get("/defi/v3/token/txs", {
    params: {
      address,
      offset: 0,
      limit: 20,
      sort_by: "block_unix_time",
      sort_type: "desc",
      tx_type: "swap",
      ui_amount_mode: "scaled",
    },

    headers: {
      "x-chain": chain,
    },
  });

  return response.data.data;
}
