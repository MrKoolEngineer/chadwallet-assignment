"use client";

import AppStoreBadge from "./AppStoreBadge";
import { useAuthTrigger } from "@/hooks/useAuthTrigger";

export default function Navbar() {
  const { login } = useAuthTrigger();

  return (
    <header className="w-full h-20 backdrop-blur-md bg-chad-bg/80 px-6 xl:px-12 flex items-center justify-between transition-all select-none">
      <div className="flex items-center gap-2 cursor-pointer group">
        <img
          src="/images/logo.svg"
          alt="ChadWallet Logo"
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
        />
        <div className="flex items-center gap-0.5 text-xl font-black tracking-tighter">
          <span className="text-chad-green">Chad</span>
          <span className="text-white">Wallet</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <AppStoreBadge platform="apple" />
        <AppStoreBadge platform="google" />
        <button
          onClick={login}
          className="bg-chad-green text-chad-bg font-black text-xs px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-97 transition-all cursor-pointer shadow-[0_4px_16px_rgba(16,216,118,0.2)]"
        >
          Login
        </button>
      </div>
    </header>
  );
}
