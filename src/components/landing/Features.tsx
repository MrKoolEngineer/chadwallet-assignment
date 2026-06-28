"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "./data/features";

export default function Features() {
  return (
    <section className="section py-8 desktop:py-2">
      <div className="mx-auto flex max-w-[2000px] flex-col gap-13">
        {/* Heading */}

        <div className="hidden desktop:flex flex-col gap-3">
          <h2 className="text-[60px] leading-15 tracking-tighter">
            never miss out again
          </h2>

          <p className="text-[28px] leading-6 text-chad-text-secondary">
            the only social-first trading app
          </p>
        </div>

        {/* Cards */}

        <div className="flex flex-col gap-3 desktop:gap-6">
          <div className="flex flex-col gap-3 desktop:flex-row desktop:gap-6">
            {FEATURES.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="flex flex-col gap-3 desktop:flex-row desktop:gap-6">
            {FEATURES.slice(3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
