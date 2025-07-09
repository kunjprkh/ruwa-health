"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BiomarkerInputProps extends React.ComponentProps<"input"> {
  error?: boolean;
  isLoading?: boolean;
}

const BiomarkerInput = React.forwardRef<HTMLInputElement, BiomarkerInputProps>(
  ({ className, error, isLoading, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Determine the current state for styling
    const getBorderColor = () => {
      if (error) return "var(--border-error)";
      if (isFocused) return "var(--border-active)";
      return "var(--border-primary)";
    };

    const getBackgroundColor = () => {
      if (isHovered && !isFocused && !error) return "var(--bg-faint)";
      return "transparent";
    };

    return (
      <input
        ref={ref}
        className={cn(
          // Fixed dimensions
          "w-[88px] h-[28px]",
          // Padding
          "px-3 py-1.5",
          // Text alignment
          "text-right",
          // Base text styles
          "text-sm font-medium",
          // Border
          "border-[1.5px]",
          // Border radius (8px as specified)
          "rounded-lg",
          // Transition for smooth state changes
          "transition-all duration-200",
          // Remove default styling
          "outline-none",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Loading state
          isLoading && "cursor-wait",
          className
        )}
        style={{
          borderColor: getBorderColor(),
          backgroundColor: getBackgroundColor(),
          color: "var(--fg-primary)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    );
  }
);

BiomarkerInput.displayName = "BiomarkerInput";

export { BiomarkerInput };