"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TokenBanner from "@/components/TokenBanner";

import { useGetTrendingTokens } from "@/hooks/useGetTrendingTokens";
import { DEFAULT_CHAIN } from "@/constants/chain";

export default function Home() {
  const {
    data: tokens = [],
    isLoading,
    isError,
  } = useGetTrendingTokens({
    chain: DEFAULT_CHAIN,
  });

  const defaultToken = tokens.length
    ? {
        ...tokens[0],
        chain: DEFAULT_CHAIN,
      }
    : undefined;

  return (
    <div className="min-h-screen bg-chad-bg text-slate-50 flex flex-col relative overflow-x-hidden select-none antialiased">
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TokenBanner
          tokens={tokens}
          isLoading={isLoading}
          isError={isError}
          direction="forward"
          position="top"
        />
        <Navbar defaultToken={defaultToken} isLoading={isLoading} />
      </div>

      <div className="pt-36 flex-1 flex flex-col">
        <Hero defaultToken={defaultToken} isLoading={isLoading} />
      </div>

      <TokenBanner
        tokens={tokens}
        isLoading={isLoading}
        isError={isError}
        direction="reverse"
        position="bottom"
      />
    </div>
  );
}
