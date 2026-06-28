"use client";

import Link from "next/link";

import { FOOTER_SECTIONS } from "./data/footer";

export default function Footer() {
  return (
    <footer className="m-0 w-full px-10 pt-8 pb-12 desktop:flex desktop:flex-row desktop:items-start desktop:justify-between">
      {/* Left */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            aria-label="ChadWallet Home"
            className="flex items-center"
          >
            <h2 className="text-[44px] font-black tracking-tighter">
              <span className="text-chad-green">Chad</span>
              <span className="text-white">Wallet</span>
            </h2>
          </Link>

          <p className="text-2xl leading-7 tracking-tighter text-chad-text-secondary">
            where traders become legends.
          </p>
        </div>

        <span className="hidden text-chad-text-tertiary desktop:block">
          © 2026 ChadWallet Inc.
        </span>
      </div>

      {/* Right */}
      <div className="mt-10 flex flex-col items-start gap-8 desktop:mt-0 desktop:flex-row desktop:gap-2">
        {FOOTER_SECTIONS.map((section) => (
          <div
            key={section.title}
            className="flex min-w-40 flex-col items-start gap-2"
          >
            <span className="font-mono text-sm text-chad-text-tertiary">
              {section.title}
            </span>

            {section.links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-chad-text-secondary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-chad-text-secondary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>

      {/* Mobile Copyright */}
      <span className="mt-10 block text-chad-text-tertiary desktop:hidden">
        © 2026 ChadWallet Inc.
      </span>
    </footer>
  );
}
