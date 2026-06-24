"use client";

interface HeroProps {
  onStartTrading: () => void;
}

export default function Hero({ onStartTrading }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#020204] flex flex-col items-center justify-start overflow-hidden select-none px-6 pt-32 pb-20">
      {/* Cinematic Earth/Space Background Image Layer */}
      <div className="absolute inset-0 bg-cover bg-center md:bg-right-top opacity-80 pointer-events-none mix-blend-screen z-0 scale-105 select-none" />

      {/* Hero Content Panel */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6 pt-10">
        {/* Core Headline Brand Identity */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9] text-zinc-100 flex flex-col items-center">
          <span className="text-emerald-500 tracking-tighter drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            CHAD
          </span>
          <span className="text-white tracking-normal mt-1">WALLET</span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-300 max-w-xl font-sans mt-2">
          where traders become legends.
        </h2>

        {/* Descriptive Pitch Copy */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed font-medium">
          From memecoins to viral tokens, trade any asset on Solana in seconds
          by monitoring alpha wallets.
        </p>

        {/* Core Conversion CTAs */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onStartTrading}
            className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-black tracking-tight text-sm px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] active:scale-97 cursor-pointer"
          >
            Start trading
          </button>
          <a
            href="https://apps.apple.com/us/app/chadwallet/id6757367474"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-zinc-800 hover:text-white transition-all text-center active:scale-97"
          >
            Download app
          </a>
        </div>
      </div>
    </section>
  );
}
