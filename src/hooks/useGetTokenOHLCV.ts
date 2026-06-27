import { useQuery } from "@tanstack/react-query";

import { getTokenOHLCV } from "@/services/birdeye";
import { ChartInterval } from "@/types/chart";

interface UseGetTokenOHLCVOptions {
  chain: string;
  address: string;
  interval?: ChartInterval;
  currency?: "usd" | "native";
  countLimit?: number;
  refetchInterval?: number | false;
}

export function useGetTokenOHLCV({
  chain,
  address,
  interval = "15m",
  currency = "usd",
  countLimit = 100,
  refetchInterval = 30000,
}: UseGetTokenOHLCVOptions) {
  return useQuery({
    queryKey: [
      "token",
      "ohlcv",
      chain,
      address,
      interval,
      currency,
      countLimit,
    ],

    queryFn: () =>
      getTokenOHLCV({
        chain,
        address,
        type: interval,
        currency,
        countLimit,
      }),

    enabled: !!chain && !!address,

    staleTime: 10_000,

    gcTime: 5 * 60 * 1000,

    refetchInterval,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
}
