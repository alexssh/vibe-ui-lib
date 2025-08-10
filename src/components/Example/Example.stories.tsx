import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Example } from "./Example"
import type { ExampleProps } from "./Example.types"

/**
 * Example component stories.
 *
 * This component demonstrates a basic button with primary and secondary variants.
 */
const meta: Meta<ExampleProps> = {
  title: "Components/Example",
  component: Example,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An example of abasic button component with customizable variants and styling.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS class names to apply to the button",
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "The visual variant of the button",
    },
    size: {
      control: { type: "radio" },
      options: ["default", "small"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Callback function called when the button is clicked",
    },
    asChild: {
      control: { type: "boolean" },
      description:
        "Change the default rendered element for the one passed as a child",
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
    variant: "primary",
    children: "Primary Button",
  },
}

/**
 * Secondary variant example.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

/**
 * Disabled state example.
 */
export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
}

/**
 * Example using asChild prop to render as a link.
 */
export const AsLink: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a href="https://example.com">Link Button</a>,
  },
}

/**
 * Example using asChild prop to render as a div.
 */
export const AsDiv: Story = {
  args: {
    variant: "secondary",
    asChild: true,
    children: <div>Div Button</div>,
  },
}
