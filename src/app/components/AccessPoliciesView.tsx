import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Plus, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  Power,
  Network,
  Globe,
  Lock,
  ChevronDown,
  GripVertical,
  Eye,
  Pencil,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { MOCK_POLICIES, type Policy } from './policies/PolicyData';
import { ZoneBasedPolicyDetailsModal } from './ZoneBasedPolicyDetailsModal';
import { InternetAccessPolicyDetailsModal } from './InternetAccessPolicyDetailsModal';
import svgPaths from '../imports/Container/svg-jjv856u5sz';
import zoneNewSvgPaths from '../imports/Container-2/svg-okducurcfz';
import siaSvgPaths from '../imports/Container-1-1/svg-sohcjt40gw';
import spaSvgPaths from '../imports/Container-3/svg-xwxx0ijhn6';

// ── Section icon components ──────────────────────────────────────────

function ZoneIcon() {
  return (
    <div className="flex items-center justify-center rounded-[16px] bg-[#ffedd4] size-[40px] shrink-0">
      <Network className="w-[20px] h-[20px] text-[#CA3500]" />
    </div>
  );
}

function SIAIcon() {
  return (
    <div className="flex items-center justify-center rounded-[16px] bg-[#f3e8ff] size-[40px] shrink-0">
      <Globe className="w-[20px] h-[20px] text-[#8200DB]" />
    </div>
  );
}

function SPAIcon() {
  return (
    <div className="flex items-center justify-center rounded-[16px] bg-[#dbeafe] size-[40px] shrink-0">
      <Lock className="w-[20px] h-[20px] text-[#1447E6]" />
    </div>
  );
}

// ── Type badge ───────────────────────────────────────────────────────

function TypeBadge({ type }: { type: 'Default' | 'User' }) {
  if (type === 'Default') {
    return (
      <span className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-[#ececf0] px-[8px] py-[3px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
        Default
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-[#ececf0] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#717182]">
        Custom
      </span>
    );
}

// ── Action badge ─────────────────────────────────────────────────────

function ActionBadge({ action }: { action: 'Allow' | 'Deny' }) {
  if (action === 'Allow') {
    return (
      <span className="inline-flex items-center rounded-[8px] bg-[#16a34a1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#16a34a]">
        Allow
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-[8px] bg-[#d4183d1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#d4183d]">
        Deny
      </span>
    );
}

// ── Row actions ──────────────────────────────────────────────────────

function RowActions({ policy }: { policy: Policy }) {
  return (
    <div className="flex items-center gap-[4px]">
      <Button
        variant="ghost"
        size="sm"
        className="h-[32px] w-[32px] p-0 rounded-[8px] border border-black/10"
      >
        <Edit className="w-[14px] h-[14px] text-[#717182]" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-[32px] w-[32px] p-0 rounded-[8px] border border-black/10"
          >
            <MoreVertical className="w-[18px] h-[18px] text-[#717182]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Copy className="w-4 h-4 mr-2" />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Power className="w-4 h-4 mr-2" />
            {policy.status === 'Active' ? 'Disable' : 'Enable'}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// ── Shared table header cell ─────────────────────────────────────────

function HeaderCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap ${className}`}
    >{children}</th>
  );
}

// ── Zone Based Policies Table ────────────────────────────────────────

// Drag handle icon component
function DragHandleIcon() {
  return (
    <div className="h-[20px] w-[20px] overflow-clip relative shrink-0">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={zoneNewSvgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Zone badge component for Source/Destination columns
function ZoneBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
      <div className="bg-[#ececf0] border-r border-[rgba(0,0,0,0.1)] pl-[9px] pr-[4px] py-[2px]">
        <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
          {label}:
        </span>
      </div>
      <div className="bg-[#ececf0] pl-[4px] pr-[9px] py-[2px]">
        <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

const ZONE_ORDER_KEY = 'ztp_zone_policy_order';

function loadSavedOrder(): string[] | null {
  try { return JSON.parse(localStorage.getItem(ZONE_ORDER_KEY) || 'null'); } catch { return null; }
}

function saveOrder(ids: string[]) {
  try { localStorage.setItem(ZONE_ORDER_KEY, JSON.stringify(ids)); } catch {}
}

function applyOrder(policies: Policy[], savedIds: string[] | null): Policy[] {
  if (!savedIds) return policies;
  const map = new Map(policies.map(p => [p.id, p]));
  const ordered = savedIds.flatMap(id => map.has(id) ? [map.get(id)!] : []);
  const remaining = policies.filter(p => !savedIds.includes(p.id));
  return [...ordered, ...remaining];
}

// Detect conflicts: an Allow rule above a Deny rule for the same source+destination means the
// Deny is unreachable — the higher-priority Allow will always match first, making the Deny dead.
// A Deny above an Allow is intentional ordering and is NOT a conflict.
// Returns a map from policy id to the id of the policy it conflicts with.
function detectConflicts(policies: Policy[]): Map<string, string> {
  const conflictMap = new Map<string, string>();
  for (let i = 0; i < policies.length; i++) {
    for (let j = i + 1; j < policies.length; j++) {
      const a = policies[i]; // higher priority (lower index)
      const b = policies[j]; // lower priority (higher index)
      const srcA = a.sourceBadges?.[0]?.value?.toLowerCase() ?? '';
      const dstA = a.destinationBadges?.[0]?.value?.toLowerCase() ?? '';
      const srcB = b.sourceBadges?.[0]?.value?.toLowerCase() ?? '';
      const dstB = b.destinationBadges?.[0]?.value?.toLowerCase() ?? '';
      // Only a conflict when Allow sits above Deny for the same traffic — Deny is shadowed
      if (srcA && dstA && srcA === srcB && dstA === dstB && a.action === 'Allow' && b.action === 'Deny') {
        conflictMap.set(a.id, b.id);
        conflictMap.set(b.id, a.id);
      }
    }
  }
  return conflictMap;
}

function ZonePoliciesTable({ onNewPolicy, onPolicyClick }: { onNewPolicy: () => void, onPolicyClick?: (policy: Policy) => void }) {
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState<{ id: string; name: string } | null>(null);
  const [saved, setSaved] = useState(false);

  const base = MOCK_POLICIES.filter((p) => p.type === 'Zone');
  const [savedPolicies, setSavedPolicies] = useState<Policy[]>(() => applyOrder(base, loadSavedOrder()));
  const [policies, setPolicies] = useState<Policy[]>(savedPolicies);
  const [isDirty, setIsDirty] = useState(false);

  // Drag state
  const dragIndex = React.useRef<number | null>(null);
  const dragOverIndex = React.useRef<number | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragIndex.current = index;
    dragOverIndex.current = index;
    e.dataTransfer.effectAllowed = 'move';
    setDragActive(true);
    setTimeout(() => { (e.currentTarget as HTMLElement).style.opacity = '0.45'; }, 0);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    (e.currentTarget as HTMLElement).style.opacity = '1';
    setDragActive(false);
    if (dragIndex.current !== null && dragOverIndex.current !== null && dragIndex.current !== dragOverIndex.current) {
      const updated = [...policies];
      const [moved] = updated.splice(dragIndex.current, 1);
      updated.splice(dragOverIndex.current, 0, moved);
      setPolicies(updated);
      setIsDirty(true);
    }
    dragIndex.current = null;
    dragOverIndex.current = null;
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    dragOverIndex.current = index;
  };

  const handleApply = () => {
    saveOrder(policies.map(p => p.id));
    setSavedPolicies(policies);
    setIsDirty(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDiscard = () => {
    setPolicies(savedPolicies);
    setIsDirty(false);
  };

  const handleDeleteClick = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    setPolicyToDelete({ id, name });
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (policyToDelete) {
      const updated = policies.filter(p => p.id !== policyToDelete.id);
      setPolicies(updated);
      setSavedPolicies(updated);
      saveOrder(updated.map(p => p.id));
    }
    setDeleteDialogOpen(false);
    setPolicyToDelete(null);
  };

  const conflictMap = detectConflicts(policies);
  const conflictCount = conflictMap.size / 2;

  // Number styles matching the HTML reference
  const numStyle = (index: number, hasConflict: boolean): string => {
    if (hasConflict) return 'bg-[#fff3ee] text-[#f05a23] border-[#f05a23]/30';
    if (index === 0) return 'bg-[#dcfce7] text-[#15803d] border-transparent';
    return 'bg-[#f3f4f6] text-[#374151] border-transparent hover:bg-[#fff3ee] hover:border-[#ff5d00]/40';
  };

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Section header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <ZoneIcon />
          <div className="flex flex-col justify-center pb-[3px]">
            <span className="font-['Inter',sans-serif] font-bold text-[18px] leading-[28px] tracking-[-0.44px] text-[#1a1a1a]">
              Zone Policies
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[24px] tracking-[-0.31px] text-[#717182]">
              Controls traffic between network zones on the Zero Trust Connector.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          {saved && (
            <span className="flex items-center gap-[6px] text-[12px] font-medium text-[#15803d] bg-[#dcfce7] rounded-[6px] px-[10px] py-[5px]">
              <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Order saved
            </span>
          )}
          <Button size="sm" className="shrink-0 gap-[8px] rounded-[8px] bg-[#0066cc] hover:bg-[#0052a6] text-white px-[11px] py-[6px]" onClick={onNewPolicy}>
            <Plus className="w-[16px] h-[16px]" />
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">New Policy</span>
          </Button>
        </div>
      </div>

      {/* Pending changes action bar */}
      {isDirty && (
        <div className="flex items-center justify-between gap-[12px] rounded-[16px] border border-[#bfdbfe] bg-[#eff6ff] px-[16px] py-[12px]">
          <div className="flex items-center gap-[10px]">
            <svg className="w-[16px] h-[16px] text-[#0066cc] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#1e40af]">
              You have unsaved changes to the policy order.
            </span>
          </div>
          <div className="flex items-center gap-[8px] shrink-0">
            <button
              onClick={handleDiscard}
              className="h-[34px] px-[14px] rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-white hover:bg-[#ececf0] font-['Inter',sans-serif] font-medium text-[13px] text-[#1a1a1a] transition-colors"
            >
              Discard changes
            </button>
            <button
              onClick={handleApply}
              className="h-[34px] px-[14px] rounded-[8px] bg-[#0066cc] hover:bg-[#0052a6] font-['Inter',sans-serif] font-bold text-[13px] text-white transition-colors"
            >
              Apply changes
            </button>
          </div>
        </div>
      )}

      {/* Conflict banner */}
      {conflictMap.size > 0 && (
        <div className="flex items-start gap-[10px] rounded-[16px] border-2 border-[#fed7aa] bg-gradient-to-r from-[#fff7ed] to-[#fffbeb] px-[16px] py-[12px]">
          <svg className="w-[18px] h-[18px] text-[#c2410c] shrink-0 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div className="flex flex-col gap-[2px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#7c2d12]">
              {conflictCount} policy conflict{conflictCount > 1 ? 's' : ''} detected
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9a3412]">
              An Allow rule is shadowing a Deny rule with the same source and destination — the Deny will never be reached. Drag the Deny above the Allow to resolve.
            </span>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-[16px] border border-[rgba(0,0,0,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden w-full">
        {/* Header */}
        <div className="bg-[#ececf0] border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center pl-[16px] pr-[16px] py-[12px] gap-[12px]">
            <div className="w-[32px] shrink-0" />
            <div className="w-[40px] shrink-0">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182]">#</p>
            </div>
            <div className="flex-1">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">Policy Name</p>
            </div>
            <div className="w-[200px]">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">Source</p>
            </div>
            <div className="w-[220px]">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">Destination</p>
            </div>
            <div className="w-[160px]">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">Action</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div>
          {policies.map((policy, index) => {
            const hasConflict = conflictMap.has(policy.id);
            return (
              <div
                key={policy.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, index)}
                className={`relative border-b border-[rgba(0,0,0,0.06)] last:border-b-0 cursor-pointer transition-colors ${
                  hasConflict ? 'bg-[#fffbeb] hover:bg-[#fff7ed]' : 'hover:bg-[#f8f9fa]'
                }`}
                style={hasConflict ? { boxShadow: 'inset 3px 0 0 #f59e0b' } : undefined}
                onClick={() => onPolicyClick?.(policy)}
              >
                <div className="flex items-center pl-[16px] pr-[16px] py-[16px] gap-[12px] min-h-[80px]">
                  {/* Drag handle */}
                  <div
                    className="w-[32px] shrink-0 flex items-center justify-center cursor-grab active:cursor-grabbing text-[#9ca3af] hover:text-[#6b7280]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DragHandleIcon />
                  </div>

                  {/* Row number */}
                  <div className="w-[40px] shrink-0 flex items-center" onClick={(e) => e.stopPropagation()}>
                    <div className={`w-[32px] h-[32px] rounded-[6px] border-[1.5px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[13px] transition-colors ${numStyle(index, hasConflict)}`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Policy Name */}
                  <div className="flex-1 flex flex-col gap-[4px] min-w-0">
                    <div className="flex items-center gap-[8px] flex-wrap">
                      <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#1a1a1a]">
                        {policy.name}
                      </p>
                      {hasConflict && (
                        <span className="inline-flex items-center gap-[4px] rounded-[6px] border border-[#fed7aa] bg-[#fff7ed] px-[6px] py-[2px] shrink-0">
                          <svg className="w-[11px] h-[11px] text-[#c2410c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                          </svg>
                          <span className="font-['Inter',sans-serif] font-semibold text-[11px] leading-[14px] text-[#c2410c]">Conflict</span>
                        </span>
                      )}
                    </div>
                    <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                      {policy.description}
                    </p>
                    {hasConflict && (() => {
                      const conflictIdx = policies.findIndex(p => p.id === conflictMap.get(policy.id));
                      const isShadowing = policy.action === 'Allow'; // this Allow is hiding the Deny below
                      return (
                        <div className="mt-[4px] rounded-[6px] border border-[#fecaca] bg-[#fef2f2] px-[10px] py-[7px]">
                          <span className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] text-[#b91c1c]">
                            {isShadowing
                              ? `This Allow rule shadows rule #${conflictIdx + 1} — the Deny below will never be reached. Move the Deny above this rule to resolve.`
                              : `Shadowed by rule #${conflictIdx + 1} — this Deny is unreachable because an Allow for the same traffic has higher priority.`}
                          </span>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Source */}
                  <div className="w-[200px] shrink-0">
                    {policy.sourceBadges && policy.sourceBadges.length > 0 && (
                      <ZoneBadge label={policy.sourceBadges[0].type} value={policy.sourceBadges[0].value} />
                    )}
                  </div>

                  {/* Destination */}
                  <div className="w-[220px] shrink-0">
                    {policy.destinationBadges && policy.destinationBadges.length > 0 && (
                      <ZoneBadge label={policy.destinationBadges[0].type} value={policy.destinationBadges[0].value} />
                    )}
                  </div>

                  {/* Action + buttons */}
                  <div className="w-[160px] shrink-0 flex items-center gap-[10px]">
                    {policy.action === 'Allow' ? (
                      <span className="inline-flex items-center rounded-[8px] bg-[#16a34a1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#16a34a] whitespace-nowrap">
                        Allow
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-[8px] bg-[#d4183d1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#d4183d] whitespace-nowrap">
                        Deny
                      </span>
                    )}
                    <div className="flex items-center gap-[4px]" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="rounded-[8px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/zone-policy/${policy.id}/edit`)}
                      >
                        <Pencil className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="rounded-[8px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/zone-policy/${policy.id}`)}
                      >
                        <Eye className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="rounded-[8px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={(e) => handleDeleteClick(e, policy.id, policy.name)}
                      >
                        <Trash2 className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Policy</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the policy <strong>{policyToDelete?.name}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── SIA Policies Table ───────────────────────────────────────────────

// SIA Source badge - can be Group or User or multiple
function SIASourceBadge({ badges }: { badges: Array<{ type: 'Group' | 'User'; value: string }> }) {
  if (badges.length === 0) return null;
  
  return (
    <div className="inline-flex flex-row gap-[8px]">
      {badges.map((badge, idx) => (
        <div key={idx} className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
          <div className="bg-[#ececf0] border-r border-[rgba(0,0,0,0.1)] pl-[9px] pr-[4px] py-[2px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
              {badge.type}:
            </span>
          </div>
          <div className="bg-[#ececf0] pl-[4px] pr-[9px] py-[2px]">
            <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
              {badge.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Simple destination badge for Internet
function SIADestinationBadge({ value }: { value: string }) {
  return (
    <div className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-[#ececf0] px-[9px] py-[2px]">
      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

function SIAPoliciesTable({ policies, searchQuery, onPolicyClick, onNewPolicy }: { policies: Policy[]; searchQuery: string; onPolicyClick?: (policy: Policy) => void; onNewPolicy?: () => void }) {
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState<{id: string; name: string} | null>(null);

  const handleDeleteClick = (e: React.MouseEvent, policyId: string, policyName: string) => {
    e.stopPropagation();
    setPolicyToDelete({ id: policyId, name: policyName });
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Add actual delete logic here
    console.log('Deleting policy:', policyToDelete?.id);
    setDeleteDialogOpen(false);
    setPolicyToDelete(null);
  };

  const filtered = policies.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (a.source === 'Default' && b.source !== 'Default') return -1;
    if (a.source !== 'Default' && b.source === 'Default') return 1;
    return 0;
  });

  // Mock data matching Figma design
  const mockSIAPolicies = [
    {
      id: '1',
      name: 'Allow All Users to Internet',
      description: 'Allow all users to access the internet',
      sourceBadges: [{ type: 'User' as const, value: 'All Users' }],
      destination: 'Internet',
      securityControls: 1,
    },
    {
      id: '2',
      name: 'Allow Engineering internet; block Netflix.',
      description: 'Allow Engineering internet; block Netflix.',
      sourceBadges: [{ type: 'Group' as const, value: 'Engineering' }],
      destination: 'Internet',
      securityControls: 2,
    },
    {
      id: '3',
      name: 'Enable internet access for user Alice.',
      description: 'Allow internet access to user Alice and Design group',
      sourceBadges: [
        { type: 'User' as const, value: 'John' },
        { type: 'Group' as const, value: 'Design' }
      ],
      destination: 'Internet',
      securityControls: 3,
    }
  ];

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Section header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <SIAIcon />
          <div className="flex flex-col justify-center pb-[3px]">
            <span className="font-['Inter',sans-serif] font-bold text-[18px] leading-[28px] tracking-[-0.44px] text-[#1a1a1a]">
              Internet Access Policies
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[24px] tracking-[-0.31px] text-[#717182]">
              Controls user traffic destined for the public internet, including category filtering and threat protection.
            </span>
          </div>
        </div>
        <Button size="sm" className="shrink-0 gap-[8px] rounded-[8px] bg-[#0066cc] hover:bg-[#0052a6] text-white px-[11px] py-[6px]" onClick={onNewPolicy}>
          <Plus className="w-[16px] h-[16px]" />
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">New Policy</span>
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[16px] border border-[rgba(0,0,0,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden w-full">
        <div className="w-full">
          {/* Header */}
          <div className="bg-[#ececf0] border-b border-[rgba(0,0,0,0.1)]">
            <div className="flex items-center px-[16px] py-[12px]">
              <div className="flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Policy Name
                </p>
              </div>
              <div className="w-[280px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Source
                </p>
              </div>
              <div className="w-[180px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Destination
                </p>
              </div>
              <div className="w-[160px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Security Controls
                </p>
              </div>
              <div className="w-[200px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Action
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            {mockSIAPolicies.map((policy) => (
              <div 
                key={policy.id}
                className="relative border-b border-[rgba(0,0,0,0.06)] last:border-b-0 hover:bg-[#f8f9fa] cursor-pointer min-h-[100px]"
                onClick={() => onPolicyClick?.(filtered[0])}
              >
                <div className="flex items-start px-[16px] py-[16px]">
                  {/* Policy Name */}
                  <div className="flex-1 flex flex-col gap-[2px] pr-[40px]">
                    <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[24px] tracking-[-0.6225px] text-[#1a1a1a]">
                      {policy.name}
                    </p>
                    <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                      {policy.description}
                    </p>
                  </div>

                  {/* Source */}
                  <div className="w-[280px]">
                    <SIASourceBadge 
                      badges={policy.sourceBadges}
                    />
                  </div>

                  {/* Destination */}
                  <div className="w-[180px]">
                    <SIADestinationBadge value={policy.destination} />
                  </div>

                  {/* Security Controls */}
                  <div className="w-[160px]">
                    <div className="bg-[#ececf0] border border-[rgba(0,0,0,0.1)] rounded-[8px] size-[24px] flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                        {policy.securityControls}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="w-[200px] flex items-center gap-[16px]">
                    <span className="inline-flex items-center rounded-[8px] bg-[#16a34a1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#16a34a]">
                      Allow
                    </span>
                    
                    {/* Action buttons */}
                    <div className="flex items-center gap-[4px]" onClick={(e) => e.stopPropagation()}>
                      <button 
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/internet-policy/${policy.id}/edit`)}
                      >
                        <Pencil className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/internet-policy/${policy.id}`)}
                      >
                        <Eye className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={(e) => handleDeleteClick(e, policy.id, policy.name)}
                      >
                        <Trash2 className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Policy</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the policy <strong>{policyToDelete?.name}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── SPA Policies Table ───────────────────────────────────────────────

// SPA Badge component - can be used for Source and Destination
function SPABadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center rounded-[8px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
      <div className="bg-[#ececf0] border-r border-[rgba(0,0,0,0.1)] pl-[9px] pr-[4px] py-[2px]">
        <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
          {label}:
        </span>
      </div>
      <div className="bg-[#ececf0] pl-[4px] pr-[9px] py-[2px]">
        <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[1.2] text-[#717182] whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

function SPAPoliciesTable({ 
  policies, 
  searchQuery,
  onNewPolicy,
  onPolicyClick
}: { 
  policies: Policy[]; 
  searchQuery: string;
  onNewPolicy?: () => void;
  onPolicyClick?: (policy: Policy) => void;
}) {
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState<{id: string; name: string} | null>(null);

  const handleDeleteClick = (e: React.MouseEvent, policyId: string, policyName: string) => {
    e.stopPropagation();
    setPolicyToDelete({ id: policyId, name: policyName });
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Add actual delete logic here
    console.log('Deleting policy:', policyToDelete?.id);
    setDeleteDialogOpen(false);
    setPolicyToDelete(null);
  };

  // Mock data matching Figma design exactly
  const mockSPAPolicies = [
    {
      id: '1',
      name: 'Allow Alice and John to Host IP 10.0.0.2',
      description: 'Allow user alice and john access from office to host ip 10.0.0.2 on port 22 on the same network',
      sourceBadges: [
        { label: 'Users', value: 'Alice, John' }
      ],
      destBadges: [
        { label: 'FQDN', value: '10.0.2.2' }
      ],
      trustLevel: 'High trust',
    }
  ];

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Section header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <SPAIcon />
          <div className="flex flex-col justify-center pb-[3px]">
            <span className="font-['Inter',sans-serif] font-bold text-[18px] leading-[28px] tracking-[-0.44px] text-[#1a1a1a]">
              Private Access Policies
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[24px] tracking-[-0.31px] text-[#717182]">
              Controls user access to internal applications and resources using Zero Trust principles.
            </span>
          </div>
        </div>
        <Button
          size="sm"
          className="shrink-0 gap-[8px] rounded-[8px] bg-[#0066cc] hover:bg-[#0052a6] text-white px-[11px] py-[6px]"
          onClick={onNewPolicy}
        >
          <Plus className="w-[16px] h-[16px]" />
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">New Policy</span>
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[16px] border border-[rgba(0,0,0,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden w-full">
        <div className="w-full">
          {/* Header */}
          <div className="bg-[#ececf0] border-b border-[rgba(0,0,0,0.1)]">
            <div className="flex items-center px-[16px] py-[12px]">
              <div className="flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Policy Name
                </p>
              </div>
              <div className="w-[180px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Source
                </p>
              </div>
              <div className="w-[160px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Destination
                </p>
              </div>
              <div className="w-[180px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Trust Level
                </p>
              </div>
              <div className="w-[200px]">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#717182] whitespace-nowrap">
                  Action
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            {mockSPAPolicies.map((policy) => (
              <div 
                key={policy.id}
                className="relative border-b border-[rgba(0,0,0,0.06)] last:border-b-0 hover:bg-[#f8f9fa] cursor-pointer min-h-[91px]"
                onClick={() => onPolicyClick?.(policies[0])}
              >
                <div className="flex items-start px-[16px] py-[16px]">
                  {/* Policy Name */}
                  <div className="flex-1 flex flex-col gap-[2px] pr-[40px]">
                    <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[24px] tracking-[-0.6225px] text-[#1a1a1a]">
                      {policy.name}
                    </p>
                    <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#717182]">
                      {policy.description}
                    </p>
                  </div>

                  {/* Source - Multiple badges stacked */}
                  <div className="w-[180px] flex flex-col gap-[11px]">
                    {policy.sourceBadges.map((badge, idx) => (
                      <SPABadge key={idx} label={badge.label} value={badge.value} />
                    ))}
                  </div>

                  {/* Destination - Multiple badges stacked */}
                  <div className="w-[160px] flex flex-col gap-[11px]">
                    {policy.destBadges.map((badge, idx) => (
                      <SPABadge key={idx} label={badge.label} value={badge.value} />
                    ))}
                  </div>

                  {/* Trust Level */}
                  <div className="w-[180px]">
                    {policy.trustLevel ? (
                      <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.3004px] text-[#1a1a1a]">
                        {policy.trustLevel}
                      </p>
                    ) : (
                      <div className="h-[18px]" />
                    )}
                  </div>

                  {/* Action */}
                  <div className="w-[200px] flex items-center gap-[16px]">
                    <span className="inline-flex items-center rounded-[8px] bg-[#16a34a1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[11px] leading-[16px] text-[#16a34a]">
                      Allow
                    </span>
                    
                    {/* Action buttons */}
                    <div className="flex items-center gap-[4px]" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/private-access-policy/${policy.id}/edit`)}
                      >
                        <Pencil className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={() => navigate(`/private-access-policy/${policy.id}`)}
                      >
                        <Eye className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                      <button
                        className="relative rounded-[10px] size-[32px] border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ececf0]"
                        onClick={(e) => handleDeleteClick(e, policy.id, policy.name)}
                      >
                        <Trash2 className="w-[14px] h-[14px] text-[#717182]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Policy</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the policy <strong>{policyToDelete?.name}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────

interface AccessPoliciesViewProps {
  onCreatePolicy?: () => void;
  onEditPolicy?: (id: string) => void;
}

export function AccessPoliciesView({ onCreatePolicy, onEditPolicy }: AccessPoliciesViewProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const zonePolicies = MOCK_POLICIES.filter((p) => p.type === 'Zone');
  const siaPolicies = MOCK_POLICIES.filter((p) => p.type === 'SIA');
  const spaPolicies = MOCK_POLICIES.filter((p) => p.type === 'SPA');

  const handleNewPrivateAccessPolicy = () => {
    navigate('/private-access-policy/create');
  };

  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Page header */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* Search and Filter */}
        <div className="flex items-center gap-[8px]">
          {/* Search Input */}
          <div className="relative w-[256px]">
            <div className="absolute left-[10px] top-[10px] w-[16px] h-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path 
                    d="M6 11.3334C8.94557 11.3334 11.3334 8.94557 11.3334 6C11.3334 3.05448 8.94557 0.666665 6 0.666665C3.05448 0.666665 0.666665 3.05448 0.666665 6C0.666665 8.94557 3.05448 11.3334 6 11.3334Z" 
                    stroke="#99A1AF" 
                    strokeWidth="1.33333" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M3.53337 3.53337L0.666665 0.666665" 
                    stroke="#99A1AF" 
                    strokeWidth="1.33333" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    transform="translate(10, 10)"
                  />
                </g>
              </svg>
            </div>
            <Input
              placeholder="Search policies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white pl-[36px] pr-[12px] py-[4px] h-[36px] rounded-[8px] border border-[rgba(0,0,0,0.1)] font-['Inter',sans-serif] font-normal text-[13px] text-[#1a1a1a] placeholder:text-[#717182] focus-visible:ring-0 focus-visible:border-[#0066cc] focus-visible:shadow-[0_0_0_3px_rgba(0,102,204,0.2)]"
            />
          </div>

          {/* Filter Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center gap-[8px] bg-white h-[36px] px-[13px] py-[1px] rounded-[8px] border border-[rgba(0,0,0,0.1)] shrink-0 hover:bg-[#ececf0]">
                <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[20px] text-[#1a1a1a] whitespace-nowrap">
                  Filter
                </span>
                <ChevronDown className="w-[14px] h-[14px] text-[#717182]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Policies</DropdownMenuItem>
              <DropdownMenuItem>Active Only</DropdownMenuItem>
              <DropdownMenuItem>Inactive Only</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Zone Based</DropdownMenuItem>
              <DropdownMenuItem>Internet Access</DropdownMenuItem>
              <DropdownMenuItem>Private Access</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Zone Based Policies */}
      <ZonePoliciesTable 
        onNewPolicy={() => navigate('/zone-policy/create')}
        onPolicyClick={(policy) => navigate(`/zone-policy/${policy.id}`)}
      />

      {/* Internet Access (SIA) Policies */}
      <SIAPoliciesTable 
        policies={siaPolicies} 
        searchQuery={searchQuery}
        onPolicyClick={(policy) => navigate(`/internet-policy/${policy.id}`)}
        onNewPolicy={() => navigate('/internet-policy/create')}
      />

      {/* Private Access (SPA) Policies */}
      <SPAPoliciesTable 
        policies={spaPolicies} 
        searchQuery={searchQuery}
        onNewPolicy={handleNewPrivateAccessPolicy}
        onPolicyClick={(policy) => navigate(`/private-access-policy/${policy.id}`)}
      />
    </div>
  );
}