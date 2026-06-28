export interface Feature {
  id: string;
  label: string;
  title: string;
  image: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
}

export const FEATURES: Feature[] = [
  {
    id: "launch",
    label: "LAUNCH",
    title: "launch memecoins\nin one tap",
    image: "/images/landing/launch.webp",
  },
  {
    id: "discover",
    label: "DISCOVER",
    title: "access tokens\nbefore anyone else",
    image: "/images/landing/search.webp",
  },
  {
    id: "trading",
    label: "TRADING",
    title: "fast trading\nin seconds",
    image: "/images/landing/token.webp",
  },
  {
    id: "portfolio",
    label: "PORTFOLIO",
    title: "track your assets\nin one place",
    image: "/images/landing/portfolio.webp",
  },
  {
    id: "smart-money",
    label: "TOP TRADERS",
    title: "meet top traders\nwho win consistently",
    image: "/images/landing/x.webp",
  },
  {
    id: "wallet",
    label: "WALLET",
    title: "secure deposits &\ninstant withdrawals",
    image: "/images/landing/deposit.webp",
  },
];
