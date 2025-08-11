import * as React from "react"

import type { CheckboxProps } from "./Checkbox.types"
import {
  checkboxContainerVariants,
  checkboxLabelVariants,
} from "./Checkbox.types"

import { CheckboxControl } from "./CheckboxControl/CheckboxControl"

/**
 * Checkbox combines a clickable control and a text label.
 * - Only the public `Checkbox` is exported.
 */
const Checkbox = ({
  id,
  title = "Label",
  checked,
  defaultChecked,
  disabled = false,
  onCheckedChange,
  className,
  name,
  value,
  ...rest
}: CheckboxProps) => {
  const generatedId = React.useId()
  const controlId = id ?? generatedId

  // For uncontrolled usage, mirror internal state for label color transitions when not controlled by caller
  const isControlled = typeof checked === "boolean"
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked ?? false
  )
  const currentChecked = isControlled ? checked : internalChecked

  const handleChange = (next: boolean) => {
    if (!isControlled) setInternalChecked(next)
    onCheckedChange?.(next)
  }

  return (
    <div
      className={checkboxContainerVariants({ disabled, className })}
      data-testid="Checkbox"
      data-disabled={disabled ? "true" : undefined}
      {...rest}
    >
      <CheckboxControl
        id={controlId}
        disabled={disabled}
        checked={!!currentChecked}
        onCheckedChange={handleChange}
        name={name}
        value={value}
      />

      <label
        htmlFor={controlId}
        className={checkboxLabelVariants({
          disabled,
          checked: !!currentChecked,
        })}
      >
        {title}
      </label>
    </div>
  )
}

Checkbox.displayName = "Checkbox"

export { Checkbox }
