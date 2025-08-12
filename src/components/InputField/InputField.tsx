import * as React from "react"

import type { InputFieldProps } from "./InputField.types"
import { inputContainerVariants, inputFieldVariants } from "./InputField.types"
import { ClearButton } from "./ClearButton/ClearButton"

// ClearButton moved to subcomponent folder per guidelines

/**
 * InputField component.
 * Basic text input with an optional clear button.
 */
const InputField = ({
  ref,
  className,
  onClear,
  showClear = true,
  disabled,
  value,
  defaultValue,
  onChange,
  placeholder = "",
  ...rest
}: InputFieldProps) => {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<string>(
    (defaultValue as string) ?? ""
  )
  const currentValue = (isControlled ? value : internalValue) as string

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  const handleClear = () => {
    if (!disabled) {
      if (!isControlled) setInternalValue("")
      onClear?.()
    }
  }

  const showClearButton = showClear && !!currentValue && !disabled

  return (
    <div
      className={inputContainerVariants({ className })}
      data-testid="InputField"
      data-disabled={disabled ? "true" : undefined}
    >
      <input
        ref={ref}
        className={inputFieldVariants({})}
        disabled={disabled}
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        {...rest}
      />
      {showClearButton ? (
        <div className="px-0 py-2">
          <ClearButton onClick={handleClear} />
        </div>
      ) : null}
    </div>
  )
}

InputField.displayName = "InputField"

export { InputField }
