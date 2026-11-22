import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A native <select>, which gives phones their own picker. Text is 16px on
 * small screens because iPhones zoom the page when an input under 16px is
 * focused, and the height is 44px so it is easy to tap.
 */
function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "h-11 min-w-0 rounded-lg border border-input bg-background px-3 text-base text-foreground shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:text-sm dark:bg-input/30",
        className
      )}
      {...props}
    />
  )
}

export { NativeSelect }
