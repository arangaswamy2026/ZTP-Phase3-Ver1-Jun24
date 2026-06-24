import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import {
  Edit,
  Trash2,
  Info,
  Shield,
  Lock,
  Monitor,
  Globe,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Ban,
} from 'lucide-react';
import { MOCK_POLICIES } from '../components/policies/PolicyData';
import { PageHeader } from '../components/PageHeader';

// Enriched SIA policy data for the detail view
const SIA_POLICY_DETAILS: Record<string, {
  threatProtectionEnabled: boolean;
  threats: string[];
  categoryBlocking: { active: boolean; categories: string[]; tip?: string };
  applicationBlocking: { active: boolean; apps: string[] };
  applicationBypass: { active: boolean; description: string; apps?: string[]; note?: string };
  domainBlocking: { active: boolean; description: string; domains?: string[]; note?: string };
  domainBypass: { active: boolean; description: string; domains?: string[]; note?: string };
  geoBlocking: { active: boolean; regions: string[] };
  riskBasedBlocking: { active: boolean; description: string; levels: { action: string; risk: string; icon: 'block' | 'warn' | 'allow' }[]; note?: string };
  urlAllowlist: { active: boolean; description: string; domains?: string[]; note?: string };
}> = {
  'sia-def-1': {
    threatProtectionEnabled: true,
    threats: [
      'Bots / Cryptomining',
      'Dangerous Configuration / History',
      'Dangerous 3rd Party Infrastructure',
      'Dangerous Nameserver',
      'Malicious SSL Cert',
      'Malware & Ransomware',
      'Malware C2',
      'Phishing',
      'Risky DNS Transactions',
      'Spam / VoIP fraud / Spyware',
      'Other Known Bad (Community Intelligence)',
      'New Domains',
    ],
    categoryBlocking: {
      active: true,
      categories: ['Adult / Pornography', 'Gambling & Illegal Downloads (P2P)', 'Malicious Sites & Phishing', 'Hacking Tools & Anonymizers (VPNs)'],
      tip: 'Tip: Block "Social Media" for marketing roles, block for others.',
    },
    applicationBlocking: {
      active: true,
      apps: ['Torrents & File Sharing (uTorrent, etc.)', 'Proxy / VPN Applications', 'Hacking Tools', 'Unauthorized Remote Access'],
    },
    applicationBypass: {
      active: false,
      description: 'Use only when a trusted business app breaks due to security inspection.',
      note: 'No application bypass rules configured.',
    },
    domainBlocking: {
      active: false,
      description: 'Block known unsafe domains and high-risk TLDs (e.g., .xyz, .top).',
      note: 'No additional domain block rules configured.',
    },
    domainBypass: {
      active: false,
      description: 'Bypass security inspection for trusted business domains.',
      note: 'No domain bypass rules configured.',
    },
    geoBlocking: {
      active: true,
      regions: ['Russia', 'China', 'Iran', 'North Korea', 'Brazil (Fraud Risk)', 'Eastern Europe (Cybercrime)'],
    },
    riskBasedBlocking: {
      active: true,
      description: 'AI-based classification to prevent phishing and typo-squatting.',
      levels: [
        { action: 'Block', risk: 'High-Risk', icon: 'block' },
        { action: 'Warn', risk: 'Medium-Risk', icon: 'warn' },
        { action: 'Allow', risk: 'Low-Risk', icon: 'allow' },
      ],
      note: 'Note: Not supported on Linux/Chromebooks (safe to leave ON).',
    },
    urlAllowlist: {
      active: false,
      description: 'Add only business-critical domains to ensure inspection never interferes with operations.',
      note: 'No URL allowlist rules configured.',
    },
  },
  'sia-usr-1': {
    threatProtectionEnabled: true,
    threats: [
      'Bots / Cryptomining',
      'Malware & Ransomware',
      'Phishing',
      'Malware C2',
      'Risky DNS Transactions',
      'Spam / VoIP fraud / Spyware',
    ],
    categoryBlocking: {
      active: true,
      categories: ['Social Networking'],
    },
    applicationBlocking: { active: false, apps: [] },
    applicationBypass: { active: false, description: 'Use only when a trusted business app breaks due to security inspection.', note: 'No application bypass rules configured.' },
    domainBlocking: { active: false, description: 'Block known unsafe domains and high-risk TLDs.', note: 'No rules configured.' },
    domainBypass: { active: false, description: 'Bypass security inspection for trusted business domains.', note: 'No domain bypass rules configured.' },
    geoBlocking: { active: false, regions: [] },
    riskBasedBlocking: { active: false, description: 'AI-based classification to prevent phishing and typo-squatting.', levels: [], note: 'Not configured.' },
    urlAllowlist: { active: false, description: 'Add business-critical domains.', note: 'No URL allowlist rules configured.' },
  },
  'sia-usr-2': {
    threatProtectionEnabled: true,
    threats: [
      'Bots / Cryptomining',
      'Malware & Ransomware',
      'Malware C2',
      'Phishing',
      'Dangerous 3rd Party Infrastructure',
    ],
    categoryBlocking: {
      active: true,
      categories: ['Malicious Sites & Phishing', 'Hacking Tools & Anonymizers (VPNs)'],
    },
    applicationBlocking: {
      active: true,
      apps: ['Hacking Tools', 'Unauthorized Remote Access'],
    },
    applicationBypass: { active: false, description: 'Use only when a trusted business app breaks due to security inspection.', note: 'No application bypass rules configured.' },
    domainBlocking: { active: false, description: 'Block known unsafe domains and high-risk TLDs.', note: 'No rules configured.' },
    domainBypass: { active: false, description: 'Bypass security inspection for trusted business domains.', note: 'No domain bypass rules configured.' },
    geoBlocking: { active: true, regions: ['Russia', 'China', 'Iran', 'North Korea'] },
    riskBasedBlocking: {
      active: true,
      description: 'AI-based classification to prevent phishing and typo-squatting.',
      levels: [
        { action: 'Block', risk: 'High-Risk', icon: 'block' },
        { action: 'Warn', risk: 'Medium-Risk', icon: 'warn' },
        { action: 'Allow', risk: 'Low-Risk', icon: 'allow' },
      ],
    },
    urlAllowlist: { active: false, description: 'Add business-critical domains.', note: 'No URL allowlist rules configured.' },
  },
};

// Default fallback for any SIA policy without specific detail data
const DEFAULT_SIA_DETAILS = SIA_POLICY_DETAILS['sia-def-1'];

function RiskIcon({ type }: { type: 'block' | 'warn' | 'allow' }) {
  if (type === 'block') return <Ban className="w-[14px] h-[14px] text-red-600" />;
  if (type === 'warn') return <AlertCircle className="w-[14px] h-[14px] text-amber-500" />;
  return <CheckCircle2 className="w-[14px] h-[14px] text-green-600" />;
}

function FilterSectionIcon({ type }: { type: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    category: <Shield className="w-[16px] h-[16px]" />,
    application: <Lock className="w-[16px] h-[16px]" />,
    bypass: <Monitor className="w-[16px] h-[16px]" />,
    domain: <Globe className="w-[16px] h-[16px]" />,
    geo: <Globe className="w-[16px] h-[16px]" />,
    risk: <AlertTriangle className="w-[16px] h-[16px]" />,
    allowlist: <CheckCircle2 className="w-[16px] h-[16px]" />,
  };
  return (
    <div className="flex items-center justify-center bg-[#f3f4f6] rounded-[6px] size-[28px] shrink-0">
      <span className="text-[#6a7282]">{iconMap[type] || <Shield className="w-[16px] h-[16px]" />}</span>
    </div>
  );
}

function ActiveBadge() {
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[#93c5fd] bg-[#dbeafe] px-[6px] py-[1px] font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] text-[#1e40af]">
      Active
    </span>
  );
}

function TagBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[3px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]">
      {children}
    </span>
  );
}

export function InternetPolicyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const policy = MOCK_POLICIES.find((p) => p.id === id && p.type === 'SIA');

  if (!policy) {
    return (
      <div className="flex flex-col items-center justify-center gap-[16px] py-[80px]">
        <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#6a7282]">
          Policy not found
        </span>
        <Button variant="outline" onClick={() => navigate('/access-policies')}>
          Back to Policies
        </Button>
      </div>
    );
  }

  const details = SIA_POLICY_DETAILS[policy.id] || DEFAULT_SIA_DETAILS;
  const isAllow = policy.action === 'Allow';
  const actionColor = isAllow ? '#008236' : '#c10007';

  return (
    <div className="flex flex-col gap-[24px] w-full max-w-[900px]">
      <PageHeader
        title={policy.name}
        subtitle={policy.description}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-[6px] rounded-[8px] border-black/10"
              onClick={() => navigate(`/internet-policy/${policy.id}/edit`)}
            >
              <Edit className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Edit Policy
              </span>
            </Button>
            <Button variant="outline" size="sm" className="gap-[6px] rounded-[8px] border-red-200 text-red-600 hover:bg-red-50">
              <Trash2 className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Delete
              </span>
            </Button>
          </div>
        }
      />

      {/* Header Card */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] pt-[24px] pb-[20px] flex flex-col gap-[20px]">
          {/* Badges */}
          <div className="flex items-center gap-[8px]">
            <span className="inline-flex items-center rounded-full border border-[#c4b5fd] bg-[#ede9fe] px-[12px] py-[3px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#7c3aed]">
              Internet Policy
            </span>
            <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f3f4f6] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] tracking-[0.12px] text-[#6a7282]">
              Default
            </span>
          </div>
        </div>
      </div>

      {/* Source and Destination Card */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px]">
          <div className="flex items-center gap-[4px]">
            {/* Source */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">Source</h3>
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                  <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">Users: </span>
                  </div>
                  <div className="px-[4px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">Alice, John</span>
                  </div>
                </div>
                <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                  <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">Group:</span>
                  </div>
                  <div className="px-[4px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-[20px] relative" style={{ marginTop: '48px' }}>
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none">
                <line x1="10" y1="10" x2="162" y2="10" stroke={actionColor} strokeWidth="1" />
              </svg>
            </div>

            {/* Allow Badge */}
            <div className="flex-shrink-0" style={{ marginTop: '48px' }}>
              <div 
                className="px-[8px] py-[4px] rounded-[10px] border"
                style={{ 
                  backgroundColor: isAllow ? '#f0fdf4' : '#fee2e2', 
                  borderColor: isAllow ? '#b9f8cf' : '#fca5a5' 
                }}
              >
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: actionColor }}>
                  {policy.action}
                </span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-[20px] relative" style={{ marginTop: '48px' }}>
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none">
                <line x1="10" y1="10" x2="162" y2="10" stroke={actionColor} strokeWidth="1" />
              </svg>
            </div>

            {/* Destination */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">Destination</h3>
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                  <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">Applications: </span>
                  </div>
                  <div className="px-[4px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">Envoy, Box</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Protection */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[12px]">
          <div className="flex items-center gap-[10px]">
            <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
              Threat Protection
            </h3>
            {details.threatProtectionEnabled && (
              <span className="inline-flex items-center rounded-[6px] border border-[#b9f8cf] bg-[#dcfce7] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[11px] leading-[15px] text-[#008236]">
                Enabled
              </span>
            )}
          </div>
          
          {/* Info Box */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px] px-[13px] py-[8px] flex items-center gap-[8px]">
            <Info className="w-[14px] h-[14px] text-[#3b82f6]" />
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
              All threat categories below are enabled by default and cannot be disabled.
            </p>
          </div>

          {/* Threat Categories as Capsules with Shield Icons */}
          <div className="flex flex-wrap gap-[8px]">
            {details.threats.map((threat) => (
              <div 
                key={threat} 
                className="flex items-center gap-[6px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[6px]"
              >
                <Shield className="w-[12px] h-[12px] text-[#6a7282]" />
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#364153]">
                  {threat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filtering & Exceptions */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
            Filtering & Exceptions
          </h3>

          {/* Category Blocking */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="category" />
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                Category Blocking
              </span>
              {details.categoryBlocking.active && <ActiveBadge />}
            </div>
            {details.categoryBlocking.categories.length > 0 && (
              <div className="flex flex-wrap gap-[6px] pl-[36px]">
                {details.categoryBlocking.categories.map((cat) => (
                  <TagBadge key={cat}>{cat}</TagBadge>
                ))}
              </div>
            )}
            {details.categoryBlocking.tip && (
              <p className="font-['Inter',sans-serif] font-normal text-[11px] leading-[15px] text-[#9ca3af] italic pl-[36px]">
                {details.categoryBlocking.tip}
              </p>
            )}
          </div>

          {/* Application Blocking */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="application" />
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                Application Blocking
              </span>
              {details.applicationBlocking.active && <ActiveBadge />}
            </div>
            {details.applicationBlocking.apps.length > 0 && (
              <div className="flex flex-wrap gap-[6px] pl-[36px]">
                {details.applicationBlocking.apps.map((app) => (
                  <TagBadge key={app}>{app}</TagBadge>
                ))}
              </div>
            )}
          </div>

          {/* Application Bypass */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="bypass" />
              <span className={`font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] ${details.applicationBypass.active ? 'text-[#101828]' : 'text-[#6a7282]'}`}>
                Application Bypass
              </span>
              {details.applicationBypass.active && <ActiveBadge />}
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] pl-[36px]">
              {details.applicationBypass.description}
            </p>
            {details.applicationBypass.note && (
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af] italic pl-[36px]">
                {details.applicationBypass.note}
              </p>
            )}
          </div>

          {/* Domain Blocking */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="domain" />
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                Domain Blocking
              </span>
              {details.domainBlocking.active && <ActiveBadge />}
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] pl-[36px]">
              {details.domainBlocking.description}
            </p>
            {details.domainBlocking.note && (
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af] italic pl-[36px]">
                {details.domainBlocking.note}
              </p>
            )}
          </div>

          {/* Geo-Blocking */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="geo" />
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                Geo-Blocking
              </span>
              {details.geoBlocking.active && <ActiveBadge />}
            </div>
            {details.geoBlocking.regions.length > 0 && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#364153] pl-[36px]">
                  Block High-Risk Regions:
                </p>
                <div className="flex flex-wrap gap-[6px] pl-[36px]">
                  {details.geoBlocking.regions.map((region) => (
                    <TagBadge key={region}>{region}</TagBadge>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Risk-Based URL Blocking */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="risk" />
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                Risk-Based URL Blocking (AI/NLP)
              </span>
              {details.riskBasedBlocking.active && <ActiveBadge />}
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] pl-[36px]">
              {details.riskBasedBlocking.description}
            </p>
            {details.riskBasedBlocking.levels.length > 0 && (
              <div className="flex gap-[10px] pl-[36px]">
                {details.riskBasedBlocking.levels.map((level) => (
                  <div
                    key={level.action}
                    className="flex items-center gap-[6px] px-[10px] py-[5px] bg-white border border-[#e5e7eb] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  >
                    <RiskIcon type={level.icon} />
                    <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#101828]">
                      {level.action}
                    </span>
                    <span className="font-['Inter',sans-serif] font-normal text-[11px] leading-[15px] text-[#6a7282] border-l border-[#e5e7eb] pl-[6px] ml-[2px]">
                      {level.risk}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {details.riskBasedBlocking.note && (
              <p className="font-['Inter',sans-serif] font-normal text-[10px] leading-[14px] text-[#9ca3af] pl-[36px]">
                {details.riskBasedBlocking.note}
              </p>
            )}
          </div>

          {/* URL Allowlist */}
          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[8px]">
              <FilterSectionIcon type="allowlist" />
              <span className={`font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] ${details.urlAllowlist.active ? 'text-[#101828]' : 'text-[#6a7282]'}`}>
                URL Allowlist
              </span>
              {details.urlAllowlist.active && <ActiveBadge />}
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] pl-[36px]">
              {details.urlAllowlist.description}
            </p>
            {details.urlAllowlist.note && (
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af] italic pl-[36px]">
                {details.urlAllowlist.note}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-end gap-[10px] pb-[8px]">
        <Button
          variant="outline"
          className="rounded-[8px] border-[#d1d5db] px-[20px]"
          onClick={() => navigate('/access-policies')}
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
            Close
          </span>
        </Button>
        <Button
          className="gap-[6px] rounded-[8px] bg-[#d4183d] hover:bg-[#b01430] text-white px-[20px]"
          onClick={() => navigate(`/internet-policy/${policy.id}/edit`)}
        >
          <Edit className="w-[14px] h-[14px]" />
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
            Edit Policy
          </span>
        </Button>
      </div>
    </div>
  );
}