"use client";

import Image from "next/image";

export default function FloatingAstronaut() {
  return (
    <picture>
      <source
        media="(min-width:800px)"
        srcSet="/images/landing/astronaut.webp"
      />

      <Image
        src="/images/landing/astronaut-mobile.webp"
        alt=""
        width={1080}
        height={1190}
        priority
        draggable={false}
        className="pointer-events-none -mt-14 h-auto animate-float object-contain select-none desktop:-mt-20 desktop:h-130"
      />
    </picture>
  );
}
