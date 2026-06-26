interface LoadingStateProps {
  label: string;
  height?: number | string;
}

export default function LoadingState({
  label,
  height = "100%",
}: LoadingStateProps) {
  return (
    <div
      style={{ height }}
      className="card flex items-center justify-center bg-chad-surface/50 "
    >
      <span className="animate-pulse font-mono text-sm text-slate-500">
        {label}
      </span>
    </div>
  );
}
