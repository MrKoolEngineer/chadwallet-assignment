import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PrivyAuthProvider from "@/context/PrivyAuthProvider";
import ReactQueryProvider from "@/context/ReactQueryProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChadWallet | Solana, all in one app",
  description: "ChadWallet is the #1 meme coin trading app on Solana!",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-chad-bg text-white">
        <PrivyAuthProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </PrivyAuthProvider>
      </body>
    </html>
  );
}
