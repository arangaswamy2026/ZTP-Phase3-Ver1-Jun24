/**
 * Design-system components — the single source of truth for shared UI
 * patterns across pages. Restyle a pattern here (or recolor its token in
 * globals.css) and every page updates. See design-system.html for the
 * canonical reference.
 */
export { StatusBadge, statusBadgeVariants } from "./StatusBadge";
export type { StatusBadgeProps } from "./StatusBadge";
export { SeverityChip, severityChipVariants } from "./SeverityChip";
export type { SeverityChipProps } from "./SeverityChip";
export { StatCard } from "./StatCard";
export type { StatCardProps } from "./StatCard";
export {
  TablePanel,
  DataTable,
  THead,
  TH,
  TR,
  TD,
  TableFoot,
} from "./DataTable";
export { DashboardWidget } from "./DashboardWidget";
export type { DashboardWidgetProps, WidgetPeriod } from "./DashboardWidget";
