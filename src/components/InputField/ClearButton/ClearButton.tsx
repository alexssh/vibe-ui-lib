import * as React from "react"
import { clearButtonVariants } from "./ClearButton.types"
import { Icon } from "../../Icon"

interface ClearButtonProps {
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const ClearButton = ({
  onClick,
  disabled,
  ariaLabel = "Clear",
}: ClearButtonProps) => {
  return (
    <button
      type="button"
      className={clearButtonVariants({})}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-testid="InputFieldClearButton"
      data-clearbutton
    >
      <Icon glyph="clear" className="text-current" />
    </button>
  )
}

ClearButton.displayName = "InputFieldClearButton"

export { ClearButton }
