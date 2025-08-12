import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Typography and color per Figma MCP: caption 14/18, neutral secondary by default, error red for error variant
export const hintVariants = cva(
  "block text-[14px] leading-[18px] font-normal not-italic pt-2",
  {
    variants: {
      variant: {
        default: "text-[color:var(--color-neutral-text-secondary)]",
        error: "text-[color:var(--color-neutral-text-error)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface HintProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "children">,
    VariantProps<typeof hintVariants> {
  /**
   * Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`.
   */
  ref?: React.Ref<HTMLParagraphElement>

  /**
   * Optional explicit text content for the hint. When `children` is provided, it takes precedence.
   * @defaultValue "Hint"
   */
  title?: string

  /**
   * Visual tone of the hint text.
   * @defaultValue "default"
   */
  variant?: "default" | "error"

  /**
   * Hint content. If omitted, `title` will be used.
   */
  children?: React.ReactNode
}
