import { cva } from "class-variance-authority"

// Clear button styles: reproduce Button secondary without the border
export const clearButtonVariants = cva(
  [
    // 24px square within 48px-high input; use 32px to match MCP visual density while staying tappable
    "inline-flex h-12 w-12 items-center justify-center rounded",
    // mimic secondary text without border; surface follows parent
    "text-neutral-text-interactive",
    "hover:text-neutral-text-interactive-hover",
    "focus-visible:bg-neutral-bg-interactive-focus focus-visible:text-neutral-text-interactive-focus",
    "focus-visible:outline-2 focus-visible:outline-neutral-border-interactive-focus",
    // disabled
    "disabled:pointer-events-none disabled:text-neutral-text-interactive-disabled",
  ].join(" ")
)
