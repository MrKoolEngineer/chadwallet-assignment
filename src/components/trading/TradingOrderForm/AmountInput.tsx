"use client";

import { memo } from "react";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

function AmountInput({
  value,
  onChange,
  disabled = false,
  placeholder = "0",
}: AmountInputProps) {
  return (
    <div
      className="flex p-4 h-17.25 items-center rounded-xl bg-chad-surface transition-colors duration-200"
    >
      <span
        className="mr-1 text-[28px] font-semibold leading-none text-chad-text-secondary"
      >
        $
      </span>

      <input
        type="number"
        inputMode="decimal"
        autoComplete="off"
        spellCheck={false}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-0 flex-1 bg-transparent text-[28px] font-semibold leading-none tracking-tight text-chad-text placeholder:text-chad-text-secondary outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />

      <span
        className="ml-4 shrink-0 text-base font-medium text-chad-text-tertiary"
      >
        Enter amount
      </span>
    </div>
  );
}

export default memo(AmountInput);
