import React from "react"
import { bem, typedForwardRef } from "../../utils"

import type { TestProps } from "./Test.types"
import "./Test.scss"

/* --- */

const TestComponent = (
  { variant = "primary", children, ...rest }: TestProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const className = bem("vibe-Test", undefined, {
    variant,
  })

  return (
    <button className={className} ref={ref} {...rest}>
      {children}
    </button>
  )
}

export const Test = typedForwardRef<TestProps, HTMLButtonElement>(TestComponent)
