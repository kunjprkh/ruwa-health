"use client";

import React, { useState, useRef, useEffect } from 'react';
import { BiomarkerInput } from '@/components/ui/biomarker-input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface BiomarkerData {
  id: string;
  name: string;
  value: number;
  unit: string;
  referenceRange: string;
  status: 'Peak' | 'Critical' | 'Out Of Range' | 'Normal';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

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
        return 'green';
      case 'Critical':
        return 'red';
      case 'Out Of Range':
        return 'orange';
      case 'Normal':
        return 'blue';
      default:
        return 'blue';
    }
  };


  // Initialize input value when editing starts
  useEffect(() => {
    if (isEditing) {
      setInputValue(formatNumber(biomarker.value));
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isEditing, biomarker.value]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '' || validateInput(value)) {
      setInputValue(value);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid number",
      });
    }
  };

  // Handle save
  const handleSave = async () => {
    const parsedValue = parseNumber(inputValue);
    
    if (parsedValue === null) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid number",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      await onSave(biomarker.id, parsedValue);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Save Failed",
        description: "Failed to save. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setInputValue('');
    onCancel(biomarker.id);
  };

  // Handle key events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };

  // Handle blur event for auto-save
  const handleBlur = () => {
    // Only save if there's a valid value and it's different from the original
    const parsedValue = parseNumber(inputValue);
    if (parsedValue !== null && parsedValue !== biomarker.value) {
      handleSave();
    } else {
      // If no changes or invalid input, just cancel
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
      "flex items-center h-12 py-2",
      "transition-colors duration-150 ease-in-out",
      "group",
      className
    )}>
      {/* Biomarker Name with Confidence Indicator */}
      <div className="flex-[0_0_25%] pl-4 pr-1 flex items-center gap-2">
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
          <BiomarkerInput
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            isLoading={isLoading}
            disabled={isLoading}
            className="text-right"
            aria-label={`Edit ${biomarker.name} value`}
          />
        ) : (
          <BiomarkerInput
            value={formatNumber(biomarker.value)}
            readOnly
            onClick={handleClick}
            className="cursor-pointer text-right"
            tabIndex={0}
            aria-label={`Edit ${biomarker.name} value: ${formatNumber(biomarker.value)}`}
          />
        )}
      </div>

      {/* Unit */}
      <div className="flex-[0_0_15%]">
        <span className="text-sm font-normal text-muted-foreground text-left align-middle">
          {biomarker.unit}
        </span>
      </div>

      {/* Reference Range */}
      <div className="flex-[0_0_25%]">
        <span className="text-sm font-normal text-muted-foreground text-left align-middle">
          {biomarker.referenceRange}
        </span>
      </div>

      {/* Status Badge */}
      <div className="flex-[0_0_15%] pr-4 flex items-center justify-end">
        <Badge variant={getStatusVariant(biomarker.status)} className="text-xs">
          {biomarker.status}
        </Badge>
      </div>
    </div>
  );
};

export default BiomarkerTableRow;
export { BiomarkerTableRow };
export type { BiomarkerTableRowProps, BiomarkerData };