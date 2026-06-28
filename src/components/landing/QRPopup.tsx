"use client";

import Image from "next/image";

interface QRPopupProps {
  open: boolean;
}

export default function QRPopup({ open }: QRPopupProps) {
  return (
    <div
      className={`absolute top-16 right-0 z-50 w-52 rounded-3xl border border-white/5 bg-chad-card/95 p-4 backdrop-blur-xl transition-all duration-300 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
    >
      <Image
        height={100}
        width={100}
        src="/images/qrcode.svg"
        alt="QR Code"
        className="mx-auto w-full rounded-2xl"
      />

      <h3 className="mt-6 text-center text-lg font-bold">Scan to Download</h3>

      <p className="mt-2 text-center text-sm text-chad-text-secondary">
        Open your camera and scan the QR code to install ChadWallet.
      </p>
    </div>
  );
}
