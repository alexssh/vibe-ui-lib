import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Container styles derived from Figma tokens
export const inputContainerVariants = cva(
  [
    "group relative inline-flex w-full items-center rounded h-12",
    // base surface and border
    "border border-neutral-border-interactive bg-neutral-bg-interactive",
    // focus ring per MCP guideline (use outline)
    "focus-within:outline-2 focus-within:outline-neutral-border-interactive-focus focus-within:border-transparent",
    // hover surface + border
    "hover:bg-neutral-bg-interactive-hover hover:border-neutral-border-interactive-hover focus-within:hover:border-transparent",
    // disabled surface
    "data-[disabled=true]:bg-neutral-bg-interactive-disabled data-[disabled=true]:text-neutral-text-interactive-disabled data-[disabled=true]:border-transparent",
    // Do NOT show focus outline/border changes when the ClearButton itself is focused
    "[&:has(button[data-clearbutton]:focus)]:outline-none [&:has(button[data-clearbutton]:focus-visible)]:outline-none",
    "[&:has(button[data-clearbutton]:focus)]:outline-transparent [&:has(button[data-clearbutton]:focus-visible)]:outline-transparent",
    "[&:has(button[data-clearbutton]:focus)]:border-neutral-border-interactive [&:has(button[data-clearbutton]:focus-visible)]:border-neutral-border-interactive",
    // error state outline (2px red) and hide default border
    "data-[error=true]:outline-2 data-[error=true]:outline-[color:var(--color-neutral-text-error)] data-[error=true]:border-transparent",
  ].join(" ")
)

// Input textfield styles
export const inputFieldVariants = cva(
  [
    "peer block w-full bg-transparent",
    // typography
    "text-[16px] leading-[20px] font-normal not-italic text-[color:var(--color-neutral-text-default)]",
    // padding from tokens (px-4)
    "px-4",
    // remove default outline/border
    "outline-none border-transparent",
    // disabled
    "disabled:text-neutral-text-interactive-disabled",
    // placeholder color
    "placeholder:text-[color:var(--color-neutral-text-secondary)] disabled:placeholder:text-neutral-text-interactive-disabled",
  ].join(" ")
)

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputContainerVariants> {
  /**
   * Ref to the input element.
   */
  ref?: React.Ref<HTMLInputElement>

  /**
   * Callback when the clear button is pressed.
   */
  onClear?: () => void

  /**
   * Controls whether the clear button is shown when there is a value.
   * @defaultValue true
   */
  showClear?: boolean

  /**
   * Visual error state. Adds a red outline and sets aria-invalid when not provided by user.
   * @defaultValue false
   */
  error?: boolean
}
