import * as React from "react"
import * as Slot from "@radix-ui/react-slot"

import type { ExampleProps } from "./Example.types"
import { exampleVariants } from "./Example.types"

/**
 * Example component for demonstration purposes.
 *
 * @remarks
 * This is a basic button component that follows the project's design system.
 * Built on top of Radix UI Slot primitive for maximum flexibility.
 *
 * @example
 * ```tsx
 * <Example variant="primary" size="small" disabled={false} onClick={() => console.log('clicked')}>
 *   Click me
 * </Example>
 * ```
 */

const Example = ({
  ref,
  asChild = false,
  children,
  className,
  disabled = false,
  size,
  variant,
  ...rest
}: ExampleProps) => {
  const Component = asChild ? Slot.Root : "button"

  return (
    <Component
      className={exampleVariants({ className, disabled, size, variant })}
      disabled={disabled}
      ref={ref}
      data-testid="example"
      {...rest}
    >
      {children}
    </Component>
  )
}

Example.displayName = "Example"

export { Example }
