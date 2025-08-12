import * as React from "react"

import type { LabelProps } from "./Label.types"
import { labelVariants } from "./Label.types"

/**
 * Label component.
 *
 * Atomic text label used across form fields and other UI elements that require labels.
 */
const Label = ({
  ref,
  className,
  children,
  title = "Label",
  htmlFor,
  ...rest
}: LabelProps) => {
  const content = children ?? title
  const Element = htmlFor ? ("label" as const) : ("span" as const)

  return (
    <Element
      ref={ref as never}
      className={labelVariants({ className })}
      {...(htmlFor ? { htmlFor } : {})}
      data-testid="Label"
      {...rest}
    >
      {content}
    </Element>
  )
}

Label.displayName = "Label"

export { Label }
