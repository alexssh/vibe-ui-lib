import type * as React from "react"

export interface ExampleProps {
  variant?: "primary"
  children?: React.ReactNode
  onClick?: () => void
}
