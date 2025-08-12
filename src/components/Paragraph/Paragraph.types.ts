import * as React from "react"
import { cva } from "class-variance-authority"

// Base typography: body 16/20, neutral default text color
export const paragraphVariants = cva(
  [
    "block text-[16px] leading-[20px] font-normal not-italic text-[color:var(--color-neutral-text-default)]",
    // Link styles: underline by default; remove decoration on hover
    "[&_a]:underline [&_a:hover]:no-underline",
  ].join(" ")
)

export type ParagraphTag = "p" | "div" | "span"

export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "content"> {
  /**
   * Ref to the underlying element.
   */
  ref?: React.Ref<HTMLElement>

  /**
   * Render tag. Defaults to a semantic paragraph.
   * @defaultValue "p"
   */
  as?: ParagraphTag

  /**
   * Primary content. When `children` is provided, it takes precedence.
   */
  content?: React.ReactNode

  /**
   * Allows nested elements.
   */
  children?: React.ReactNode
}
