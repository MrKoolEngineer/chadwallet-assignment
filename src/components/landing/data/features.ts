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
    id: "leaderboard",
    label: "LEADERBOARD",
    title: "become a legend, top the leaderboard",
    image: "/images/landing/leaderboard.webp",
    objectFit: "contain",
    objectPosition: "bottom",
  },
  {
    id: "feed",
    label: "FEED",
    title: "discover and follow top traders",
    image: "/images/landing/social-static.webp",
    objectFit: "contain",
  },
  {
    id: "alerts",
    label: "ALERTS",
    title: "real time notifications for what the best are buying",
    image: "/images/landing/alerts-static.webp",
    objectFit: "cover",
  },
  {
    id: "onboarding",
    label: "EASY ONBOARDING",
    title: "create an account in an instant",
    image: "/images/landing/sign-in-static.webp",
    objectFit: "contain",
    objectPosition: "bottom",
  },
  {
    id: "multichain",
    label: "ZERO COMPLEXITY",
    title: "multichain & gasless",
    image: "/images/landing/assets-static.webp",
    objectFit: "cover",
  },
  {
    id: "apple-pay",
    label: "ONE CLICK TO BUY",
    title: "fund with apple pay",
    image: "/images/landing/apple-pay-static.webp",
    objectFit: "contain",
  },
];
