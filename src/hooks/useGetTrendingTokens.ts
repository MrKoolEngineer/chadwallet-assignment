import { useQuery } from "@tanstack/react-query";
import { getTrendingTokens } from "@/services/birdeye";

interface UseGetTrendingTokensOptions {
  chain: string;
  refetchInterval?: number | false;
}

export function useGetTrendingTokens({
  chain,
  refetchInterval = 1000 * 60 * 3, // Default to 3 minutes
}: UseGetTrendingTokensOptions) {
  return useQuery({
    queryKey: ["birdeye", "trending", chain],
    queryFn: () => getTrendingTokens(chain),
    staleTime: 1000 * 60 * 3, // Consider data "fresh" for 3 minutes
    gcTime: 1000 * 60 * 5, // Keep in garbage collection memory for 5 minutes
    refetchInterval, // Only poll the network once every 3 minutes
    refetchOnWindowFocus: false, // Don't spam the API just because the user clicked back onto the tab
    enabled: !!chain,
  });
}
