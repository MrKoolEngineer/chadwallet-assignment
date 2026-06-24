"use client";

import { useEffect } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onSuccess,
}: AuthModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-100 flex items-center justify-center p-4 animate-fade-in select-none">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-chad-bg/70 backdrop-blur-xl cursor-pointer"
      />

      <div className="relative w-full max-w-md bg-linear-to-b from-chad-surface to-chad-bg border border-chad-border rounded-4xl px-8 pt-12 pb-8 shadow-[0_24px_60px_rgba(0,0,0,0.8)] text-center flex flex-col items-center overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-chad-surface/80 border border-chad-border flex items-center justify-center hover:bg-chad-border hover:text-white text-slate-400 transition-all cursor-pointer group"
        >
          <svg
            className="w-3.5 h-3.5 fill-current transition-transform group-hover:rotate-90"
            viewBox="0 0 24 24"
          >
            <path d="M19.7 4.3a1 1 0 0 0-1.4 0L12 10.6 5.7 4.3a1 1 0 0 0-1.4 1.4L10.6 12l-6.3 6.3a1 1 0 0 0 1.4 1.4L12 13.4l6.3 6.3a1 1 0 0 0 1.4-1.4L13.4 12l6.3-6.3a1 1 0 0 0 0-1.4z" />
          </svg>
        </button>

        <div className="mb-4 bg-chad-surface/40 p-3 rounded-2xl border border-chad-border/60">
          <img
            src="/images/logo.svg"
            alt="ChadWallet Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        <h2 className="text-4xl font-black tracking-tighter text-white mb-2 flex items-center gap-1 justify-center">
          Chad<span className="text-chad-green">Wallet</span>
        </h2>
        <p className="text-slate-300 font-bold text-base leading-snug max-w-xs mb-8">
          Login or create an account to start trading.
        </p>

        <button
          onClick={onSuccess}
          className="w-full bg-white hover:bg-slate-100 text-chad-bg font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-98 shadow-md cursor-pointer mb-3"
        >
          Continue with Apple
        </button>

        <button
          onClick={onSuccess}
          className="w-full bg-transparent hover:bg-chad-surface/60 border border-chad-border text-slate-200 font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer mb-8"
        >
          Continue with Google
        </button>

        <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-60 flex flex-wrap justify-center gap-x-1">
          <span>By signing up, you agree to our</span>
          <a
            href="#"
            className="underline text-slate-400 hover:text-slate-300 transition-colors"
          >
            Terms of Service
          </a>
          <span>and</span>
          <a
            href="#"
            className="underline text-slate-400 hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </a>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}
