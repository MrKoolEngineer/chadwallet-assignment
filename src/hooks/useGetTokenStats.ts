import { useQuery } from "@tanstack/react-query";

import { getTokenStats } from "@/services/birdeye";

interface UseGetTokenStatsOptions {
  chain: string;
  address: string;
  refetchInterval?: number | false;
}

export function useGetTokenStats({
  chain,
  address,
  refetchInterval = 1000 * 30,
}: UseGetTokenStatsOptions) {
  return useQuery({
    queryKey: ["birdeye", "tokenStats", chain, address],

    queryFn: () =>
      getTokenStats({
        chain,
        address,
      }),

    enabled: !!chain && !!address,

    staleTime: 1000 * 30,

    gcTime: 1000 * 60 * 5,

    refetchInterval,

    refetchOnWindowFocus: false,

    placeholderData: (previousData) => previousData,
  });
}
