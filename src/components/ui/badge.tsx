import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Primary color variants
        "green-primary": "bg-green-50 hover:bg-green-60 text-[color:var(--fg-primary)]",
        "red-primary": "bg-red-50 hover:bg-red-60 text-[color:var(--fg-primary)]",
        "orange-primary": "bg-orange-60 hover:bg-orange-70 text-[color:var(--fg-primary)]",
        "blue-primary": "bg-blue-50 hover:bg-blue-60 text-[color:var(--fg-primary)]",
        "amber-primary": "bg-amber-60 hover:bg-amber-70 text-[color:var(--fg-primary)]",
        "magenta-primary": "bg-magenta-50 hover:bg-magenta-60 text-[color:var(--fg-primary)]",
        "yellow-primary": "bg-yellow-60 hover:bg-yellow-70 text-[color:var(--fg-primary)]",
        // Secondary color variants
        "green-secondary": "bg-[color:var(--opacity-green-faint)] hover:bg-[color:var(--opacity-green-pale)] text-[color:var(--fg-green)]",
        "red-secondary": "bg-[color:var(--opacity-red-faint)] hover:bg-[color:var(--opacity-red-pale)] text-[color:var(--fg-red)]",
        "orange-secondary": "bg-[color:var(--opacity-orange-faint)] hover:bg-[color:var(--opacity-orange-pale)] text-[color:var(--fg-orange)]",
        "blue-secondary": "bg-[color:var(--opacity-blue-faint)] hover:bg-[color:var(--opacity-blue-pale)] text-[color:var(--fg-blue)]",
        "yellow-secondary": "bg-[color:var(--opacity-yellow-faint)] hover:bg-[color:var(--opacity-yellow-pale)] text-[color:var(--fg-yellow)]",
        "amber-secondary": "bg-[color:var(--opacity-amber-faint)] hover:bg-[color:var(--opacity-amber-pale)] text-[color:var(--fg-amber)]",
        "magenta-secondary": "bg-[color:var(--opacity-magenta-faint)] hover:bg-[color:var(--opacity-magenta-pale)] text-[color:var(--fg-magenta)]",
        "lime-secondary": "bg-[color:var(--opacity-lime-faint)] hover:bg-[color:var(--opacity-lime-pale)] text-[color:var(--fg-lime)]",
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

export { Badge, badgeVariants }
