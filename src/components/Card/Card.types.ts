import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Base visual for Card from Figma: rounded 4px, divider border, neutral background
export const cardVariants = cva(
  "relative rounded border border-neutral-border-divider bg-neutral-bg-default"
)

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "slot">,
    VariantProps<typeof cardVariants> {
  /**
   * Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`.
   */
  ref?: React.Ref<HTMLDivElement>

  /**
   * Content area. If not provided, the component renders a literal "Placeholder" string
   * instead of Figma's placeholder graphics, per MCP guidelines.
   */
  children?: React.ReactNode

  /**
   * Figma-extracted prop name for content. Treated the same as `children`.
   * When omitted and no `children` are provided, the literal string "Placeholder" is rendered.
   */
  slot?: React.ReactNode | null
}
