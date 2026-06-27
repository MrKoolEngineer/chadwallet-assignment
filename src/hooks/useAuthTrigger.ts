"use client";

import { useRouter } from "next/navigation";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";

import { LoginRedirectToken } from "@/types/token";
import { DEFAULT_CHAIN } from "@/constants/chain";

interface UseAuthTriggerProps {
  defaultToken?: LoginRedirectToken | null;
}

// Fallback token used when Trending API is unavailable.
// Replace the address below with whichever token you want
// users to land on by default (SOL, USDC, etc.).
const FALLBACK_TOKEN: LoginRedirectToken = {
  chain: DEFAULT_CHAIN,
  address: "So11111111111111111111111111111111111111112",
  symbol: "SOL",
  name: "Solana",
};

export function useAuthTrigger({ defaultToken }: UseAuthTriggerProps = {}) {
  const router = useRouter();

  const { authenticated, ready } = usePrivy();

  const navigateToTrading = () => {
    const token = defaultToken ?? FALLBACK_TOKEN;

    router.push(`/tokens/${token.chain}/${token.address}?timeFrame=1D`);
  };

  const { login } = useLogin({
    onComplete: () => {
      navigateToTrading();
    },

    onError: (error) => {
      if (error === "exited_auth_flow") {
        console.log("User closed the login modal.");
        return;
      }

      console.error("Privy session connection interrupted:", error);
    },
  });

  const handleAuthAction = () => {
    if (authenticated) {
      navigateToTrading();
      return;
    }

    login();
  };

  const { logout } = useLogout({
    onSuccess: () => {
      console.log("Terminal session terminated cleanly.");
    },
  });

  const handleLogoutWithCatch = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Privy logout lifecycle encountered an error:", error);
    }
  };

  return {
    login: handleAuthAction,
    logout: handleLogoutWithCatch,
    isAuthenticated: authenticated,
    isReady: ready,
  };
}
