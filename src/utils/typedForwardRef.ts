import React, { forwardRef } from "react"
import type { Ref } from "react"

function typedForwardRef<Props, Element = unknown>(
  render: (props: Props, ref: Ref<Element>) => React.ReactNode
) {
  return forwardRef(render) as (
    props: Props & { ref?: Ref<Element> }
  ) => React.ReactNode
}

export { typedForwardRef }
