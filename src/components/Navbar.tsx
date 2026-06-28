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

export default function Navbar({ defaultToken }: NavbarProps) {
  const { login, isReady } = useAuthTrigger({
    defaultToken,
  });

  return (
    <header className="hidden desktop:block absolute top-0 left-0 z-50 w-full">
      <div className="flex h-13 items-center justify-between px-5 pt-3">
        <Logo />

        <div className="flex items-center gap-2">
          <AppStoreBadge platform="apple" />
          <AppStoreBadge platform="google" />

          <NavButton label="Login" disabled={!isReady} onClick={login} />
        </div>
      </div>
    </header>
  );
}
