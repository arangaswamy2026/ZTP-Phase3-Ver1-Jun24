import { Building2 } from 'lucide-react';

/**
 * Avatar for a tenant / organization object — a rounded-square building glyph.
 * Rounded-square (vs. the circular user avatar) signals "organization, not person".
 */
export function TenantAvatar({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <div
      className={`flex items-center justify-center shrink-0 rounded-[10px] bg-slate-100 text-slate-500 border border-slate-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <Building2 style={{ width: size * 0.5, height: size * 0.5 }} strokeWidth={2} />
    </div>
  );
}
