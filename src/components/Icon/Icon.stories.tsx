import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "./Icon"
import type { IconProps } from "./Icon.types"

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Icon container with fixed 24×24 size. Inherits color from theme by default (via `--color-neutral-icon-default`). Override using Tailwind class `text-[color:var(--color-…)]` or `style={{ color: '#rrggbb' }}`.",
      },
    },
  },
  argTypes: {
    glyph: {
      control: { type: "select" },
      options: [
        "bolt",
        "like",
        "star",
        "check",
        "arrowDown",
        "arrowUp",
        "clear",
      ],
      description: "Which glyph to render",
    },
    className: {
      control: { type: "text" },
      description:
        "Additional classes. Use `text-[color:var(--color-neutral-icon-default)]` to theme.",
    },
    color: {
      control: { type: "color" },
      description: "Inline color override (maps to CSS color)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    glyph: "bolt",
  },
}

export const ThemedNeutral: Story = {
  args: {
    glyph: "star",
    className: "text-[color:var(--color-neutral-icon-default)]",
  },
}

export const ThemedAccented: Story = {
  args: {
    glyph: "check",
    className: "text-[color:var(--color-accented-icon-interactive)]",
  },
}

export const CustomHex: Story = {
  args: {
    glyph: "like",
    color: "#ff0066",
  },
}

export const Arrows: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon glyph="arrowUp" />
      <Icon glyph="arrowDown" />
      <Icon glyph="clear" />
    </div>
  ),
}
