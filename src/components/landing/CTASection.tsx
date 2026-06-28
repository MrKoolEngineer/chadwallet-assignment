"use client";

import Image from "next/image";

import HeroActions from "./HeroActions";
import RotatingCircles from "./RotatingCircles";

export default function CTASection() {
  return (
    <section className="relative flex w-full items-center justify-center self-stretch overflow-hidden py-40 desktop:py-0">
      {/* Background */}

      <Image
        src="/images/landing/legends.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Top Gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-chad-bg
          to-transparent
        "
      />

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-chad-bg
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative z-10 w-[80vw] px-8">
        <div className="relative flex aspect-square flex-col items-center justify-center">
          <div className="relative z-10 flex w-[70vw] flex-col items-center gap-3 desktop:gap-6">
            <h2
              className="
                text-center
                text-[40px]
                leading-10
                tracking-tighter

                desktop:text-[60px]
                desktop:leading-15
              "
            >
              a trading app
              <br />
              for the rest of us
            </h2>

            <p
              className="
                text-center
                tracking-tight
                text-chad-text-secondary

                desktop:text-[22px]
                desktop:leading-7
              "
            >
              Join thousands of traders making their name with ChadWallet.
            </p>

            <div className="pt-6">
              <HeroActions />
            </div>
          </div>

          <RotatingCircles />
        </div>
      </div>
    </section>
  );
}
