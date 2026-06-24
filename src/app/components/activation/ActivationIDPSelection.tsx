import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { 
  Shield, 
  Info,
  Cloud,
  Building2,
  Mail,
  Key,
  Globe,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Plus,
  Settings,
  ExternalLink,
  AlertCircle,
  Trash2,
  ChevronRight
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface IDP {
  id: string;
  name: string;
  icon: any;
  description: string;
  popular?: boolean;
  compatibility: string;
}

interface ConfiguredIDP {
  id: string;
  templateId: string;
  name: string;
  displayName: string;
  protocol: 'saml' | 'oidc' | 'oauth';
  icon: any;
  // SAML fields
  entityId?: string;
  ssoUrl?: string;
  certificate?: string;
  // OIDC/OAuth fields
  clientId?: string;
  clientSecret?: string;
  issuerUrl?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
}

const idpTemplates: IDP[] = [
  {
    id: 'azure-ad',
    name: 'Microsoft Entra ID',
    icon: Cloud,
    description: 'Azure Active Directory / Microsoft Entra ID integration',
    popular: true,
    compatibility: 'SAML 2.0, OAuth 2.0, OpenID Connect',
  },
  {
    id: 'okta',
    name: 'Okta',
    icon: Shield,
    description: 'Okta identity and access management platform',
    popular: true,
    compatibility: 'SAML 2.0, OAuth 2.0, OpenID Connect',
  },
  {
    id: 'google',
    name: 'Google Workspace',
    icon: Mail,
    description: 'Google Workspace (formerly G Suite) authentication',
    popular: true,
    compatibility: 'SAML 2.0, OAuth 2.0',
  },
  {
    id: 'onelogin',
    name: 'OneLogin',
    icon: Key,
    description: 'OneLogin identity management solution',
    compatibility: 'SAML 2.0, OAuth 2.0',
  },
  {
    id: 'ping',
    name: 'PingIdentity',
    icon: Building2,
    description: 'PingFederate and PingOne integration',
    compatibility: 'SAML 2.0, OAuth 2.0, OpenID Connect',
  },
  {
    id: 'custom-saml',
    name: 'Custom SAML',
    icon: Globe,
    description: 'Any SAML 2.0 compatible identity provider',
    compatibility: 'SAML 2.0',
  },
];

interface ActivationIDPSelectionProps {
  onNext: (selectedIDPs: string[]) => void;
  onBack: () => void;
}

export function ActivationIDPSelection({ onNext, onBack }: ActivationIDPSelectionProps) {
  const [primarySelection, setPrimarySelection] = useState<'msw' | 'external'>('msw');
  const [configuredIDPs, setConfiguredIDPs] = useState<ConfiguredIDP[]>([]);
  const [showExternalIDPs, setShowExternalIDPs] = useState(false);
  const [showConfigDialog, setShowConfigDialog] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<IDP | null>(null);
  const [editingIDP, setEditingIDP] = useState<ConfiguredIDP | null>(null);

  // Form state for IDP configuration
  const [idpForm, setIdpForm] = useState({
    displayName: '',
    protocol: 'saml' as 'saml' | 'oidc' | 'oauth',
    // SAML
    entityId: '',
    ssoUrl: '',
    certificate: '',
    // OIDC/OAuth
    clientId: '',
    clientSecret: '',
    issuerUrl: '',
    authorizationEndpoint: '',
    tokenEndpoint: '',
  });

  const openConfigDialog = (template: IDP) => {
    setCurrentTemplate(template);
    setEditingIDP(null);
    setIdpForm({
      displayName: template.name,
      protocol: 'saml',
      entityId: '',
      ssoUrl: '',
      certificate: '',
      clientId: '',
      clientSecret: '',
      issuerUrl: '',
      authorizationEndpoint: '',
      tokenEndpoint: '',
    });
    setShowConfigDialog(true);
  };

  const openEditDialog = (idp: ConfiguredIDP) => {
    const template = idpTemplates.find(t => t.id === idp.templateId);
    setCurrentTemplate(template || null);
    setEditingIDP(idp);
    setIdpForm({
      displayName: idp.displayName,
      protocol: idp.protocol,
      entityId: idp.entityId || '',
      ssoUrl: idp.ssoUrl || '',
      certificate: idp.certificate || '',
      clientId: idp.clientId || '',
      clientSecret: idp.clientSecret || '',
      issuerUrl: idp.issuerUrl || '',
      authorizationEndpoint: idp.authorizationEndpoint || '',
      tokenEndpoint: idp.tokenEndpoint || '',
    });
    setShowConfigDialog(true);
  };

  const saveIDPConfiguration = () => {
    if (!currentTemplate) return;

    const newIDP: ConfiguredIDP = {
      id: editingIDP?.id || `idp-${Date.now()}`,
      templateId: currentTemplate.id,
      name: currentTemplate.name,
      displayName: idpForm.displayName,
      protocol: idpForm.protocol,
      icon: currentTemplate.icon,
      ...(idpForm.protocol === 'saml' ? {
        entityId: idpForm.entityId,
        ssoUrl: idpForm.ssoUrl,
        certificate: idpForm.certificate,
      } : {
        clientId: idpForm.clientId,
        clientSecret: idpForm.clientSecret,
        issuerUrl: idpForm.issuerUrl,
        authorizationEndpoint: idpForm.authorizationEndpoint,
        tokenEndpoint: idpForm.tokenEndpoint,
      }),
    };

    if (editingIDP) {
      setConfiguredIDPs(prev => prev.map(idp => idp.id === editingIDP.id ? newIDP : idp));
    } else {
      setConfiguredIDPs(prev => [...prev, newIDP]);
    }

    setPrimarySelection('external');
    setShowConfigDialog(false);
  };

  const deleteIDP = (idpId: string) => {
    setConfiguredIDPs(prev => prev.filter(idp => idp.id !== idpId));
  };

  const handleContinue = () => {
    if (primarySelection === 'msw') {
      onNext(['mysonicwall']);
    } else {
      onNext(configuredIDPs.map(idp => idp.id));
    }
  };

  const canContinue = primarySelection === 'msw' || configuredIDPs.length > 0;
  const isFormValid = idpForm.displayName.trim() && (
    idpForm.protocol === 'saml' 
      ? (idpForm.entityId.trim() && idpForm.ssoUrl.trim())
      : (idpForm.clientId.trim() && idpForm.issuerUrl.trim())
  );

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#0066CC]" />
              </div>
            </div>
            <h2 className="text-gray-900 mb-2">Authentication Setup</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Configure how your users will authenticate to access protected resources
            </p>
          </div>

          {/* Primary Option: MySonicWall */}
          <div className="mb-6">
            <h3 className="text-gray-900 mb-4">Recommended Authentication</h3>
            <Card
              className={`p-6 transition-all cursor-pointer ${
                primarySelection === 'msw'
                  ? 'border-2 border-[#0066CC] bg-blue-50/30 shadow-md'
                  : 'border border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
              onClick={() => setPrimarySelection('msw')}
            >
              <div className="flex items-start gap-4">
                <RadioGroup value={primarySelection}>
                  <RadioGroupItem value="msw" id="msw" className="mt-1.5" />
                </RadioGroup>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Label htmlFor="msw" className="text-gray-900 cursor-pointer">
                          MySonicWall Login
                        </Label>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Recommended
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Use your existing MySonicWall account credentials
                      </p>
                    </div>
                    {primarySelection === 'msw' && (
                      <CheckCircle2 className="w-6 h-6 text-[#0066CC] flex-shrink-0" />
                    )}
                  </div>
                  <div className="ml-16 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Quick setup - no external IDP configuration needed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Unified SonicWall identity across all products</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Multi-factor authentication built-in</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Secondary Options: External IDPs */}
          <div className="mb-8">
            <button
              onClick={() => setShowExternalIDPs(!showExternalIDPs)}
              className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <h3 className="text-gray-900 group-hover:text-orange-700 transition-colors">Or configure an external Identity Provider</h3>
              {showExternalIDPs ? (
                <ChevronUp className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
              )}
            </button>

            {showExternalIDPs && (
              <div className="mt-4 space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <Info className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Configure your identity providers now to enable authentication immediately after activation.
                    You can add more providers later in Settings.
                  </p>
                </div>

                {/* Configured IDPs List */}
                {configuredIDPs.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm text-gray-700">Configured Identity Providers</h4>
                    {configuredIDPs.map((idp) => {
                      const Icon = idp.icon;
                      return (
                        <Card key={idp.id} className="p-4 border-2 border-green-200 bg-green-50/30">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-[#0066CC]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-gray-900">{idp.displayName}</p>
                                <Badge variant="secondary" className="text-xs">
                                  {idp.protocol.toUpperCase()}
                                </Badge>
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                              </div>
                              <p className="text-xs text-gray-600">{idp.name} - Ready to use</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditDialog(idp)}
                              className="flex-shrink-0"
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteIDP(idp.id)}
                              className="flex-shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}

                {/* IDP Templates */}
                <div>
                  <h4 className="text-sm text-gray-700 mb-3">Add Identity Provider</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {idpTemplates.map((template) => {
                      const Icon = template.icon;

                      return (
                        <Card
                          key={template.id}
                          className="p-4 transition-all cursor-pointer border border-gray-200 hover:border-[#0066CC] hover:shadow-sm"
                          onClick={() => openConfigDialog(template)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-[#0066CC]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-gray-900 text-sm">
                                  {template.name}
                                </span>
                                {template.popular && (
                                  <Badge className="bg-orange-100 text-orange-700 text-xs hover:bg-orange-100">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                {template.description}
                              </p>
                              <div className="flex items-center gap-1 text-xs text-[#0066CC]">
                                <Plus className="w-3 h-3" />
                                <span>Configure</span>
                                <ChevronRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!canContinue}
              className="flex-1 bg-[#0066CC] hover:bg-[#0052A3] disabled:opacity-50"
            >
              Continue to Review
            </Button>
          </div>
        </div>

        {/* Skip Option */}
        <div className="mt-4 text-center">
          <button
            onClick={() => onNext([])}
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            Skip for now (configure later in Settings)
          </button>
        </div>
      </div>

      {/* Configuration Dialog */}
      <Dialog open={showConfigDialog} onOpenChange={setShowConfigDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingIDP ? 'Edit' : 'Configure'} {currentTemplate?.name}
            </DialogTitle>
            <DialogDescription>
              Enter the connection details for your {currentTemplate?.name} identity provider
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Display Name */}
            <div>
              <Label htmlFor="display-name" className="text-gray-700 mb-2 block">
                Display Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="display-name"
                placeholder="e.g., Company SSO"
                value={idpForm.displayName}
                onChange={(e) => setIdpForm(prev => ({ ...prev, displayName: e.target.value }))}
              />
            </div>

            {/* Protocol Selection */}
            <div>
              <Label htmlFor="protocol" className="text-gray-700 mb-2 block">
                Protocol <span className="text-red-500">*</span>
              </Label>
              <Select
                value={idpForm.protocol}
                onValueChange={(value: 'saml' | 'oidc' | 'oauth') => 
                  setIdpForm(prev => ({ ...prev, protocol: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saml">SAML 2.0</SelectItem>
                  <SelectItem value="oidc">OpenID Connect</SelectItem>
                  <SelectItem value="oauth">OAuth 2.0</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Protocol-specific fields */}
            {idpForm.protocol === 'saml' ? (
              <>
                <div>
                  <Label htmlFor="entity-id" className="text-gray-700 mb-2 block">
                    Entity ID / Issuer <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="entity-id"
                    placeholder="https://idp.example.com/saml"
                    value={idpForm.entityId}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, entityId: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="sso-url" className="text-gray-700 mb-2 block">
                    SSO URL <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="sso-url"
                    placeholder="https://idp.example.com/saml/sso"
                    value={idpForm.ssoUrl}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, ssoUrl: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="certificate" className="text-gray-700 mb-2 block">
                    X.509 Certificate
                  </Label>
                  <Textarea
                    id="certificate"
                    placeholder="-----BEGIN CERTIFICATE-----&#10;...&#10;-----END CERTIFICATE-----"
                    rows={4}
                    value={idpForm.certificate}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, certificate: e.target.value }))}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Paste the public certificate from your identity provider
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="issuer-url" className="text-gray-700 mb-2 block">
                    Issuer URL <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="issuer-url"
                    placeholder="https://accounts.example.com"
                    value={idpForm.issuerUrl}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, issuerUrl: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="client-id" className="text-gray-700 mb-2 block">
                    Client ID <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="client-id"
                    placeholder="your-client-id"
                    value={idpForm.clientId}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, clientId: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="client-secret" className="text-gray-700 mb-2 block">
                    Client Secret
                  </Label>
                  <Input
                    id="client-secret"
                    type="password"
                    placeholder="your-client-secret"
                    value={idpForm.clientSecret}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, clientSecret: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="auth-endpoint" className="text-gray-700 mb-2 block">
                    Authorization Endpoint
                  </Label>
                  <Input
                    id="auth-endpoint"
                    placeholder="https://accounts.example.com/oauth/authorize"
                    value={idpForm.authorizationEndpoint}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, authorizationEndpoint: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="token-endpoint" className="text-gray-700 mb-2 block">
                    Token Endpoint
                  </Label>
                  <Input
                    id="token-endpoint"
                    placeholder="https://accounts.example.com/oauth/token"
                    value={idpForm.tokenEndpoint}
                    onChange={(e) => setIdpForm(prev => ({ ...prev, tokenEndpoint: e.target.value }))}
                  />
                </div>
              </>
            )}

            {/* Help Text */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="mb-2">
                  <strong>Need help finding these values?</strong>
                </p>
                <p>
                  Check your {currentTemplate?.name} admin console or documentation for the required
                  connection details. You can also configure this later in Settings.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfigDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={saveIDPConfiguration}
              disabled={!isFormValid}
              className="bg-[#0066CC] hover:bg-[#0052A3]"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {editingIDP ? 'Update' : 'Add'} Provider
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
