import React from 'react';
import { Server } from 'lucide-react';

interface ConnectorCard {
  type: 'secure-remote-access' | 'service-tunnel';
  typeLabel: string;
  name: string;
  status: 'online' | 'offline';
  privateNetworks?: { label: string; ipRange: string };
  internalDomains?: string[];
  policyRules?: string[];
}

const connectors: ConnectorCard[] = [
  {
    type: 'secure-remote-access',
    typeLabel: 'Secure Remote Access',
    name: 'ZTP Connector',
    status: 'online',
    privateNetworks: { label: 'Employee Zone', ipRange: '192.10.10.0/16' },
    internalDomains: ['dentrix.local', 'erp.riverside.local'],
  },
  {
    type: 'service-tunnel',
    typeLabel: 'Service Tunnel',
    name: 'ST - Remote - Employee - Access - 01',
    status: 'online',
    policyRules: ['Remote Employee Access', 'Remote Employee Access'],
  },
];

function StatusBadge({ status }: { status: 'online' | 'offline' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-[8px] ${
        status === 'online'
          ? 'bg-green-50 text-green-700 border border-green-200'
          : 'bg-gray-100 text-gray-500 border border-gray-200'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'online' ? 'bg-green-500' : 'bg-gray-400'
        }`}
      />
      {status === 'online' ? 'Online' : 'Offline'}
    </span>
  );
}

function ConnectorCard({ connector }: { connector: ConnectorCard }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
            <Server className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">
              {connector.typeLabel}
            </p>
            <p className="text-sm font-semibold text-gray-900">{connector.name}</p>
          </div>
        </div>
        <StatusBadge status={connector.status} />
      </div>

      <div className="border-t border-gray-100" />

      {/* Private Networks */}
      {connector.privateNetworks && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Private Networks
            </p>
            <p className="text-sm text-gray-700">{connector.privateNetworks.label}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              IP Range
            </p>
            <p className="text-sm text-gray-700">{connector.privateNetworks.ipRange}</p>
          </div>
        </div>
      )}

      {/* Internal Domains */}
      {connector.internalDomains && (
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Internal Domains
          </p>
          <div className="flex flex-wrap gap-2">
            {connector.internalDomains.map((domain) => (
              <span
                key={domain}
                className="inline-flex items-center h-[24px] text-[11px] font-semibold text-[#6a7282] bg-[#ececf0] border border-[#e5e7eb] px-[8px] rounded-[8px]"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Policy Rules */}
      {connector.policyRules && (
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Policy Rules
          </p>
          <div className="space-y-1">
            {connector.policyRules.map((rule, i) => (
              <p key={i} className="text-sm text-gray-700 border-b border-gray-100 pb-1 last:border-0 last:pb-0">
                {rule}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ConnectorsView() {
  return (
    <div className="space-y-6 pb-10">
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Connectors and Tunnels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {connectors.map((c) => (
            <ConnectorCard key={c.name} connector={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
