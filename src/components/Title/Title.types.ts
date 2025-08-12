import * as React from "react"
import { cva } from "class-variance-authority"

// Styling is fixed and independent of `level` (level only affects the HTML tag)
export const titleVariants = cva(
  "block font-semibold not-italic text-[32px] leading-[40px] tracking-[-0.32px] text-[color:var(--color-neutral-text-default)]"
)

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  /**
   * Ref to the underlying heading element.
   */
  ref?: React.Ref<HTMLHeadingElement>

  /**
   * Heading level 1–6. Controls the rendered tag (h1–h6), not styles.
   * @defaultValue 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6

  /**
   * Text content when `children` is not provided.
   * @defaultValue "Title"
   */
  title?: string

  // No children supported; content is provided via `title` only
}
