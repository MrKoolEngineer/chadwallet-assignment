"use client";

interface AppStoreBadgeProps {
  platform: "apple" | "google";
}

export default function AppStoreBadge({ platform }: AppStoreBadgeProps) {
  const config = {
    apple: {
      href: "https://apps.apple.com/us/app/chadwallet/id6757367474",
      subText: "Download on the",
      mainText: "App Store",
      path: "M12.152 6.896c-.494 0-1.487-.604-2.585-.604-1.439 0-2.766.822-3.504 2.112-1.487 2.593-.38 6.425 1.054 8.502.705 1.015 1.536 2.152 2.634 2.112 1.047-.042 1.446-.68 2.713-.68 1.258 0 1.625.68 2.723.657 1.116-.02 1.841-1.023 2.531-2.036.804-1.173 1.135-2.304 1.156-2.364-.021-.01-2.222-.857-2.243-3.398-.021-2.122 1.721-3.14 1.802-3.193-1-.144-2.062-.258-3.355-.258zm2.463-3.64c.642-.782 1.074-1.864.953-2.948-.922.037-2.04.613-2.702 1.391-.563.645-1.055 1.745-.923 2.805 1.03.082 2.03-.466 2.672-1.248z",
    },
    google: {
      href: "https://play.google.com/store/apps/details?id=xyz.chadwallet.www",
      subText: "GET IT ON",
      mainText: "Google Play",
      path: "M3.609 1.814L13.783 12 3.609 22.186c-.183-.173-.294-.421-.294-.702V2.516c0-.281.111-.529.294-.702zm11.296 9.06l3.111-3.111L4.857 2.47c-.03-.016-.062-.021-.095-.032l10.143 8.436zm4.183 1.126l-3.045-3.045-1.138 1.138 1.138 1.138 3.045-3.045c.23-.23.23-.604 0-.834zM4.762 21.562c.033-.011.065-.016.095-.032l13.159-5.293-3.111-3.111-10.143 8.436z",
    },
  };

  const current = config[platform];

  return (
    <a
      href={current.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:flex items-center gap-2 bg-chad-surface/60 hover:bg-chad-surface/90 border border-chad-border rounded-xl px-3.5 py-1.5 transition-all text-left group"
    >
      <svg
        className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors"
        viewBox="0 0 24 24"
      >
        <path d={current.path} />
      </svg>
      <div className="flex flex-col font-sans">
        <span className="text-[8px] uppercase tracking-wide text-slate-500 font-bold leading-none">
          {current.subText}
        </span>
        <span className="text-xs font-bold text-slate-300 leading-tight group-hover:text-white transition-colors">
          {current.mainText}
        </span>
      </div>
    </a>
  );
}
