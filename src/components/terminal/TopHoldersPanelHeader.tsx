export default function TopHoldersPanelHeader() {
  return (
    <div className="flex h-10 shrink-0 items-center justify-between rounded-t-lg bg-chad-surface px-3">
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="capitalize text-chad-text font-medium transition-colors hover:text-white"
          >
            Holders
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-px bg-white/10" />

          <button
            type="button"
            disabled
            className="capitalize text-chad-text-tertiary cursor-not-allowed opacity-60"
          >
            Swaps
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-px bg-white/10" />

          <button
            type="button"
            disabled
            className="capitalize text-chad-text-tertiary cursor-not-allowed opacity-60"
          >
            Thesis
          </button>
        </div>
      </div>
    </div>
  );
}
