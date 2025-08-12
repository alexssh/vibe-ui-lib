import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Container for the checkbox (control + label)
export const checkboxContainerVariants = cva(
  "group inline-flex items-center gap-3 select-none",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-100",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

// Label text styles
export const checkboxLabelVariants = cva(
  "text-[16px] leading-[20px] text-[color:var(--color-neutral-text-interactive)]",
  {
    variants: {
      checked: {
        true: "text-[color:var(--color-accented-text-interactive)]",
        false: "text-[color:var(--color-neutral-text-interactive)]",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Hover states (only when not disabled)
      {
        checked: false,
        disabled: false,
        class: "group-hover:text-neutral-text-interactive-hover",
      },
      {
        checked: true,
        disabled: false,
        class: "group-hover:text-neutral-text-interactive-hover",
      },
      // Focus states (only when not disabled)
      {
        checked: false,
        disabled: false,
        class: "focus-visible:text-neutral-text-interactive-focus",
      },
      {
        checked: true,
        disabled: false,
        class: "focus-visible:text-neutral-text-interactive-focus",
      },
      // Disabled states
      {
        checked: false,
        disabled: true,
        class: "text-neutral-text-interactive-disabled",
      },
      {
        checked: true,
        disabled: true,
        class: "text-neutral-text-interactive-disabled",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof checkboxContainerVariants> {
  /**
   * The text label displayed to the right of the control.
   * Matches the Figma prop name ("title").
   * @defaultValue "Label"
   */
  title?: string

  /**
   * When provided, the component becomes controlled.
   */
  checked?: boolean

  /**
   * The uncontrolled default checked state.
   */
  defaultChecked?: boolean

  /**
   * Whether the checkbox is disabled.
   * @defaultValue false
   */
  disabled?: boolean

  /**
   * Handler called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void

  /**
   * Optional name/value for form integration.
   */
  name?: string
  value?: string

  /** Optional id applied to the control element. */
  id?: string
}
