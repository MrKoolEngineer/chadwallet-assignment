"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TokenBanner from "@/components/TokenBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-chad-bg text-slate-50 flex flex-col relative overflow-x-hidden select-none antialiased">
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TokenBanner direction="forward" position="top" />
        <Navbar />
      </div>
      <div className="pt-36 flex-1 flex flex-col">
        <Hero />
      </div>
      <TokenBanner direction="reverse" position="bottom" />
    </div>
  );
}
