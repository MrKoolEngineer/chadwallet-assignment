"use client";

import Image from "next/image";

export default function RotatingCircles() {
  return (
    <>
      {/* Inner Ring */}

      <Image
        src="/images/landing/inner-circle.webp"
        alt=""
        width={900}
        height={900}
        priority
        className="absolute inset-0 z-0 m-auto w-[35vw] desktop:w-[30vw] animate-spin-reverse"
      />

      {/* Outer Ring */}

      <Image
        src="/images/landing/outer-circle.webp"
        alt=""
        width={1500}
        height={1500}
        priority
        className="absolute inset-0 z-0 m-auto w-screen desktop:w-[55vw] desktop:max-w-275 animate-spin-slow"
      />
    </>
  );
}
