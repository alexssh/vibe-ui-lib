import type * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const exampleVariants = cva(
  "inline-flex items-center justify-center rounded-sm truncate text-[15px] font-semibold cursor-pointer focus-visible:outline-none disabled:pointer-events-none",
  {
    variants: {
      disabled: {
        true: "",
        false: "",
      },
      size: {
        default: "h-12 px-6",
        small: "h-8 px-4",
      },
      variant: {
        primary:
          "bg-accented-bg-interactive text-accented-text-interactive hover:bg-accented-bg-interactive-hover hover:text-accented-text-interactive-hover focus-visible:bg-accented-bg-interactive-focus focus-visible:text-accented-text-interactive-focus focus-visible:border-2 focus-visible:border-accented-border-interactive-focus",
        secondary:
          "bg-neutral-bg-interactive text-neutral-text-interactive border border-neutral-border-interactive hover:bg-neutral-bg-interactive-hover hover:text-neutral-text-interactive-hover hover:border-neutral-border-interactive-hover focus-visible:bg-neutral-bg-interactive-focus focus-visible:text-neutral-text-interactive-focus focus-visible:border-2 focus-visible:border-neutral-border-interactive-focus",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: true,
        class:
          "disabled:bg-accented-bg-interactive-disabled disabled:text-accented-text-interactive-disabled",
      },
      {
        variant: "secondary",
        disabled: true,
        class:
          "disabled:bg-neutral-bg-interactive-disabled disabled:text-neutral-text-interactive-disabled disabled:border-none",
      },
    ],
    defaultVariants: {
      disabled: false,

      size: "default",
      variant: "primary",
    },
  }
)

export interface ExampleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof exampleVariants> {
  /**
   * Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`.
   */
  ref?: React.Ref<HTMLButtonElement>

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @defaultValue false
   */
  asChild?: boolean

  /**
   * The content to display inside the button.
   */
  children?: React.ReactNode

  /**
   * Whether the button is disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean

  /**
   * The size of the button.
   *
   * @defaultValue "default"
   */
  size?: "default" | "small"

  /**
   * The visual variant of the button.
   *
   * @defaultValue "primary"
   */
  variant?: "primary" | "secondary"
}
