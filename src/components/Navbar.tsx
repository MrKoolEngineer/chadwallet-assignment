"use client";

import React from "react";

interface NavbarProps {
  onLogin: () => void;
}

export default function Navbar({ onLogin }: NavbarProps) {
  return (
    <header className="w-full h-20 bg-[#020204]/60 backdrop-blur-md border-b border-zinc-900/40 px-6 xl:px-12 flex items-center justify-between transition-all select-none">
      {/* 1. Left Side: Brand Identity */}
      <div className="flex items-center gap-1 cursor-pointer group">
        <span className="text-xl font-black tracking-tighter text-emerald-500 transition-colors group-hover:text-emerald-400">
          CHAD
        </span>
        <span className="text-xl font-black tracking-tighter text-white">
          WALLET
        </span>
      </div>

      {/* 2. Right Side: App Store Badges + Clean Action Trigger */}
      <div className="flex items-center gap-3">
        {/* iOS App Store Badge */}
        <a
          href="https://apps.apple.com/us/app/chadwallet/id6757367474"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/60 rounded-xl px-3.5 py-1.5 transition-all text-left group"
        >
          {/* Apple Icon */}
          <svg
            className="w-4 h-4 fill-zinc-300 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12.152 6.896c-.494 0-1.487-.604-2.585-.604-1.439 0-2.766.822-3.504 2.112-1.487 2.593-.38 6.425 1.054 8.502.705 1.015 1.536 2.152 2.634 2.112 1.047-.042 1.446-.68 2.713-.68 1.258 0 1.625.68 2.723.657 1.116-.02 1.841-1.023 2.531-2.036.804-1.173 1.135-2.304 1.156-2.364-.021-.01-2.222-.857-2.243-3.398-.021-2.122 1.721-3.14 1.802-3.193-1-.144-2.062-.258-3.355-.258zm2.463-3.64c.642-.782 1.074-1.864.953-2.948-.922.037-2.04.613-2.702 1.391-.563.645-1.055 1.745-.923 2.805 1.03.082 2.03-.466 2.672-1.248z" />
          </svg>
          <div className="flex flex-col font-sans">
            <span className="text-[8px] uppercase tracking-wide text-zinc-500 font-bold leading-none">
              Download on the
            </span>
            <span className="text-xs font-bold text-zinc-200 leading-tight">
              App Store
            </span>
          </div>
        </a>

        {/* Android Google Play Badge */}
        <a
          href="https://play.google.com/store/apps/details?id=xyz.chadwallet.www"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/60 rounded-xl px-3.5 py-1.5 transition-all text-left group"
        >
          {/* Google Play Play-Icon */}
          <svg
            className="w-4 h-4 fill-zinc-300 group-hover:fill-white transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M3.609 1.814L13.783 12 3.609 22.186c-.183-.173-.294-.421-.294-.702V2.516c0-.281.111-.529.294-.702zm11.296 9.06l3.111-3.111L4.857 2.47c-.03-.016-.062-.021-.095-.032l10.143 8.436zm4.183 1.126l-3.045-3.045-1.138 1.138 1.138 1.138 3.045-3.045c.23-.23.23-.604 0-.834zM4.762 21.562c.033-.011.065-.016.095-.032l13.159-5.293-3.111-3.111-10.143 8.436z" />
          </svg>
          <div className="flex flex-col font-sans">
            <span className="text-[8px] uppercase tracking-wide text-zinc-500 font-bold leading-none">
              GET IT ON
            </span>
            <span className="text-xs font-bold text-zinc-200 leading-tight">
              Google Play
            </span>
          </div>
        </a>

        {/* Action Trigger Button */}
        <button
          onClick={onLogin}
          className="bg-zinc-100 text-zinc-950 font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-zinc-200 active:scale-97 transition-all cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
        >
          Login
        </button>
      </div>
    </header>
  );
}
