"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TokenBanner from "@/components/TokenBanner";
import AuthModal from "@/components/AuthModal";
import { TOKEN_REGISTRY } from "@/data/mockTokens";

export default function Home() {
  const router = useRouter();
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  // Fires when a registration step resolves successfully
  const handleAuthSuccess = () => {
    setIsAuthOpen(false);
    router.push("/tokens/solana/solana-native"); // Relocate route seamlessly inside workspace
  };

  return (
    <div className="min-h-screen bg-chad-bg text-slate-50 flex flex-col relative overflow-x-hidden select-none antialiased">
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TokenBanner
          tokens={TOKEN_REGISTRY}
          onTokenClick={() => setIsAuthOpen(true)}
          direction="forward"
          position="top"
        />
        <Navbar onLogin={() => setIsAuthOpen(true)} />
      </div>

      <div className="pt-36 flex-1 flex flex-col">
        <Hero onStartTrading={() => setIsAuthOpen(true)} />
      </div>

      <TokenBanner
        tokens={TOKEN_REGISTRY}
        onTokenClick={() => setIsAuthOpen(true)}
        direction="reverse"
        position="bottom"
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
