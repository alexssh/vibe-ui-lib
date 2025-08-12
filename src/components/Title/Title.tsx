import * as React from "react"

import type { TitleProps } from "./Title.types"
import { titleVariants } from "./Title.types"

/**
 * Title component.
 * Semantic headings h1–h6 with design-system typography.
 */
const Title = ({
  ref,
  className,
  title = "Title",
  level = 1,
  ...rest
}: TitleProps) => {
  const tagName = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  const content = title
  return React.createElement(
    tagName,
    {
      ref: ref as never,
      className: titleVariants({ className }),
      "data-testid": "Title",
      ...rest,
    },
    content
  )
}

Title.displayName = "Title"

export { Title }
