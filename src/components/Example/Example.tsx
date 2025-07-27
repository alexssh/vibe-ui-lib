import React from "react"
import { typedForwardRef } from "../../utils"

import clsx from "clsx"

import type { ExampleProps } from "./Example.types"
import "./Example.scss"

/* --- */

/**
 * Example component for demonstration purposes.
 *
 * @remarks
 * This is a basic button component that follows the project's design system.
 *
 * @example
 * ```tsx
 * <Example variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Example>
 * ```
 */
const ExampleComponent = (
  { variant = "primary", children, className, ...rest }: ExampleProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const componentClassName = clsx(
    "vibe-Example",
    `vibe-Example--variant-${variant}`,
    className
  )

  return (
    <button
      className={componentClassName}
      ref={ref}
      data-testid="example"
      {...rest}
    >
      {children}
    </button>
  )
}

const Example = typedForwardRef<ExampleProps, HTMLButtonElement>(
  ExampleComponent
)

;(
  Example as React.ForwardRefExoticComponent<
    ExampleProps & React.RefAttributes<HTMLButtonElement>
  >
).displayName = "Example"

export { Example }
