import React from "react"
import * as Slot from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import type { ExampleProps } from "./Example.types"

export const exampleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

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
  ({ variant, size, children, className, asChild = false, ...rest }, ref) => {
    const Component = asChild ? Slot.Root : "button"

    return (
      <Component
        className={exampleVariants({ variant, size, className })}
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
