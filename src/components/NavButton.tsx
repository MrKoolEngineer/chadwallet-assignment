"use client";

interface NavButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function NavButton({
  label,
  onClick,
  variant = "primary",
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-chad-green text-chad-bg font-extrabold text-sm px-6 py-3 rounded-xl hover:opacity-90 active:scale-97 transition-all cursor-pointer shadow-[0_4px_16px_rgba(16,216,118,0.2)] tracking-wide uppercase h-10.5 flex items-center justify-center"
    >
      {label}
    </button>
  );
}
