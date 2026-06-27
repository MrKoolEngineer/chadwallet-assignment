interface LoadingStateProps {
  label: string;
  height?: number | string;
}

export default function LoadingState({
  label,
  height = "100%",
}: LoadingStateProps) {
  return (
    <div style={{ height }} className="flex items-center justify-center">
      <span className="animate-pulse font-mono text-sm text-slate-500">
        {label}
      </span>
    </div>
  );
}
