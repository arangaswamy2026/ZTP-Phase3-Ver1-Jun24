import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "../ui/utils";

/**
 * StatusBadge — the canonical pill badge.
 * Pill shape, uppercase, 11px micro. Colors come from the semantic tokens
 * (success / warning / destructive / action) defined in globals.css, so a
 * recolor is a one-token edit. See design-system.html ".badge".
 */
const statusBadgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] leading-none whitespace-nowrap",
  {
    variants: {
      variant: {
        success: "bg-success-subtle text-success",
        warning: "bg-warning-subtle text-warning",
        error: "bg-destructive-subtle text-destructive",
        info: "bg-action-subtle text-action",
        neutral: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface StatusBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof statusBadgeVariants> {
  /** Render a leading status dot in the current text color. */
  dot?: boolean;
}

export function StatusBadge({
  className,
  variant,
  dot = false,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      data-slot="status-badge"
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    >
      {dot && (
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}

export { statusBadgeVariants };
