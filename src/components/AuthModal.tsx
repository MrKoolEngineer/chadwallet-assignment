"use client";

import React, { useEffect } from "react";

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
  // Prevent background viewport scrolling when modal is active
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
      {/* Dark Ambient Frosted Backdrop Layer */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#020204]/60 backdrop-blur-xl cursor-pointer"
      />

      {/* 💎 Main Modal Container Box */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-zinc-800/80 rounded-[2rem] px-8 pt-12 pb-8 shadow-[0_24px_60px_rgba(0,0,0,0.8)] text-center flex flex-col items-center overflow-hidden">
        {/* Close Button X Icon */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800/60 flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all cursor-pointer group"
        >
          <svg
            className="w-3.5 h-3.5 fill-current transition-transform group-hover:rotate-90"
            viewBox="0 0 24 24"
          >
            <path d="M19.7 4.3a1 1 0 0 0-1.4 0L12 10.6 5.7 4.3a1 1 0 0 0-1.4 1.4L10.6 12l-6.3 6.3a1 1 0 0 0 1.4 1.4L12 13.4l6.3 6.3a1 1 0 0 0 1.4-1.4L13.4 12l6.3-6.3a1 1 0 0 0 0-1.4z" />
          </svg>
        </button>

        {/* Brand Header */}
        <h2 className="text-5xl font-black tracking-tighter text-white mb-2">
          fomo
        </h2>
        <p className="text-zinc-300 font-bold text-lg leading-snug max-w-xs mb-8">
          Login or create an account to start trading.
        </p>

        {/* 🍎 Continue with Apple Action Button */}
        <button
          onClick={onSuccess}
          className="w-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-98 shadow-md cursor-pointer mb-3"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.152 6.896c-.494 0-1.487-.604-2.585-.604-1.439 0-2.766.822-3.504 2.112-1.487 2.593-.38 6.425 1.054 8.502.705 1.015 1.536 2.152 2.634 2.112 1.047-.042 1.446-.68 2.713-.68 1.258 0 1.625.68 2.723.657 1.116-.02 1.841-1.023 2.531-2.036.804-1.173 1.135-2.304 1.156-2.364-.021-.01-2.222-.857-2.243-3.398-.021-2.122 1.721-3.14 1.802-3.193-1-.144-2.062-.258-3.355-.258zm2.463-3.64c.642-.782 1.074-1.864.953-2.948-.922.037-2.04.613-2.702 1.391-.563.645-1.055 1.745-.923 2.805 1.03.082 2.03-.466 2.672-1.248z" />
          </svg>
          Continue with Apple
        </button>

        {/* 🤖 Continue with Google Action Button */}
        <button
          onClick={onSuccess}
          className="w-full bg-transparent hover:bg-zinc-900/40 border border-zinc-800/80 text-zinc-200 font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer mb-8"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113A5.76 5.76 0 0 1 8.23 12.76a5.76 5.76 0 0 1 5.76-5.758c1.477 0 2.812.553 3.824 1.47l3.18-3.18A9.92 9.92 0 0 0 13.99 2.114c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.753 0 10.158-4.043 10.158-9.843 0-.663-.06-1.3-.173-1.986H12.24z" />
          </svg>
          Continue with Google
        </button>

        {/* Consent/Legal Disclaimer Copy Footer */}
        <p className="text-[10px] text-zinc-500 font-medium leading-relaxed max-w-[240px]">
          By signing up, you agree to our{" "}
          <a
            href="#"
            className="underline hover:text-zinc-400 transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline hover:text-zinc-400 transition-colors"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
