"use client";

import React, { useEffect } from "react";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { useAuthStore } from "@/store/useAuthStore";

// Separate internal tracker to sync hooks neatly into Zustand store
function PrivyToZustandSync() {
  const { ready, authenticated, user } = usePrivy();
  const setAuthFlags = useAuthStore((state) => state.setAuthFlags);

  useEffect(() => {
    if (ready) {
      setAuthFlags({
        isReady: true,
        isAuthenticated: authenticated,
        walletAddress: user?.wallet?.address || null,
      });
    }
  }, [ready, authenticated, user, setAuthFlags]);

  return null;
}

export default function PrivyAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cm_your_id";

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ["google", "apple", "wallet"],
        appearance: {
          theme: "dark",
          accentColor: "#10D876",
          logo: "/images/logo.svg",
        },
        embeddedWallets: {
          solana: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      <PrivyToZustandSync />
      {children}
    </PrivyProvider>
  );
}
