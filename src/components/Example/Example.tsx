import React from "react"
import clsx from "clsx"
import * as Slot from "@radix-ui/react-slot"

import type { ExampleProps } from "./Example.types"
import "./Example.scss"

/**
 * Example component for demonstration purposes.
 *
 * @remarks
 * This is a basic button component that follows the project's design system.
 * Built on top of Radix UI Slot primitive for maximum flexibility.
 *
 * @example
 * ```tsx
 * <Example variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Example>
 * ```
 */
const Example = React.forwardRef<HTMLButtonElement, ExampleProps>(
  (
    { variant = "primary", children, className, asChild = false, ...rest },
    ref
  ) => {
    const componentClassName = clsx(
      "vibe-Example",
      `vibe-Example--variant-${variant}`,
      className
    )

    const Component = asChild ? Slot.Root : "button"

    return (
      <Component
        className={componentClassName}
        ref={ref}
        data-testid="example"
        {...rest}
      >
        {children}
      </Component>
    )
  }
) as React.ForwardRefExoticComponent<
  ExampleProps & React.RefAttributes<HTMLButtonElement>
>

Example.displayName = "Example"

export { Example }
