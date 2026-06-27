/* eslint-disable @next/next/no-img-element */

"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 cursor-pointer group select-none">
      <img
        src="/images/logo.svg"
        alt="ChadWallet Logo"
        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
      />
      <div className="flex items-center gap-0.5 text-2xl font-black tracking-tighter">
        <span className="text-chad-green">Chad</span>
        <span className="text-white">Wallet</span>
      </div>
    </div>
  );
}
