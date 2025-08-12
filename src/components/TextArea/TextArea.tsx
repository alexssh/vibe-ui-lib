import * as React from "react"

import type { TextAreaProps } from "./TextArea.types"
import {
  textAreaContainerVariants,
  textAreaFieldVariants,
} from "./TextArea.types"

/**
 * TextArea component.
 * Basic multiline input styled to match InputField/SelectField with an error state.
 */
const TextArea = ({
  ref,
  className,
  disabled,
  error = false,
  placeholder,
  ...rest
}: TextAreaProps) => {
  return (
    <div
      className={textAreaContainerVariants({ className })}
      data-testid="TextArea"
      data-disabled={disabled ? "true" : undefined}
      data-error={error ? "true" : undefined}
    >
      <textarea
        ref={ref}
        className={textAreaFieldVariants({})}
        disabled={disabled}
        aria-invalid={rest["aria-invalid"] ?? (error ? true : undefined)}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

TextArea.displayName = "TextArea"

export { TextArea }
