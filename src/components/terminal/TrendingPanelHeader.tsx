export default function TrendingPanelHeader() {
  return (
    <div className="flex items-center rounded-t-xl bg-chad-surface px-3 py-2.5 shrink-0">
      <div className="relative flex-1 min-w-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-sm font-medium">
          <button className="flex shrink-0 items-center gap-1 whitespace-nowrap text-chad-text transition-colors hover:text-white">
            <span className="relative flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-chad-green" />
            </span>

            <span>Trending</span>
          </button>

          <div className="h-4 w-px bg-white/10" />

          <button className="shrink-0 whitespace-nowrap text-chad-text-secondary transition-colors hover:text-white">
            New
          </button>

          <div className="h-4 w-px bg-white/10" />

          <button className="shrink-0 whitespace-nowrap text-chad-text-secondary transition-colors hover:text-white">
            Top
          </button>

          <div className="h-4 w-px bg-white/10" />

          <button className="shrink-0 whitespace-nowrap text-chad-text-secondary transition-colors hover:text-white">
            Gainers
          </button>
        </div>

        {/* Fade on right */}

        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-chad-surface to-transparent" />
      </div>

      {/* Collapse Button */}

      <button className="ml-2 flex h-7 w-7 items-center justify-center rounded-md text-chad-text-tertiary transition-colors hover:bg-white/5 hover:text-white">
        ❮
      </button>
    </div>
  );
}
