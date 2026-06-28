"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingAstronaut from "./FloatingAstronaut";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="section relative z-10 flex flex-col items-center pt-18 desktop:pt-34">
        <HeroContent />

        <FloatingAstronaut />
      </div>
    </section>
  );
}
