import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "../ui/utils";

/**
 * SeverityChip — threat/severity classification chip.
 * Maps the three canonical severities to semantic tokens. See
 * design-system.html ".sev" (crit / high / med).
 */
const severityChipVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] leading-none whitespace-nowrap",
  {
    variants: {
      level: {
        crit: "bg-destructive-subtle text-destructive",
        high: "bg-warning-subtle text-warning",
        med: "bg-warning-subtle/60 text-warning",
      },
    },
    defaultVariants: {
      level: "med",
    },
  },
);

export interface SeverityChipProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof severityChipVariants> {}

export function SeverityChip({
  className,
  level,
  children,
  ...props
}: SeverityChipProps) {
  return (
    <span
      data-slot="severity-chip"
      className={cn(severityChipVariants({ level }), className)}
      {...props}
    >
      {children}
    </span>
  );
}

export { severityChipVariants };
