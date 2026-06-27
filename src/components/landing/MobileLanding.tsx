"use client";

import Logo from "@/components/Logo";
import AppStoreBadge from "@/components/AppStoreBadge";
import TokenBanner from "@/components/TokenBanner";

import { DEFAULT_CHAIN } from "@/constants/chain";
import { useGetTrendingTokens } from "@/hooks/useGetTrendingTokens";

export default function MobileLanding() {
  const {
    data: tokens = [],
    isLoading,
    isError,
  } = useGetTrendingTokens({
    chain: DEFAULT_CHAIN,
  });

  return (
    <div className="min-h-screen bg-chad-bg text-slate-50 flex flex-col overflow-hidden">
      {/* Top Banner */}
      <TokenBanner
        tokens={tokens}
        isLoading={isLoading}
        isError={isError}
        direction="forward"
        position="top"
        disableNavigation
      />

      {/* Logo */}
      <header className="flex justify-center py-8">
        <Logo />
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute top-44 w-72 h-72 bg-chad-green/10 rounded-full blur-[120px] pointer-events-none" />

        <h1 className="text-4xl font-black tracking-tight leading-tight text-white">
          Buy & sell
          <br />
          <span className="text-chad-green">trending tokens</span>
        </h1>

        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
          ChadWallet Trading Terminal is optimized for desktop. Download the
          mobile app for the best experience on your phone.
        </p>

        <div className="mt-10 w-full max-w-xs space-y-4">
          <AppStoreBadge platform="apple" fullWidth />

          <AppStoreBadge platform="google" fullWidth />
        </div>
      </main>

      {/* Bottom Banner */}
      <TokenBanner
        tokens={tokens}
        isLoading={isLoading}
        isError={isError}
        direction="reverse"
        position="bottom"
        disableNavigation
      />
    </div>
  );
}
