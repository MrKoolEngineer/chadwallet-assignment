"use client";

import { useQuery } from "@tanstack/react-query";

import { getTokenTrades } from "@/services/birdeye";

interface Options {
  chain: string;
  address: string;
}

export function useGetTokenTrades({ chain, address }: Options) {
  return useQuery({
    queryKey: ["token-trades", chain, address],

    queryFn: () =>
      getTokenTrades({
        chain,
        address,
      }),

    staleTime: 15_000,

    placeholderData: (previousData) => previousData,
  });
}
