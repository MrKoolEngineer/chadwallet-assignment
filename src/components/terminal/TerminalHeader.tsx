"use client";

import Link from "next/link";
import { useAuthTrigger } from "@/hooks/useAuthTrigger";

interface TerminalHeaderProps {
  chain: string;
}

export default function TerminalHeader({ chain }: TerminalHeaderProps) {
  const { logout } = useAuthTrigger();

  return (
    <header className="h-14 border-b border-chad-border bg-chad-bg px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-md font-black tracking-tighter text-chad-green hover:opacity-80 transition-opacity"
        >
          Chad<span className="text-white">Wallet</span>
        </Link>
        <div className="h-4 w-px bg-chad-border" />
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
          <div>
            NETWORK:
            <span className="text-chad-green font-bold uppercase">{chain}</span>
          </div>
          <div>
            STATUS: <span className="text-slate-300 font-bold">CONNECTED</span>
          </div>
        </div>
      </div>

      <button
        onClick={logout}
        type="button"
        className="group text-xs font-mono text-amber-500/80 hover:text-chad-green border border-amber-500/30 hover:border-chad-green bg-chad-bg/50 px-3 py-1 rounded uppercase tracking-wider transition-all duration-200 ease-in-out cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.05)] hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] select-none focus:outline-none"
      >
        Logout
      </button>
    </header>
  );
}
