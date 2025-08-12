import * as React from "react"

import type { CardProps } from "./Card.types"
import { cardVariants } from "./Card.types"

/**
 * Card component.
 *
 * Container block with rounded corners and subtle divider border, intended to wrap arbitrary content.
 * Extracted from Figma via MCP. Honors `slot` as an alias for `children`.
 *
 * @example
 * ```tsx
 * <Card>
 *   <h3 className="text-base font-semibold">Title</h3>
 *   <p className="text-sm text-[color:var(--color-neutral-text-secondary)]">Body</p>
 * </Card>
 * ```
 */
const Card = ({
  ref,
  children,
  className,
  slot = null,
  ...rest
}: CardProps) => {
  // Per MCP guidelines, when `slot` is provided it is treated as the card content.
  // When neither `children` nor `slot` are provided, render the literal string "Placeholder".
  const content = slot ?? children ?? "Placeholder"

  return (
    <div
      ref={ref}
      className={cardVariants({ className })}
      data-testid="Card"
      {...rest}
    >
      <div className="box-border flex min-h-16 w-full flex-col items-start justify-start gap-2 px-0 py-4">
        {content}
      </div>
    </div>
  )
}

Card.displayName = "Card"

export { Card }
