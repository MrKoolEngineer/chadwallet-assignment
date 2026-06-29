"use client";

import { memo } from "react";
import { Settings2 } from "lucide-react";

import { QUICK_AMOUNTS } from "./constants";

interface QuickAmountsProps {
  onSelect: (amount: number) => void;
  onSettingsClick?: () => void;
}

function QuickAmounts({ onSelect, onSettingsClick }: QuickAmountsProps) {
  return (
    <div className="flex items-center gap-2 justify-between">
      {QUICK_AMOUNTS.map((amount) => (
        <button
          key={amount}
          type="button"
          onClick={() => onSelect(amount)}
          className="
            flex
            h-8

            items-center
            justify-center

            rounded-lg

            bg-chad-surface

            px-3
            py-1

            text-sm
            font-bold
            text-chad-text

            transition-all
            duration-150

            hover:bg-white/5
            active:scale-[0.98]
          "
        >
          ${amount}
        </button>
      ))}

      <button
        type="button"
        onClick={onSettingsClick}
        className="
          ml-auto

          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-lg

          text-chad-text-tertiary

          transition-colors
          duration-150

          hover:text-chad-text
        "
      >
        <Settings2 size={16} />
      </button>
    </div>
  );
}

export default memo(QuickAmounts);
