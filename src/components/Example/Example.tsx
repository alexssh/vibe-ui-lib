import React from "react"
import { typedForwardRef } from "../../utils"

import clsx from "clsx"

import type { ExampleProps } from "./Example.types"
import "./Example.scss"

/* --- */

const ExampleComponent = (
  { variant = "primary", children, ...rest }: ExampleProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const className = clsx("vibe-Example", `vibe-Example--variant-${variant}`)

  return (
    <button className={className} ref={ref} {...rest}>
      {children}
    </button>
  )
}

export const Example = typedForwardRef<ExampleProps, HTMLButtonElement>(
  ExampleComponent
)
