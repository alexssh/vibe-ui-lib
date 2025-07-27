import type * as React from "react"

/**
 * Props for the Example component.
 *
 * @remarks
 * The component renders a button element with customizable styling variants.
 *
 * @example
 * ```tsx
 * <Example variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Example>
 * ```
 */
export interface ExampleProps {
  /**
   * The visual variant of the button.
   *
   * @defaultValue "primary"
   */
  variant?: "primary" | "secondary"

  /**
   * The content to display inside the button.
   */
  children?: React.ReactNode

  /**
   * Callback function called when the button is clicked.
   */
  onClick?: () => void

  /**
   * Additional CSS class names to apply to the button.
   */
  className?: string

  /**
   * Additional inline styles to apply to the button.
   */
  style?: React.CSSProperties

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean
}
