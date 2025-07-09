"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
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

type InputState = 'default' | 'hover' | 'focused' | 'error';

const BiomarkerTableRow: React.FC<BiomarkerTableRowProps> = ({
  biomarker,
  isEditing = false,
  onEdit,
  onSave,
  onCancel,
  className,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputState, setInputState] = useState<InputState>('default');
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

  // Get confidence indicator class
  const getConfidenceClass = (score: number) => {
    if (score >= 90) {
      return 'border-green-500';
    } else if (score >= 70) {
      return 'border-yellow-500';
    } else {
      return 'border-red-500';
    }
  };

  // Get status badge styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Peak':
        return 'bg-green-500 text-white';
      case 'Out Of Range':
        return 'bg-orange-500 text-white';
      case 'Normal':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  // Get input styles based on state
  const getInputStyles = (state: InputState, isError: boolean = false) => {
    const baseStyles = cn(
      'bg-secondary/50 border rounded-md px-3 py-2',
      'text-sm font-medium text-foreground',
      'w-auto min-w-[80px]',
      'transition-all duration-200 ease-in-out'
    );
    
    if (isError || state === 'error') {
      return cn(baseStyles, 'border-destructive bg-destructive/10 ring-1 ring-destructive/20');
    }
    
    switch (state) {
      case 'focused':
        return cn(baseStyles, 'border-input bg-background ring-2 ring-ring ring-offset-2 outline-none');
      case 'hover':
        return cn(baseStyles, 'border-input cursor-pointer');
      default:
        return cn(baseStyles, 'border-input');
    }
  };

  // Initialize input value when editing starts
  useEffect(() => {
    if (isEditing) {
      setInputValue(formatNumber(biomarker.value));
      setError(null);
      setInputState('focused');
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setInputState('default');
    }
  }, [isEditing, biomarker.value]);

  // Handle input change with real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value === '' || validateInput(value)) {
      setInputState('focused');
      setError(null);
    } else {
      setInputState('error');
      setError('Please enter a valid number');
    }
  };

  // Handle save
  const handleSave = async () => {
    const parsedValue = parseNumber(inputValue);
    
    if (parsedValue === null) {
      setInputState('error');
      setError('Invalid number format');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await onSave(biomarker.id, parsedValue);
    } catch (err) {
      setInputState('error');
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setInputValue('');
    setError(null);
    setInputState('default');
    onCancel(biomarker.id);
  };

  // Handle key events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !error && inputValue.trim()) {
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

  const confidenceClass = getConfidenceClass(biomarker.confidenceScore);

  return (
    <div className={cn(
      "relative flex items-center h-14 px-4 py-3",
      "border-b border-b-[1.5px] border-[#2a2a2a]",
      "hover:bg-[#2a2a2a] transition-colors duration-150 ease-in-out",
      "group",
      className
    )}>
      {/* Confidence Indicator */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-1 h-full",
          confidenceClass,
          "transition-colors duration-200 ease-in-out"
        )}
        title={`Confidence: ${biomarker.confidenceScore}%`}
      />

      {/* Biomarker Name */}
      <div className="flex-[0_0_25%] pl-4 pr-3">
        <span className="text-sm font-medium text-foreground leading-normal">
          {biomarker.name}
        </span>
      </div>

      {/* Value Input */}
      <div className="flex-[0_0_20%] px-3 flex justify-center">
        {isEditing ? (
          <div className="relative">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                if (!error && inputValue.trim()) {
                  setInputState('default');
                }
              }}
              onMouseEnter={() => {
                if (!isEditing && inputState === 'default') {
                  setInputState('hover');
                }
              }}
              onMouseLeave={() => {
                if (!isEditing && inputState === 'hover') {
                  setInputState('default');
                }
              }}
              className={cn(
                'text-center',
                getInputStyles(inputState, !!error)
              )}
              disabled={isLoading}
              aria-label={`Edit ${biomarker.name} value`}
              aria-invalid={!!error}
              aria-describedby={error ? `${biomarker.id}-error` : undefined}
            />
            
            {/* Action Buttons */}
            <div className="absolute right-1 top-1 flex items-center space-x-1">
              <button
                onClick={handleSave}
                disabled={isLoading || !!error || !inputValue.trim()}
                className="h-6 w-6 flex items-center justify-center rounded hover:bg-accent disabled:opacity-50"
                aria-label="Save changes"
              >
                <Check className="h-3 w-3 text-green-600" />
              </button>
              <button
                onClick={handleCancel}
                disabled={isLoading}
                className="h-6 w-6 flex items-center justify-center rounded hover:bg-accent"
                aria-label="Cancel editing"
              >
                <X className="h-3 w-3 text-muted-foreground" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleClick}
            onMouseEnter={() => setInputState('hover')}
            onMouseLeave={() => setInputState('default')}
            className={cn(
              'text-center',
              getInputStyles(inputState),
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
            )}
            aria-label={`Edit ${biomarker.name} value: ${formatNumber(biomarker.value)}`}
          >
            {formatNumber(biomarker.value)}
          </button>
        )}
        
        {/* Error Message */}
        {error && (
          <div
            id={`${biomarker.id}-error`}
            className="absolute top-full left-0 mt-1 flex items-center text-xs text-destructive"
          >
            <AlertTriangle className="h-3 w-3 mr-1" />
            {error}
          </div>
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
      <div className="flex-[0_0_15%] px-3 flex justify-end">
        <span className={cn(
          "inline-flex items-center justify-center",
          "h-7 px-3 py-1",
          "rounded-full",
          "text-xs font-medium",
          getStatusStyles(biomarker.status),
          "transition-colors duration-200"
        )}>
          {biomarker.status}
        </span>
      </div>
    </div>
  );
};

export default BiomarkerTableRow;
export type { BiomarkerTableRowProps, BiomarkerData };