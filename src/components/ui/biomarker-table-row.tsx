"use client";

import React, { useState, useRef, useEffect } from 'react';
import { BiomarkerInput } from '@/components/ui/biomarker-input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, X, AlertTriangle } from 'lucide-react';

interface BiomarkerData {
  id: string;
  name: string;
  value: number;
  unit: string;
  referenceRange: string;
  status: 'Peak' | 'Out Of Range' | 'Normal';
  confidenceScore: number; // 0-100
}

interface BiomarkerTableRowProps {
  biomarker: BiomarkerData;
  isEditing?: boolean;
  onEdit: (id: string) => void;
  onSave: (id: string, newValue: number) => Promise<void>;
  onCancel: (id: string) => void;
  className?: string;
}

const BiomarkerTableRow: React.FC<BiomarkerTableRowProps> = ({
  biomarker,
  isEditing = false,
  onEdit,
  onSave,
  onCancel,
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Format number with commas
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Parse number from formatted string
  const parseNumber = (str: string): number | null => {
    const cleaned = str.replace(/,/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  };

  // Validate input value
  const validateInput = (value: string): boolean => {
    const cleaned = value.replace(/,/g, '');
    return /^\d*\.?\d*$/.test(cleaned) && cleaned !== '';
  };

  // Get confidence indicator style
  const getConfidenceStyle = (score: number) => {
    if (score >= 90) {
      return {
        backgroundColor: '#c9c9cd', // gray-80
        width: '6px',
      };
    } else if (score >= 70) {
      return {
        backgroundColor: '#555556', // gray-40
        width: '6px',
      };
    } else {
      return {
        backgroundColor: '#232324', // gray-20
        width: '6px',
      };
    }
  };

  // Get status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Peak':
        return 'default';
      case 'Out Of Range':
        return 'destructive';
      case 'Normal':
        return 'secondary';
      default:
        return 'secondary';
    }
  };


  // Initialize input value when editing starts
  useEffect(() => {
    if (isEditing) {
      setInputValue(formatNumber(biomarker.value));
      setError(null);
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isEditing, biomarker.value]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '' || validateInput(value)) {
      setInputValue(value);
      setError(null);
    } else {
      setError('Please enter a valid number');
    }
  };

  // Handle save
  const handleSave = async () => {
    const parsedValue = parseNumber(inputValue);
    
    if (parsedValue === null) {
      setError('Please enter a valid number');
      return;
    }
    
    setIsLoading(true);
    try {
      await onSave(biomarker.id, parsedValue);
    } catch (err) {
      setError('Failed to save. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setInputValue('');
    setError(null);
    onCancel(biomarker.id);
  };

  // Handle key events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  // Handle click to edit
  const handleClick = () => {
    if (!isEditing) {
      onEdit(biomarker.id);
    }
  };

  const confidenceStyle = getConfidenceStyle(biomarker.confidenceScore);

  return (
    <div className={cn(
      "flex items-center h-14 px-4 py-3",
      "border-b border-border",
      "hover:bg-muted/50 transition-colors duration-150 ease-in-out",
      "group",
      className
    )}>
      {/* Biomarker Name with Confidence Indicator */}
      <div className="flex-[0_0_25%] pr-3 flex items-center gap-2">
        <div
          className="rounded-sm flex-shrink-0"
          style={{
            ...confidenceStyle,
            height: '20px',
            alignSelf: 'stretch'
          }}
          title={`Confidence: ${biomarker.confidenceScore}%`}
        />
        <span className="text-sm font-medium text-foreground leading-normal">
          {biomarker.name}
        </span>
      </div>

      {/* Value Input */}
      <div className="flex-[0_0_20%] px-3 flex justify-center">
        {isEditing ? (
          <div className="relative">
            <BiomarkerInput
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              error={!!error}
              isLoading={isLoading}
              disabled={isLoading}
              className="text-center"
              aria-label={`Edit ${biomarker.name} value`}
            />
            {error && (
              <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center text-xs text-destructive">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {error}
              </div>
            )}
          </div>
        ) : (
          <BiomarkerInput
            value={formatNumber(biomarker.value)}
            readOnly
            onClick={handleClick}
            className="cursor-pointer text-center"
            tabIndex={0}
            aria-label={`Edit ${biomarker.name} value: ${formatNumber(biomarker.value)}`}
          />
        )}
      </div>

      {/* Unit */}
      <div className="flex-[0_0_15%] px-3">
        <span className="text-sm font-normal text-muted-foreground text-left align-middle">
          {biomarker.unit}
        </span>
      </div>

      {/* Reference Range */}
      <div className="flex-[0_0_25%] px-3">
        <span className="text-sm font-normal text-muted-foreground text-left align-middle">
          {biomarker.referenceRange}
        </span>
      </div>

      {/* Status Badge */}
      <div className="flex-[0_0_15%] px-3 flex items-center justify-end gap-2">
        <Badge variant={getStatusVariant(biomarker.status)} className="text-xs">
          {biomarker.status}
        </Badge>
        
        {/* Action Buttons - Only show when editing */}
        {isEditing && (
          <div className="flex items-center gap-1">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={cn(
                "p-1 rounded-md",
                "text-green-500 hover:bg-green-500/10",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-colors duration-150"
              )}
              aria-label="Save"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className={cn(
                "p-1 rounded-md",
                "text-destructive hover:bg-destructive/10",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-colors duration-150"
              )}
              aria-label="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiomarkerTableRow;
export { BiomarkerTableRow };
export type { BiomarkerTableRowProps, BiomarkerData };