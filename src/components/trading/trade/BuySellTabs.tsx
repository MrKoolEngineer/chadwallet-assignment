"use client";

interface BuySellTabsProps {
  side: "buy" | "sell";
  onChange: (side: "buy" | "sell") => void;
  disabled?: boolean;
}

export default function BuySellTabs({
  side,
  onChange,
  disabled = false,
}: BuySellTabsProps) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange("buy")}
        disabled={disabled}
        className={`
          flex-1
          rounded-lg
          px-4
          py-2
          text-base
          font-bold
          transition-all
          duration-200

          ${
            side === "buy"
              ? "bg-chad-green/15 text-chad-green"
              : "bg-chad-surface text-slate-400 hover:bg-white/5"
          }
        `}
      >
        Buy
      </button>

      <button
        type="button"
        onClick={() => onChange("sell")}
        disabled={disabled}
        className={`
          flex-1
          rounded-lg
          px-4
          py-2
          text-base
          font-bold
          transition-all
          duration-200

          ${
            side === "sell"
              ? "bg-chad-red/15 text-chad-red"
              : "bg-chad-surface text-slate-400 hover:bg-white/5"
          }

          disabled:cursor-not-allowed
          disabled:opacity-50
        `}
      >
        Sell
      </button>
    </div>
  );
}
