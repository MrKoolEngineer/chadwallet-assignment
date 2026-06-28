"use client";

import Image from "next/image";

interface AppStoreBadgeProps {
  platform: "apple" | "google";
}

const config = {
  apple: {
    href: "https://apps.apple.com/us/app/chadwallet/id6757367474",
    label: "Download on the App Store",
    src: "/images/apple-cta.webp",
    width: 120,
  },
  google: {
    href: "https://play.google.com/store/apps/details?id=xyz.chadwallet.www",
    label: "Get it on Google Play",
    src: "/images/google-cta.webp",
    width: 135,
  },
} as const;

export default function AppStoreBadge({ platform }: AppStoreBadgeProps) {
  const current = config[platform];

  return (
    <a
      href={current.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={current.label}
      className="
        group
        flex
        h-10
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-white/5
        bg-chad-surface/70
        backdrop-blur-md
        transition-all
        duration-300
        ease-out
        active:translate-y-0
      "
    >
      <Image
        src={current.src}
        alt={current.label}
        width={current.width}
        height={40}
        draggable={false}
        className="
          block
          h-10
          w-auto
          select-none
          transition-transform
          duration-300
        "
      />
    </a>
  );
}
