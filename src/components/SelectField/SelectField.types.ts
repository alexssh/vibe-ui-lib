import * as React from "react"
import { cva } from "class-variance-authority"

// Local copies of InputField visual variants to avoid cross-component dependency
export const selectContainerVariants = cva(
  [
    "group relative inline-flex w-full items-center rounded h-12",
    // base surface and border
    "border border-neutral-border-interactive bg-neutral-bg-interactive",
    // focus ring per MCP guideline (use outline)
    "focus-within:outline-2 focus-within:outline-neutral-border-interactive-focus focus-within:border-transparent",
    // hover surface + border
    "hover:bg-neutral-bg-interactive-hover hover:border-neutral-border-interactive-hover focus-within:hover:border-transparent",
    // disabled surface
    "data-[disabled=true]:bg-neutral-bg-interactive-disabled data-[disabled=true]:text-neutral-text-interactive-disabled data-[disabled=true]:border-transparent data-[disabled=true]:outline-none",
    // error state border (2px red outline, border made transparent)
    "data-[error=true]:outline-2 data-[error=true]:outline-[color:var(--color-neutral-text-error)] data-[error=true]:border-transparent",
  ].join(" ")
)

export const selectFieldVariants = cva(
  [
    "peer block w-full bg-transparent",
    // typography
    "text-[16px] leading-[20px] font-normal not-italic text-[color:var(--color-neutral-text-default)]",
    // padding (px-4)
    "px-4",
    // remove default outline/border
    "outline-none border-transparent",
    // disabled value color
    "disabled:text-neutral-text-interactive-disabled",
    // placeholder
    "placeholder:text-[color:var(--color-neutral-text-secondary)] disabled:placeholder:text-neutral-text-interactive-disabled",
  ].join(" ")
)

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Ref to the underlying select element.
   */
  ref?: React.Ref<HTMLSelectElement>

  /**
   * Visual error state. Adds a red outline and sets aria-invalid when not provided by user.
   * @defaultValue false
   */
  error?: boolean
}
