import * as React from "react"
import { Checkbox as RadixCheckbox } from "radix-ui"
import { Icon } from "../../Icon"

import { checkboxControlVariants } from "./CheckboxControl.types"

/**
 * Private subcomponent that renders the visual checkbox control.
 * Built on top of Radix Checkbox primitive from `radix-ui`.
 */
function CheckboxControl({
  id,
  disabled,
  checked,
  onCheckedChange,
  name,
  value,
}: {
  id?: string
  disabled?: boolean
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
  name?: string
  value?: string
}) {
  return (
    <RadixCheckbox.Root
      id={id}
      className={checkboxControlVariants({ disabled, checked })}
      checked={checked}
      onCheckedChange={(state) => onCheckedChange?.(state === true)}
      disabled={disabled}
      name={name}
      value={value}
      data-testid="CheckboxControl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {checked ? <Icon glyph="check" className="text-current" /> : null}
      </div>
    </RadixCheckbox.Root>
  )
}

export { CheckboxControl }
