"use client";

import Image from "next/image";
import { Feature } from "./data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group aspect-square min-w-0 flex-1 overflow-hidden rounded-[25px] border border-white/5 bg-chad-surface pt-8 transition-all duration-300 hover:border-white/15">
      <div className="flex h-full flex-col gap-2">
        <span className="px-8 font-mono text-sm font-bold uppercase tracking-wider text-chad-green">
          {feature.label}
        </span>

        <h3 className="px-8 text-[28px] leading-8 tracking-tight desktop:text-[36px] desktop:leading-10">
          {feature.title}
        </h3>

        <div className="relative mt-auto flex-1">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className={`transition-transform duration-300 group-hover:scale-105 ${feature.objectFit === "cover" ? "object-cover" : "object-contain"} ${feature.objectPosition === "bottom" ? "object-bottom" : "object-center"}`}
          />
        </div>
      </div>
    </article>
  );
}
