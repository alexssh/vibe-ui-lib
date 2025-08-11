import { cva } from "class-variance-authority"

// Visual box for the control itself (24x24) built on top of Radix Checkbox Root
export const checkboxControlVariants = cva(
  "peer relative size-6 shrink-0 rounded border",
  {
    variants: {
      checked: {
        true: "text-accented-text-interactive bg-accented-bg-interactive border-transparent",
        false:
          "text-neutral-text-interactive bg-neutral-bg-interactive border-[color:var(--color-neutral-border-interactive)]",
      },
      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      // Hover states (only when not disabled)
      {
        checked: false,
        disabled: false,
        class: [
          "hover:bg-neutral-bg-interactive-hover hover:text-neutral-text-interactive-hover hover:border-[color:var(--color-neutral-border-interactive-hover)]",
          "group-hover:bg-neutral-bg-interactive-hover group-hover:text-neutral-text-interactive-hover group-hover:border-[color:var(--color-neutral-border-interactive-hover)]",
        ].join(" "),
      },
      {
        checked: true,
        disabled: false,
        class: [
          "hover:bg-accented-bg-interactive-hover hover:text-accented-text-interactive-hover",
          "group-hover:bg-accented-bg-interactive-hover group-hover:text-accented-text-interactive-hover",
        ].join(" "),
      },
      // Focus states (only when not disabled)
      {
        checked: false,
        disabled: false,
        class:
          "focus-visible:bg-neutral-bg-interactive-focus focus-visible:text-neutral-text-interactive-focus focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-neutral-border-interactive-focus",
      },
      {
        checked: true,
        disabled: false,
        class:
          "focus-visible:bg-accented-bg-interactive-focus focus-visible:text-accented-text-interactive-focus focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-accented-border-interactive-focus",
      },
      // Disabled states
      {
        checked: false,
        disabled: true,
        class:
          "text-neutral-text-interactive-disabled bg-neutral-bg-interactive-disabled border-transparent",
      },
      {
        checked: true,
        disabled: true,
        class:
          "text-accented-text-interactive-disabled bg-accented-bg-interactive-disabled border-transparent",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)
