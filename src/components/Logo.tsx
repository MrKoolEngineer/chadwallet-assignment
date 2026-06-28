/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="ChadWallet Home"
      className="group flex select-none items-center gap-2 text-chad-text"
    >
      <img
        src="/images/logo.svg"
        alt="ChadWallet Logo"
        draggable={false}
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
      />

      <span className="text-2xl font-black tracking-tighter">
        <span className="text-chad-green">Chad</span>
        <span className="text-chad-text">Wallet</span>
      </span>
    </Link>
  );
}
