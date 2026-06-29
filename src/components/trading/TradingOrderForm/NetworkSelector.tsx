"use client";

import { memo } from "react";
import { Info } from "lucide-react";

interface NetworkSelectorProps {
  network: string;
  tokenType?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

function NetworkSelector({
  network,
  tokenType = "Token",
  icon,
  onClick,
}: NetworkSelectorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-xl px-2 py-1 text-sm transition-colors duration-200 hover:bg-white/5"
    >
      <div className="flex items-center gap-2">
        <div
          className="flex h-4 w-4 items-center justify-center shrink-0"
        >
          {icon ?? <div className="h-2.5 w-2.5 rounded-full bg-chad-green" />}
        </div>

        <span className="font-bold text-slate-300">
          {network} {tokenType}
        </span>
      </div>

      <Info
        size={15}
        className="text-slate-500 transition-colors group-hover:text-white"
      />
    </button>
  );
}

export default memo(NetworkSelector);
