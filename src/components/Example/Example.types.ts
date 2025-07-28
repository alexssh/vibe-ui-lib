import type * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { exampleVariants } from "./Example"

export interface ExampleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof exampleVariants> {
  /**
   * The visual variant of the button.
   *
   * @defaultValue "primary"
   */
  variant?: "primary" | "secondary"

  /**
   * The size of the button.
   *
   * @defaultValue "default"
   */
  size?: "default" | "sm" | "lg"

  /**
   * The content to display inside the button.
   */
  children?: React.ReactNode

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @defaultValue false
   */
  asChild?: boolean
}
