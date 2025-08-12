import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Base visual extracted from Figma MCP for Label
export const labelVariants = cva(
  "block text-[14px] leading-[18px] font-normal not-italic text-[color:var(--color-neutral-text-secondary)] pb-2"
)

export interface LabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof labelVariants> {
  /**
   * Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`.
   */
  ref?: React.Ref<HTMLSpanElement | HTMLLabelElement>

  /**
   * Optional explicit text content for the label. When `children` is provided, it takes precedence.
   * @defaultValue "Label"
   */
  title?: string

  /**
   * Associates the label with a form control. When provided, the component renders a `<label>` element; otherwise it renders a `<span>`.
   */
  htmlFor?: string

  /**
   * Label content. If omitted, `title` will be used.
   */
  children?: React.ReactNode
}
