"use client";

import { getTokenHolders } from "@/services/birdeye";
import { useQuery } from "@tanstack/react-query";

interface Options {
  chain: string;
  address: string;
}

export function useGetTokenHolders({ chain, address }: Options) {
  return useQuery({
    queryKey: ["token-holders", chain, address],

    queryFn: () =>
      getTokenHolders({
        chain,
        address,
      }),

    staleTime: 60_000,

    placeholderData: (previousData) => previousData,
  });
}
