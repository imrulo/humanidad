interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div
      className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-ink-dark/10"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`${current} de ${total}`}
    >
      <div
        className="h-full rounded-full bg-accent transition-all duration-300 dark:bg-accent-dark"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
