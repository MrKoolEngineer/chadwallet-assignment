"use client";

import { useAuthTrigger } from "@/hooks/useAuthTrigger";
import Logo from "../Logo";

// interface TerminalHeaderProps {
//   chain: string;
// }

export default function TerminalHeader() {
  const { isAuthenticated, logout } = useAuthTrigger();

  return (
    <header className="h-13 pr-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      {isAuthenticated && (
        <button
          onClick={logout}
          type="button"
          className="group text-xs font-mono text-amber-500/80 hover:text-chad-green border border-amber-500/30 hover:border-chad-green bg-chad-bg/50 px-3 py-1 rounded uppercase tracking-wider transition-all duration-200 ease-in-out cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.05)] hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] select-none focus:outline-none"
        >
          Logout
        </button>
      )}
    </header>
  );
}
