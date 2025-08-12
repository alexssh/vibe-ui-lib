import * as React from "react"

import type { SelectFieldProps } from "./SelectField.types"
import {
  selectContainerVariants,
  selectFieldVariants,
} from "./SelectField.types"
import { Icon } from "../Icon"

/**
 * SelectField component
 * Basic <select> styled to match InputField. Includes an inline dropdown icon.
 */
const SelectField = ({
  ref,
  className,
  children,
  disabled,
  error = false,
  ...rest
}: SelectFieldProps) => {
  return (
    <div
      className={selectContainerVariants({ className })}
      data-testid="SelectField"
      data-disabled={disabled ? "true" : undefined}
      data-error={error ? "true" : undefined}
    >
      <select
        ref={ref}
        className={selectFieldVariants({}) + " appearance-none pr-4"}
        disabled={disabled}
        aria-invalid={rest["aria-invalid"] ?? (error ? true : undefined)}
        {...rest}
      >
        {children}
      </select>
      {disabled ? null : (
        <div className="pointer-events-none">
          <span className="inline-flex h-12 w-12 items-center justify-center text-[color:var(--color-neutral-icon-default)]">
            <Icon glyph="arrowDown" />
          </span>
        </div>
      )}
    </div>
  )
}

SelectField.displayName = "SelectField"

export { SelectField }
