import React from 'react';
import { cn } from '@/lib/utils';

interface ConfidenceIndicatorProps {
  level: 'high' | 'medium' | 'low';
  label: string;
  percentage?: string;
  className?: string;
}

const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({
  level,
  label,
  percentage,
  className
}) => {
  const getIndicatorStyles = () => {
    switch (level) {
      case 'high':
        return 'bg-green-50 border-l-4 border-green-500';
      case 'medium':
        return 'bg-amber-50 border-l-4 border-amber-500';
      case 'low':
        return 'bg-red-50 border-l-4 border-red-500';
      default:
        return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };

  const getTextColor = () => {
    switch (level) {
      case 'high':
        return 'text-green-700';
      case 'medium':
        return 'text-amber-700';
      case 'low':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div
      className={cn(
        'flex h-20 justify-center items-center gap-8',
        getIndicatorStyles(),
        'px-16 py-8',
        'rounded-md',
        className
      )}
    >
      <div className={cn('text-base font-medium', getTextColor())}>
        {label}
      </div>
      {percentage && (
        <div className={cn('text-sm font-normal', getTextColor())}>
          {percentage}
        </div>
      )}
    </div>
  );
};

// Usage example component
const ConfidenceIndicators: React.FC = () => {
  return (
    <div className="space-y-8 p-16">
      <div className="text-2xl font-semibold text-foreground mb-12">
        Visual Indicators
      </div>
      
      <ConfidenceIndicator
        level="high"
        label="High Confidence (≥90%)"
        percentage="Green thick line"
      />
      
      <ConfidenceIndicator
        level="medium"
        label="Medium Confidence (70-89%)"
        percentage="Yellow medium line"
      />
      
      <ConfidenceIndicator
        level="low"
        label="Low Confidence (<70%)"
        percentage="Red thin line"
      />
    </div>
  );
};

export { ConfidenceIndicator, ConfidenceIndicators };