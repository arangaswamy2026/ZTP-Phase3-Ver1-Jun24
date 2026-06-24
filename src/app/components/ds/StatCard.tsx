import * as React from "react";

import { cn } from "../ui/utils";

/**
 * StatCard — canonical metric card.
 * Card shell = radius-lg (16px) + shadow-sm + 1px border. A 40px icon tile
 * sits top-left; the metric label/value stack below. See design-system.html
 * ".c-stat" / ".cc".
 */
export interface StatCardProps extends React.ComponentProps<"div"> {
  /** Icon element rendered inside the 40px tile. */
  icon?: React.ReactNode;
  /** Background class for the icon tile (e.g. "bg-success-subtle"). */
  tileClassName?: string;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Optional sub-line under the value. */
  sub?: React.ReactNode;
  /** Optional trailing element on the header row (e.g. a trend pill). */
  trailing?: React.ReactNode;
}

export function StatCard({
  className,
  icon,
  tileClassName,
  label,
  value,
  sub,
  trailing,
  ...props
}: StatCardProps) {
  return (
    <div
      data-slot="stat-card"
      className={cn(
        "bg-card text-card-foreground rounded-2xl border shadow-sm p-6",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between mb-4">
        {icon != null && (
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-2xl",
              tileClassName ?? "bg-muted",
            )}
          >
            {icon}
          </div>
        )}
        {trailing}
      </div>
      <div className="text-[13px] text-muted-foreground">{label}</div>
      <div className="text-2xl font-medium tracking-[-0.01em]">{value}</div>
      {sub != null && (
        <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>
      )}
    </div>
  );
}
