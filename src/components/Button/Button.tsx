import * as React from "react"
import * as Slot from "@radix-ui/react-slot"

import type { ButtonProps } from "./Button.types"
import { buttonVariants } from "./Button.types"

/**
 * Button component.
 *
 * @remarks
 * This is a basic button component that follows the project's design system.
 * Built on top of Radix UI Slot primitive for maximum flexibility.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="small" disabled={false} onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */

const Button = ({
  ref,
  asChild = false,
  children,
  className,
  disabled = false,
  size,
  variant,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot.Root : "button"

  return (
    <Component
      className={buttonVariants({ className, disabled, size, variant })}
      disabled={disabled}
      ref={ref}
      data-testid="Button"
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child))
          return <span className="px-1">{child}</span>
        type TypeWithDisplayName = { displayName?: string }
        const typeWithName = child.type as unknown as TypeWithDisplayName
        const isIconLike = typeWithName?.displayName === "Icon"

        if (isIconLike) {
          const existingClass =
            (child.props as { className?: string }).className ?? ""
          const mergedClassName = `${existingClass} text-current`.trim()
          return React.cloneElement(
            child as React.ReactElement<Record<string, unknown>>,
            {
              className: mergedClassName,
            }
          )
        }
        return child
      })}
    </Component>
  )
}

Button.displayName = "Button"

export { Button }
