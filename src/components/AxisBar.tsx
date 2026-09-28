import type { Axis } from "../data/axes";

interface AxisBarProps {
  axis: Axis;
  value: number; // 0-100, hacia el polo B
  compact?: boolean;
}

export function AxisBar({ axis, value, compact = false }: AxisBarProps) {
  return (
    <div className={compact ? "flex items-center gap-2" : "flex flex-col gap-1.5"}>
      <div
        className={`flex items-center justify-between text-xs ${
          compact ? "w-24 shrink-0" : "w-full"
        }`}
      >
        <span className="truncate font-medium text-ink/70 dark:text-ink-dark/70">
          {axis.poleA}
        </span>
        <span className="shrink-0 font-bold text-ink/50 dark:text-ink-dark/50">{value}</span>
        <span className="truncate font-medium text-ink/70 dark:text-ink-dark/70">
          {axis.poleB}
        </span>
      </div>
      <div
        className="axis-bar flex-1"
        style={{ color: axis.color }}
        role="img"
        aria-label={`${axis.shortLabel}: ${value} hacia ${axis.poleB}`}
      >
        <div
          className="axis-bar-fill"
          style={{ width: `${value}%`, backgroundColor: axis.color }}
        />
      </div>
    </div>
  );
}
