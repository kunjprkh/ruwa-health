
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // Figma container & typography specs for new variants
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80 hover:shadow-md",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80 hover:shadow-md",
        outline: 
          "border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        green:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--green-70)] hover:bg-[var(--green-90)]",
        "green-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-green)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-green-faint)] hover:bg-[var(--opacity-green-pale)]",
        red:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--red-80)] hover:bg-[var(--red-90)]",
        orange:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--orange-80)] hover:bg-[var(--orange-90)]",
        blue:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--blue-90)] hover:bg-[var(--blue-100)]",
        amber:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--amber-70)] hover:bg-[var(--amber-80)]",
        magenta:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--magenta-80)] hover:bg-[var(--magenta-90)]",
        yellow:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-primary)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--yellow-80)] hover:bg-[var(--yellow-90)]",
        "red-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-red)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-red-faint)] hover:bg-[var(--opacity-red-pale)]",
        "orange-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-orange)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-orange-faint)] hover:bg-[var(--opacity-orange-pale)]",
        "blue-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-blue)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-blue-faint)] hover:bg-[var(--opacity-blue-pale)]",
        "amber-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-amber)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-amber-faint)] hover:bg-[var(--opacity-amber-pale)]",
        "magenta-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-magenta)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-magenta-faint)] hover:bg-[var(--opacity-magenta-pale)]",
        "yellow-secondary":
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-yellow)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-yellow-faint)] hover:bg-[var(--opacity-yellow-pale)]",
        peak:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-green)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-green-faint)] hover:bg-[var(--opacity-green-pale)]",
        critical:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-red)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-red-faint)] hover:bg-[var(--opacity-red-pale)]",
        out_of_range:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-orange)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-orange-faint)] hover:bg-[var(--opacity-orange-pale)]",
        normal:
          "h-6 px-3 inline-flex items-center justify-center rounded-full text-[13px] font-medium leading-[18px] text-[var(--fg-blue)] overflow-hidden text-ellipsis whitespace-nowrap border-transparent bg-[var(--opacity-blue-faint)] hover:bg-[var(--opacity-blue-pale)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// Biomarker badge status helper
export function getBiomarkerBadgeVariant(status: string): string {
  const statusMap: Record<string, string> = {
    'peak': 'peak',
    'critical': 'critical',
    'out_of_range': 'out_of_range',
    'normal': 'normal',
  };
  return statusMap[status.toLowerCase()] || 'normal';
}

export { Badge, badgeVariants }