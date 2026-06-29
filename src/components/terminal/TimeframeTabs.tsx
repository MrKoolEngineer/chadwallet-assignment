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
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        {CHART_INTERVALS.map(({ label, value }) => {
          const active = value === interval;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={`
                rounded-md
                px-3
                py-1

                text-xs
                font-semibold

                transition-colors
                duration-150

                ${
                  active
                    ? "bg-chad-green text-black"
                    : "text-chad-text-secondary hover:bg-chad-surface hover:text-chad-text"
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
