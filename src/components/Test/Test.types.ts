import type * as React from "react"

export interface TestProps {
  variant?: "primary"
  children?: React.ReactNode
  onClick?: () => void
}
