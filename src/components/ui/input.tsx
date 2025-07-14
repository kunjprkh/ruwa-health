import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(

          "flex h-9 w-full rounded-xl border bg-background p-2 text-base shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1",


          "hover:border-accent-foreground/20",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
          error
            ? "border-destructive focus-visible:ring-destructive"
            : "border-input focus-visible:border-ring",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }