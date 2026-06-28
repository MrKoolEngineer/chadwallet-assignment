"use client";

import Logo from "@/components/Logo";
import AppStoreBadge from "@/components/AppStoreBadge";

export default function DesktopOnly() {
  return (
    <div className="min-h-screen bg-chad-bg flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-chad-border bg-chad-surface p-8 text-center shadow-xl">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-black text-white">
            Desktop Experience Recommended
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            ChadWallet Trading Terminal is optimized for desktop devices to
            provide the best charting and trading experience.
          </p>
        </div>

        <div className="space-y-3">
          <AppStoreBadge platform="apple" />

          <AppStoreBadge platform="google" />
        </div>

        <div className="mt-8 rounded-xl border border-chad-border bg-chad-bg p-4">
          <p className="text-xs text-slate-500">
            Open this page on a desktop browser to access the complete trading
            terminal.
          </p>
        </div>
      </div>
    </div>
  );
}
