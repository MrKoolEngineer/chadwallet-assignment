"use client";

interface NavButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function NavButton({
  label,
  disabled = false,
  onClick,
}: NavButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        flex
        h-10
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        border
        border-white/5
        bg-chad-surface
        px-5
        text-m
        font-bold
        text-chad-text
        backdrop-blur-md
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:border-white/15
        hover:bg-chad-surface/80
        hover:shadow-glow
        active:translate-y-0
        disabled:pointer-events-none
        disabled:opacity-50
      "
    >
      {label}
    </button>
  );
}
