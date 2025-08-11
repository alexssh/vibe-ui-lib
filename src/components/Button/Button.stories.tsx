import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import type { ButtonProps } from "./Button.types"
import { Icon } from "../Icon"

/**
 * Example component stories.
 *
 * This component demonstrates a basic button with primary and secondary variants.
 */
const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An example of a basic button component with customizable variants and styling.",
      },
    },
  },
  argTypes: {
    asChild: {
      control: { type: "boolean" },
      description:
        "Change the default rendered element for the one passed as a child",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS class names to apply to the button",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the button",
    },

    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    onClick: {
      action: "clicked",
      description: "Callback function called when the button is clicked",
    },
    size: {
      control: { type: "radio" },
      options: ["default", "small"],
      description: "The size of the button",
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "The visual variant of the button",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Primary variant - the default look of the component.
 */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
}

/**
 * Secondary variant example.
 */
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
}

/**
 * Disabled state example.
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: "primary",
  },
}

// Composition stories
export const TextOnlyDefault: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="default">Button</Button>
      <Button size="small">Button</Button>
    </div>
  ),
}

export const IconThenText: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="default">
        <Icon glyph="bolt" />
        Button
      </Button>
      <Button size="small">
        <Icon glyph="bolt" />
        Button
      </Button>
    </div>
  ),
}

export const TextThenIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="default">
        Button
        <Icon glyph="bolt" />
      </Button>
      <Button size="small">
        Button
        <Icon glyph="bolt" />
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="default" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
      <Button size="small" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
    </div>
  ),
}
