"use client";

import { useRouter } from "next/navigation";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";

import { LoginRedirectToken } from "@/types/token";

interface UseAuthTriggerProps {
  defaultToken?: LoginRedirectToken | null;
}

export function useAuthTrigger({ defaultToken }: UseAuthTriggerProps = {}) {
  const router = useRouter();

  const { authenticated, ready } = usePrivy();

  const navigateToTrading = () => {
    if (!defaultToken) return;

    router.push(
      `/tokens/${defaultToken.chain}/${defaultToken.address}?timeFrame=1D`,
    );
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
      router.push("/");
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
