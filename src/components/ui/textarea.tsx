import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "min-h-[60px] w-full rounded-xl bg-background px-3 py-2 text-base shadow-sm transition-all duration-200 placeholder:text-muted-foreground resize-none",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
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
Textarea.displayName = "Textarea"

export { Textarea }