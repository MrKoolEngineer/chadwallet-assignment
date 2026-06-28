"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import TokenBanner from "@/components/TokenBanner";
import TradeAnywhere from "./TradeAnywhere";
import Features from "./Features";
import CTASection from "./CTASection";
import Footer from "./Footer";

import { useGetTrendingTokens } from "@/hooks/useGetTrendingTokens";
import { DEFAULT_CHAIN } from "@/constants/chain";

export default function DesktopLanding() {
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
    <main className="relative min-h-screen overflow-x-hidden bg-chad-bg text-slate-50 antialiased select-none">
      <div className="fixed inset-x-0 top-0 z-50">
        <TokenBanner
          tokens={tokens}
          isLoading={isLoading}
          isError={isError}
          direction="forward"
          position="top"
        />
      </div>
      <Navbar defaultToken={defaultToken} isLoading={isLoading} />

      <Hero />
      <TradeAnywhere />
      <Features />
      <CTASection />

      <TokenBanner
        tokens={tokens}
        isLoading={isLoading}
        isError={isError}
        direction="reverse"
        position="bottom"
      />

      <Footer />
    </main>
  );
}
