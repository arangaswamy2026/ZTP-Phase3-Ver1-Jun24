import React from 'react';
import { ChevronLeft } from 'lucide-react@0.487.0';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  back?: { label: string; onClick: () => void };
}

export function PageHeader({ title, subtitle, actions, back }: PageHeaderProps) {
  const isDetail = !!back;

  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        {back && (
          <button
            onClick={back.onClick}
            className="inline-flex items-center gap-1.5 text-[#0066cc] text-[0.8125rem] font-medium mb-2 bg-transparent border-none p-0 cursor-pointer leading-none"
          >
            <ChevronLeft className="w-4 h-4" />
            {back.label}
          </button>
        )}
        <h1
          className={
            isDetail
              ? 'text-[1.375rem] font-bold leading-[1.27] tracking-[-0.031em] text-[#1a1a1a] m-0'
              : 'text-2xl font-bold leading-tight tracking-[-0.0036em] text-[#1a1a1a] m-0'
          }
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[0.8125rem] text-[#717182] mt-1 leading-normal max-w-[56ch] m-0">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
