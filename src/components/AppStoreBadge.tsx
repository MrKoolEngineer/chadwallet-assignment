"use client";

interface AppStoreBadgeProps {
  platform: "apple" | "google";
  fullWidth?: boolean;
}

export default function AppStoreBadge({
  platform,
  fullWidth = false,
}: AppStoreBadgeProps) {
  const config = {
    apple: {
      href: "https://apps.apple.com/us/app/chadwallet/id6757367474",
      subText: "Download on the",
      mainText: "App Store",
      viewBox: "0 0 16 21",
      path: (
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
      ),
    },
    google: {
      href: "https://play.google.com/store/apps/details?id=xyz.chadwallet.www",
      subText: "GET IT ON",
      mainText: "Google Play",
      viewBox: "0 0 16 21",
      path: (
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
      ),
    },
  };

  const current = config[platform];

  return (
    <a
      href={current.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group rounded-xl border border-white/10 bg-slate-900/50 transition-all hover:bg-slate-900/90 ${
        fullWidth
          ? "flex w-full justify-start px-6 py-4"
          : "flex items-center gap-3.5 px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-4">
        <svg
          className={`shrink-0 fill-slate-300 transition-colors group-hover:fill-white ${
            fullWidth ? "h-8 w-8" : "h-6 w-6"
          }`}
          viewBox={current.viewBox}
        >
          {current.path}
        </svg>

        <div
          className={`flex flex-col ${fullWidth ? "items-start" : "gap-0.5"}`}
        >
          <span
            className={`font-bold uppercase tracking-wider text-slate-400  ${
              fullWidth ? "text-[11px]" : "text-[10px]"
            }`}
          >
            {current.subText}
          </span>

          <span
            className={`font-extrabold text-slate-100  transition-colors group-hover:text-white ${
              fullWidth ? "text-m mt-1" : "text-sm"
            }`}
          >
            {current.mainText}
          </span>
        </div>
      </div>
    </a>
  );
}
