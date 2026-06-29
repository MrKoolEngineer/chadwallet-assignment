"use client";

import Image from "next/image";

export default function TradeAnywhere() {
  return (
    <section className="relative w-full mt-10 desktop:mt-0">
      {/* ================= Desktop ================= */}

      <div className="hidden desktop:flex flex-col items-center gap-3 px-8 py-10">
        <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-chad-green">
          NOW AVAILABLE ON WEB
        </span>

        <h2 className="text-center text-[60px] font-black leading-14 tracking-tight text-white">
          trade from anywhere.
          <br />
          never lose a beat.
        </h2>

        <p className="max-w-3xl text-center text-[22px] tracking-tight text-chad-text-secondary">
          Open a trade on your phone, close it on your desktop — all in one
          ChadWallet experience.
        </p>

        <div className="relative -mt-16">
          {/* Desktop Mockup */}

          <Image
            src="/images/landing/chad-desktop.webp"
            alt="ChadWallet Desktop"
            width={2889}
            height={2783}
            priority
            className="w-[64vw]"
          />

          {/* Floating Phone */}

          <Image
            src="/images/landing/chad-desktop-phone.webp"
            alt="ChadWallet Mobile"
            width={2825}
            height={3251}
            priority
            className="absolute -right-24 bottom-28 w-[28vw] animate-float"
          />
        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="relative flex desktop:hidden">
        <Image
          src="/images/landing/chad-mobile-app.webp"
          alt="ChadWallet Mobile"
          width={1197}
          height={1164}
          priority
          className="w-full"
        />

        <div className="absolute bottom-0 flex w-full flex-col gap-3 px-8 pb-8">
          <h2 className="text-center text-[36px] leading-9 tracking-tighter text-white">
            trade from anywhere.
            <br />
            never lose a beat.
          </h2>

          <p className="text-center leading-5 tracking-tight text-chad-text-secondary">
            Pick up a trade on your phone, close it on your desktop — all in one
            ChadWallet experience.
          </p>
        </div>
      </div>
    </section>
  );
}
