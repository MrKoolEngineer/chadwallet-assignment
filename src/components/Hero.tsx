"use client";

interface HeroProps {
  onStartTrading: () => void;
}

export default function Hero({ onStartTrading }: HeroProps) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto relative select-none">
      <div className="absolute top-12 w-72 h-72 bg-chad-green/10 rounded-full blur-[120px] pointer-events-none" />

      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 text-white">
        Buy & sell <br />
        <span className="text-chad-green">trending tokens</span> instantly
      </h1>

      <p className="text-slate-400 font-medium max-w-lg text-sm md:text-base leading-relaxed mb-8">
        Experience lightning-fast token execution, embedded analytics, and
        premium asset management on Solana's elite workflow interface.
      </p>

      <button
        onClick={onStartTrading}
        className="bg-chad-green text-chad-bg font-black text-sm md:text-base px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(16,216,118,0.3)] hover:opacity-90 active:scale-98 transition-all cursor-pointer"
      >
        Start Trading Now
      </button>
    </section>
  );
}
