import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../ui/utils";

export type WidgetPeriod = "30d" | "7d" | "yesterday";

const PERIOD_LABELS: Record<WidgetPeriod, string> = {
  "30d": "Last 30 days",
  "7d": "Last 7 days",
  yesterday: "Yesterday",
};

export interface DashboardWidgetProps extends React.ComponentProps<"div"> {
  /** Widget title displayed top-left. */
  title: string;
  /** When provided, renders a period dropdown top-right. */
  period?: WidgetPeriod;
  onPeriodChange?: (period: WidgetPeriod) => void;
  /** When provided, renders a "View all →" footer link bottom-right. */
  viewAllLabel?: string;
  onViewAll?: () => void;
  /** Extra classes for the scrollable body area. */
  bodyClass?: string;
  children?: React.ReactNode;
}

/**
 * DashboardWidget — atomic dashboard widget shell.
 *
 * Structure:
 *   ┌─ header ──────────────────────────────────────┐
 *   │  Title (left)          Period dropdown (right) │
 *   ├─ body ─────────────────────────────────────────┤
 *   │  <children>                                    │
 *   ├─ footer (optional) ────────────────────────────┤
 *   │                          View all →            │
 *   └────────────────────────────────────────────────┘
 */
export function DashboardWidget({
  title,
  period,
  onPeriodChange,
  viewAllLabel = "View all",
  onViewAll,
  bodyClass,
  children,
  className,
  ...props
}: DashboardWidgetProps) {
  const showFooter = onViewAll != null;

  return (
    <div
      data-slot="dashboard-widget"
      className={cn(
        "bg-card border rounded-2xl shadow-sm flex flex-col overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-5 pt-4 pb-3 shrink-0">
        <h3 className="text-sm font-bold text-foreground m-0">
          {title}
        </h3>

        {/* Period dropdown — only when period prop is supplied */}
        {period != null && (
          <select
            value={period}
            onChange={(e) =>
              onPeriodChange?.(e.target.value as WidgetPeriod)
            }
            className={cn(
              "text-xs font-medium text-foreground bg-card border border-border",
              "rounded-lg px-2.5 py-1 pr-6 cursor-pointer outline-none",
              "focus:ring-2 focus:ring-action/30",
              "appearance-none bg-no-repeat",
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 6px center",
              backgroundSize: "12px",
            }}
          >
            {(Object.keys(PERIOD_LABELS) as WidgetPeriod[]).map((p) => (
              <option key={p} value={p}>
                {PERIOD_LABELS[p]}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Body */}
      <div className={cn("flex-1 min-h-0", bodyClass)}>{children}</div>

      {/* Footer */}
      {showFooter && (
        <div className="shrink-0 flex items-center justify-end px-5 py-3 border-t border-border">
          <button
            onClick={onViewAll}
            className="text-sm font-medium text-action hover:underline inline-flex items-center gap-1"
          >
            {viewAllLabel} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
