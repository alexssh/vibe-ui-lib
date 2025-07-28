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
          "A basic button component with customizable variants and styling.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "The visual variant of the button",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Callback function called when the button is clicked",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS class names to apply to the button",
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

const Template: StoryObj<ExampleProps> = {
  render: (args) => <Example {...args} />,
}

/**
 * Playground story with all controls available.
 */
export const Playground: Story = {
  ...Template,
  args: {
    variant: "primary",
    children: "Click me",
    disabled: false,
  },
}

/**
 * Primary variant - the default look of the component.
 */
export const Primary: Story = {
  ...Template,
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

/**
 * Secondary variant example.
 */
export const Secondary: Story = {
  ...Template,
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

/**
 * Disabled state example.
 */
export const Disabled: Story = {
  ...Template,
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
  ...Template,
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
  ...Template,
  args: {
    variant: "secondary",
    asChild: true,
    children: <div>Div Button</div>,
  },
}
