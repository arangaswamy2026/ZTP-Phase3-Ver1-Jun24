import React, { useState, useMemo, useRef, useCallback } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Download, ChevronDown, XCircle, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { PageHeader } from './PageHeader';

// ── Activity data ────────────────────────────────────────────────────

export interface Activity {
  id: string;
  source: string;
  policyName: string;
  policyType: 'Zone' | 'Internet' | 'Private';
  destination: string;
  actionReason: string;
  action: 'Allowed' | 'Blocked';
  timeAgo: string;
}

export const MOCK_ACTIVITIES: Activity[] = [
  { id: 'act-1', source: 'sarah.johnson@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'malicious-site.example', actionReason: 'Category: Malware', action: 'Blocked', timeAgo: '2 minutes ago' },
  { id: 'act-2', source: 'mike.chen@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'salesforce.com', actionReason: 'Business Applications', action: 'Allowed', timeAgo: '5 minutes ago' },
  { id: 'act-3', source: 'emma.williams@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'suspicious-domain.xyz', actionReason: 'Reputation: High Risk', action: 'Blocked', timeAgo: '12 minutes ago' },
  { id: 'act-4', source: 'david.miller@acme.com', policyName: 'Policy to Access PCI Server', policyType: 'Private', destination: 'payment-gateway.internal', actionReason: 'App: PCI Server', action: 'Allowed', timeAgo: '15 minutes ago' },
  { id: 'act-5', source: 'lisa.brown@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'phishing-attempt.net', actionReason: 'Category: Phishing', action: 'Blocked', timeAgo: '18 minutes ago' },
  { id: 'act-6', source: 'james.garcia@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'github.com', actionReason: 'Developer Tools', action: 'Allowed', timeAgo: '23 minutes ago' },
  { id: 'act-7', source: 'anna.martinez@acme.com', policyName: 'Restrict Guest Zone to Employee Zone', policyType: 'Zone', destination: 'internal-server.corp', actionReason: 'Employee Zone', action: 'Blocked', timeAgo: '28 minutes ago' },
  { id: 'act-8', source: 'robert.lee@acme.com', policyName: 'Policy to Access User Database', policyType: 'Private', destination: 'user-db.internal', actionReason: 'Service: User DB', action: 'Allowed', timeAgo: '32 minutes ago' },
  { id: 'act-9', source: 'jennifer.wilson@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'gambling-site.com', actionReason: 'Category: Gambling', action: 'Blocked', timeAgo: '37 minutes ago' },
  { id: 'act-10', source: 'thomas.anderson@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'slack.com', actionReason: 'Communication', action: 'Allowed', timeAgo: '42 minutes ago' },
  { id: 'act-11', source: 'patricia.taylor@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'torrent-tracker.org', actionReason: 'Category: P2P', action: 'Blocked', timeAgo: '45 minutes ago' },
  { id: 'act-12', source: 'kevin.wright@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'notion.so', actionReason: 'Productivity', action: 'Allowed', timeAgo: '48 minutes ago' },
  { id: 'act-13', source: 'maria.rodriguez@acme.com', policyName: 'Policy to Access PCI Server', policyType: 'Private', destination: 'compliance-api.internal', actionReason: 'App: Compliance', action: 'Allowed', timeAgo: '52 minutes ago' },
  { id: 'act-14', source: 'steven.clark@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'crypto-miner.net', actionReason: 'Category: Cryptomining', action: 'Blocked', timeAgo: '55 minutes ago' },
  { id: 'act-15', source: 'nancy.hall@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'figma.com', actionReason: 'Design Tools', action: 'Allowed', timeAgo: '1 hour ago' },
  { id: 'act-16', source: 'brian.young@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'adware-domain.click', actionReason: 'Category: Adware', action: 'Blocked', timeAgo: '1 hour ago' },
  { id: 'act-17', source: 'karen.allen@acme.com', policyName: 'Policy to Access User Database', policyType: 'Private', destination: 'analytics-db.internal', actionReason: 'Service: Analytics', action: 'Allowed', timeAgo: '1 hour ago' },
  { id: 'act-18', source: 'daniel.king@acme.com', policyName: 'Restrict Guest Zone to Employee Zone', policyType: 'Zone', destination: 'hr-portal.corp', actionReason: 'Employee Zone', action: 'Blocked', timeAgo: '1 hour ago' },
  { id: 'act-19', source: 'susan.scott@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'jira.atlassian.net', actionReason: 'Project Management', action: 'Allowed', timeAgo: '1 hour ago' },
  { id: 'act-20', source: 'mark.green@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'exploit-kit.ru', actionReason: 'Reputation: Critical', action: 'Blocked', timeAgo: '2 hours ago' },
  { id: 'act-21', source: 'laura.baker@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'botnet-c2.example', actionReason: 'Category: Botnet', action: 'Blocked', timeAgo: '2 hours ago' },
  { id: 'act-22', source: 'chris.nelson@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'confluence.corp', actionReason: 'Documentation', action: 'Allowed', timeAgo: '2 hours ago' },
  { id: 'act-23', source: 'sandra.carter@acme.com', policyName: 'Policy to Access PCI Server', policyType: 'Private', destination: 'vault.internal', actionReason: 'App: Secrets Vault', action: 'Allowed', timeAgo: '2 hours ago' },
  { id: 'act-24', source: 'paul.mitchell@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'spam-relay.biz', actionReason: 'Category: Spam', action: 'Blocked', timeAgo: '3 hours ago' },
  { id: 'act-25', source: 'donna.perez@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'zoom.us', actionReason: 'Communication', action: 'Allowed', timeAgo: '3 hours ago' },
  { id: 'act-26', source: 'jason.roberts@acme.com', policyName: 'Initial Default SIA Configuration', policyType: 'Internet', destination: 'darkweb-proxy.onion', actionReason: 'Category: Proxy', action: 'Blocked', timeAgo: '3 hours ago' },
  { id: 'act-27', source: 'betty.turner@acme.com', policyName: 'Policy to Access User Database', policyType: 'Private', destination: 'config-service.internal', actionReason: 'Service: Config', action: 'Allowed', timeAgo: '3 hours ago' },
  { id: 'act-28', source: 'ryan.phillips@acme.com', policyName: 'Restrict Guest Zone to Employee Zone', policyType: 'Zone', destination: 'finance-app.corp', actionReason: 'Employee Zone', action: 'Blocked', timeAgo: '4 hours ago' },
  { id: 'act-29', source: 'helen.campbell@acme.com', policyName: 'Allow Employee Zone to Internet', policyType: 'Zone', destination: 'aws.amazon.com', actionReason: 'Cloud Services', action: 'Allowed', timeAgo: '4 hours ago' },
  { id: 'act-30', source: 'gary.parker@acme.com', policyName: 'Block High Risk Sites', policyType: 'Internet', destination: 'keylogger-host.net', actionReason: 'Category: Spyware', action: 'Blocked', timeAgo: '4 hours ago' },
];

// ── Action badge ─────────────────────────────────────────────────────

export function ActionBadge({ action }: { action: 'Allowed' | 'Blocked' }) {
  if (action === 'Allowed') {
    return (
      <span className="inline-flex items-center rounded-[8px] bg-[#16a34a1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#16a34a]">
        Allowed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-[8px] bg-[#d4183d1a] px-[8px] py-[3px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#d4183d]">
      Blocked
    </span>
  );
}

// ── Header cell ──────────────────────────────────────────────────────

function HeaderCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#6a7282] whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  );
}

// ── Filter Dropdown ──────────────────────────────────────────────────

function FilterDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  const selectedLabel = options.find((o) => o.value === value)?.label ?? label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-[6px] rounded-[8px] border border-[#d1d5dc] bg-white px-[12px] h-[34px] hover:bg-[#f9fafb] transition-colors">
          <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6a7282]">
            {label}:
          </span>
          <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[20px] text-[#101828]">
            {selectedLabel}
          </span>
          <ChevronDown className="w-[14px] h-[14px] text-[#6a7282]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[140px]">
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`font-['Inter',sans-serif] text-[13px] ${
              value === opt.value ? 'bg-[#f3f4f6] font-medium text-[#101828]' : 'text-[#364153]'
            }`}
          >
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ── Pagination slider ────────────────────────────────────────────────

const PER_PAGE_OPTIONS = [10, 15, 25, 50];

function PaginationBar({
  currentPage,
  totalPages,
  totalRecords,
  perPage,
  onPageChange,
  onPerPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  perPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (pp: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const startIdx = (currentPage - 1) * perPage + 1;
  const endIdx = Math.min(currentPage * perPage, totalRecords);

  // Slider progress (0-1)
  const progress = totalPages <= 1 ? 0 : (currentPage - 1) / (totalPages - 1);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!trackRef.current || totalPages <= 1) return;
      const rect = trackRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const ratio = x / rect.width;
      const page = Math.round(ratio * (totalPages - 1)) + 1;
      onPageChange(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages, onPageChange]
  );

  const handleDrag = useCallback(
    (e: MouseEvent) => {
      if (!trackRef.current || totalPages <= 1) return;
      const rect = trackRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const ratio = x / rect.width;
      const page = Math.round(ratio * (totalPages - 1)) + 1;
      onPageChange(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages, onPageChange]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(true);

      const onMove = (ev: MouseEvent) => handleDrag(ev);
      const onUp = () => {
        setDragging(false);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    },
    [handleDrag]
  );

  return (
    <div className="flex items-center justify-between px-[10px] py-[8px] w-full">
      {/* Left: record info + per-page dropdown */}
      <div className="flex items-center gap-[14px]">
        <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#191c25] whitespace-nowrap">
          Showing {startIdx}-{endIdx} of {totalRecords} records
        </span>
        <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#191c25]">|</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="inline-flex items-center gap-[4px] font-['Inter',sans-serif] font-normal text-[13px] text-[#191c25] hover:text-[#000]">
              {perPage} per page
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12.6667L14 5.33333L2 5.33333L8 12.6667Z" fill="#191C25" />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[80px]">
            {PER_PAGE_OPTIONS.map((n) => (
              <DropdownMenuItem
                key={n}
                onClick={() => onPerPageChange(n)}
                className={`font-['Inter',sans-serif] text-[13px] ${
                  perPage === n ? 'bg-[#f3f4f6] font-medium' : ''
                }`}
              >
                {n}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right: slider control */}
      <div className="flex items-center gap-[4px] w-[297px]">
        {/* Left endpoint */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke={currentPage === 1 ? '#999' : '#555'} fill="none" />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex-1 relative h-[29px] flex items-center cursor-pointer"
          onClick={handleTrackClick}
        >
          {/* Background track */}
          <div className="absolute left-0 right-0 h-[4px] rounded-[23px] bg-white border border-[#d5dbe5]" />
          {/* Filled portion */}
          <div
            className="absolute left-0 h-[4px] rounded-[23px] bg-[#e4e4e4]"
            style={{ width: `${progress * 100}%` }}
          />
          {/* Ball / thumb */}
          <div
            className="absolute -translate-x-1/2 select-none"
            style={{ left: `${progress * 100}%` }}
            onMouseDown={handleMouseDown}
          >
            <div
              className={`flex items-center justify-between gap-[4px] bg-[#d5dbe5] rounded-[88px] pl-[12px] pr-[8px] py-[4px] min-w-[90px] cursor-grab ${
                dragging ? 'cursor-grabbing shadow-md' : ''
              }`}
            >
              <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#555] whitespace-nowrap">
                Page {currentPage}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="shrink-0"
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 9.5L10.5 4L1.5 4L6 9.5Z" fill="#555" />
                    </svg>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="min-w-[80px] max-h-[200px] overflow-auto">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <DropdownMenuItem
                      key={p}
                      onClick={() => onPageChange(p)}
                      className={`font-['Inter',sans-serif] text-[13px] ${
                        currentPage === p ? 'bg-[#f3f4f6] font-medium' : ''
                      }`}
                    >
                      Page {p}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Right endpoint */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle
              cx="6"
              cy="6"
              r="5.5"
              fill={currentPage === totalPages ? '#E4E4E4' : 'none'}
              stroke={currentPage === totalPages ? '#999' : '#999'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────

export function ActivityTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAction, setFilterAction] = useState<'all' | 'Allowed' | 'Blocked'>('all');
  const [filterPolicyType, setFilterPolicyType] = useState<'all' | 'Zone' | 'Internet' | 'Private'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const filteredActivities = useMemo(() => {
    return MOCK_ACTIVITIES.filter((activity) => {
      if (filterAction !== 'all' && activity.action !== filterAction) return false;
      if (filterPolicyType !== 'all' && activity.policyType !== filterPolicyType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!activity.source.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [filterAction, filterPolicyType, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredActivities.length / perPage));

  // Reset to page 1 when filters change
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedActivities = useMemo(() => {
    const start = (safeCurrentPage - 1) * perPage;
    return filteredActivities.slice(start, start + perPage);
  }, [filteredActivities, safeCurrentPage, perPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handlePerPageChange = (pp: number) => {
    setPerPage(pp);
    setCurrentPage(1);
  };

  // Reset page when filters change
  const handleFilterAction = (v: 'all' | 'Allowed' | 'Blocked') => {
    setFilterAction(v);
    setCurrentPage(1);
  };
  const handleFilterPolicyType = (v: 'all' | 'Zone' | 'Internet' | 'Private') => {
    setFilterPolicyType(v);
    setCurrentPage(1);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleExport = () => {
    const headers = ['Source', 'Policy Info', 'Policy Type', 'Destination', 'Action Reason', 'Action', 'Time'];
    const rows = filteredActivities.map((a) => [
      a.source, a.policyName, a.policyType, a.destination, a.actionReason, a.action, a.timeAgo,
    ]);
    const csv = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `activity-log-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <PageHeader
        title="Activity Log"
        subtitle="View and audit user sessions and security events"
        actions={
          <Button
            variant="outline"
            size="sm"
            className="gap-[8px] rounded-[8px] border-black/10 px-[11px] py-[6px]"
            onClick={handleExport}
          >
            <Download className="w-[16px] h-[16px]" />
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#0a0a0a]">
              Export
            </span>
          </Button>
        }
      />

      {/* Table card */}
      <div className="bg-white rounded-[10px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden w-full">
        {/* Toolbar */}
        <div className="flex items-center gap-[10px] px-[16px] py-[12px] border-b border-[#e5e7eb] bg-white">
          <div className="relative">
            <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#9ca3af]" />
            <Input
              placeholder="Search by user..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-[32px] h-[34px] w-[220px] rounded-[8px] border-[#d1d5dc] bg-white font-['Inter',sans-serif] text-[13px] placeholder:text-[#9ca3af]"
            />
          </div>
          <div className="w-px h-[20px] bg-[#e5e7eb]" />
          <FilterDropdown
            label="Action"
            value={filterAction}
            options={[
              { value: 'all', label: 'All' },
              { value: 'Allowed', label: 'Allowed' },
              { value: 'Blocked', label: 'Blocked' },
            ]}
            onChange={handleFilterAction}
          />
          <FilterDropdown
            label="Policy Type"
            value={filterPolicyType}
            options={[
              { value: 'all', label: 'All' },
              { value: 'Zone', label: 'Zone' },
              { value: 'Internet', label: 'Internet' },
              { value: 'Private', label: 'Private' },
            ]}
            onChange={handleFilterPolicyType}
          />
          {(filterAction !== 'all' || filterPolicyType !== 'all' || searchQuery.trim()) && (
            <button
              onClick={() => {
                setFilterAction('all');
                setFilterPolicyType('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="font-['Inter',sans-serif] font-medium text-[12px] text-[#d4183d] hover:underline ml-[4px]"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <HeaderCell className="w-[20%]">Source</HeaderCell>
              <HeaderCell className="w-[22%]">Policy Info</HeaderCell>
              <HeaderCell className="w-[10%]">Policy Type</HeaderCell>
              <HeaderCell className="w-[16%]">Destination</HeaderCell>
              <HeaderCell className="w-[14%]">Action Reason</HeaderCell>
              <HeaderCell className="w-[9%]">Action</HeaderCell>
              <HeaderCell className="w-[9%]">Time</HeaderCell>
            </tr>
          </thead>
          <tbody>
            {paginatedActivities.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-[16px] py-[32px] text-center font-['Inter',sans-serif] text-[14px] text-[#6a7282]">
                  No activities found matching the current filters
                </td>
              </tr>
            ) : (
              paginatedActivities.map((activity) => (
                <tr key={activity.id} className="border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#fafafa]">
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                      {activity.source}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                      {activity.policyName}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                      {activity.policyType}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                      {activity.destination}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                      {activity.actionReason}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <ActionBadge action={activity.action} />
                  </td>
                  <td className="px-[16px] py-[12px] align-middle">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                      {activity.timeAgo}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination bar */}
        {filteredActivities.length > 0 && (
          <div className="border-t border-[#e5e7eb]">
            <PaginationBar
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              totalRecords={filteredActivities.length}
              perPage={perPage}
              onPageChange={handlePageChange}
              onPerPageChange={handlePerPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
