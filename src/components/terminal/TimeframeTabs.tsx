"use client";

import { ChartInterval } from "@/types/chart";
import { CHART_INTERVALS } from "@/constants/chart";

interface TimeframeTabsProps {
  interval: ChartInterval;
  onChange: (interval: ChartInterval) => void;
}

export default function TimeframeTabs({
  interval,
  onChange,
}: TimeframeTabsProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-chad-border bg-chad-surface/20">
      {CHART_INTERVALS.map(({ label, value }) => {
        const active = value === interval;

        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
              active
                ? "bg-chad-green text-black"
                : "text-slate-400 hover:text-white hover:bg-chad-surface"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
