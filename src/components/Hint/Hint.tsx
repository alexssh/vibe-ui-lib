import * as React from "react"

import type { HintProps } from "./Hint.types"
import { hintVariants } from "./Hint.types"

/**
 * Hint component.
 *
 * Atomic caption-like text used to display helper or error messages beneath inputs and other field-like components.
 */
const Hint = ({
  ref,
  className,
  children,
  title = "Hint",
  variant = "default",
  ...rest
}: HintProps) => {
  const content = children ?? title

  return (
    <p
      ref={ref}
      className={hintVariants({ className, variant })}
      data-testid="Hint"
      {...rest}
    >
      {content}
    </p>
  )
}

Hint.displayName = "Hint"

export { Hint }
