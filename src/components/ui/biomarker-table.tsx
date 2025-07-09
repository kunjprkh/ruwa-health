"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import BiomarkerTableRow from './biomarker-table-row';
import type { BiomarkerData } from './biomarker-table-row';

interface BiomarkerTableProps {
  data: BiomarkerData[];
  onValueUpdate?: (id: string, newValue: number) => Promise<void>;
  className?: string;
}

const BiomarkerTable: React.FC<BiomarkerTableProps> = ({
  data,
  onValueUpdate,
  className,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = async (id: string, newValue: number) => {
    if (onValueUpdate) {
      await onValueUpdate(id, newValue);
    }
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className={cn(
      "w-full overflow-hidden",
      "bg-card",
      "rounded-lg",
      className
    )}>
      {/* Table Header */}
      <div className={cn(
        "flex items-center h-12 mb-2",
        "text-muted-foreground",
        "text-sm font-medium"
      )}>
        <div className="flex-[0_0_25%] pl-4">Biomarker</div>
        <div className="flex-[0_0_20%] text-center">Value</div>
        <div className="flex-[0_0_15%]">Unit</div>
        <div className="flex-[0_0_25%]">Reference</div>
        <div className="flex-[0_0_15%] text-right pr-4">Status</div>
      </div>

      {/* Table Body */}
      <div className="space-y-0">
        {data.map((biomarker) => (
          <BiomarkerTableRow
            key={biomarker.id}
            biomarker={biomarker}
            isEditing={editingId === biomarker.id}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            className={cn(
              "first:rounded-t-md last:rounded-b-md",
              "last:border-b-0"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BiomarkerTable;
export type { BiomarkerTableProps };