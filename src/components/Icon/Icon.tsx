import React from "react"
// NOTE: No Slot/asChild needed for Icon

import type { IconProps } from "./Icon.types"
import { iconVariants } from "./Icon.types"

// Inline SVG factories (copied from Figma assets); accept color and default to currentColor
type Glyph = NonNullable<IconProps["glyph"]>
const SVG_FACTORIES: Record<Glyph, (color?: string) => string> = {
  star: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path id="vector" d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  like: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="vector" d="M10 18.35L8.55 17.05C6.86667 15.5333 5.475 14.225 4.375 13.125C3.275 12.025 2.4 11.0375 1.75 10.1625C1.1 9.2875 0.645833 8.48333 0.3875 7.75C0.129167 7.01667 0 6.26667 0 5.5C0 3.93333 0.525 2.625 1.575 1.575C2.625 0.525 3.93333 0 5.5 0C6.36667 0 7.19167 0.183333 7.975 0.55C8.75833 0.916667 9.43333 1.43333 10 2.1C10.5667 1.43333 11.2417 0.916667 12.025 0.55C12.8083 0.183333 13.6333 0 14.5 0C16.0667 0 17.375 0.525 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 6.26667 19.8708 7.01667 19.6125 7.75C19.3542 8.48333 18.9 9.2875 18.25 10.1625C17.6 11.0375 16.725 12.025 15.625 13.125C14.525 14.225 13.1333 15.5333 11.45 17.05L10 18.35ZM10 15.65C11.6 14.2167 12.9167 12.9875 13.95 11.9625C14.9833 10.9375 15.8 10.0458 16.4 9.2875C17 8.52917 17.4167 7.85417 17.65 7.2625C17.8833 6.67083 18 6.08333 18 5.5C18 4.5 17.6667 3.66667 17 3C16.3333 2.33333 15.5 2 14.5 2C13.7167 2 12.9917 2.22083 12.325 2.6625C11.6583 3.10417 11.2 3.66667 10.95 4.35H9.05C8.8 3.66667 8.34167 3.10417 7.675 2.6625C7.00833 2.22083 6.28333 2 5.5 2C4.5 2 3.66667 2.33333 3 3C2.33333 3.66667 2 4.5 2 5.5C2 6.08333 2.11667 6.67083 2.35 7.2625C2.58333 7.85417 3 8.52917 3.6 9.2875C4.2 10.0458 5.01667 10.9375 6.05 11.9625C7.08333 12.9875 8.4 14.2167 10 15.65Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  check: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="vector" d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  arrowDown: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M5 5L0 0H10L5 5Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  arrowUp: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M0 5L5 0L10 5H0Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  clear: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M9.4 12L12 9.4L14.6 12L16 10.6L13.4 8L16 5.4L14.6 4L12 6.6L9.4 4L8 5.4L10.6 8L8 10.6L9.4 12ZM7 16C6.68333 16 6.38333 15.9292 6.1 15.7875C5.81667 15.6458 5.58333 15.45 5.4 15.2L0 8L5.4 0.8C5.58333 0.55 5.81667 0.354167 6.1 0.2125C6.38333 0.0708333 6.68333 0 7 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H7ZM2.5 8L7 14H18V2H7L2.5 8Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,

  bolt: (
    color?: string
  ) => `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="vector" d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z" fill="${
    color ?? "currentColor"
  }"/></svg>`,
}

/**
 * Icon component renders a fixed 24×24 container with an inline SVG glyph.
 *
 * - Inherits its color from the theme via `--color-neutral-icon-default` by default.
 * - You may override color via `className` (e.g. Tailwind `text-[color:var(--color-accented-icon-interactive)]`) or via `style={{ color: '#ff0000' }}`.
 * - The SVG uses `currentColor` through CSS var mapping to ensure color inheritance.
 * - SVG paths are absolutely positioned to match the original `viewBox` and alignment from Figma.
 *
 * @example
 * ```tsx
 * // Inherit theme default icon color
 * <Icon glyph="star" />
 *
 * // Themed color via variable
 * <Icon glyph="check" className="text-[color:var(--color-accented-icon-interactive)]" />
 *
 * // Custom color
 * <Icon glyph="bolt" style={{ color: '#ff9900' }} />
 * ```
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, color, glyph = "bolt", size, style, ...rest }, ref) => {
    // Map provided color prop into inline style as CSS color
    const mergedStyle = color ? { ...style, color } : style

    // Choose absolute inset based on glyph to match MCP layout
    const insetMap: Record<NonNullable<IconProps["glyph"]>, string> = {
      star: "absolute inset-[8.33%_8.33%_12.5%_8.33%]",
      like: "absolute inset-[11.04%_8.33%_12.5%_8.33%]",
      check: "absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]",
      arrowDown: "absolute inset-[41.67%_29.17%_37.5%_29.17%]",
      arrowUp: "absolute inset-[37.5%_29.17%_41.67%_29.17%]",
      clear: "absolute inset-[16.67%_8.33%]",
      bolt: "absolute inset-[8.33%_16.67%]",
    }
    const insetClass = insetMap[glyph]

    const svgMarkup = SVG_FACTORIES[glyph](color)

    return (
      <span
        ref={ref}
        className={iconVariants({ className, size })}
        style={mergedStyle}
        data-testid="Icon"
        aria-hidden="true"
        {...rest}
      >
        <span className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <span className={insetClass}>
            <span
              className="block size-full"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          </span>
        </span>
      </span>
    )
  }
)

Icon.displayName = "Icon"

export { Icon }
