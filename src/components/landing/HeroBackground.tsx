"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <Image
      src="/images/landing/space-bg.webp"
      alt=""
      priority
      width={1920}
      height={1080}
      draggable={false}
      className="pointer-events-none absolute top-0 left-0 z-10 w-full h-auto select-none"
    />
  );
}
