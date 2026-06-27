interface ErrorStateProps {
  label: string;
  height?: number | string;
  className?: string;
}

export default function ErrorState({
  label,
  height = "100%",
  className = "",
}: ErrorStateProps) {
  return (
    <div
      style={{ height }}
      className={`flex items-center justify-center ${className}`}
    >
      <span className="font-mono text-sm text-chad-red">{label}</span>
    </div>
  );
}
