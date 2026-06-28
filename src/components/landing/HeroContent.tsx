"use client";

import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-4 z-10">
      <div className="flex flex-col items-center gap-2 p-3 text-center">
        <h1
          className="
            text-[72px]
            font-black
            leading-none
            tracking-[-0.06em]

            desktop:text-[150px]
          "
        >
          <span className="text-chad-green">Chad</span>
          <span className="text-white">Wallet</span>
        </h1>

        <h2
          className="
            mt-0
            text-[24px]
            font-bold
            leading-6
            tracking-tighter
            text-white
            desktop:text-[40px]
            desktop:leading-12
          "
        >
          where traders become legends.
        </h2>
        <p
          className="
            max-w-2xl
            text-center
            text-base
            tracking-tight
            text-chad-text-secondary

            desktop:text-[22px]
            desktop:leading-6
          "
        >
          From memecoins to viral tokens, trade any crypto in seconds.
        </p>
      </div>

      <HeroActions />
    </div>
  );
}
