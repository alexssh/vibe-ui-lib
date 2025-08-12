import * as React from "react"

import type { ParagraphProps, ParagraphTag } from "./Paragraph.types"
import { paragraphVariants } from "./Paragraph.types"

/**
 * Paragraph component.
 * Basic text block using body 16/20 typography. Supports different tags and nested elements.
 */
const Paragraph = ({
  ref,
  className,
  as = "p",
  content,
  children,
  ...rest
}: ParagraphProps) => {
  const Tag = as as ParagraphTag
  const body = children ?? content
  return React.createElement(
    Tag,
    {
      ref: ref as never,
      className: paragraphVariants({ className }),
      "data-testid": "Paragraph",
      ...rest,
    },
    body
  )
}

Paragraph.displayName = "Paragraph"

export { Paragraph }
