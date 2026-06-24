"use client";

import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useTradeStore } from "@/store/useTradeStore";

export function useAuthTrigger() {
  const router = useRouter();
  const { authenticated, ready } = usePrivy();
  const { selectedChain, selectedToken, setSelectedTokenData } =
    useTradeStore();

  const { login } = useLogin({
    onComplete: () => {
      router.push(`/tokens/${selectedChain}/${selectedToken}`);
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
      router.push(`/tokens/${selectedChain}/${selectedToken}`);
      return;
    }
    login();
  };

  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/");
      if (setSelectedTokenData) {
        setSelectedTokenData({ symbol: "SOL", chain: "solana" });
      }
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
