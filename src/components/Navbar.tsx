"use client";

import Logo from "./Logo";
import NavButton from "./NavButton";
import AppStoreBadge from "./AppStoreBadge";

import { useAuthTrigger } from "@/hooks/useAuthTrigger";
import { LoginRedirectToken } from "@/types/token";

interface NavbarProps {
  defaultToken?: LoginRedirectToken;
  isLoading?: boolean;
}

export default function Navbar({
  defaultToken,
  isLoading = false,
}: NavbarProps) {
  const { login, isReady } = useAuthTrigger({
    defaultToken,
  });

  return (
    <header className="w-full h-20 backdrop-blur-md bg-chad-bg/80 px-6 xl:px-12 flex items-center justify-between transition-all select-none">
      <Logo />
      <div className="flex items-center gap-3">
        <AppStoreBadge platform="apple" />
        <AppStoreBadge platform="google" />
        <NavButton
          label="Login"
          disabled={!isReady || isLoading || !defaultToken}
          onClick={login}
        />
      </div>
    </header>
  );
}
