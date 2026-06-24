import React from 'react';
import { ArrowRight, CheckCircle, XCircle, Shield, Users, Globe, Settings } from 'lucide-react';
import { Card } from './ui/card';

export function PolicyFlowDiagram() {
  return (
    <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
      <h3 className="text-gray-900 mb-6 text-center">Policy Evaluation Flow</h3>
      
      <div className="space-y-6">
        {/* Step 1: Request */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
            <Users className="h-8 w-8" />
          </div>
          <div className="flex-1 p-4 bg-white rounded-lg border-2 border-blue-200 shadow-sm">
            <p className="text-gray-900 mb-1">1. Access Request</p>
            <p className="text-gray-600">User attempts to access a resource</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowRight className="h-6 w-6 text-blue-600 rotate-90" />
        </div>

        {/* Step 2: Identity */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
            <Shield className="h-8 w-8" />
          </div>
          <div className="flex-1 p-4 bg-white rounded-lg border-2 border-purple-200 shadow-sm">
            <p className="text-gray-900 mb-1">2. Verify Identity</p>
            <p className="text-gray-600">Validate user, device, and context</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowRight className="h-6 w-6 text-blue-600 rotate-90" />
        </div>

        {/* Step 3: Match Policy */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
            <Globe className="h-8 w-8" />
          </div>
          <div className="flex-1 p-4 bg-white rounded-lg border-2 border-orange-200 shadow-sm">
            <p className="text-gray-900 mb-1">3. Find Matching Policy</p>
            <p className="text-gray-600">Evaluate policies by priority order</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowRight className="h-6 w-6 text-blue-600 rotate-90" />
        </div>

        {/* Step 4: Conditions */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
            <Settings className="h-8 w-8" />
          </div>
          <div className="flex-1 p-4 bg-white rounded-lg border-2 border-indigo-200 shadow-sm">
            <p className="text-gray-900 mb-1">4. Check Conditions</p>
            <p className="text-gray-600">MFA, compliance, location, time, etc.</p>
          </div>
        </div>

        {/* Decision Branch */}
        <div className="flex justify-center">
          <ArrowRight className="h-6 w-6 text-blue-600 rotate-90" />
        </div>

        {/* Step 5: Decision */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <CheckCircle className="h-7 w-7" />
            </div>
            <div className="flex-1 p-3 bg-green-50 rounded-lg border-2 border-green-300">
              <p className="text-green-900">Allow</p>
              <p className="text-green-700">Grant Access</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <XCircle className="h-7 w-7" />
            </div>
            <div className="flex-1 p-3 bg-red-50 rounded-lg border-2 border-red-300">
              <p className="text-red-900">Deny</p>
              <p className="text-red-700">Block Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
        <p className="text-gray-700 text-center">
          <strong>First Match Wins:</strong> Policies are evaluated in priority order (1 = highest).
          The first policy that matches determines the access decision.
        </p>
      </div>
    </Card>
  );
}
