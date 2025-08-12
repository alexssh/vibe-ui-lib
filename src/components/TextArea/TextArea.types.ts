import * as React from "react"
import { cva } from "class-variance-authority"

// Container variants derived from Input/Select patterns with textarea adjustments
export const textAreaContainerVariants = cva(
  [
    "group relative inline-flex w-full items-start rounded", // items-start for multiline
    // base surface and border
    "border border-neutral-border-interactive bg-neutral-bg-interactive",
    // focus outline
    "focus-within:outline-2 focus-within:outline-neutral-border-interactive-focus focus-within:border-transparent",
    // hover surface + border
    "hover:bg-neutral-bg-interactive-hover hover:border-neutral-border-interactive-hover focus-within:hover:border-transparent",
    // disabled
    "data-[disabled=true]:bg-neutral-bg-interactive-disabled data-[disabled=true]:text-neutral-text-interactive-disabled data-[disabled=true]:border-transparent data-[disabled=true]:outline-none",
    // error outline
    "data-[error=true]:outline-2 data-[error=true]:outline-[color:var(--color-neutral-text-error)] data-[error=true]:border-transparent",
  ].join(" ")
)

// Field variants based on InputField but with vertical padding for multiline and resizable
export const textAreaFieldVariants = cva(
  [
    "block w-full bg-transparent",
    // typography
    "text-[16px] leading-[20px] font-normal not-italic text-[color:var(--color-neutral-text-default)]",
    // padding: px-4 and py-3.5 per Figma
    "px-4 py-3.5",
    // remove default outline/border
    "outline-none border-transparent",
    // disabled value/placeholder
    "disabled:text-neutral-text-interactive-disabled",
    "placeholder:text-[color:var(--color-neutral-text-interactive-placeholder)] disabled:placeholder:text-neutral-text-interactive-disabled",
    // allow resize on Y by default
    "resize-y",
  ].join(" ")
)

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Ref to the underlying textarea element. */
  ref?: React.Ref<HTMLTextAreaElement>

  /** Visual error state. Adds a red outline and sets aria-invalid if not provided. */
  error?: boolean
}
