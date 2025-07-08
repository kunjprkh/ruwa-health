"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
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
}

type InputState = 'default' | 'hover' | 'focused' | 'error';

const BiomarkerTableRow: React.FC<BiomarkerTableRowProps> = ({
  biomarker,
  isEditing = false,
  onEdit,
  onSave,
  onCancel,
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

  // Get confidence indicator style
  const getConfidenceStyle = (score: number) => {
    if (score >= 90) {
      return {
        backgroundColor: 'hsl(142 76% 36%)', // Green
        width: '4px',
      };
    } else if (score >= 70) {
      return {
        backgroundColor: 'hsl(48 96% 53%)', // Yellow
        width: '3px',
      };
    } else {
      return {
        backgroundColor: 'hsl(0 84% 60%)', // Red
        width: '2px',
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

  // Get input border styles based on state
  const getInputStyles = (state: InputState) => {
    const baseStyles = 'transition-all duration-200 ease-in-out';
    
    switch (state) {
      case 'default':
        return cn(baseStyles, 'border border-border');
      case 'hover':
        return cn(baseStyles, 'border-2 border-border');
      case 'focused':
        return cn(baseStyles, 'border-2 border-primary ring-1 ring-ring');
      case 'error':
        return cn(baseStyles, 'border-2 border-destructive ring-1 ring-destructive/20');
      default:
        return baseStyles;
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

  const confidenceStyle = getConfidenceStyle(biomarker.confidenceScore);

  return (
    <div className="flex items-center h-11 w-full bg-background border-b border-border">
      {/* Confidence Indicator */}
      <div className="flex-shrink-0 mr-3">
        <div
          className="h-6 rounded-sm"
          style={confidenceStyle}
          title={`Confidence: ${biomarker.confidenceScore}%`}
        />
      </div>

      {/* Biomarker Name */}
      <div className="flex-shrink-0 w-32 text-sm font-medium text-foreground truncate">
        {biomarker.name}
      </div>

      {/* Value Input */}
      <div className="flex-shrink-0 w-24 mx-3 relative">
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
                'h-8 text-sm text-right pr-8',
                getInputStyles(inputState)
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
              'h-8 w-full text-sm text-right px-3 rounded-md cursor-pointer',
              getInputStyles(inputState),
              'hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring'
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
      <div className="flex-shrink-0 w-16 text-sm text-muted-foreground">
        {biomarker.unit}
      </div>

      {/* Reference Range */}
      <div className="flex-1 mx-3 text-sm text-muted-foreground truncate">
        {biomarker.referenceRange}
      </div>

      {/* Status Badge */}
      <div className="flex-shrink-0">
        <Badge 
          variant={getStatusVariant(biomarker.status)}
          className="text-xs"
        >
          {biomarker.status}
        </Badge>
      </div>
    </div>
  );
};

export default BiomarkerTableRow;
export type { BiomarkerTableRowProps, BiomarkerData };