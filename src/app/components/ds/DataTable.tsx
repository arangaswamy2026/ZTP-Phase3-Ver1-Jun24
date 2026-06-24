import * as React from "react";

import { cn } from "../ui/utils";

/**
 * DataTable — canonical table styling primitives. See design-system.html
 * "table.ds": panel = radius-lg + shadow-sm + 1px border; header row on
 * --muted (#ececf0) with 11px uppercase micro headers; 13px body rows with
 * a subtle hover. Compose these instead of hand-rolling table classes so the
 * look is editable in one place.
 */

export function TablePanel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="table-panel"
      className={cn(
        "bg-card rounded-2xl border shadow-sm overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

export function DataTable({
  className,
  ...props
}: React.ComponentProps<"table">) {
  return (
    <table
      data-slot="data-table"
      className={cn("w-full border-collapse", className)}
      {...props}
    />
  );
}

export function THead({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn("bg-muted border-b border-border", className)}
      {...props}
    />
  );
}

export function TH({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
}

export function TR({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-border last:border-0 transition-colors hover:bg-muted/60",
        className,
      )}
      {...props}
    />
  );
}

export function TD({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-[13px] text-foreground align-middle",
        className,
      )}
      {...props}
    />
  );
}

export function TableFoot({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-2.5 border-t border-border text-[13px] text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
