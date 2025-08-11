import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const iconVariants = cva(
  // fixed 24x24 container, inherits color by default from theme variable
  "relative inline-block h-6 w-6 text-[color:var(--color-neutral-icon-default)]",
  {
    variants: {
      // currently single size, but keep for future-proofing
      size: {
        "24": "h-6 w-6",
      },
      // color style: inherit from theme (default) or custom via className/style
      tone: {
        neutral: "text-[color:var(--color-neutral-icon-default)]",
        accented: "text-[color:var(--color-accented-icon-interactive)]",
      },
    },
    defaultVariants: {
      size: "24",
      tone: "neutral",
    },
  }
)

export type IconGlyph =
  | "bolt"
  | "like"
  | "star"
  | "check"
  | "arrowDown"
  | "arrowUp"
  | "clear"

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof iconVariants> {
  /**
   * Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`.
   */
  ref?: React.Ref<HTMLSpanElement>

  /**
   * Which glyph to render.
   * @defaultValue "bolt"
   */
  glyph?: IconGlyph

  /**
   * Override icon color. By default the icon inherits theme color via CSS variable and uses `currentColor` in SVG.
   * You can pass Tailwind utility classes or inline style to set a custom color.
   *
   * @example
   * ```tsx
   * // Using theme variable
   * <Icon glyph="star" className="text-[color:var(--color-neutral-icon-default)]" />
   *
   * // Custom color via inline style
   * <Icon glyph="check" style={{ color: '#ff0000' }} />
   * ```
   */
  color?: string
}
