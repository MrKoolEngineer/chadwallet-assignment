"use client";

import Logo from "./Logo";
import NavButton from "./NavButton";
import AppStoreBadge from "./AppStoreBadge";
import { useAuthTrigger } from "@/hooks/useAuthTrigger";

export default function Navbar() {
  const { login } = useAuthTrigger();

  return (
    <header className="w-full h-20 backdrop-blur-md bg-chad-bg/80 px-6 xl:px-12 flex items-center justify-between transition-all select-none">
      <Logo />
      <div className="flex items-center gap-3">
        <AppStoreBadge platform="apple" />
        <AppStoreBadge platform="google" />
        <NavButton label="Login" onClick={login} />
      </div>
    </header>
  );
}
