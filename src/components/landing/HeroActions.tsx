"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

import { LoginRedirectToken } from "@/types/token";
import { useAuthTrigger } from "@/hooks/useAuthTrigger";

import QRPopup from "./QRPopup";

interface HeroActionsProps {
  defaultToken?: LoginRedirectToken;
}

export default function HeroActions({ defaultToken }: HeroActionsProps) {
  const { login, isReady } = useAuthTrigger({ defaultToken });

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex flex-col items-center">
      {/* Mobile */}

      <button
        onClick={() => setOpen(true)}
        className="desktop:hidden w-52 rounded-xl border border-white/5 bg-chad-surface/80 py-3 text-lg font-bold backdrop-blur-md transition-all duration-300 hover:bg-chad-surface"
      >
        Download App
      </button>

      {/* Desktop */}

      <div className="hidden desktop:flex items-center gap-3">
        {/* Start Trading */}

        <button
          disabled={!isReady}
          onClick={login}
          className="group flex h-14 w-52 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-chad-green/90 font-bold text-chad-bg backdrop-blur-md transition-all duration-300 hover:bg-chad-green hover:shadow-glow"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            Start Trading
          </span>

          <div className="flex w-0 items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:w-7 group-hover:opacity-100">
            <ArrowRight size={20} className="ml-2 shrink-0" />
          </div>
        </button>

        {/* Download */}

        <button
          onClick={() => setOpen((v) => !v)}
          className="group flex h-14 w-52 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-chad-surface/70 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-chad-surface hover:border-white/10"
        >
          <div className="flex w-0 items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:w-7 group-hover:opacity-100">
            <Download size={20} className="mr-2 shrink-0" />
          </div>

          <span>Download App</span>
        </button>
      </div>

      <QRPopup open={open} />
    </div>
  );
}
