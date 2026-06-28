export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "ABOUT",
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Affiliates",
        href: "/affiliates",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      {
        label: "Discord",
        href: "https://discord.gg/",
        external: true,
      },
      {
        label: "X / Twitter",
        href: "https://x.com/",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://instagram.com/",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://youtube.com/",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/",
        external: true,
      },
    ],
  },
  {
    title: "LEGAL",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
      },
    ],
  },
];
