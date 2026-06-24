import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Copy,
  Power,
  MoreVertical,
  Shield,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { CreatePostureProfileForm } from './CreatePostureProfileForm';
import { ProfileDetailsModal } from './ProfileDetailsModal';
import { CreateTrustProfile } from './CreateTrustProfile';

// ── Mock data ────────────────────────────────────────────────────────

interface Profile {
  id: string;
  name: string;
  category: string;
  description: string;
  trustLogic?: string;
  controls: string[];
  isDefault: boolean;
  policies: number;
  lastModified: string;
}

const MOCK_PROFILES: Record<string, Profile[]> = {
  trustProfiles: [
    {
      id: 'tp-1',
      name: 'Organization Trust Profile',
      category: 'Trust Profiles',
      description: 'Enforces strict device compliance for corporate-managed endpoints',
      trustLogic: 'High Trust',
      controls: ['Disk Encryption', 'Antivirus Running', 'Firewall Active', 'OS Version Check'],
      isDefault: true,
      policies: 5,
      lastModified: '2024-02-28T14:30:00Z',
    },
  ],
};

// ── Section icon components ──────────────────────────────────────────

function PostureIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#ffedd4] size-[40px] shrink-0">
      <Shield className="w-[20px] h-[20px] text-[#CA3500]" />
    </div>
  );
}

// ── Type badge (Default/Custom) ──────────────────────────────────────

function TypeBadge({ isDefault }: { isDefault: boolean }) {
  if (isDefault) {
    return (
      <span className="inline-flex items-center rounded-[6px] border border-[#d4d4d8] bg-[#fafafa] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#52525b]">
        Default
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#1e40af]">
        Custom
      </span>
  );
}

// ── Trust level badge ────────────────────────────────────────────────

function TrustBadge({ level }: { level: string }) {
  let bgClass = 'border-[#e5e7eb] bg-[#f3f4f6] text-[#4a5565]';
  if (level.includes('High')) bgClass = 'border-[#b9f8cf] bg-[#f0fdf4] text-[#008236]';
  if (level.includes('Medium')) bgClass = 'border-[#fde68a] bg-[#fefce8] text-[#a16207]';
  if (level.includes('Low')) bgClass = 'border-[#fca5a5] bg-[#fef2f2] text-[#dc2626]';

  return (
    <span
      className={`inline-flex items-center rounded-[8px] border px-[8px] py-[3px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] ${bgClass}`}
    >
      {level}
    </span>
  );
}

// ── Row actions ──────────────────────────────────────────────────────

function RowActions({ profile, onEdit, isTrustProfile = false }: { profile: Profile; onEdit?: (id: string) => void; isTrustProfile?: boolean }) {
  return (
    <div className="flex items-center gap-[4px]">
      <Button
        variant="ghost"
        size="sm"
        className="h-[32px] w-[32px] p-0 rounded-[8px] border border-black/10"
        onClick={() => onEdit?.(profile.id)}
      >
        <Edit className="w-[14px] h-[14px] text-[#0a0a0a]" />
      </Button>
      {!isTrustProfile && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-[32px] w-[32px] p-0 rounded-[8px] border border-black/10"
            >
              <MoreVertical className="w-[18px] h-[18px] text-[#0a0a0a]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Power className="w-4 h-4 mr-2" />
              Disable
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

// ── Shared header cell ───────────────────────────────────────────────

function HeaderCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-[12px] py-[10px] text-left font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282] whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  );
}

// ── Format date helper ───────────────────────────────────────────────

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Section config ───────────────────────────────────────────────────

interface SectionConfig {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  showTrustLogic: boolean;
}

const SECTIONS: SectionConfig[] = [
  {
    key: 'trustProfiles',
    title: 'Trust Profiles',
    description: 'Define trust levels for devices based on compliance checks.',
    icon: <PostureIcon />,
    showTrustLogic: true,
  },
];

// ── Profile section table ────────────────────────────────────────────

function ProfileSection({
  config,
  profiles,
  searchQuery,
  onEdit,
  onCreateProfile,
  onViewDetails,
}: {
  config: SectionConfig;
  profiles: Profile[];
  searchQuery: string;
  onEdit?: (id: string) => void;
  onCreateProfile: () => void;
  onViewDetails?: (profile: Profile) => void;
}) {
  const filtered = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Section header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          {config.icon}
          <div className="flex flex-col justify-center pb-[3px]">
            <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] tracking-[-0.44px] text-[#101828]">
              {config.title}
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[24px] tracking-[-0.31px] text-[#6a7282]">
              {config.description}
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[10px] border border-[#e5e7eb] overflow-hidden w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <HeaderCell className="w-[24%]">Profile Name</HeaderCell>
              {config.showTrustLogic && <HeaderCell className="w-[13%]">Trust Level Logic</HeaderCell>}
              <HeaderCell className={config.showTrustLogic ? 'w-[15%]' : 'w-[20%]'}>
                Enabled Checks
              </HeaderCell>
              <HeaderCell className="w-[12%]">Type</HeaderCell>
              <HeaderCell className="w-[16%]">Last Modified</HeaderCell>
              <HeaderCell className="w-[10%]" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={config.showTrustLogic ? 6 : 5}
                  className="px-[12px] py-[32px] text-center font-['Inter',sans-serif] text-[14px] text-[#6a7282]"
                >
                  No {config.title.toLowerCase()} found
                </td>
              </tr>
            ) : (
              filtered.map((profile) => (
                <tr
                  key={profile.id}
                  className="border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#fafafa] cursor-pointer"
                  onClick={(e) => {
                    // Don't trigger if clicking on action buttons
                    if ((e.target as HTMLElement).closest('button')) return;
                    onViewDetails?.(profile);
                  }}
                >
                  <td className="px-[12px] py-[10px] align-middle">
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                        {profile.name}
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] line-clamp-1">
                        {profile.description}
                      </span>
                    </div>
                  </td>
                  {config.showTrustLogic && (
                    null
                  )}
                  <td className="px-[12px] py-[10px] align-middle">
                    <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                      {profile.controls.length} {profile.controls.length === 1 ? 'check' : 'checks'}
                    </span>
                  </td>
                  <td className="px-[12px] py-[10px] align-middle">
                    <TypeBadge isDefault={profile.isDefault} />
                  </td>
                  <td className="px-[12px] py-[10px] align-middle">
                    <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                      {formatDate(profile.lastModified)}
                    </span>
                  </td>
                  <td className="px-[12px] py-[10px] align-middle">
                    <RowActions profile={profile} onEdit={onEdit} isTrustProfile={config.key === 'trustProfiles'} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────

interface ProfilesViewProps {
  onCreateProfile?: (type: string) => void;
  onEditProfile?: (id: string) => void;
}

export function ProfilesView({ onCreateProfile, onEditProfile }: ProfilesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSaveProfile = (profile: any) => {
    console.log('Saving profile:', profile);
  };

  const handleViewDetails = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsDetailsOpen(true);
  };

  const handleDeleteProfile = (id: string) => {
    console.log('Deleting profile:', id);
    setIsDetailsOpen(false);
  };

  const handleDuplicateProfile = (id: string) => {
    console.log('Duplicating profile:', id);
    setIsDetailsOpen(false);
  };

  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Page header */}
      <div className="flex items-center justify-between w-full">
        {/* Search */}
        <div className="relative w-[256px]">
          <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#99A1AF]" />

        </div>
      </div>

      {/* Profile sections */}
      {SECTIONS.map((config) => (
        <ProfileSection
          key={config.key}
          config={config}
          profiles={MOCK_PROFILES[config.key] || []}
          searchQuery={searchQuery}
          onEdit={onEditProfile}
          onViewDetails={(profile) => {
            if (config.key === 'trustProfiles' && profile.isDefault) {
              navigate('/profiles/default-trust-profile');
            } else {
              handleViewDetails(profile);
            }
          }}
          onCreateProfile={() => {
            if (config.key === 'posture') {
              setIsCreateFormOpen(true);
            } else {
              onCreateProfile?.(config.key);
            }
          }}
        />
      ))}

      {/* Create Posture Profile Form */}
      <CreatePostureProfileForm
        open={isCreateFormOpen}
        onOpenChange={setIsCreateFormOpen}
        onSave={handleSaveProfile}
      />

      {/* Profile Details Modal */}
      <ProfileDetailsModal
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        profile={selectedProfile}
        onEdit={(id) => {
          onEditProfile?.(id);
          setIsDetailsOpen(false);
        }}
        onDelete={handleDeleteProfile}
        onDuplicate={handleDuplicateProfile}
      />
    </div>
  );
}